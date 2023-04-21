import movies from '../../mockUp/movieCount.js';

const moviesArray = [
  'Trailer',
  'Welcome to america',
  'Happy',
  'Bootcamp',
  'Africa',
  'Microverse',
];

describe('Number of movies test', () => {
  test('movies array == 6', () => {
    expect(movies(moviesArray)).toBe(6);
  });
});
