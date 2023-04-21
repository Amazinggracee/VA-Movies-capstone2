// export default function moviesCounter() {
//   const cards = document.querySelectorAll('#card'); // array of all the DOM elements found

//   return cards.length > 0 ? cards.length : 0;
// }

const movieNumber = (arr) => {
  let length;
  arr.forEach((element, i) => {
    length = i + 1;
  });
  return length;
};

export default movieNumber;