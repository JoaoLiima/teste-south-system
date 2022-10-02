const menu = document.getElementById('menu');
const nav = menu.firstElementChild;
const collapsables = document.getElementsByClassName('collapsable');

function openMenu() {
  menu.style.width = '50%';
  nav.style.animation = 'fade-in 0.7s';
}

function closeMenu() {
  menu.style.width = '0';
  nav.style.animation = 'fade-out 0.7s';
}

function handleCollapsable(context, openIcon, closeIcon) {
  context.classList.toggle("active");
  const content = context.nextElementSibling;

  if (content.style.maxHeight){
    openCollapsable(context, openIcon);
  } else {
    closeCollapsable(context, closeIcon);
  }
}

function openCollapsable(context, openIcon) {
  const content = context.nextElementSibling;
  const icon = context.firstElementChild;

  icon ? icon.className = `fa-solid ${openIcon}` : null;
  content.style.maxHeight = null;
}

function closeCollapsable(context, closeIcon) {
  const content = context.nextElementSibling;
  const icon = context.firstElementChild;
  const items = content.childElementCount;

  icon ? icon.className = `fa-solid ${closeIcon}` : null;
  content.style.maxHeight = `${items * 5}rem`;
}

for (let i = 0; i < collapsables.length; i++) {
  collapsables[i].addEventListener('click', function () {
    handleCollapsable(this, 'fa-plus', 'fa-minus');
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