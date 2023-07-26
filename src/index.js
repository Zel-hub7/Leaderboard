import "./style.css";

let dataArray = [];

function storeData(event) {
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
  displayData();
}

initDataFromLocalStorage();
displayData();

form.addEventListener("submit", storeData);

function displayData() {
  const dataList = document.getElementById("displayData");
  dataList.innerHTML = "";

  dataArray.forEach((data,index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${data.input1}:${data.input2}`;
    if (index % 2 === 0) {
        listItem.classList.add("even");
      }
    dataList.appendChild(listItem);
  });
  
}

function initDataFromLocalStorage() {
  const savedData = localStorage.getItem("myData");
  if (savedData) {
    dataArray = JSON.parse(savedData);
  }
}

// function storeData() {
//    const inputValue1 = document.getElementById('name');
//     const inputValue2 = document.getElementById('score');

//     const userInputObject = {
//         input1: inputValue1,
//         input2: inputValue2,
//     };

//     dataArray.push(userInputObject);

// }}
