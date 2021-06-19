function loadItems() {
    // fetch에 경로를 지정하여 데이터 파일을 받아욘다.
    return fetch('data/data.json')
    // 데이터 파일을 json으로 반환
      .then(response => response.json())
      // json 안이 있는 데이터를 반환
      .then(json => json.items);
  }

function displayItems(items) {
       const container = document.querySelector('.items');
       container.innerHTML = items.map(item => createHTMLString(item)).join('');
       // 배열값을 뽑아내기 위해 join을 사용
}


function createHTMLString(item) {
  return `
    <li class="item">
        <img src="src/${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value; 

  if(key == null || value == null){
    return;
  }

  displayItems(items.filter(item => item[key] === value));

}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// Main
loadItems() 
// 데이터를 읽어와 아이템 전달 프로미스를 리턴
.then(items => {
    // displayItems() 기능을 이용해 아이템들을 보여주고
    displayItems(items);
    // 이벤트 리스너를 이용해 버튼 필터링
    setEventListeners(items);
})
.catch(console.log);