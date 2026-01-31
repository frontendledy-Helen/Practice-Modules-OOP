export class Person {
    #birthday  //приватное свойство для хранения дня рождения пользователя

    constructor(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAgeNum() { // получим количество лет
        let today = new Date(); // гггг-мм-дд
        const [month, day, year] = this.#birthday.split("-"); // получили массив, мм-дд-гггг
        const birthDate = new Date(year, month - 1, day); // преобразовали гггг-мм-дд

        let age = today.getFullYear() - birthDate.getFullYear(); // получили сколько лет

        const m = today.getMonth() - birthDate.getMonth();
        // корректируем возраст, если день рождения в этом году ещё не был
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age; // получили число
    }


    getAge() {  //обработка количества (лет / год / года)

        const numString = String(this.getAgeNum()); //преобразуем число в строку

        // Обработка специальных случаев (числа заканчивающиеся на 11, 12, 13, 14)
        if (numString.length >= 2 && ["11", "12", "13", "14"].includes(numString.slice(-2))) {
            return `${numString} лет`;
        }

        // Остальные случаи обрабатываются по последней цифре
        switch (numString[numString.length - 1]) {
            case '1':
                return `${numString} год`;
            case '2':
            case '3':
            case '4':
                return `${numString} года`;
            default:
                return `${numString} лет`;
        }


    }

}

// const person = new Person('Ivan', 'Ivanov', '01-11-1995');
// console.log(person.getAge());
// console.log(person.getFullName());
// console.log(person.getAgeNum());

