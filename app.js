const card = document.querySelector('.card');
const container = document.querySelector('.container'); 

 //Event Animetion
 container.addEventListener("mousemove", (e) =>{
    //  console.log(e.pageX, e.pageY);

     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
 });

 //animate return

 container.addEventListener("mouseenter", (e) =>{
     card.style.transition = "none";
 })
 constainer.addEventListener("mouseleave", (e) =>{
     card.style.transition = "all 0.5s ease";
     card.style.transform = `rotateY(0deg) rotateX(odeg`;
 }) ;

 