/** @format */

const commentCounter = (comments) => {
  if (!comments) {
    return 0;
  }

  if (Array.isArray(comments)) {
    return comments.length;
  }

  const commentSection = document.querySelector('.comments');
  if (commentSection) {
    return commentSection.children.length;
  }

  return 0;
};

module.exports = commentCounter;