export function renderWorks() {
  const home = document.getElementById("home");
  const page = document.getElementById("page");

  home.style.display = "none";

  page.innerHTML = `
    <div class="works-page">
      <button class="home-btn">홈으로</button>

      <div class="works-center">
        <div class="works-text">
          <h2>&lt; __사랑(初恋) 2023&gt;</h2>

          <p>
            이번 작업은 2년 전 제가 열여덟살이던 시절 적었던 하나의 글과
            그로부터 파생된 회화 작품으로부터 시작됩니다.
            상당히 정제되어 있던 그 당시의 작업들을 가져와
            물성이 있는 오브제와 입체 작업으로도 표현해봤습니다.
          </p>

          <p>
            테이블 왼쪽에 위치한 오브제는 사랑이 지나간 후에 남은 결정체를 의미하며,
            오른쪽에 스탠드를 겹쳐 만든 입체작업은 각각의 레이어가
            사랑이라는 감정 속 자연스레 생성되는 층위를 나타내고 있습니다.
          </p>

          <p>
            중앙에 배치된 회화 작품은 열여덟의 여름에 그리기 시작해서,
            그 해 겨울에 마무리 지었습니다.
            그 기간동안 첫사랑에 대한 정의가 참 많이도 바뀌더군요.
            가제였던 첫사랑에서 첫을 빼기로 결심했습니다.
          </p>

          <p>
            사랑..사랑..사랑<br />
            가장 보편적이면서도 개인적인 감정입니다.<br />
            사랑 앞에 빈 글자를 여러분의 단어로 혹은 색으로 채워보세요.<br />
            이번 전시를 통해 여러분께 제 빈칸을 보여드릴 수 있어 기쁩니다.
          </p>

          <p class="works-ending">
            감사합니다. 사랑합니다!
          </p>
       </div>
    </div>

    <div class="works-signature">작가 윤인 드림</div>
  </div>
`;
  document.querySelector(".home-btn").addEventListener("click", () => {
    page.innerHTML = "";
    home.style.display = "flex";
  });
}
