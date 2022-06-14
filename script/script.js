const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Фунція яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн
function getMyTaxes(salary) {
   let mySalary = salary;
   let myTaxes = mySalary * this.tax;
   return console.log('Ви повинні сплатити:', myTaxes.toFixed(0), "$");
}
getMyTaxes.call(latvia, 1600);

//Функція яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
function getMiddleTaxes() {
   let myTaxes = this.tax * this.middleSalary;
   return console.log('В середньому ви повинні сплатити:', myTaxes.toFixed(0), "$");
}
getMiddleTaxes.call(ukraine);

//Функція яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
function getTotalTaxes() {
   let totalTaxes = this.tax * this.middleSalary * this.vacancies;
   return console.log(`Всього сплачується податків: `, totalTaxes.toFixed(0), `$`)
}
getTotalTaxes.call(ukraine);

//Функція яка буде писати в консоль об'єкт  
function getMySalary(item) {
   let mySalary = {}
   setInterval(() => {
      let salary = Math.floor(Math.random() * (2001 - 1500) + 1500);
      let taxes = (item.tax * salary).toFixed(0);
      let profit = salary - taxes;
      mySalary['salary'] = salary;
      mySalary['taxes'] = Number(taxes);
      mySalary['profit'] = profit;
      return console.log(mySalary);
   }, 10000)
}
getMySalary(litva)