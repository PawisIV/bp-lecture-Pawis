// console.log("Hello");

// let x = 10;
// console.log(typeof x);
// x = "Pawis";
// console.log(typeof x);

// const y = 4;
// console.log(y);
const firstName = "Pawis";
const lastName = "Kitsanawan";
// console.log(firstName[4]);

//concate ต่อ string
const fullName = firstName + " " + lastName;
//console.log(fullName);
const fullNameWithIntro = "Your firstname is " + firstName + "Your lastname is " + lastName;
//console.log(fullNameWithIntro);
const cancateWithGrave = `Your firstname is ${firstName} Your lastname is ${lastName}`;
//console.log(cancateWithGrave);
const upperCase = firstName.toUpperCase();
//console.log(upperCase);
const lowerCase = firstName.toLowerCase();
//console.log(lowerCase);
const withSpace = " HelloTrim"
//console.log(withSpace);
const noSpace = withSpace.trim();
//console.log(noSpace);

const token = "Bearer=44444"
const userLong = "A,B,C,D,E"
// console.log(token);
const splitWord = token.split("=");
const splitName = userLong.split(",");
// console.log(splitWord[1]);
// console.log(splitName);

//number

const numbA = 10
const numbB = 20

// console.log(numbA + numbB);
// console.log(numbA - numbB);
// console.log(numbA * numbB);
// console.log(numbA / numbB);
// console.log(numbA % numbB);
// console.log(numbA ** numbB); //ยกกำลัง

const floatA = 1.21423;
const ceil = Math.ceil(floatA);
const floor = Math.floor(floatA);
//console.log(`Ceil is ${ceil + 2} Floor is ${floor}`);

//Boolean

const t = true;
const f = false;
const score = 0;
const undef = undefined
const nu = null;
// if(score != undefined){
//     console.log(`Score is ${score}`);
// }else{
//     console.log("No score");
// }

//array

const arr = [1,2,3,4,5];
// console.log(arr[3]);
// console.log(arr.length);

//array method

const namesArr = []
//console.log(namesArr);
namesArr.push("Hug");
//console.log(namesArr);
namesArr.pop();
//console.log(namesArr);
namesArr.unshift("007");
//console.log(namesArr);
namesArr.shift();
//console.log(namesArr);

//object

const userObject = {
    username: "Username1",
    password: "Password1",
};

// console.log(userObject.username);
// console.log(userObject.password);
userObject.email = "paviskizz@gmail.com";
// console.log(userObject);
// console.log(userObject.email);
// console.log(userObject["username"]);

//use case

const theme = {
    day:"#00f7ff",
    night:"#000",
};

const statusTheme = "day";
const setTheme = theme[statusTheme];
//console.log(setTheme);

///Primitive value & non Primitive value

// Primitive = number,boolean
//non Primitive = string,array,object

//Pass by value
const x = 10;
let y = 5;

y= x;
y= y+10;
// console.log(y, ":y");
// console.log(x,":x");

//Pass by reference


let user1 = {
    name: "user1",
    age: 25,
};
let user2 = {
    name: "user2",
    age: 15,
};
const {name} = user2;
// console.log(user1.name);
// console.log(name,":from es6");
//Worse case

// user2 = user1;
// console.log(user2, ":user2");
// user2.name = "User2Fr";
// console.log(user2,":user2");
// console.log(user1,":user1");

//Best

user2 = {...user1};
user2.name = "User2Fr";
// console.log(user2,":user2");
// console.log(user1,":user1");

//function

function sumNumber(x,y){
    // console.log(x,y, ":from function");
    return x+y;
}

const sum = sumNumber(5,6);
// console.log(sum);
const sum2 = sumNumber
const xe = sum2(2,4);
// console.log(xe,":From sum2 function");

const sumByArrowFunc = (x,y) => {
    return x+y;
    console.log("Execute");
}
const sumByArrowFuncShorthand = (x,y) => x+y;
// console.log(sumNumber(2,3), ":Sum from normal fn");
// console.log(sumByArrowFunc(2,3), ":Sum from arrow fn");

//callback fn

function CallbackContainer(){
    Callback();
    // console.log("Callback Container logic");
}
function Callback(){
    // console.log("Callback logic");
}
// console.log(CallbackContainer());

//block control
//if-else , switch case

//if else
const money = 5
const national = "TH";
const age = 16;
// if(money > 5 || national == "TH"){
//     console.log("Enough");
// } else if (money < 4){
//     console.log("Almost");
// } else {
//     console.log("Not enough");
// }
if(age === "15"){
    // console.log("Adult");
}
const role = age > 15? "Adult" : "Kid";
// console.log(role);

//switch case

switch(1){
    case 1:
        // console.log("Hello 1")
        break;
    case 2:
        // console.log('Hello 2')
        break;
    default:
        // console.log("No one here")
}

//alternative object for switch

const objectSwitch = {
    1:"Hello one",
    2:"Hello Two",
};

// console.log(objectSwitch["2"]);
objectSwitch["3"] = "Hello three";
// console.log(objectSwitch["3"]);
// console.log(objectSwitch["6"] ?? "Not in case");

// //loop
// //for
// for(let i = 0;i < 5; i++){
//     console.log(`This is ${i} round`);
// }
// //while
// let round = 0
// while(round<5){
//     console.log(`This round ${round}`);
//     round++;
// }

//array loop
//foreach
const nums = [1,2,3,4,5];
// nums.forEach((value,index)=>{
//     console.log(`this is round ${value} at index ${index}`)
// });

///////////////Important////////////////////
// nums.map((value,index)=>{
//     console.log(`this is round ${value} at index ${index}`)
// });

const noThreenoFive = nums.filter((value)=> value != 3 && value != 5)
//console.log(noThreenoFive);


const axios = require("axios");

async function FetchPokemonAPI(name){
    try{
        console.log("loading.....");
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log(data.data);
    }catch(error){
        console.log("Error occured");
    }finally{
        console.log("finish loading!");
    }
}
FetchPokemonAPI("gengar");