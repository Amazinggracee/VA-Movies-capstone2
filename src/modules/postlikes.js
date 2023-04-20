// const getLikes = async () => {
//   const getApiLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8QDj3NEWg5KCn5q9XXe5/likes';
//   const response = await fetch(getApiLike);
//   const allLikes = await response.json();
//   allLikes.forEach((el) => {
//     if (document.querySelector(`[data-id="${el.item_id}"]`)) {
//       document.querySelector(
//         `[data-id="${el.item_id}"]`,
//       ).nextElementSibling.innerHTML = el.likes;
//     }
//   });
// };
// export default getLikes;
