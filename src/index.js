import "./style.css";

const dataArray = [];
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue1 = document.getElementById("name").value;
  const inputValue2 = document.getElementById("score").value;

  const userInputObject = {
    input1: inputValue1,
    input2: inputValue2,
  };

  dataArray.push(userInputObject);

  document.getElementById('score').value = '';
  document.getElementById('name').value = '';
   
  displayData();
});

function displayData() {
    const dataList = document.getElementById('displayData');
    dataList.innerHTML = '';

    dataArray.forEach(data => {
        const listItem = document.createElement('li');
        listItem.textContent = `Input 1: ${data.input1}, Input 2: ${data.input2}`
        dataList.appendChild(listItem);
    })

}


// function storeData() {
//     const inputValue1 = document.getElementById('name');
//     const inputValue2 = document.getElementById('score');

//     const userInputObject = {
//         input1: inputValue1,
//         input2: inputValue2,
//     };

//     dataArray.push(userInputObject);

// }}
