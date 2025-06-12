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
//modern Js:-
// const arrowSum=(a,b)=>{
//   return a+b;
// }
// console.log(arrowSum(3,4));

// const arrowMul=(a,b)=>{
//   return a*b;
// }
// console.log(arrowMul(3,4));


// const printHello =()=>{
//   console.log("hello");
// }



//1st Way:-
// function vowels(S){
//   S=S.toLowerCase();
//   let count=0;
// for(let i=0;i<S.length;i++){
//   console.log(S.charAt(i));
// if(S.charAt(i)==='a'||S.charAt(i)==='e'||S.charAt(i)==='i'||S.charAt(i)==='o'||S.charAt(i)==='u'){
//      count++;
//    }
// }
// console.log(count);
// }
// vowels("APNACOLLEGE");



//2nd Way:-
// const vowels=(S)=>{
//   S=S.toLowerCase();
//   let count=0;
// for(let i=0;i<S.length;i++){
//   console.log(S.charAt(i));
// if(S.charAt(i)==='a'||S.charAt(i)==='e'||S.charAt(i)==='i'||S.charAt(i)==='o'||S.charAt(i)==='u'){
//      count++;
//    }
// }
// return(count);
// }


//ForEach:- It is a method
// 1. to create a loop
//2. CallBackFunction: here,it is a function to execute for each element in the array

//A callBack is a Function passed as an argument to another function.
//arr.forEach(callBackFunction){}

//3.It is used for array not for string

//ex:-
// let arr=[1,2,4,5,6,5];
// arr.forEach(function printVal(val){ //value at index
//    console.log(val);
// })

//arrow function:-
// let arr=["delhi","mumbai","Pune"];
// arr.forEach((val,idx,arr)=>{
//    console.log(val.toUpperCase(),idx,arr);
// })


//Q1.
// what is higher order function(HOF or HOM):-
// jo dusre function ko as a parameter le lete haine yaha phir kisi function ko return krte haine.

//HOF & HOM is js  methods in which that either take another function as params inside them or they return another function as there outputs.


//Q1.practice :- find squre
// let arr=[1,2,3,4,5];
//  arr.forEach((arr)=>{
// console.log(arr*arr);

//       //  for(let i=0;i<arr.length;i++){
//       //       arr[i]*=arr[i];
//       //  }
//       //  return arr;
//  })
// let calSq =(arr)=>{
// console.log(arr*arr);
// };
//  arr.forEach(calSq);

// ArrayMethods:-
// 1.Map:-creates a new array with the results of some operation.the value its callback returns are used to create the new array.

// let arr=[1,2,3,4,5];
// let newArr=arr.map((val)=>{
//     return val**2;
// })
// console.log(newArr);

//2. Filter:-creates a new array of element that give ture for a condition/filter.
//eg.  all even elements
//  let nums=[2,3,5,6,7,2,2,,6,7,63,3,5,8,0,4];
// let newNums= nums.filter((val)=>{
//    return val%2!==0;
// })
// console.log((newNums));


//3.Reduce:-perform operations & reduces the array to a single value.it returns that single value.
//  let nums=[2,3,5,4];
// const output =nums.reduce((res,curr)=>{
//    return res+curr;
// });
// console.log(output);

//increasing and decreasing:-
//  let nums=[2,3,5,6,7,2,2,,6,7,63,3,5,8,0,4];

//  const output =nums.reduce((res,curr)=>{
//    return res<curr ? res:curr;
// });
// console.log(output);


// let marks=[87,93,64,99,95,91,85];
// let newArr=marks.filter((val)=>{
//   return val>90;
// })
// console.log(newArr);


// let n=prompt("enter a number : ");
//  let arr=[];
//  for(let i=1;i<=n;i++){
//   arr[i-1]=i;
      
//  }
// console.log(arr);


// let sum =arr.reduce((res,curr) =>{
//     return res+curr;
// })
// console.log("sum = " + sum);



// let prod= arr.reduce((res,curr)=>{
//   return res*curr;
// })
// console.log("factorial = " +prod);



// WINDOW OBJECT :-
//The window object represents an open window in a browser.it is browser's object(not js's)& automatically created by browser.
//it is a global with lots of properties and methods.


//What is DOM?
//When a webpage is loaded,the browser creates a DOCUMENT OBJECT MODEL(DOM) OF THE PAGE.
//It is use for dynamic changes and manipulation in are web page.

//All html file is present in window->document.
//console.dir(window.document); -->it shows properties and mehtods of document object.





//DOM Manipulation:-
//1.Selectiong with Id:- unique
  //document.getElementbyId("myId")
  
  //2.Selecting with class:-HTML collection ->it is simillar to an array. 
  //document.getElementbyClassName("myClass")

  //3.Selecting with tag:-
  //document.getElementByTagName("p")

  //4.Query Selector:-
  //4.1 document.querySelector("myId/myclass/tag")
  //return first element

  //4.2. document.querySelectorAll("myId/myClass/tag")
  //returns a NodeList



  //Properties:-

  //1. tagName:- return tag for element nodes
  //2. innerText:- returns the text content of the element and all its children
  //3.inerHtml:- returns the plain text or HTML contents in the element
  //4.textContent:- returns textual content even for hidden elements.


  //NODES:-
  //1.FirstNode
  //2.LastNode
  //3.textNode
  //4.ElementNode
  //5.commentNode


  //DOM Attributes:-
  //1. getAttribute(attr)//to get the attribute value
  //2.setAttribute(attr,value)//to set the attribute val th

  //DOM Style:-
  //1.node.style



  //DOM Insert Element:-
  //1.step1:-let el=document.createElement("div")
    //1.1 node.append(el) //adds at the end of node(inside)
    //1.2 node.prepend(el) //adds at the start of node(inside)
    //1.3 node.before(el) //adds at the before of node(outside)
    //1.4 node.after(el) //adds at the after of node(outside)
  
  //Delete Element:-
   //1. node.remove() //removes the node