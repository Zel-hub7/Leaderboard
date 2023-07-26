// displayModule.js

import { dataArray } from './formDataModule.js'; // Import dataArray from the formDataModule

function displayData() {
  const dataList = document.getElementById('displayData');
  dataList.innerHTML = '';

  dataArray.forEach((data, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${data.input1}:${data.input2}`;
    if (index % 2 === 0) {
      listItem.classList.add('even');
    }
    dataList.appendChild(listItem);
  });
}
export default displayData;
