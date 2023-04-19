const getData = async () => {
  let arr = [];
  const url = 'www.themealdb.com/api/json/v1/1/lookup.php?i=52772';
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      arr = data;
    });
  return arr;
};

export default getData;
