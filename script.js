let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.getElementById('main-title');
  mainTitle.textContent = "New Title";
  

  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = "blue";
  

  // Part 3
  const favoriteThings = document.getElementById('favorite-things');
  favoriteThings.lastElementChild.remove();
  

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
    title.style.fontSize = "2rem";
  });
  

  // Part 5
  const pastRaces = document.getElementById('past-races');
  const chicago = pastRaces.querySelector('li:last-child');
  chicago.remove();
  

  // Part 6
  const newRace = document.createElement('li');
  newRace.textContent = "New York City";
  pastRaces.appendChild(newRace);
  

  // Part 7
  const blogContainer = document.querySelector('.main');
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');
  const newHeading = document.createElement('h2');
  newHeading.textContent = "New York City";
  const newContent = document.createElement('p');
  newContent.textContent = "Some text about New York City";
  newBlogPost.appendChild(newHeading);
  newBlogPost.appendChild(newContent);
  blogContainer.appendChild(newBlogPost);
  

  // Part 8
  const quoteTitle = document.getElementById('quote-title');
  quoteTitle.addEventListener('click', randomQuote);
  

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post');
  blogPosts.forEach(post => {
    post.addEventListener('mouseout', () => {
      post.classList.toggle('purple');
    });
    post.addEventListener('mouseenter', () => {
      post.classList.toggle('red');
    });
  });
  




});
