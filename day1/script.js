// let accountId=14442323
// let accountEmail="hitesh@google.com"
// var accountPassword="12345"
// accountCity="Jaipur"
// let accountState;
// /*
// prefer not use var because of 
// issue in block scope and functional scope
// */
// accountId=2
// // console.log(accountId);
// console.table([accountId,accountPassword,accountCity,accountState])


// // if(true){
// // 	let a="23"
// // 	console.log(a);
// // }


// // alert(3+3) we are using node js not browwser

// // console.log(3+3) 
// // //data type
// // let name="hitesh"
// // let age=18
// // let isloggedIn = false
// // //number =>2 to power 53
// //bigInt= represent big data

// //Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
// let s1=5
// let s2=6
// let s3=7
// let s=(s1+s2+s3)/2
// let area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));

// console.log("The area of traingle : " + area);

// let score=true
// console.log(typeof(score))

// let valueInNumber=(score)
// console.log(typeof valueInNumber);

// let isLoggedIn=3
// let booleanIsLoggedIn=boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let stringNumber="45"
// let stringvalue=BigInt(stringNumber)
// console.log(stringvalue);
// console.log(typeof stringvalue);


// let str1="hello"
// let str2="arnav"
// let str3=str1 + str2
// console.log(str3)

// console.log(1+"2")
// console.log(1+"2"+2)
// console.log("1"+3+"4")

// let gameCounter=99
// // gameCounter++;
// ++gameCounter
// console.log(gameCounter)

let y = 7;
const x = y++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let b = 5;
const a = ++b;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"