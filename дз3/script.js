const accessKey = 'LPYjcBjfdQEONKS6JDbR3Ub3XnSo2a3aD6p7jPonVw4'; //
const imageElement = document.getElementById('randomImage');
const photographerNameElement = document.getElementById('photographerName');
const likeButton = document.getElementById('likeButton');
const likeCountElement = document.getElementById('likeCount');

let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;

likeCountElement.textContent = likeCount;

function getRandomImage() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            imageElement.src = data.urls.regular;
            photographerNameElement.textContent = `Фото: ${data.user.name}`;
        })
        .catch(error => console.error('Ошибка при получении изображения:', error));
}

likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountElement.textContent = likeCount;
    localStorage.setItem('likeCount', likeCount);
});

// Получение случайного изображения при загрузке страницы
getRandomImage();
