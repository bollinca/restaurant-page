const createContact = () => {
    const container = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    const contactHeader = document.createElement('h2');
    const bulkParagraph = document.createElement('p');
    const helpParagraph = document.createElement('p');
    const formHeader = document.createElement('h3');
    const contactForm = document.createElement('form');

    contactHeader.textContent = 'CONTACT INFORMATION';
    bulkParagraph.textContent = 'For bulk order inqueries, please call (555) 555-5555, or email us at fakeemail@fake.com';
    helpParagraph.textContent = 'Have questions about baking your own bread? Looking for some help with your yeast starter? Stop by and we\'ll be happy to help.';
    formHeader.textContent = 'Other questions/feedback?';

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(bulkParagraph);
    contactDiv.appendChild(helpParagraph);
    contactDiv.appendChild(formHeader);
    contactDiv.appendChild(contactForm);

    container.appendChild(contactDiv);
};

export { createContact };