import {Person} from "./person.js";

export class Worker extends Person {
    #rate
    #days

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
        this.#rate = 1000;
        this.#days = 0;
    }

    get rate() {
        return this.#rate;
    }

    set rate(newRate) {
        if (newRate >= 1000) {
            this.#rate = newRate;
        } else {
            console.log('Ошибка, ставка менее 1000 руб.')
        }
    }

    get days() {
        return this.#days;
    }


    addDays(days) {  // добавить отработанные дни
        // получим число последнего дня текущего месяца = кол-во дней текущ месяца
        const lastDayOfCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const workerName = this.getFullName();

        if (days < 0 && this.#days + days < 0) {
            console.log(`${workerName} Ошибка: нельзя вычесть больше дней, чем уже отработано`);
            return;
        }

        if (this.#days + days > lastDayOfCurrentMonth) {
            console.log(`${workerName} Ошибка: нельзя добавить ${this.#days + days} дней, т.к В текущем месяце ${lastDayOfCurrentMonth} дней.`)
            return this.#days = lastDayOfCurrentMonth;
        }

        this.#days += days;
    }

    getSalary() {  // рассчитать зарплату исходя из ставки и отработанных дней
        const currentMonth = new Date().getMonth(); //текущий месяц (индекс)
        const birthDateMonth = new Date(this.birthday).getMonth(); // получили месяц даты рождения

        let salary = this.#days * this.#rate;

        if (birthDateMonth === currentMonth) {
            salary = salary * 1.1;
        }
        return `- ${Math.round(salary)}`;
    }

    // Статический метод для поиска сотрудника, который отработал больше всех
    static whoWorkedMore(...workers) {  // три точки позволяют работать с любым количеством сотрудников сразу.

        if (!workers.length) {
            console.log('Нет данных о сотрудниках.');
            return;
        }

        // Находим сотрудника с максимальным числом отработанных дней
        const maxDays = Math.max(...workers.map(worker => worker.days));

        // Фильтруем сотрудников с максимальным числом дней
        const bestWorkers = workers.filter(worker => worker.days === maxDays);

        if (bestWorkers.length > 1) {
            console.log('Больше всех отработали:');
            bestWorkers.forEach(worker => {
                console.log(`${worker.getFullName()} (${worker.days} дней)`);
            });
        } else {
            const singleBest = bestWorkers[0];
            console.log(`Больше всех отработал(а) ${singleBest.getFullName()}: ${singleBest.days} дней.`);
        }
    }

    // Статический метод для поиска самого младшего сотрудника
    static whoIsYounger(...workers) {  // три точки позволяют работать с любым количеством сотрудников сразу.

        if (!workers.length) {
            console.log('Нет данных о сотрудниках.');
            return;
        }

        const minAge = Math.min(...workers.map(worker => worker.getAgeNum()));
        const youngestWorker = workers.filter(worker => worker.getAgeNum() === minAge);

        if (youngestWorker.length > 1) {
            console.log('Младшие сотрудники:');
            youngestWorker.forEach(worker => {
                console.log(`${worker.getFullName()} ${worker.getAge()}`);
            });
        } else {
            const singleYoungerWorker = youngestWorker[0];
            console.log(`Младший работник: ${singleYoungerWorker.getFullName()} ${singleYoungerWorker.getAge()}.`);
        }
    }
}

// const person = new Worker('Ivan', 'Ivanov', '02-11-1995', 'developer');
// console.log(person.getAge())
// console.log(person.rate)
// console.log(person.days)
// person.rate = 1500;
// console.log(person.rate)
// person.addDays(22);
// console.log(person.days)
// console.log(person.birthday)
//
// console.log(person.getSalary())