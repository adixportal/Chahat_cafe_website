// light fade-in on scroll
const sections = document.querySelectorAll("section");

sections.forEach(sec=>{
  sec.style.opacity="0";
  sec.style.transform="translateY(20px)";
  sec.style.transition="0.4s ease";
});

window.addEventListener("scroll",()=>{
  sections.forEach(sec=>{
    if(sec.getBoundingClientRect().top < window.innerHeight-100){
      sec.style.opacity="1";
      sec.style.transform="translateY(0)";
    }
  });
});
