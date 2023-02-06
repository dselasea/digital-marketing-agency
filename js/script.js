const menu = document.querySelector('.menu__logo--hamburger');
const menuLink = document.querySelector('.menu__link');

let programContent = document.querySelector('.program__content');

const program = [
  {
    img: '',
    title: 'Lecture',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '',
    title: 'CC Exhibition',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '',
    title: 'Forum',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '',
    title: 'Workshop',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },
  {
    img: '',
    title: 'CC Ignite',
    description: 'Listen to the speakers from various countries about the messages of sharing and opening.'
  },

]

menu.addEventListener('click', openMenu);

let htmlContent = '';

for(let i = 0; i < program.length; i += 1){
  htmlContent += `
  <div class="programs">
  <h4>${program[i].title}</h4>
  <p>${program[i].description}</p>
  </div>`;
  programContent.innerHTML = htmlContent;
}

function openMenu() {
  menuLink.classList.toggle('open');
  console.log('clicked')
}