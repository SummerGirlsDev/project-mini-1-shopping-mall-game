// item을 담을 생성자 함수 만들기 
let inputItems = function(type, gender,size,color,image){ 
    this.type = type;
    this.gender = gender;
    this.size=size;
    this.color=color;
    this.image=image;
} 

function startGame(){
    let itemList=loadItems();
    displayItems(itemList);
    clickButtonEventListeners(itemList);
}

//랜덤함수를 이용해 첫 화면으로 뿌릴 목록 생성
function loadItems(){
    //배열객체 items에 랜덤item들 담기
    let items=[];
    // for(let i=0; i<15;i++){
    //     items.push(itemsValue(startMakeItem()));   
    // }


    //+아이템 갯수도 랜덤!!
    let itemsCount = Math.floor(Math.random() * 10)+10;
    for(let i=0; i<itemsCount;i++){
        items.push(itemsValue(startMakeItem()));   
    }
    return items;
}

//아이템속성들 랜덤으로 선정하기
function startMakeItem(){
    let typeRandom = Math.floor(Math.random() * 3);
    let genderRandom = Math.floor(Math.random() * 2);
    let sizeRandom = Math.floor(Math.random() * 2);
    let colorRandom = Math.floor(Math.random() * 3);
    
    return [typeRandom,genderRandom,sizeRandom,colorRandom];
}

//랜던으로 생성된 아이템속성들에게 값 부여
function itemsValue(random){
    let type, gender, size, color, img;
    type=gender=size=color=img='';//초기화
    
    switch(random[0]){
        case 0:
            type='t';
            break;
        case 1:
            type='s';
            break;
        case 2:
            type='p';
    }
    
    switch(random[1]){
        case 0:
            gender='male';
            break;
        case 1:
            gender='female';
            break;
    }
    switch(random[2]){
        case 0:
            size='large';
            break;
        case 1:
            size='small';
            break;
    }
    switch(random[3]){
        case 0:
            color="blue";
            break;
        case 1:
            color="yellow";
            break;
        case 2:
            color="pink";
    }
    //색과 타입에 맞는 이미지 이름 조합
    img = `img/${color}_${type}.png`;

    return new inputItems(type, gender, size, color, img);
}

//랜덤생성된 아이템들을 목록에 뿌리기
//items를 array로 만들어 생성했기 때문에 map함수를 이용해 객체생성
//map함수로 만들어진 객체도 array기 때문에 join함수를 이용해 합치기.
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(items){
    return `
        <li class="item">
            <img src="${items.image}" alt="${items.type}" class="item_thumbnail"/>
        <span class="item_description">${items.gender}, ${items.size}</span>    
        </li>
    `;
}

//버튼을 클릭하면 새로 정렬될 리스트
function clickButtonEventListeners(items){
    const logo = document.querySelector('.logo');
    const btn = document.querySelector('.buttons');
    logo.addEventListener('click',() => displayItems(items));
    btn.addEventListener('click', event => onButtonClick(event,items));
    
}

function onButtonClick(event, items){
    let list = event.target.classList[1];//클릭한 대상 class이름 가져오기
    let filtered = '';//초기화
    if(list.length==1){
        filtered = items.filter(item => item["type"]==list);
    }else{
        filtered = items.filter(item => item["color"]==list);
    }
    displayItems(filtered);

}

//main
startGame();
