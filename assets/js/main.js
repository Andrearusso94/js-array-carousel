//creo array img
const slides = [
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/05.webp'
]

//seleziono DOM e dove posizionare le img

const slidesEl = document.querySelector('.slides');

let activeImg= 0;
//creo loop img dell'array 

for (let i = 0; i < slides.length; i++){
    const slideUrl = slides[i];
    const slideMark = `<img class="${i === activeImg ? 'active' : ''}" src="${slideUrl}" alt="">`
    slidesEl.insertAdjacentHTML('beforeend', slideMark)
}

// constanti per i pulsanti

const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')


//input al click

nextButton.addEventListener('click', function (){
  console.log('next');


  const slides =document.querySelectorAll('.slides > img');
  const thisSlides = slides[activeImg];
  
  // rimuovo class active 
  thisSlides.classList.remove('active')

  //incremento immagini 
  activeImg++

  //vado alla seconda img

  const newImg = slides[activeImg]

  // do di nuovo la classe active

  newImg.classList.add('active')
})