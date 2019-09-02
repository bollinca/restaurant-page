import { loadPage, makeTabSelector } from './load-html.js';
import { createContact } from './contact-tab.js';
import { createAbout } from './about-tab.js';
import { createMenu } from './menu-tab.js';

makeTabSelector();
loadPage();
// createContact();
// createAbout();
// createMenu();