const createAccordion = () => {
  const menuList = document.querySelector('.page-footer__menu-list');
  const menuButtons = menuList.querySelectorAll('.page-footer__menu-title');
  const menuItems = menuList.querySelectorAll('.page-footer__menu-item');

  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('page-footer__menu-item--nojs');
  });

  menuButtons.forEach((menuButton, index) => {
    menuButton.addEventListener('click', () => {
      if (menuItems[index].classList.contains('is-open')) {
        menuItems[index].classList.remove('is-open');
        menuItems[index].classList.add('is-closed');
      } else {
        menuItems.forEach((menuItem) => {
          menuItem.classList.remove('is-open');
        });
        menuItems.forEach((menuItem) => {
          menuItem.classList.add('is-closed');
        });
        menuItems[index].classList.remove('is-closed');
        menuItems[index].classList.add('is-open');
      }
    });
  });
};

export {createAccordion};
