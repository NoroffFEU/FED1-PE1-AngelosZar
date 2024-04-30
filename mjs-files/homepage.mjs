// imported variables
import { fetchData } from './common.mjs';
import { baseApiUrl } from './common.mjs';
import { allArticles } from './common.mjs';
import { singlePost } from './common.mjs';
import { singlePostId } from './common.mjs';

//all posts
// fetchData(allArticles);
// single post by id
// fetchData(baseApiUrl, singlePostId);

//
// function to display a grid card on
// Variables from Grid
// const gridContainer = document.querySelector('.cards-container');
// const gridCard = document.querySelector('.grid-card"');
//
//
//
async function main() {
  // 1. check if logged in
  // 2. check if user is admin

  // 3. Async load api data for
  try {
    const { data: posts } = await fetchData(allArticles);
    // functions to render sections here
    //  - hero section
    //  - picks of the day //carousel section/
    //  - most recent section / grid of min 12 cards
  } catch (error) {
    console.log('Problem loading the content');
  }
}
main();
