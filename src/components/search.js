const template = input => `
<h1>${input.title}</h1> 
<p>${input.message}</p>
<form id="myForm">
<input type="search" id="mySearch" placeholder="Search" value="">
</form>
<ul>
  <li>Example 1</li>
  <li>Example 2</li>
  <li>Example 3</li>
</ul>
<main class="container">
    ${input.photos[0]
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
export default template;
