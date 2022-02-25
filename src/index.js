import './styles/main.scss';

const key = process.env.ACCESS_KEY;

const fetchImg = async () => {
  try {
    const response = await fetch('https://api.unsplash.com/photos', {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${key}`,
      },
    });
    const json = await response.json();

    const state = {
      title: 'MVP App',
      message: 'Welcome to our app',
    };

    const template = input => `
    <h1>${input.title}</h1> 
    <p>${input.message}</p>
    <input type="search" id="mySearch" placeholder="Search" value="">
    <ul>
      <li>Example 1</li>
      <li>Example 2</li>
      <li>Example 3</li>
    </ul>
    <main class="container">
        ${json
    .map(
      e => `
        <div class="card"><figure class="card__image">
          <img src="${e.urls.raw}&w=500&h=400"/>
        </figure> </div>
        `,
    )
    .join('')}
    </main>
  `;
    const render = (htmlString, el) => {
      const element = el;
      element.innerHTML = htmlString;
    };

    window.addEventListener('statechange', () => {
      render(template(state), document.querySelector('#root'));
    });

    return window.dispatchEvent(new Event('statechange'));
  } catch (error) {
    return error.message;
  }
};

fetchImg();

export default fetchImg;
