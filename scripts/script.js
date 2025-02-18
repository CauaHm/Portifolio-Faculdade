let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const mostrarSlide = (n) => {
    if (n >= totalSlides) { 
        index = 0 // volta para o primeiro slide
    } else if (n <0) {
        index = totalSlides - 1 // vai para o ultimo slide
    }

    const offset = -index * 35.85 //movimenta para a posição correta do slide
    document.querySelector('.container-projects').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    index--;
    mostrarSlide(index);
  });
  
  // Navegar para o próximo slide
  document.querySelector('.next').addEventListener('click', () => {
    index++;
    mostrarSlide(index);
  });