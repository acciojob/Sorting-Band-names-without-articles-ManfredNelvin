let bandNames = ['The Beatles', 'Red Hot Chili Peppers', 'Led Zeppelin', 'The Rolling Stones', 'Nirvana'];

// Remove articles from band names
const removeArticles = (name) => {
  const articles = ['a', 'an', 'the'];
  const words = name.toLowerCase().split(' ');
  if (articles.includes(words[0])) {
    words.shift();
  }
  return words.join(' ');
};

// Sort band names in lexicographic order (excluding articles)
const sortedBandNames = bandNames.sort((a, b) => removeArticles(a) > removeArticles(b) ? 1 : -1);

// Create the HTML list
let ul = '<ul id="band">';
sortedBandNames.forEach((bandName) => {
  ul += `<li>${bandName}</li>`;
});
ul += '</ul>';

console.log(ul);


