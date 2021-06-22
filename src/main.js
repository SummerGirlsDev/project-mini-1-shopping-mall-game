function loadItems(){
    return fetch('data/data.json') //fetch로 데이터 받아옴
        .then(response => response.json())
        .then(json => json.items);
}

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

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    
    if(key==null || value ==null){
        return;
    }

    const filtered = items.filter(item => item[key]==value);
    console.log(filtered);
    displayItems(filtered);
     

    //displayItems(items.filter(item=>item(key)==value))
}

function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click',() => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event,items));
}

//main
loadItems()
    .then(items =>{
        displayItems(items);
        setEventListeners(items);

    })
    .catch(console.log);