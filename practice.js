// var fs = require('fs');
// fs.writeFileSync("WebsiteHTML.txt", "Create a website!")

//---------------SUM OF EVEN NUMBERS----------------------

// var array = []
// for (let i=0;i<=50;i++){ 
//     if(i%2==0){ 
//        array.push(i);
//     } 
// }
// console.log(array); 
// var toAdd = 0 ; 
// for (let i=0;i<26;i++){
// var sum = toAdd += array[i] ;
// }
// console.log(sum);

// var tots = array.reduce(reduceFunc);
// function reduceFunc(total,value){
//     return total + value;
// }
// console.log(tots);

// var condition = sum == 650 ? "added": "not added";
// console.log(condition);

//-----------------INCREMENT OPERATOR------------------------

// let aNum = 3;
// console.log(aNum);

// let numInc = aNum++;
// console.log(aNum);
// console.log(numInc) 

//------------------LEFT STAR TRIANGLE PROGRAM---------------------

// for (let i = 0; i<5; i++){
//     for(let j = 0; j<=i; j++){
//     process.stdout.write("*");
//     }
//     console.log()
// }
//--------------CHANGING THE VALUE OF LET --------------------------
// let a;
// a = 20;
// a = 40; 
// console.log(a);
//----------------------OBJECTS---------------------------------------

// let textObj1 = new String("8");
// console.log(textObj1);
// let textObj2 = new String("8");
// if(textObj1 == textObj2){
//     console.log("true");
// }
// else{
//     console.log("false");
// }
// console.log(textObj1);
// console.log(textObj2);

// console.log(textObj instanceof Object);

// const obj1 = {
//     fName : "nandu",
//     fName : "kul",
//     age : 22
// }
// console.log(obj1);

// const obj2 = {
//     firstName : "nandini",
//     lastName : "kulshrestha",
//     age : 22,
//     fullName : function(){
//         return this.firstName + " " + this.lastName
//     }
// }

// console.log(obj2.fullName());
 
// //-----CALL METHOD-----

// const obj3 = {
//     fName : "akansha",
//     lName : "kuls",
//     age : 22,
//     fullNameByCallMethod : function(hometown,state){
//         return this.fName + " " + this.lName + " " +hometown + " " +state
//     }
// }
// console.log(obj3.fullNameByCallMethod());                    //will point to it's own's
// console.log(obj3.fullNameByCallMethod.call(obj1,"agra"));    //will point to obj1's 

// //-----APPLY METHOD-----

// console.log(obj3.fullNameByCallMethod.apply(obj1 , [ "Agra", "Uttar Pradesh" ]))

// //-----BIND METHOD-----

// let bindFunc = obj3.fullNameByCallMethod.bind(obj1, "Agra","Uttar Pradesh");
// console.log(bindFunc)
// console.log(bindFunc());

// obj4 = [{fName : "Nandini"}, {fName : "Rashi"},{fName : "Meghna"},{fName : "Kanchan"}];

//----------------------STRINGS-------------------------------------

// let text = "qwert*yuiop";
// let textLength = text.length;
// console.log(textLength);

// let textSlice = text.slice(3);
// console.log(textSlice);

// let textSubstring = text.substring(3);
// console.log(textSubstring);

// let textsubstr = text.substr(2,4);
// console.log(textsubstr);

// let textReplace = text.replace("q","W");
// console.log(textReplace);

// // text= text.replaceAll("qwertyuiop","Wcdc");
// // console.log(text);
// //not working

// let textSplit = text.split("*");                //retuns array & splits where the specified string is mentioned
// console.log(textSplit);

// let textIndexOf = text.indexOf("w", 2);
// console.log(textIndexOf);

//-----------------------NUMBERS------------------------------------

// let num = 12.3;
// let numToString = num.toString();
// console.log(typeof numToString);

// let numToExponential = num.toExponential(2);
// console.log( numToExponential);

// let numToValueOf = num.valueOf();
// console.log(numToValueOf);

// let numToParseInt = parseInt("23.7");
// console.log(typeof numToParseInt);

//console.log(Math.min(1,2,3));

//-----------------ARRAYS----------------------

// const arr = ["nandini", "shrutika", "sanskriti", "sakshi","shrutika"];
// const arr2 = [1,3,200,7,4];

// arr.push("vini");                  //pushes the new element 
// arr[arr.length-3] = arr2;          //pushes the mentioned element at the specified path
// arr[arr.length] = obj1.fName;      //can also add obj, arr and func
// arr.pop("sanskriti");              //removes and returns the last elem
// arr.shift();                       //removes and returns the first elem
// arr.unshift("karishma");           //adds elem at the starting and returns array
// delete arr[1];                     //deletes array elem but leaves undefined hole



// var joinArr = arr.join(";");       //returns string and joins the array elem 
// var arr3 = arr.concat(arr2, obj2); //can take unlimited params
// arr3.sort();


// console.log(arr);
// console.log(arr.indexOf("shrutika"));
// console.log(joinArr);
// console.log(arr3);

//--------------OBJ SORTING IN ARRAY------------

