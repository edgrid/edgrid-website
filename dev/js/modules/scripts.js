// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

export const activeMenuItem = menuId => {
  const menu = document.getElementById(menuId);
  if(menu) {
    let links = Array.from(menu.querySelectorAll('a'));
    links.map( link => {
      if (link.href === location.href) link.classList.add('active')
    })
  }
};

activeMenuItem('main-menu');
activeMenuItem('vertical-menu');
