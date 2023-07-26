// displayModule.js

import { dataArray } from "./formDataModule"; // Import dataArray from the formDataModule

export function displayData() {
  const dataList = document.getElementById("displayData");
  dataList.innerHTML = "";

  dataArray.forEach((data, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${data.input1}:${data.input2}`;
    if (index % 2 === 0) {
      listItem.classList.add("even");
    }
    dataList.appendChild(listItem);
  });
}
