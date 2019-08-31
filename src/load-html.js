
const loadPage = () => {
    const container = document.querySelector('#content');

    const headline = document.createElement('h1');
    const breadPhoto = document.createElement('img');
    const shopBio = document.createElement('p');

    headline.textContent = 'Welcome to the Bakery';
    breadPhoto.setAttribute('src', 'https://www.homemadefoodjunkie.com/wp-content/uploads/2017/11/IMG_1354-735x490.jpg');
    breadPhoto.setAttribute('alt', 'A picture of fresh sourdough bread');
    shopBio.textContent = 'Each day, we bake fresh, high-quality, hand-crafted artisan bread';

    container.appendChild(headline);
    container.appendChild(breadPhoto);
    container.appendChild(shopBio);
}

export { loadPage };