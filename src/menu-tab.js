const createMenu = () => {
    const container = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    const menuHeadline = document.createElement('h2');
    const menuList = document.createElement('ul');
    const itemOne = document.createElement('li');
    const itemTwo = document.createElement('li');
    const itemThree = document.createElement('li');
    const itemFour = document.createElement('li');
    const itemFive = document.createElement('li');
    const itemSix = document.createElement('li');

    menuHeadline.textContent = 'Check out all our bread!!!';
    itemOne.textContent = 'The Most Sour Sourdough';
    itemTwo.textContent = 'The Best Baguette';
    itemThree.textContent = 'Oven-ready Pizza Dough';
    itemFour.textContent = 'Rye';
    itemFive.textContent = 'Banana Bread';
    itemSix.textContent = 'And many more!';


    menuList.appendChild(itemOne);
    menuList.appendChild(itemTwo);
    menuList.appendChild(itemThree);
    menuList.appendChild(itemFour);
    menuList.appendChild(itemFive);
    menuList.appendChild(itemSix);

    menuDiv.appendChild(menuHeadline);
    menuDiv.appendChild(menuList);

    container.appendChild(menuDiv);
}

export { createMenu };