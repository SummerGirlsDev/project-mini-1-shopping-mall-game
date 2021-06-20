// 여러개의 프로미스 연결 가능 => 1번째 .then결과 값을 다음 .then로 넘겨주게 된다.

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

// 비동기 처리? '특정 코드의 실행이 완료될 때까지 기다리지 않고 다음코드를 먼저 수행하는 자바스크립트의 특성'
// 프로미스? 비동기 처리에 사용되는 객체, 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용
// 프로미스의 이행(완료)상태가 되면 .then을 이용하여 처리 결과 값을 받을 수 있다.

// 다른 방법으로 async와 await를 사용할 수도 있다.
// => async와 await는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법

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
