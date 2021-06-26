// =================== 데이터 저장 배열 =========================
// 버튼 이벤트에 사용하기 위해서 데이터에 type, color 값을 저장
var itemList = [
{'img':'blue_p.png', 'gender':'man', 'size':'small size', 'type':'pants','color':'blue'},
{'img':'blue_s.png', 'gender':'female', 'size':'large size', 'type':'skirt','color':'blue'},
{'img':'blue_t.png', 'gender':'female', 'size':'small size', 'type':'tshirt','color':'blue'},
{'img':'yellow_p.png', 'gender':'man', 'size':'small size', 'type':'pants','color':'yellow'},
{'img':'yellow_s.png', 'gender':'female', 'size':'large size', 'type':'skirt','color':'yellow'},
{'img':'yellow_t.png', 'gender':'female', 'size':'large size', 'type':'tshirt','color':'yellow'},
{'img':'pink_p.png', 'gender':'man', 'size':'small size', 'type':'pants','color':'pink'},
{'img':'pink_s.png', 'gender':'female', 'size':'small size', 'type':'skirt','color':'pink'},
{'img':'pink_t.png', 'gender':'female', 'size':'large size', 'type':'tshirt','color':'pink'}]

// ================= 변수 선언 =================
var litext=" ";  // <li> 태그 저장을 위한 변수
var itemtype;  // 버튼 타입 저장을 위한 변수

// 아이템 목록 출력 메소드
function displayAll() {
  // items > li 태그를 뽑기 위한 반복문
  // for문을 이용해 배열로 저장된 데이터를 뽑아내고 태그에 각각의 데이터를 넣어 텍스트로 이어 붙여 저장
  for(var i=0; i<itemList.length;i++) {
    litext += "<li class='item'><img src='img/"+itemList[i].img+"' class='item__thumbnail' /><span class='item__description'>"+itemList[i].gender + ", " + itemList[i].size+"</span></li>";
  }
  // 저장된 태그들을 innerHTML로 삽입해준다.
  document.getElementById('items').innerHTML=litext;  
}

// 아이템 목록 출력 메소드 호출ㅇㅇ
displayAll();

// ================================= 클릭이벤트 ===============================================

// logo버튼 클릭
function btnlogo() {displayAll();};

// type, color 버튼 클릭 시 호출되는 함수 
function typevalue(clicked_id) {
  litext = " "; // 목록 리셋을 위한 변수 초기화
  itemtype = document.getElementById(clicked_id).value; // id의 value 값을 뽑아서 itemtype에 저장
  typebtnClick(itemtype);
};

// 버튼 타입에 따라 필터 함수
function typebtnClick(itemtype) {
  // 전체적 데이터 검사 반복문
  for(var i=0; i<itemList.length;i++) {
    // 버튼의 value 값을 비교하고 <li> 조건에 맞는 아이템 목록에 추가
    for(var j=0;j<1;j++) {
      if(itemtype == itemList[i].type || itemtype == itemList[i].color) {
        litext += "<li class='item'><img src='img/"+itemList[i].img+"' class='item__thumbnail' /><span class='item__description'>"+itemList[i].gender + ", " + itemList[i].size+"</span></li>";
      } 
    }
  }
  document.getElementById('items').innerHTML=litext;
}