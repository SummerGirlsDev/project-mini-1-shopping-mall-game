// 데이터 로딩 및 아이템 동적으로 받아오기
function loadItems() {
	return fetch("data/data.json")
		.then((res) => res.json())
		.then((json) => json.items);
}
loadItems()
	.then((items) => {
		displayItems(items);
		handleToggle(items);
	})
	.catch(console.error("데이터를 읽어오지 못하였습니다!"));

// 받아온 item들을 렌더하기
function displayItems(items) {
	const container = document.querySelector(".items");
	container.innerHTML = items.map((item) => createHTMLString(item)).join("");
	// join을 꼭 붙여줘야 함
}
// item들을 html로 넣어주기
function createHTMLString(item) {
	return `
  <li class="item">
      <img src="${item.image}" alt="${item.color} ${item.type}" />
      <span>${item.gender}, ${item.size} size</span>
  </li>
  `;
}

// 버튼 클릭 시 필터링해주는 메소드
function handleToggle(items) {
	const logo = document.querySelector(".logo");
	const nav = document.querySelector(".navigation > ul");

	// 로고 클릭 시 전체 리스트 렌더링 해주기
	logo.addEventListener("click", function () {
		displayItems(items);
	});

	// 네비게이션 버튼 클릭시 버튼에 맞는 리스트 렌더링 해주기
	nav.addEventListener("click", function () {
		handleNavToggle(event, items);
	});
}

// 네비게이션 버튼 클릭 메소드
function handleNavToggle(event, items) {
	const btnKey = event.target.dataset.key;
	const btnValue = event.target.dataset.value;

	const filtered = items.filter((item) => item[btnKey] === btnValue);
	displayItems(filtered);
}
