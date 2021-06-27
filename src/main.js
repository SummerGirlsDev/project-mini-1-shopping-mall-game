"use strict";

const btns = document.querySelectorAll(".btn");
const itemList = document.querySelector("#item-list");

fetchData().then((items) => renderData(items));

for (const btn of btns) {
  btn.addEventListener("click", (event) => {
    fetchData()
      .then((items) => {
        return filterData(event, items);
      })
      .then((items) => {
        renderData(items);
      });
  });
}

function fetchData() {
  return fetch("data/item.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function filterData(event, items) {
  let dataset = "";
  event.target.tagName === "IMG"
    ? (dataset = event.target.parentNode.dataset)
    : (dataset = event.target.dataset);

  let dataKey = dataset.key;
  let dataValue = dataset.value;

  items = items.filter((e) => e[dataKey] === dataValue);
  return items;
}

function renderData(items) {
  let html = ``;
  items.forEach((val) => {
    html += `<li>`;
    html += `<img src = "${val.image}" alt="${val.type}" />`;
    html += `<p>${val.gender}, ${val.size} size</p>`;
    html += `</li>`;
  });
  itemList.innerHTML = html;
}
