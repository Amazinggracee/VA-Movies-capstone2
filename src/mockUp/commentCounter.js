/** @format */

const getCommentsCount = () => {
  const commentSection = document.querySelector('.comments');
  return commentSection ? commentSection.children.length : 0;
};

export default getCommentsCount;
