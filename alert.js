// let year = prompt('is the year 2015');
// if (year < 2015){
//     alert('year was so early');
// }else if ( year > 2015 )
// {
//     alert('year was so far');
// }else{
//     alert('exactly')
// }

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);


// let age = prompt('age?', 18);
// let message = ( age < 3  )?'hi you are correcct':
//    (age < 18 )? 'fabulous':
//     'more than minor';
//    alert( message );


// let age = prompt('age?', 100);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );



// let company = prompt('which company created js?','');

// (company=='netscape')?
// alert('right!'):alert('wrong');


// let userName = prompt("who's there?" ,'');

// if(userName == 'Admin' ){
//     let pass = prompt("password?", '');
//     if (pass =='TheMaster' ){
//         alert('Welcome');
//     }else if(pass==''|| pass=='null'){ 
//         alert('cancelled');
//     }else{
//         alert('wrong password');
//     }
// }else if(userName == '' || userName == null){
//     alert('cancelled');
// }else{
//     alert('i dont know you');
// }

// let i=3;
// while(i){
//     alert(i);
//     i--;
// }

// let i=0;
// while(i<3){
//     alert(i);
//     i++;
// }

// let i=3;
// while(i)alert(i--);

// let i=0;
// do{
//     alert(i);
//     i++;
// }while(i<3)

// for(i=0;i<3;i++){
//     alert(i);
// }

// let i=0;
// for(i=0;i<3;i++){
//     alert(i);
// }alert(i);

// let i=0;
// for(;i<3;i++){
// alert(i);
// }

// let i=0;
// for(;i<3;){
//     alert(i++);
// }

// for(;;){
// }

// let sum=0;
// while(true){
//     let value =+prompt('enter a number','');
//     if(!value)break;
//     sum += value;
// }alert('sum:'+sum);


// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }



// let browsers = prompt('what browser you are using?',);

// if(browsers == 'edge'){
//    alert( "You've got the Edge!" );
// }
//   else if( browsers == 'chrome' || browsers == 'Firefox' || browsers == 'Safari' || browsers == 'Opera' ){
//    alert('Okay we support these browsers too');
//   }
//   else{
//     alert('We hope that this page looks ok!');

//   }


// let userName ='john';

// function showMessage(){
//   let message = 'Hello,'+ userName;
//   alert(message);
// }
// showMessage();


// function showMessage(from ,text){
//   from = "*"+ from +"*";
//   alert(from +":"+text);
// }
// let from = "Ann";
// showMessage(from,"Hello");
// alert(from);


// function showMessage(from, text) {
//   if (text === undefined) {
//     text = 'no text given';
//   }

//   alert( from + ": " + text );
// }
// showMessage("Hello");

// function showMessage(from, text) {
//   text = text || 'no text given';
//   alert( from + ": " + text );
// }
// showMessage("Hello");


// function showMessage(firstName,text){
//         alert(firstName +"!"+text);
// }
//       let firstName = "Hi";
//       showMessage(firstName,"Santhosh");

// function showMessage(firstName,lastName){
//         alert("Hi "+ firstName + lastName);
// }
//       let firstName="santhosh ";
//       let lastName="sharma";
//       showMessage(firstName,lastName);


//       function showMessage(lastName,text){
//         alert(lastName +"!"+text);
// }
//       let lastName = "Hi";
//       showMessage(lastName,"sharma");


// function showMessage(from, text) {
//   text = text || 'noTextgiven';
//   alert(from);
// }
// showMessage("Santhosh Sharma");

// 1. If I pass first name it will print first name,
// 2. If I pass first name and last name it will print first name and last name.
// 3. If you pass last name it will print last name only
// If you don't pass anything it will print Santosh sharma


// let firstName="santhosh ";
// let lastName="sharma";
// function showMessage(firstName,lastName){
//         alert( firstName + lastName);
//         firstName = firstName || 'firstname';
//         alert( firstName );
//         lastName = lastName || 'lastName';
//         alert( lastName );
//  }
//       showMessage(firstName,lastName);
//       showMessage(Santhosh , firstName);
//       showMessage(Sharma,lastName);


// function sum(a,b){
//   return(a+b);
// }
// let result=sum(1,2);
// alert(result);

// function checkAge(age){
//   if(age>=18){
//     return true;
//   }else{
//     return confirm('Do you have parents permission?');
//   }
// }
// let age =prompt('whats your age?', 18);
// if(checkAge(age))
//   {
//     alert('Access granted');
//   }else{
//     alert('Access denied');
//   }

// function showMovie(age){
//   if(!checkAge(age)){
//     return;
//   }else{
//     return false;
//   }
// }
//  let age =prompt("whats your age?",);

// alert('you are permitted to movie');


// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }

//   alert( "Showing you the movie" ); 

// }

// function doNothing(){
//   return;
// }
// alert(doNothing()===undefined);

// function pow(x,n){
//   let result=x;
//   for(i=1;i<n;i++){
//     result*=x;
//   }
//   return result;
// }
// let x = prompt("x?",'');
// let n = prompt("n?",'');

// if(n<1){
//   alert('Power ${n} is not supported, use a positive integer')
// }else{
//   alert (pow(x,n));
// }

// function sayHi(){
// alert('hello');
// }
// let func = sayHi;
// func();
// sayHi();

