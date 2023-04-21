import movieNumber from '../modules/cardCount.js';

const moviesCounter2 = [
  'Trailer',
  'Welcome to america',
  'Happy',
  'Bootcamp',
  'Africa',
  'Microverse',
];

describe('Number of movies test', () => {
  test('movies array == 6', () => {
    expect(movieNumber(moviesCounter2)).toBe(6);
  });
});
