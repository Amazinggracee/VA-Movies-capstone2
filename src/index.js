import './style.css';
import getData from './modules/getApi.js';
import getLikes from './modules/getlikes.js';
// import modalDisplay from './modules/modal.js';
import addLikes from './modules/displaylikes.js';
import navbase from './modules/nav.js';

navbase();

//modalDisplay();

addLikes();

getData().then((value) => {
  value.forEach((item, index) => {
    if (index < 6) {
      const container = document.createElement('div');
      container.classList.add('item');
      container.innerHTML = `
            <div class="image-wrapper">
                <img src="${item.image.original}" alt="${item.name}">
            </div>
            <div class="item-info">
              <h4>${item.name}</h4>
              <div class="get-likes">
                  <p><i data-id="${item.id}" class="fa fa-heart-o" aria-hidden="true"></i> <span class="qty">0</span> <span>Likes</span></p>
              </div>
            </div>
            <button data-idBtn="${item.id}" class="commentBtn" type="submit">Comments</button>
            <div data-descr="${item.summary}"></div>
        `;
      document.querySelector('.movie-list').appendChild(container);
    }
  });
  getLikes();
  //modalDisplay();
  addLikes();
});
