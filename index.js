const card= document.querySelector(".card");
const container= document.querySelector(".container");
const title= document.querySelector('.title');
const jacket= document.querySelector('.jacket img');
const purchase= document.querySelector('.purchase button');
const description= document.querySelector('.info h3');
const sizes= document.querySelector('.sizes');
const circle= document.querySelector('.circle');





// Moving Animation Event

 container.addEventListener("mousemove", (e)=> {
   
let xAxis= (window.innerWidth / 2 - e.pageX) / 10;
 let yAxis= (window.innerHeight / 2 - e.pageY) / 10;
card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
//Animate in
container.addEventListener('mouseenter',(e)=>{
card.style.transition= 'none';

//Popout
title.style.transform= "translateZ(150px)";
title.style.transform= "translateZ(150px)";
jacket.style.transform= "translateZ(150px) rotateZ(-45deg)";
 purchase.style.transform= "translateZ(150px)";
 description.style.transform= "translateZ(100px)";
sizes.style.transform= "translateZ(100px)"; 
purchase.style.transform= "translateZ(75px)"; 


});

//Animate Out

container.addEventListener('mouseleave',(e)=> {
  card.style.transition= "all, 0.5s ease";
    card.style.transform= `rotateY(0deg) rotateX(0deg)`;


    title.style.transform= "translateZ(0px)";
title.style.transform= "translateZ(0px)";

jacket.style.transform= "translateZ(0px) rotateZ(0deg)";
description.style.transform= "translateZ(0px)";
sizes.style.transform= "translateZ(0px)"; 
purchase.style.transform= "translateZ(0px)"; 


});