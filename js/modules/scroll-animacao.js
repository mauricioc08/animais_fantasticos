export default function initAnimacaoScroll(){
  const section = document.querySelectorAll('.js-scroll');
  
  if(section.length){
  const windowMetade = window.innerHeight * 0.6;
  
  function animaScroll(){
    section.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(isSectionVisible){
        section.classList.add('ativo');
      }
    })
  }
  animaScroll()
  
  window.addEventListener('scroll', animaScroll);
  }
  }