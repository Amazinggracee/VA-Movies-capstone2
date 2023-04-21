const movie = (arr) => {
  let length;
  arr.forEach((element, i) => {
    length = i + 1;
  });
  return length;
};

export default movie;
