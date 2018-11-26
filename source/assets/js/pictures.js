import {photography as render} from './templates.bundle.js';

export const get = (url) => {
  return fetch(url)
    .then(response => response.text())
    .then(text => new DOMParser().parseFromString(text, 'text/xml'))
    .then(xml => Array.from(xml.querySelectorAll('entry')))
    .then(items => items.map(item => ({
      title: item.querySelector('title').textContent,
      permalink: item.querySelector('link').getAttribute('href'),
      date: item.querySelector('published').textContent,
      excerpt: item.querySelector('summary[type="html"]').innerHTML,
      image: item.querySelector('summary[type="image"]'),
    })))
}

export {render};
