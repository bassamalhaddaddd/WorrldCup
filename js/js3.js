let likeCount = 0;
let dislikeCount = 0;

function handleLike() {
  likeCount++;
  document.getElementById('likeCount').textContent = likeCount;
}

function handleDislike() {
  dislikeCount++;
  document.getElementById('dislikeCount').textContent = dislikeCount;
}



var likesCount = 0;
var dislikesCount = 0;

document.getElementById("data-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var usernameInput = document.getElementById("username");
    var logoInput = document.getElementById("logo");
    var commentInput = document.getElementById("comment");

    var username = usernameInput.value;
    var logo = URL.createObjectURL(logoInput.files[0]);
    var comment = commentInput.value;

    saveData(username, logo, comment);
    usernameInput.value = "";
    logoInput.value = "";
    commentInput.value = "";
});

function saveData(username, logo, comment) {
    var dataContainer = document.getElementById("data");

    var dataElement = document.createElement("div");
    dataElement.className = "data";
    dataElement.innerHTML = `
        <div class="username">${username}</div>
        <div class="logo"><img src="${logo}" alt="شعار المستخدم"></div>
        <div class="comment">${comment}</div>
        <button class="like-button" onclick="like(this)">إعجاب</button>
        <button class="dislike-button" onclick="dislike(this)">عدم الإعجاب</button>
        <div class="counter">إعجابات: <span id="likes-count">${likesCount}</span></div>
        <div class="counter">عدم الإعجابات: <span id="dislikes-count">${dislikesCount}</span></div>
    `;
    dataContainer.appendChild(dataElement);
}

function like(button) {
    button.innerHTML = "تم الإعجاب";
    button.disabled = true;
    likesCount++;
    document.getElementById("likes-count").innerText = likesCount;
}

function dislike(button) {
    button.innerHTML = "تم عدم الإعجاب";
    button.disabled = true;
    dislikesCount++;
    document.getElementById("dislikes-count").innerText = dislikesCount;
}
