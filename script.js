// console.log("hello")
// alert("welcome to harsh Website.")
// console.dir(document.body.childNodes[1])
//document.body.style.background ="green";
//document.body.childNodes[1].innerText="abcd";

// let button=document.getElementById("myId");
// console.dir(button);

// let headers=document.getElementsByClassName("myClass");
// console.dir(headers);
// console.log(headers);

// let parahs=document.getElementsByTagName("p")
// console.log(parahs);
// console.dir(parahs);


//for tags:-
// let firstElements=document.querySelector("p"); //1st element
// console.dir(firstElements);

// let allEll=document.querySelectorAll("p"); //all elements
// console.dir(allEll);

//for className:-
// let firstElements=document.querySelector(".myClass"); //1st element
// console.dir(firstElements);

// let allEll=document.querySelectorAll(".myClass"); //all elements
// console.dir(allEll);


//for ID:-
// let firstElements=document.querySelector("#myId"); //1st element
// console.dir(firstElements);


// let div=document.querySelector("div");
// console.dir(div);

// let heading=document.querySelector("h1");
// Q1.
//  let h2=document.querySelector("h2");
// h2.innerText=h2.innerText+" from ApnaCollege student";
// console.log(h2);


//Q2.

let divs=document.querySelectorAll(".box");
console.dir(divs);
let idx=1;
for(div of divs){
   div.innerText=`new unique value ${idx}`;
   idx++;
}
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";