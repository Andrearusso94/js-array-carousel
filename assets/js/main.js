//creo array img
const slides = [
    '03.webp',
    '04.webp',
    '01.webp',
    '02.webp',
    '05.webp'
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