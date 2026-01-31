import {Worker} from './worker.js';


// Создаем пятерых работников
const worker1 = new Worker('Иван', 'Иванов', '11-05-1998', 'Программист');
const worker2 = new Worker('Марина', 'Васильева', '11-12-2001', 'Дизайнер');
const worker3 = new Worker('Дмитрий', 'Попов', '11-08-1976', 'Менеджер проектов');
const worker4 = new Worker('Ольга', 'Кузнецова', '04-05-2001', 'Бизнес-аналитик');
const worker5 = new Worker('Андрей', 'Николаев', '01-25-1988', 'Разработчик интерфейсов');


worker5.rate = 2200;
worker4.rate = 2500;
worker3.rate = 3000;

worker1.addDays(12);
worker2.addDays(22);
worker3.addDays(20);
worker4.addDays(31);
worker5.addDays(15);
worker1.addDays(-2);
worker2.addDays(22);
worker3.addDays(33);
worker4.addDays(48);
worker5.addDays(50);
worker1.addDays(12);
worker2.addDays(22);
worker3.addDays(-3);
worker4.addDays(31);
worker5.addDays(-5);

console.log(worker1.getFullName() + ' ' + worker1.getSalary() + ' рублей');
console.log(worker2.getFullName() + ' ' + worker2.getSalary() + ' рублей');
console.log(worker3.getFullName() + ' ' + worker3.getSalary() + ' рублей');
console.log(worker4.getFullName() + ' ' + worker4.getSalary() + ' рублей');
console.log(worker5.getFullName() + ' ' + worker5.getSalary() + ' рублей');

// Создаем массив работников (используем созданный ранее класс Worker)
const employees = [worker1, worker2, worker3, worker4, worker5];

// Вызов статического метода whoWorkedMore
Worker.whoWorkedMore(...employees);
// Вызов статического метода whoIsYounger
Worker.whoIsYounger(...employees)