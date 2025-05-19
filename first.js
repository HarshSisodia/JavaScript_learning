// fullName ="tony stark";
// fullname='harsh sisodia';
// console.log(fullName);
// console.log(fullname);
// age=24;
// x=null;//pta haine but khali haine 
// y=undefined;//
// isFollow=true;
// fullName=24;
// console.log(fullName);
// console.log(fullname);
// let name='harsh';
// console.log(name);

// //VARIABLE:-
// var age=24;
// var age=59;
// var age=45;
// console.log(age);//we used in before 2015 after Es6
// //comes out then we used let. but var can be used in re-declared functionailty 
// let a=12
//     a=33
// console.log(a);//it cannot be re declared

// const b=54; 
// console.log(b);//fixed value it cannot be changed 
// let c;
// console.log(c);//Its called undefined

// //BLOCK:-
// //it is different from each other 
//  {
//   let a=5
//   console.log(a);    

//  }
//  {
//    let a=10
//    console.log(a);

//  }

//  let d=10;
//  let price=100.50
//  console.log(price); 


 //OBJECT:-
//  const student= {
//     name :'harsh sisodia',
//     age :23,
//     class:'2nd year',
//     ispass: true

//  };

//  student['age']=student['age']+1;
//  student['name']='bamae';
//  console.log(student.name);



//  const product={
//   name:"PEN",       //string
//   rating :4.8 ,    //number
//   price:270,      //number
//   offer:5.       //number


//  };
//  console.log(product);
 

//  let a="abc"+1123;
//  console.log(a);

//  const profile ={
//  name:'harsh',  //string
//  post:30, //number
//  followersCount:150, // number
//  following:1,       //number
//  isfollow:true,       //boolean
// };

// console.log(profile);
// console.log(typeof profile.name);
// // console.log("Harsh sisodia");
// //print 1 to 5
// for(let i=0;i<=5;i++){
//    console.log("i =",i);
// }
// console.log(i);
//calculate sum of 1 to 5
// let sum=0;
// for(let i=1;i<=5;i++){
//      sum+=i;
     
// }

// console.log(sum);
// console.log("loop end");



//do while loop
// let i=0;
// do{
//    console.log("i =",i);
// i++;
   
// }while(i<=5);


//for-of loop:- which helps in iterating over iterable objects like arrays, strings, etc.

//String
// let str="TonyStark";
// let size=0;
// for(let char of str){
//    console.log( "char =", char);
//    size++;
// }
// console.log("size of string =", size);

// //Array
// let arr=[1,2,3,4,5];
// for(let array of arr){
//    console.log(array);
// }

//for -in loop:- Key in loop
//it is used to iterate over the properties of an object & arrays
// 





//pratice question

//Q1.
// for(let i=0;i<=100;i++){
//    if(i%2===0){
//       console.log("even number=",i);
//    }
  
// }


//Q2.
// let gamNum=30;
// let useNum= prompt("Guess the game number :");
// while(useNum!=gamNum){
//    useNum=prompt(" You enetered Wrong number.Guess Again:");
// }

// console.log("congratulation,you entered the right number");



//STRING:- it is immutable(No change)
//create:-
 //let str="ApnaCollege";
 //string length:-
 //str.length;

 //string indices :-
 //console.log(str[8]);

//For Example:-
// let obj={ 
//    item:"Pen",
//    price:10,
// };
//   console.log(`The cost of ${obj.item} is ${obj.price} rupees`);


 //Template Literals:- this is a new way of creating strings in JavaScript.
 //it is used to create multi-line strings and string interpolation
 //it is created using backticks (``) instead of single or double quotes.
//  let specialString=`This is a template literal`;
//   console.log(  specialString);
   
  
  
  
  //String interpolation:- it is a way to create strings that include variables or expressions.
//   let specialString=`This is a template literal ${1+2+3}`;
//   console.log(  specialString);


//escape character:-
//\n is used to create a new line in a string
// \t is used to create a tab space in a string
// \b is used to create a backspace in a string
// let str= "Apna\tCollege";
// console.log(str.length); 



//String Methods in Js:-


// 1.str.toUpperCase();
// let str="harshsisodia";
// console.log(str.toUpperCase());


// 2.str.toLowerCase();
// let str1="JAVASCRIPT";
// console.log(str1.toLowerCase());


