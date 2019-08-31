const createMenu = () => {
    const container = document.querySelector('#content');

    const menuDiv = document.createElement('div');
    const menuHeadline = document.createElement('h2');
    const menuList = document.createElement('ul');
    const itemOne = document.createElement('li');

    menuHeadline.textContent = 'Check out all our bread!!!';
    itemOne.textContent = 'This list will have more items.'


    menuList.appendChild(itemOne);

    menuDiv.appendChild(menuHeadline);
    menuDiv.appendChild(menuList);

    container.appendChild(menuDiv);
}

export { createMenu };