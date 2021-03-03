import './styles.css';

// 
setUpTheme();

function setUpTheme() {
  const savedTheme = localStorage.getItem('savedTheme');
    if (savedTheme) {
      
// if(savedTheme === )

    // refs.textarea.value = savedTheme;
  }
}

// 

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    themeToggle: document.querySelector('#theme-switch-toggle'),
}

console.log(refs.theme);

// refs.theme.addEventListener('change', )

// localStorage.setItem('key', 'value');
// const value = localStorage.getItem('key');
// console.log('value from localStorage: ', value);

// const settings = {
//   theme: 'dark',
//   fontSize: 14,
// };

// localStorage.setItem('settings', JSON.stringify(settings));


