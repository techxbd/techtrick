const postContainer = document.getElementById("post-container");

function displayPost(author_img, title, body, thumbnail, like, comment, views) {
  const div = document.createElement("div");
  div.classList = "card py-2 mb-4";
  div.innerHTML = `
             <!-- Post title -->
                <div class="d-flex align-items-center px-3">
                  <img class="title-img" src=${author_img} alt="" />
                  <h4>${title}</h4>
                </div>

            <!-- Post Details -->
                <div class="px-3">
                  <p>${body}</p>
                </div>

            <!-- Post thumbnail -->
                <div>
                  <img class="post-img" src=${thumbnail} alt="" />
                </div>

                <!-- like,comment display -->
                <div
                  class="d-flex align-items-center justify-content-between px-3 py-2 border-bottom border-1"
                >
                  <span>${like}</span>

                  <div>
                    <span>${comment} comments</span>
                    <span>${views} views</span>
                  </div>
                </div>


                <!-- Post Like,Comment,Views btn -->
                <div
                  class="d-flex align-items-center justify-content-between px-4 py-2 border-bottom border-1"
                >
                  <button class="border-0 bg-white">
                    <i class="far fa-thumbs-up"></i> Like
                  </button>
                  <button class="border-0 bg-white">
                    <i class="far fa-comment-alt"></i> Comment
                  </button>
                  <button class="border-0 bg-white">
                    <i class="far fa-eye"></i> View
                  </button>
                </div>
    `;
  postContainer.appendChild(div);
}
// Show Alal post
function displayAllPost() {
  posts.map((post) => {
    const { author_img, title, body, thumbnail, like, comment, views } = post;
    displayPost(author_img, title, body, thumbnail, like, comment, views);
  });
}
displayAllPost();

//
function categoryByDisplay(categoryName) {
  postContainer.innerHTML = "";
  const categorys = posts.filter((post) => post.category == categoryName);
  for (const category of categorys) {
    const { author_img, title, body, thumbnail, like, comment, views } =
      category;
    displayPost(author_img, title, body, thumbnail, like, comment, views);
  }
}

// Android post
document.getElementById("android").addEventListener("click", () => {
  categoryByDisplay("Android");
});

// Education post
document.getElementById("education").addEventListener("click", () => {
  categoryByDisplay("Education");
});
// facebook post;
document.getElementById("facebook").addEventListener("click", () => {
  categoryByDisplay("Facebook tricks");
});

// Youtube post:
document.getElementById("youtube").addEventListener("click", () => {
  categoryByDisplay("Youtube tricks");
});
// Free net tricks post
document.getElementById("free-net-tricks").addEventListener("click", () => {
  categoryByDisplay("Free net tricks");
});

// Hacking post
document.getElementById("Hacking").addEventListener("click", () => {
  categoryByDisplay("Hacking");
});

// Islamic Forum post
document.getElementById("Islamic-Forum").addEventListener("click", () => {
  categoryByDisplay("Islamic Forum");
});

// Programming post
document.getElementById("Programming").addEventListener("click", () => {
  categoryByDisplay("Programming");
});

// Web Development post
document.getElementById("Web-Development").addEventListener("click", () => {
  categoryByDisplay("Web Development");
});
// Windows PC post
document.getElementById("Windows-PC").addEventListener("click", () => {
  categoryByDisplay("Windows PC");
});
// Freelancing post
document.getElementById("Freelancing").addEventListener("click", () => {
  categoryByDisplay("Freelancing");
});
// Electronics post
document.getElementById("Electronics").addEventListener("click", () => {
  categoryByDisplay("Electronics");
});
