import { loadPage, makeTabSelector } from './load-html.js';
import { createContact } from './contact-tab.js';
import { createAbout } from './about-tab.js';
import { createMenu } from './menu-tab.js';

const container = document.querySelector('#content');
const tabs = makeTabSelector();
tabs.forEach(tab => tab.addEventListener('click', (e) => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    console.log(e.target.attributes['data-trigger']);
}))
loadPage();
// createContact();
// createAbout();
// createMenu();