// Obyektlar aloqador masalalar.

const person = {
  name: "Muhammmadrasul",
  age: 16,
  job: "developer",
};
// console.log(person); //1

// person.name = "Vali";
// console.log(person); //2

// person.addres = "Fergana";
// console.log(person); //3

// delete person.age;
// console.log(person); //4

// person.tel = { mobil: +998339800001, home: +998916695533 };
// console.log(person); //5

// for (const key in person) {
//   console.log(person[key]); //6
// }

// console.log(person.job); //7

// function personObject(name, age, job) {
//   const person = {
//     name,
//     age,
//     job,
//   };
//   return person;
// }
// console.log(personObject("Vali", 20, "Enginer")); //8

// Tugadi

// Umumlashtiruvchi masalalar.

//1
// const nums = "2452343765836765";

// function findThree(nums) {
//   let times = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 3) {
//       times += 1;
//     }
//   }
//   return times;
// }
// console.log(findThree(nums));

//2
// function createToqSon(n) {
//   let result = [];
//   for (let i = 1; i <= n; i += 2) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(createToqSon(10));

//3
// function removeStar(params) {
//   let result = params.replaceAll("*", "");
//   return result;
// }
// console.log(removeStar("*Hello World*"));

//4
// function removeElement(param) {
//   let result = "";
//   for (let i = 0; i < param.length; i++) {
//     if (i != 1) {
//       result += param[i];
//     }
//   }
//   return result;
// }
// console.log(removeElement("Hello World"));