// // 3.str.trim() :-remove whitespaces from staring and ending 

// let str3="     harsh   sisodia      ";
// console.log(str3.trim());



//4.str.slice(star,end?) :-return part of string
//5.str1.concat(str2):-join str2 with str1
//6.str.replace(searchval,newVal);
// let str1="abcd";
// console.log(str1.replace("c","e"));

 
//str.charAt(idx); 
// let str="harshsisodia";
// console.log(str.charAt(2));


//Q4.pactice question:-
//  let userName= prompt("Enter your full name:");
//  console.log(userName);
//  let count=userName.length;
//  console.log(count);

//  console.log("@"+userName.concat(count));



 
//Array:- collection of element of the same data type in a contiguous memory location(Mutable)

//in javascript array is a collection of different data types.

// let arr=[1,2,3,4,5];
// console.log(arr);
// console.log(arr.length);//property 

// let heroes=["ironman","shaktiman","hulk", "thor","spiderman","khrish"]
 // for(let index=0;index<heroes.length;index++){
//     console.log(heroes[index]);
// }


//for of
// for(let i of heroes){
//      console.log(i);
// }

// let city=["delhi","pune","mumbai","jaipur","kota"];

// for( let ci of city){
//       console.log(ci.toUpperCase());
// }

//Practice question
// Q1.
// let std=[85,97,44,37,76,60]
//  let sum=0;

//  for(let i of std){
//         sum+=i;
       
//  }
//  let avg=sum/std.length;
//  console.log(`avg marks of the class= ${avg} `);


//FOR EACH LOOP:-

//  std.forEach(std => {
//   sum+=std;
//  });
//  console.log(sum);


//Q2.
// let arr=[250,645,300,900,50];
// for(let i=0;i<arr.length;i++){
//   console.log(`value at index ${i} = ${arr[i]}`);
//   let offer=arr[i]/10;
//        arr[i]=arr[i]-offer;
//        console.log(`Price of ${i} items after 10% OFF is ${i} = ${arr[i]}`);
// }



//ARRAY METHODS:-

//1. Push():add to end
 //for examples

//  let items=["potato","apple","mangoes","orange"];
//    console.log(items);



//2. Pop():delete from end & return
//  console.log(items.pop());
//3.toString():conert array to string 
// let marks=[45,5,7,8,5];
// console.log(marks.toString());

// let marv=["thor","ironman","spiderman"];
// let dc=["superman","batman"];
//4.concat(): joins multiple arrays & returns result
// console.log(marv.concat(dc));
//5.unshift():add to start
//console.log(marv.unshift("antman"));
//6.shift():delete from start & return 
//console.log(marv.shift("antman"));

//7.slice():returns a piece of the array and no change original arr
//ex:- slice (startIdx,endIdx)
// let marv=["thor","ironman","spiderman","Dr.strange","hulk"];
// console.log(marv.slice(0));


//8.splice: change poriginal array(add,remove,replace and change original arr
//works:- Add Element,Delete Element,Replace Element
 //ex:- splice(startIdx,delCount,newEl1);
//  let a=[1,2,3,4,5,6,7,8,8,9,0]
//  console.log(a.splice(3,1,4));

//let arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
 //a.
//console.log(arr.shift());

//b.
//console.log(arr.splice(2,1,"Ola"));
//console.log(arr[2].replace("Ola"));

//c.
//console.log(arr.push("Amazon"));



//function:-
//block of code that performs a specific task,can be invoked( or call) whenever needed

// function harsh(sum,n){//parameter -> input
//   // console.log("hello");
//   // console.log("we are learning js");
//   console.log(sum);
// }

// harsh("i love js");


// function addTwoNumber(a,b){
//   // let a=3;
//   // let b=5;
//   // let sum=a+b;
//   // harsh(sum);//argument
//   console.log(a+b);

// }
// // addTwoNumber();

// function mul(a,b){
//   //local Variables-> scope
//   s=a*b;
//   return(s);
// }
// console.log(mul(3,4));


//function params->they are local variables of fucntions and ->it has block scope of function


//ARROW FUCNTION :-

//sum Function 


//1st way :-
// function sum(a,b){
//     return a+b;
// }

//2nd way:-

const arrowSum=(a,b)=>{
  return a+b;
}
console.log(arrowSum(3,4));
