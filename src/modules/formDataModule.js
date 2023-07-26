// formDataModule.js

import { displayData } from "./displayModule"; // Import the displayData function

export let dataArray = [];

export function storeData(event) {
  event.preventDefault();
  const inputValue1 = document.getElementById("name").value;
  const inputValue2 = document.getElementById("score").value;

  const userInputObject = {
    input1: inputValue1,
    input2: inputValue2,
  };

  dataArray.push(userInputObject);

  document.getElementById("score").value = "";
  document.getElementById("name").value = "";

  localStorage.setItem("myData", JSON.stringify(dataArray));
  displayData(); // Call the displayData function from the displayModule
}

export function initDataFromLocalStorage() {
  const savedData = localStorage.getItem("myData");
  if (savedData) {
    dataArray = JSON.parse(savedData);
  }
}
