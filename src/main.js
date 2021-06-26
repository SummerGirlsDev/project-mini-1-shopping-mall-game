"use strict";

const main = document.querySelector("main");
const btns = document.getElementsByClassName("btn");
const itemList = document.getElementById("item-list");

document.addEventListener("DOMContentLoaded", () => {
  fetchData().then((items) => {
    renderData(items);
  });
});

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

const fetchData = () => {
  return fetch("data/item.json")
    .then((response) => response.json())
    .then((json) => json.items);
};

const filterData = (event, items) => {
  let dataset = "";
  event.target.tagName === "IMG"
    ? (dataset = event.target.parentNode.dataset)
    : (dataset = event.target.dataset);
  let dataKey = dataset.key;
  let dataValue = dataset.value;

  switch (dataKey) {
    case "type":
      items = items.filter((e) => e.type === dataValue);
      break;
    case "color":
      items = items.filter((e) => e.color === dataValue);
      break;
  }
  return items;
};

const renderData = (items) => {
  let html = ``;
  items.forEach((val) => {
    html += `<li>`;
    html += `<img src = "${val.image}" alt="옷 이미지" />`;
    html += `<p>${val.gender}, ${val.size} size</p>`;
    html += `</li>`;
  });
  itemList.innerHTML = html;
};
