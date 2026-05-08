const profileName = document.querySelector("#profile-name");

if (profileName) {
  document.title = `${profileName.textContent} | 自己紹介`;
}
