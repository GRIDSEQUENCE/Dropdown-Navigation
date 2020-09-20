const navItems = document.querySelectorAll('.nav__item');

navItems.forEach((item) => {
  const arrow = item.querySelector('.nav__arrow');
  const subMenu = item.querySelector('.nav__listSub');
  const subItems = item.querySelectorAll('.nav__itemSub');

  if (subMenu !== null) {
    arrow.addEventListener('click', () => {
      arrow.classList.toggle('nav__arrow--rotate');
      subMenu.classList.toggle('nav__listSub--show');

      subItems.forEach((subItem, index) => {
        setTimeout(() => {
          subItem.classList.toggle('nav__itemSub--slide');
        }, index * 125);
      });
    });
  }
});
