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
    let targetFunctionName = e.target.attributes['data-trigger'].value;
    switch(targetFunctionName) {
        case 'loadPage':
            loadPage();
            break;
        case 'createContact':
            createContact();
            break;
        case 'createAbout':
            createAbout();
            break;
        case 'createMenu':
            createMenu();
            break;
    }
}))
loadPage();
// createContact();
// createAbout();
// createMenu();