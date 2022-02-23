import './styles/main.scss';

// const key = 'ZG50vWxj2bSDo1o47w2gD59Oh0FsKuSnspv7-vKCWJo';
const key = process.env.ACCESS_KEY;
// const handleData = (response) =>
// response : response.data.json()
//   response => response.json()
//   url => url.urls
//   result => result.regular
const state = {
  title: 'MVP App',
  message: 'Welcome to our app',
  image: 'https://images.unsplash.com/photo-1643779374880-abbc1380aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDQ3OTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDU2MzM3OTg&ixlib=rb-1.2.1&q=80&w=1080',
};
// fetch(`https://api.unsplash.com/photos/random?client_id=${key}`)
//   .then(res => res.json())
//   .then(url => url.urls.regular)
//   .then(res => {
//     state.image = res;
//     console.log(state.image);
//   });

// const getData = () => {
//   const apiKey = process.env.ACCESS_KEY;
//   let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;
//   fetch(apiUrl)
//   .then(handleData);
// }

const template = input => ` 
    <h1>${input.title}</h1> 
    <p>${input.message}</p>
    <img src=${input.image}/>
  `;
const render = (htmlString, el) => {
  const element = el;
  element.innerHTML = htmlString;
};

// const update = newState => {
//   state = { ...state, ...newState };
//   window.dispatchEvent(new Event('statechange'));
// };
window.addEventListener('statechange', () => {
  render(template(state), document.querySelector('#root'));
});
// update({ message: 'Is it me you are looking for?' });
window.dispatchEvent(new Event('statechange'));
