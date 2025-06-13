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

// let divs=document.querySelectorAll(".box");
// console.dir(divs);
// let idx=1;
// for(div of divs){
//    div.innerText=`new unique value ${idx}`;
//    idx++;
// }
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";


// let div =document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);
 
// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));


// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.fontSize="26px";
// div.innerText="hello";

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);


// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
//div.before(newBtn);
//div.after(newBtn);


// let newHeading=document.createElement("h1")
// newHeading.innerHTML="<i>Hi,I am new!</i>";
// document.querySelector("body").prepend(newHeading);


// let para=document.querySelector("p");
// para.remove(); 
// newHeading.remove();


//Q1.
// let newBtn=document.createElement("button");
// newBtn.innerText="click Me!";
// console.log(newBtn);
// document.querySelector("body").prepend(newBtn);
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";


//Q2.
// let para=document.querySelector("p");
// para.classList.add("newClass");
// para.classList.remove("newClass"); 

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     // console.log("btn1 was Clicked");
//     // let a =25;
//     // a++;
//     // console.log(a);//26
// };
//  btn1.addEventListener("click",(e)=>{
//       console.log("button1 was clicked-handler1");
    
//  })

// btn1.addEventListener("click",()=>{
//       console.log("button1 was clicked -handler2");
//  })
 
//  btn1.addEventListener("click",()=>{
//       console.log("button1 was clicked-handler3");
    
//  })

//  const handler4=()=>{
//       console.log("button1 was clicked-handler4");
    
//  }
//  btn1.addEventListener("click",handler4);

//  btn1.removeEventListener("click",handler4);

// let box=document.querySelector("div");
// box.onmouseover =(e)=>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
// //     console.log("you are inside div");
// //     let a=25;
// //     a++;
// //     console.log(a);//26
// };


//Q1.click:-
// let newBtn=document.createElement("button");
// newBtn.innerText="Change Mode!";
// document.querySelector("body").prepend(newBtn);
// let body=document.querySelector("body");
// let btn=document.querySelector("button");
// let currMode="light";//change dark
// btn.addEventListener("click",()=>{
//     // console.log("you are trying to change mode");
//       if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");

//       }
//       else{
//         currMode="light";
//           body.classList.add("light");
//           body.classList.remove("dark");
//       }
//       console.log(currMode);
// })


//Q2.Mouseover:-
//div make:
// let newDiv=document.createElement("div");
// newDiv.innerHTML="<i>Over Me!</i>";
// document.querySelector("body").prepend(newDiv);

// //select:
// let body=document.querySelector("body");
// let div=document.querySelector("div");
// let currMode="light";
// div.addEventListener("mouseover",()=>{
//     // console.log("you are trying to change mode");
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode="light";
//           body.classList.add("light");
//           body.classList.remove("dark");
//       }
//       console.log(currMode);
// })





