"use strict";

const main = document.querySelector("main");
const btn = document.getElementsByClassName("btn");
const itemList = document.getElementById("item-list");

const fetchData = () => {
  return fetch("data/item.json")
    .then((response) => response.json())
    .then((json) => json.items);
};

document.addEventListener("DOMContentLoaded", () => {
  fetchData()
    .then((items) => {
      for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", filterData);
        return items;
      }
    })
    .then((items) => renderData(items));
});

const filterData = (event) => {
  let dataValue = "";
  event.target.tagName === "IMG"
    ? (dataValue = event.target.parentNode.dataset.value)
    : (dataValue = event.target.dataset.value);
  switch (dataValue) {
    case "tshirt":
      data = data.filter((val) => val.type === "tshirt");
      console.log(dataValue);
      break;
    case "pants":
      data = data.filter((val) => val.type === "pants");
      console.log(dataValue);
      break;
    case "skirt":
      data = data.filter((val) => val.type === "skirt");
      console.log(dataValue);
      break;
    case "blue":
      data = data.filter((val) => val.color === "blue");
      console.log(dataValue);
      break;
    case "yellow":
      data = data.filter((val) => val.color === "yellow");
      console.log(dataValue);
      break;
    case "pink":
      data = data.filter((val) => val.color === "pink");
      console.log(dataValue);
      break;
  }
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