// function sortObj(){
//     obj4.sort(function(a,b){
//         let x = a.fName.toLowerCase();
//         let y = b.fName.toLowerCase();
//         if (x<y){
//             return -1;
//         }
//         if (x>y){
//             return 1;
//         }
//     });
//     displayObj();
// }

// function displayObj(){
// console.log(obj4[0].fName , obj4[1].fName , obj4[2].fName , obj4[3].fName)
// }

// sortObj();

//-------------------------CALLBACKS-------------------------

// function printHi(myCallback){
//     myCallback("hi");
// }

// function myCallback(arg){
//     console.log(arg);
// }

// printHi(myCallback);

//-------------------------ARRAY ITERATION------------------------

// var txt = "";

// var func = arr.forEach(iterateFunc);

// function iterateFunc(value, index, array){
//     txt += value ; 
// }

// console.log(txt);

//------------------BLOCK SCOPE-------------------

// var cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);
// {
//   let cars = ["Toyota", "Volvo", "BMW"];
//   console.log(cars[0]);
// }
// console.log(cars[0]);

// var cars = ["Volvo", "BMW"];   // Allowed
// var cars = ["Toyota", "BMW"];  // Allowed
// cars = ["Volvo", "Saab"]; 
// console.log(cars)

//---------------------------DATES-------------------------------

// const d = new Date();
// const getMS = Date.now(new Date());             
// const dToString = d.toDateString();
// console.log(getMS);

//---------------------------MATH----------------------------------

// console.log("MATH ROUND---->" + Math.round(-4.5));
// console.log("MATH CEIL---->" + Math.ceil(-4.5));
// console.log("MATH FLOOR---->" + Math.floor(-4.5));
// console.log("MATH TRUNC---->" + Math.trunc(-4.5));    //returns the integer part
// console.log("MATH SIGN---->" + Math.sign(-4.5));
// console.log("MATH POWER---->" + Math.pow(-4,2));
// console.log("MATH SQUARE ROOT---->" + Math.sqrt(4));
// console.log("MATH ABSOLUTE POSITIVE INT--->" + Math.abs(-4.5));
// console.log("MATH RANDOM---->" + Math.random())       //returns btw 0 to 1

//-----------------THE NULLISH COALESCING OPERATOR(??)---------------------

// var nullVar = null;
// var name = "Nandini";
// var nullOperator = nullVar ?? name;
// console.log(nullOperator);
// var nullVar = "Akansha";
// var nullOperator = nullVar ?? name;
// console.log(nullOperator);

//--------------------THE OPTIONAL CHAINING OPERATOR(?.)-------------------

// let chainingOp = obj1?.add; 
// console.log(chainingOp);

// -----------------------------SWITCH----------------------------------
// let age = 12;
// let entry;
// switch(age){
//     case 19 :
//     case 20 : 
//         entry = "allowed";
//         break;
//     case 12 : 
//     case 15 : 
//         entry = "not allowed"; 
//         break;
//     default : 
//         entry = "Something's wrong";
// }
// console.log(entry);

//-----------------------------FOR IN LOOP--------------------------

// let text = "";
// for (let k in obj2){
//     text += obj2[k]
// }

// console.log(text);

//-----------------------------FOR OF LOOP--------------------------

// for (let k of arr){
//     text += k
// }
// console.log(text);

//------------------------------MAPS-------------------------------

// var mapArray = new Map([
//     ["Nandini",22],
//     ["Kanchan",23],
//     ["Shailja",25],
//     ["Meghna",27]
// ]);

// for (let x of mapArray.entries()){
//     text += x ;
// }

// mapArray.forEach((value, key)=>{
//     console.log (key + " = " + value);
// })

// console.log(text);
// console.log(mapArray.get("Meghna"));

//---------CONSTRUCTOR PROPERTY----------
// console.log("John".constructor );

//------------------TRY, CATCH, FINALLY, THROW------------------

// var x = "aaa";
// try{
//     if(isNaN(x)) throw "not a no.";
// }
// catch(err){
//     console.log('-----'+ err);
// }
// finally{
//     console.log("it's finally");
// }

//------------------------CLASS-------------------------

// class deets{
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     age(){
//         let date = new Date();
//         return date.getDate();
//     }
// }
// const myDeets = new deets("Nandini","Kulshrestha");
// console.log(myDeets.name  + myDeets.age());

//-------------------------JSON----------------------------

// let text = '{"abcd" :"xyz"}';
// const obj =  JSON.parse(text);
// console.log( obj);

//---------------SPREAD OPERATOR-------------------

// const copiedArray = [...arr];
// console.log(copiedArray);

// ---------------REST ARRAY---------------------
 
// const toArray = (...arg)=>{
//     return arg;
// }
// console.log(toArray(1,2,3,4,5));

//-------------------PROMISES-------------------------

// const myPromise = new Promise((resolve,reject)=>{
//     resolve(setTimeout( ()=>{
//         console.log("I hate you!");
//     },5000));
// });
// return myPromise;

// const promise = new Promise((resolve,reject)=>{
//     resolve();
//     reject();
// });
// promise.then(
//     function(value){
//         setTimeout( ()=>{
//         console.log("I love you!");
//     },5000)
//     },
//     function(error){
//         console.log("err")
//     }
// );
// console.log(typeof promise);
// return promise;
