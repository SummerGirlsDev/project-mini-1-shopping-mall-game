
function loadItems() {
   return fetch('data/data.json')
   .then(response => response.json())
   .then(json => json.items);
}

// Update the list with the given items
function displayItems(items){
   const container = document.querySelector('.product-ul')
   container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
   return `
   <li class="product-list">
      <img src="${item.image}" alt="${item.type}"  />
      <span class="product-name">${item.gender}, ${item.size}</span>
   </li>
   `;
}

function onButtonClick(event, items) {
   const dataset = event.target.dataset;
   const key = dataset.key;
   const value = dataset.value;

   if (key == null || value == null) {
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

loadItems()
   .then(items => {
      displayItems(items);
      setEventListeners(items);
   })
   .catch(console.log);