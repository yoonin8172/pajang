export function renderPlaylist() {
    const home = document.getElementById("home");
    const page = document.getElementById("page");

    home.style.display = "none";

    page.innerHTML = `
    <div class="playlist-page">
      <button class="home-btn">홈으로</button>

      <div class="playlist-meta">
        <p class="playlist-desc">
          현재 재생되고 있는 음악들을 모아둔 플레이리스트입니다.
        </p>

        <img
          class="playlist-qr"
          src="./images/qr.jpeg"
          alt=""
        />
      </div>

      <div class="playlist-image">
        <img src="./images/playlist.jpeg" alt="" />
      </div>
    </div>
  `;

    document.querySelector(".home-btn").addEventListener("click", () => {
        page.innerHTML = "";
        home.style.display = "flex";
    });
}
