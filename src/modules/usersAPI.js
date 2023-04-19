const endPoint = "www.themealdb.com/api/json/v1/1/categories.php";

const getUsers = async () => {
  const allUsers = await fetch(endPoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;'
        }
    })
    return allUsers.json();
    console.log("hello!");
};

export default getUsers;
