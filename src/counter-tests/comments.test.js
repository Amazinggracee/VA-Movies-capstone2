/** @format */
const commentCounter = require('../counters/comment.js');

test('correct count on user comments', () => {
  document.body.innerHTML = "<div class='comments'></div>";
  expect(commentCounter()).toBe(0);

  document.body.innerHTML = '<div class="comments"><div>comment 1</div><div>comment 2</div></div>';
  expect(commentCounter()).toBe(2);

  document.body.innerHTML = '<div class="comments"><div>nice</div></div>';
  expect(commentCounter()).toBe(1);
});

test('returns the number of comments when passed an array of comments', () => {
  const comments = ['comment 1', 'comment 2', 'comment 3'];
  const result = commentCounter(comments);
  expect(result).toBe(3);
});

test('returns 0 when passed an empty array of comments', () => {
  const comments = [];
  const result = commentCounter(comments);
  expect(result).toBe(0);
});

test('returns 0 when passed null as an argument', () => {
  const result = commentCounter(null);
  expect(result).toBe(0);
});

test('returns 0 when passed undefined as an argument', () => {
  const result = commentCounter(undefined);
  expect(result).toBe(0);
});