// function ask(question,yes,no){
//     if(confirm(question))yes()
//         else no();
// }
// function showOk(){
//     alert("you agreed");
// }
// function showCancel(){
//     alert("you cancelled the the execution");
// }
// ask("Did you agree?",showOk,showCancel);

// function ask(question,yes,no){
//     if(confirm(question))yes()
//         else no();
// }
// ask("do you agree?",
// function(){alert("you agreed?");},
// function(){alert("you cancelled the execution");}
// );

// let age=prompt('whats your age?',18)

// let Welcome=(age<18)?
// function(){alert('hello');}:
// function(){alert('greetings');};
// Welcome();

// let sum=(a,b)=>a+b;
// alert(sum(1,2));

// let age =prompt ('whats your age?',18);

// let welcome = (age<18)?
// () => alert('hello'):
// () => alert('greetings');
// welcome();


// function hello(name) {
//   let phrase = `Hello, ${name}!`;
//   say(phrase);
// }
// function say(phrase){
//     alert(`***${phrase}***`)
// }

// let user = new Object();
// let user = {};

// let user = {
//     name: "john",
//     age: 25
// };

// alert(user.name);
// alert(user.age);

// user.isAdmin=true;

// delete user.age;

// user["like birds"] = true;


// let user = {
//     name: "John",
//     age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert(user[key]); // John (if enter "name")

// let fruit = prompt("which fruit to buy?", "apple");
// let bag = {
//     [fruit]: 5,
// };
// alert(bag.apple);

// let fruit = 'apple';
// let bag = {
//     [fruit + 'computer']: 5,
// };


// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = makeUser("john", 25);
// alert(user.name);


// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = {
//     name: "john",
//     age: 25,
//     isAdmin: true,
// };
// for (let key in user) {
//     alert(key);
//     alert(user[key]);
// }

// let user = {
//     name: "john",
//     age: 25,
// };
// user.sayHi = function() {
//     alert("hello!");
// };
// user.sayHi();

// function User(name) {
//     this.name = name;

//     this.sayhi = function() {
//         alert("my name is :" + this.name);
//     }
// };
// let john = new User("John");
// john.sayhi();

// let id = Symbol("new");
// alert(id.toString());


// let id = Symbol("id");
// let user = {
//     name: "john",
//     age: 23,
//     [id]: 123
// };
// for (let value in user)alert(key);

// alert("Direct:"+ user[id]);


// let id = Symbol.for("id");

// let idAgain =Symbol.for("id");

// alert(id === idAgain);

//  let num = 255;
// alert(num.toString(2));
// alert(num.toString(16));
// alert(num.toString(36));

// alert( 123456..toString(36) );

// let array = new Array();
// let array = [];

// let fruits = ['apple','orange','banana'];
// alert(fruits);

// function sumInput(){
//     let numbers = [];
//     while (true) {
//         let value = prompt("whats the number?", 0);
//         if(value === "" || value === null || !isFinite(value)) break;
//         numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers){
//         sum += number;
//     }
//     return sum;
// }
// alert( sumInput() );

// ["apple","orange","banana"].forEach((item,index,array)=>{
// alert(`${item} is at index ${index} in ${array}`);
// });

// let users = [
//     {id:1,name:"johnas"},
//     {id:2,name:"martha"},
//     {id:3,name:"regina"},
// ];
// let user = users.find(item => item.id === 1);
// alert(user.name);

// let users = [
//     {id:1,name:"johnas"},
//     {id:2,name:"martha"},
//     {id:3,name:"regina"},
// ];
// let someUsers = users.filter(item => item.id < 3);
// alert(someUsers.length);

// function compareNumeric(a, b){
//     if(a > b) return 1;
//     if(a < b)  return -1;
//     if(a == b) return 0;
// }
// let arr = [1,3,2,15];

// arr.sort(compareNumeric);
// alert(arr);

let Movies = [
    {
      title     : 'Gulabo Sitabo',
      Year      : 2020,
      IMDBrating: 6.5, 
      Genres    : ['International','Drama']
    },
    {
      title      : 'Tumbbad', 
      Year       : 2018, 
      IMDBrating : 8.3,
      Genres     : ['Horror', 'International', 'Suspense']
     },
    { 
      title      : 'David',
      Year       :2013 , 
      IMDBrating : 5, 
      Genres     :['Drama', 'Action']
    },
    { 
      title      : 'K.G.F',
      Year       : 2018, 
      IMDBrating : 8.2 , 
      Genres     :['Action', 'International']
    },
    { 
      title      : 'Penguin',
      Year       : 2020, 
      IMDBrating : 4.7, 
      Genres     :[	'Drama', 'Suspense']
    },
    { 
      title      : 'Blackmail',
      Year       : 2018, 
      IMDBrating : 7.1, 
      Genres     :[ 'Comedy', 'International']
    },
    { 
      title      : 'Shubh Mangal Zyada Saavdhan',
      Year       : 2020, 
      IMDBrating : 5.8, 
      Genres     :[	'Comedy']
    },
    { 
      title      : 'Into The Wild',
      Year       : 2007, 
      IMDBrating : 8.1, 
      Genres     :[	'Action', 'Drama']
    },
    { 
      title      : 'Interstellar',
      Year       : 2014, 
      IMDBrating : 8.6, 
      Genres     :[	'Action', 'Science Fiction']
    },
    { 
      title      : 'San Andreas',
      Year       : 2015, 
      IMDBrating : 6.0, 
      Genres     :[	'Action']
    },
]

