const createContact = () => {
    const container = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    const contactHeader = document.createElement('h2');
    const bulkParagraph = document.createElement('p');
    const helpParagraph = document.createElement('p');

    const formHeader = document.createElement('h3');
    const contactForm = document.createElement('form');
    const formName = document.createElement('input');
    formName.setAttribute('type', 'text');
    formName.setAttribute('placeholder', 'Name');
    const formQuestion = document.createElement('textarea');
    formQuestion.setAttribute('rows', '8');
    formQuestion.setAttribute('placeholder', 'Your Question Goes Here.');
    const formButton = document.createElement('button');
    formButton.textContent = 'Submit Question';

    contactHeader.textContent = 'CONTACT INFORMATION';
    bulkParagraph.textContent = 'For bulk order inqueries, please call (555) 867-5309, or email us at fakeemail@fake.com';
    helpParagraph.textContent = 'Have questions about baking your own bread? Looking for some help with your yeast starter? Stop by and we\'ll be happy to help.';
    formHeader.textContent = 'Other questions/feedback?';

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(bulkParagraph);
    contactDiv.appendChild(helpParagraph);
    contactDiv.appendChild(formHeader);

    contactForm.appendChild(formName);
    contactForm.appendChild(formQuestion);
    contactForm.appendChild(formButton);

    contactDiv.appendChild(contactForm);

    container.appendChild(contactDiv);
};

export { createContact };