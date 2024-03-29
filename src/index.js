import './styles.css';
import markup from './js/markup.js';

const refs = {
  body: document.querySelector('body'),
  themeToggle: document.querySelector('#theme-switch-toggle'),
  menuList: document.querySelector('ul.js-menu'),
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

// add markup to DOM
refs.menuList.insertAdjacentHTML('beforeend', markup);

// TASK // ------------------------------------------------------------------------
/*
Создай страницу меню с возможностью выбора темы для сервиса заказа еды
Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true,
чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

Используя шаблонизатор Handlebars создай шаблон одного элемента меню. 
После чего, используя шаблон, создай разметку всего меню по данным из menu.json и добавь в DOM в ul.js-menu.
Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть в исходном HTML.

Ниже указана разметка элемента меню которая должна получаться по шаблону (данные будут разные для каждого объекта).

<li class="menu__item">
  <article class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картофель, запеченный в мундире"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картофель, запеченный в мундире</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        100 кредитов
      </p>

      <p class="card__descr">
        Ароматный, сытный, шипящий домашний картофель, фаршированный
        сметанно-беконной начинкой, — это очень простой и очень эффектный способ
        накормить большое количество человек, практически не потратив на готовку
        ни сил, ни времени. Обычную картошку при желании тут можно заменить на
        сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий
        красный перец.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>

*/
