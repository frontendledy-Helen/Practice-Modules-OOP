// import {Worker} from "./worker.js";
//
// class Employee extends Worker {
//     constructor(firstName, lastName, birthday, position, workedDays) {
//         super(firstName, lastName, birthday, position);
//         this.workedDays = workedDays;
//         this.currentMonth = new Date().getMonth();
//     }
//
//     static whoWorkedMore(employees) {
//
//         if (!employees || !employees.length) {
//             console.log('Нет данных о сотрудниках');
//             return;
//         }
//
//         // Находим сотрудника с максимальным числом отработанных дней
//         const maxDays = Math.max(...employees.map(emp => emp.workedDays)); // три точки позволяют работать с любым количеством сотрудников сразу.
//
//         // Список сотрудников с максимальным числом дней
//         const bestEmployees = employees.filter(emp => emp.workedDays === maxDays);
//
//         let message = '';
//
//         if (bestEmployees.length > 1) {
//             message += 'Больше всех отработали:\n';
//             bestEmployees.forEach((emp, index) => {
//                 message += `- ${emp.getFullName()} (${emp.workedDays} дней)\n`;
//             });
//         } else {
//             const singleEmp = bestEmployees[0];
//             message += `Больше всех отработал ${singleEmp.getFullName()}. Количество рабочих дней - ${singleEmp.workedDays}`;
//         }
//
//         console.log(message.trim());
//
//     }
//
//     static whoIsYounger(employees) {
//         if (!employees || !employees.length) {
//             console.log('Нет данных о сотрудниках');
//             return;
//         }
//
//         // Список сотрудников с максимальным годом рождения
//         const bestEmployees = employees.filter(emp => emp.birthday === maxDays);
//
//
//     }
// }
//
//
// // Создание экземпляров сотрудников
// const employees = [
//     new Employee('Иван', 'Иванов', 20, 'developer', 20),
//     new Employee('Пётр', 'Петров', 22, 'manager', 25),
//     new Employee('Елена', 'Петрова', 22, 'manager', 10),
//     new Employee('Алексей', 'Смирнов', 18, 'designer', 25),
//     new Employee('Сергей', 'Немцов', 21, 'developer', 15)
// ];
//
// // Вызов статического метода
// Employee.whoWorkedMore(employees);
// Employee.whoIsYounger(employees);
