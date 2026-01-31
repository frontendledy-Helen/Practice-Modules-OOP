import {Person} from "./person.js";

export class Worker extends Person {
    #rate
    #days

    constructor(firstName, lastName, birthday, position) {
        super(firstName, lastName, birthday);
        this.position = position;
        this.#rate = 1000;
        this.#days = 0;
        this.currentMonth = new Date().getMonth(); //текущий месяц (номер)
    }

    get rate() {
        return this.#rate;
    }

    set rate(newRate) {

        let today = new Date().getMonth();
        if (newRate >= 1000) {
            this.#rate = newRate;
        } else {
            console.log('Ошибка, ставка менее 1000 руб.')
            this.#rate = 1000;
        }
    }

    get days() {
        return this.#days;
    }


    addDays(days) {

        // находим дату начала следующего месяца
        const nextMonthFirstDay = new Date(this.currentMonth + 1, 1); // Первый день следующего месяца

        // перемещение назад на один день, чтобы получить последний день текущего месяца
        nextMonthFirstDay.setDate(nextMonthFirstDay.getDate() - 1);

        // получим число последнего дня текущего месяца = кол-во дней текущ месяца
        const lastDayOfCurrentMonth = nextMonthFirstDay.getDate();

        if (days > 0 || days <= lastDayOfCurrentMonth) {
            this.#days += days;
        }
    }

    getSalary() {
        // Преобразуем дату в правильный формат
        const birthDateMonth = this.birthday.split("-")[0]; // получили массив ['мм', 'дд', 'гггг'], по индексу 0 = 11 месяц
        const currentMonth = this.currentMonth + 1; // получили текущий месяц (число)
        const birthDateMonthNum = parseFloat(birthDateMonth); //преобразуем строку в число

        if (birthDateMonthNum === currentMonth) {
            const salary = this.#days * this.#rate * 1.1;
            return `- ${salary}`;
        } else {
            const salary = this.#days * this.#rate;
            return `- ${salary}`;
        }
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