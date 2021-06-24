// 데이터 로딩 및 아이템 동적으로 받아오기
function loadItems() {
	return fetch("data/data.json")
		.then((res) => res.json())
		.then((json) => json.items);
}
loadItems().then((items) => {
	console.log(items);
	displayItems(items);
	// handleToggle(items);
});

// 받아온 item들을 렌더하기
function displayItems(items) {
	const container = document.querySelector(".items");
	container.innerHTML = items.map((item) => createHTMLString(item)).join("");
	// join을 꼭 붙여줘야 함
}

function createHTMLString(item) {
	return `
  <li class="item">
      <img src="${item.image}" alt="${item.color} ${item.type}" />
      <span>${item.gender}, ${item.size} size</span>
  </li>
  `;
}

// 버튼 클릭 시 필터링해주는 메소드
// function handleToggle(items) {
//   const sortedItem = items.filter((item) => {
//     return item.
//   })
// }

const nav = document.querySelector(".navigation > ul");
nav.addEventListener("click", function handleChange(e) {
	console.log(e.target);
});
