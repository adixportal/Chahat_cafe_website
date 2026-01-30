const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top < window.innerHeight-100){
sec.style.opacity=1;
sec.style.transform="translateY(0)";
}
});
});
