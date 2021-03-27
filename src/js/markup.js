// Templating with Handlebars
import menuTemplate from '../templates/menu.hbs';
import menu from './menu.json';
const markup = menuTemplate(menu);

export default markup;
