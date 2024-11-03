const images = [
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg'
];

let imageIndex = 0;

const image = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const indicators = document.querySelectorAll('.indicator');

function updateImage() {
    image.src = images[imageIndex];
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === imageIndex);
    });
}

prevButton.addEventListener('click', () => {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    imageIndex = (imageIndex + 1) % images.length;
    updateImage();
});

indicators.forEach(indicator => {
    indicator.addEventListener('click', (event) => {
        imageIndex = parseInt(event.target.getAttribute('data-index'));
        updateImage();
    });
});

// Инициализация слайдера
updateImage();

