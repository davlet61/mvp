import './styles/main.scss';
import template from './components/search';

const key = process.env.ACCESS_KEY;

let state = {
  title: 'MVP App',
  message: 'Welcome to our app',
  photos: [],
  searchInput: '',
};

const render = (htmlString, el) => {
  const element = el;
  element.innerHTML = htmlString;
};

const update = newState => {
  state = { ...state, ...newState }; // patch state, overwrite old data with new properties
  window.dispatchEvent(new Event('statechange'));
};

const fetchImg = async keyword => {
  try {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${keyword}`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${key}`,
      },
    });
    const json = await response.json();

    return update({ photos: json.results });
  } catch (error) {
    return error.message;
  }
};
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const keyword = evt.target.value;
  // Fetch the image here'
  fetchImg(keyword);
});

window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});
window.dispatchEvent(new Event('statechange'));
