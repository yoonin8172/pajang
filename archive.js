export function renderArchive() {
  const home = document.getElementById("home");
  const page = document.getElementById("page");

  // 홈 화면 숨기기
  home.style.display = "none";

  // 아카이브 메인 렌더
  page.innerHTML = `
    <div class="archive-page">
      <button class="home-btn" id="homeBtn">홈으로</button>

      <section class="archive-menu">
        <div class="archive-item" data-archive="a"><__사랑></div>
        <div class="archive-item" data-archive="b"><결정></div>
        <div class="archive-item" data-archive="c"><사랑의 층위></div>
      </section>
    </div>
  `;

  // 홈으로 버튼 (❗ 항상 최초 홈으로만 이동)
  document.getElementById("homeBtn").addEventListener("click", () => {
    page.innerHTML = "";
    home.style.display = "flex";
  });

  // 아카이브 박스 클릭 → 상세 페이지
  document.querySelectorAll(".archive-item").forEach(item => {
    item.addEventListener("click", () => {
      const type = item.dataset.archive;
      renderArchiveDetail(type);
    });
  });
}

function renderArchiveDetail(type) {
  const page = document.getElementById("page");

  // 아카이브별 이미지 개수
  const imageCountMap = {
    a: 6,
    b: 7,
    c: 5
  };

  const count = imageCountMap[type] || 0;

  // 이미지 HTML 생성
  let imagesHTML = "";
  for (let i = 1; i <= count; i++) {
    imagesHTML += `
      <img src="./images/${type}_${i}.jpeg" alt="archive ${type} image ${i}" />
    `;
  }

  // 상세 페이지 렌더
  page.innerHTML = `
    <div class="archive-detail">
      <button class="home-btn back-btn" id="backBtn">돌아가기</button>

      <div class="archive-scroll">
        ${imagesHTML}
      </div>
    </div>
  `;

  // 돌아가기 버튼 (❗ 아카이브 메인으로만 이동)
  document.getElementById("backBtn").addEventListener("click", () => {
    renderArchive();
  });
}
