const name="hitesh"
const repoCount=50
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//string interpolation

const gameName =new String("hiteshhc-hc")
// console.log(gameName);
// console.log(gameName.trim());
console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName[0]);
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('c'));

const newString=gameName.substring(0,4)// we put negative value in substring
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne="  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());


const name1="arnav"
const age=8
console.log(`hello my name is ${name1} my age is ${age}`);

const score=400

const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber=123.9856868
console.log(otherNumber.toPrecision(5));

const hundreds=1000000
console.log(hundreds.toLocaleString()); 


 // javascript math library
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min+1))+min);

  
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate= new Date(2023,12,23);
let myCreatedDate= new Date("2023-01-14");
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate= new Date();
console.log(newDate.getDay());
console.log(newDate.getmonth()+1;





