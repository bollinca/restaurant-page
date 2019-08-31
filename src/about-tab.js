const createAbout = () => {
    const container = document.querySelector('#content');

    const aboutDiv = document.createElement('div');
    const aboutHeadline = document.createElement('h2');
    const aboutParagraph = document.createElement('p');

    aboutHeadline.textContent = 'About us, and our amazing, beautiful bread.';
    aboutParagraph.textContent = 'Our bread was inspired by the wonders of wonderful bread that we ate. The bread was good, and we\
    were all like, whoa, we should make our own delicious bread, so then we did and now here we are today, making tons of tasty bread for you.';

    aboutDiv.appendChild(aboutHeadline);
    aboutDiv.appendChild(aboutParagraph);

    container.appendChild(aboutDiv);
}

export { createAbout };