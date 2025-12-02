// // console.log(2>2);
// // console.log(2>=1);
// // console.log(9>100);
// // console.log("9">7);


// //we should avoid this type of comparision because it behave inconsistently and leads to confusing
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)
// console.log(undefined==0)
// console.log(undefined > 0)

// //=== it checks value stricly and check the double type also
// console.log("2"==2)


//datatypes
//primitive datatypes
// types: String,Number,boolean,null,undefined,symbol,bigINt


//bigint= use to handle scientific numbers

//references(Non primitives)
// array,0bjects,functions

// const score=100
// const scoreValue=100.3
// const isLoggedIn=false
const outsideTemp=null

// let userEmail=undefined;
const id=Symbol('123');
const anthorId =Symbol('1234');
console.log(id===anthorId);

const bigNumber= 557745885757449949n
console.log(bigNumber)
//references(Non primitives)
// array

const heros=[1,2,3,4,5,6,7,7]
console.log(heros)

// 0bjects
let myObj={
	name:"hitesh",
	age:34,
}
console.log(myObj)

const myFunction=function(){
	console.log("hello world");
}

console.log(typeof outsideTemp);