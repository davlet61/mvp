const jsdom = require('jsdom');
const index = require('./index');

const { JSDOM } = jsdom;

test('Test for message', () => {
  const dom = new JSDOM(
    index.template({
      title: 'MVP App',
      message: 'Testing for stuff',
    }),
  );
  const rootTest = dom.window.document.querySelector('#root p').textContent;
  expect(rootTest).toBe('Welcome to our app');
});
