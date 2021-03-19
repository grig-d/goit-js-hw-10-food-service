import './styles.css';

const refs = {
  body: document.querySelector('body'),
  themeToggle: document.querySelector('#theme-switch-toggle'),
};

// theme list
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// default or selected Theme
let currentTheme = !!localStorage.getItem('Theme')
  ? localStorage.getItem('Theme')
  : Theme.LIGHT;

// set current theme and checkbox status
refs.body.classList.add(currentTheme);
refs.themeToggle.checked = currentTheme === Theme.DARK;

refs.themeToggle.addEventListener('change', setUpTheme);

function setUpTheme() {
  if (refs.themeToggle.checked) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

// TASK // ------------------------------------------------------------------------
// Создай страницу меню с возможностью выбора темы для сервиса заказа еды
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true,
// чтобы ползунок сдвинулся в правильное положение.
