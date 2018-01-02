// Este es un ejemplo de como exportar funciones desde un archivo
// En index.js se importan estas funciones

export const activeMenuItem = menu => {
  let links = Array.from(menu.querySelectorAll('a'));
  links.map( link => {
    if (link.href === location.href) link.classList.add('active')
  })
};

activeMenuItem(document.getElementById('main-menu'));
activeMenuItem(document.getElementById('docs-menu'));
