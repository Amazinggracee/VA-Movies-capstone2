import comments from '../mockUp/commentCounter.js';

const commentList = [
  {
    username: 'Amara',
    comment: 'Lovely movie',
  },
  {
    username: 'Victor',
    comment: 'very interesting movie',
  },
  {
    username: 'Gladwin',
    comment: 'Merry christmas',
  },
  {
    username: 'Joe',
    comment: 'Happy new year',
  },
  {
    username: 'Bernice',
    comment: 'Nice movie',
  },
  {
    username: 'Peter',
    comment: 'Testing the microphone.',
  },
];
describe('Comments test', () => {
  test('comment List == 6', () => {
    expect(comments(commentList)).toBe(6);
  });
});
