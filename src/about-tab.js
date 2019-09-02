const createAbout = () => {
    const container = document.querySelector('#content');

    const aboutDiv = document.createElement('div');
    const aboutHeadline = document.createElement('h2');
    const paragraphOne = document.createElement('p');
    const paragraphTwo = document.createElement('p');

    aboutHeadline.textContent = 'About us, and our amazing, beautiful bread.';
    paragraphOne.textContent = 'Our bread was inspired by some incredible bread that we ate this one time. The bread was good, and we\
    decided to learn the art. Eventually, after years of effort, research, and some bread-related injuries, we had mastered the sourdough loaf. \
    Still, we failed to find a way to make money off of our bread. We began to learn to make breads from all different cultures. Baguettes, Rye, \
    Brioche, Pita, Fococcia, even Banana. But still, we struggled.';
    paragraphTwo.textContent = 'We opened our own store, worked hard and long to get our names out there, and still struggled to make rent. One day, \
    a man with a finely kept goatee and a well tailored business suit walked into our bakery. He had a burning passion for bread making, and was particularly \
    knowledgable about maintaining a perfect proofing temperature at all times. He invited us to meet him at a crossroads, at midnight. We signed some papers, \
    shook hands, and awoke the next day to a crowd beating down our door. These days, our devilishly good bread is ready for your consumption, every day from \
     7 AM to 3 PM.'

    aboutDiv.appendChild(aboutHeadline);
    aboutDiv.appendChild(paragraphOne);
    aboutDiv.appendChild(paragraphTwo)

    container.appendChild(aboutDiv);
}

export { createAbout };