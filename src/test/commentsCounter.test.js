/** @format */

const getCommentsCount = require('../mockUp/commentCounter.js');

test('comments should not be less than 0', () => {
  expect(getCommentsCount()).not.toBe(-1);
});

// test('returns 0 if the section is not found', () => {
//   commentSection.innerHTML = '';
//   expect(getCommentsCount()).toBe(0);
// });
