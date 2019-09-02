
const loadPage = () => {
    const container = document.querySelector('#content');

    const headline = document.createElement('h1');
    const breadPhoto = document.createElement('img');
    const shopBio = document.createElement('p');

    headline.textContent = 'Welcome to the Bakery';
    breadPhoto.setAttribute('src', 'https://www.homemadefoodjunkie.com/wp-content/uploads/2017/11/IMG_1354-735x490.jpg');
    breadPhoto.setAttribute('alt', 'A picture of fresh sourdough bread');
    shopBio.textContent = 'Every morning, we bake fresh, high-quality, hand-crafted artisan bread';
    shopBio.style.textAlign = 'center'

    container.appendChild(headline);
    container.appendChild(breadPhoto);
    container.appendChild(shopBio);
}

const makeTabSelector = () => {
    const container = document.querySelector('#content');
    const main = document.querySelector('main');
    const tabContainer = document.createElement('div');
    tabContainer.id = 'tab-container';

    const tabHome = document.createElement('div');
    tabHome.classList.add('tab', 'selected');
    tabHome.textContent = 'Home';
    tabHome.setAttribute('data-trigger', 'loadPage');

    const tabAbout = document.createElement('div');
    tabAbout.classList.add('tab');
    tabAbout.textContent = 'About Us';
    tabAbout.setAttribute('data-trigger', 'createAbout');

    const tabMenu = document.createElement('div');
    tabMenu.classList.add('tab');
    tabMenu.textContent = 'Menu';
    tabMenu.setAttribute('data-trigger', 'createMenu');

    const tabContact = document.createElement('div');
    tabContact.classList.add('tab');
    tabContact.textContent = 'Contact Us';
    tabContact.setAttribute('data-trigger', 'createContact');

    tabContainer.appendChild(tabHome);
    tabContainer.appendChild(tabAbout);
    tabContainer.appendChild(tabMenu);
    tabContainer.appendChild(tabContact);

    main.insertBefore(tabContainer, main.firstChild);
    return [ tabHome, tabAbout, tabMenu, tabContact ];
}

export { loadPage, makeTabSelector };