const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

.typeString("Au dela des nuages")
.pauseFor(2000)
.deleteAll()
.start();


// code reservé a la librairie scrollReveal

const sr=ScrollReveal({
    duration:1500,
    origin:"top",
    distance:"30px",
    reset:true
})
sr.reveal(".footer-text, .section3, .section2, .section1", {interval:200})



// partie menu burger

const menu=document.querySelector(".bars");
const navigation=document.querySelector("header ul");
const remov=document.querySelector(".rem")
menu.addEventListener("click", ()=>{
    navigation.classList.add("active")
    // menu.classList.remove("bars")
    remov.classList.add("rem2")
    menu.style.display='none'
    
});
remov.addEventListener("click", ()=>{
    navigation.classList.remove("active")
    menu.style.display='block'
    remov.classList.remove("rem2")
});

window.addEventListener("scroll", ()=>{
    navigation.classList.remove("active") 
    menu.style.display='block'
    remov.classList.remove("rem2") 
});