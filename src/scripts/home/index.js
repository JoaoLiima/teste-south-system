const menu = document.getElementById('menu');
const nav = menu.firstElementChild;
const collapsablesY = document.getElementsByClassName('collapsable-y');
const collapsablesX = document.getElementsByClassName('collapsable-x');

function openMenu() {
  menu.style.width = '50%';
  nav.style.animation = 'fade-in 0.7s';
}

function closeMenu() {
  menu.style.width = '0';
  nav.style.animation = 'fade-out 0.7s';
}

function handleCollapsable(context, icons, axis) {
  context.classList.toggle("active");
  const content = context.nextElementSibling;
  const isOpened = axis === 'y' ? content.style.maxHeight : content.style.maxWidth

  if (isOpened){
    closeCollapsable(context, icons?.openIcon, axis);
  } else {
    openCollapsable(context, icons?.closeIcon, axis);
  }
}

function closeCollapsable(context, openIcon, axis) {
  const content = context.nextElementSibling;

  if (axis === 'y') {
    const icon = context.firstElementChild;

    icon ? icon.className = `fa-solid ${openIcon}` : null;
    content.style.maxHeight = null;
  } else if (axis === 'x') {
    content.style.maxWidth = null;
  } 
}

function openCollapsable(context, closeIcon, axis) {
  const content = context.nextElementSibling;
  const items = content.childElementCount;

  if (axis === 'y') {
    const icon = context.firstElementChild;

    icon ? icon.className = `fa-solid ${closeIcon}` : null;
    content.style.maxHeight = `${items * 5}rem`;
  } else if (axis === 'x') {
    content.style.maxWidth = `${items * 10}rem`;
  }
}

for (let i = 0; i < collapsablesY.length; i++) {
  const icons = { 
    openIcon: 'fa-plus',
    closeIcon: 'fa-minus'
  }
  collapsablesY[i].addEventListener('click', function () {
    handleCollapsable(this, icons, 'y');
  })
}

for (i = 0; i < collapsablesX.length; i++) {
  collapsablesX[i].addEventListener('click', function () {
    handleCollapsable(this, null, 'x');
  })
}

function handleOption(event) {
  const input = document.getElementById('access-input');
  const text = event.target.value;

  input.placeholder = text.toUpperCase();
  input.disabled = false;

  if (text === 'cpf') {
    VMasker(input).maskPattern('999.999.999-99')
    input.maxLength = 14;
  } else {
    VMasker(input).maskPattern('99.999.999/9999-99')
    input.maxLength = 18;
  }
}