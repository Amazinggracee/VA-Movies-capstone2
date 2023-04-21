const movieNumber = (arr) => {
  let length;
  arr.forEach((element, i) => {
    length = i + 1;
  });
  return length;
};

export default movieNumber;