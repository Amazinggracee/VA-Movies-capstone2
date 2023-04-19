import getUsers from "./modules/usersAPI.js";
import "./style.css";
const logo = document.querySelector(".logo-wrapper");
logo.addEventListener("click", async () => {
  await getUsers();
});

// .then((json) => console.log(json));
