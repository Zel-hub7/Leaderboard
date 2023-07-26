import './style.css';
import { storeData, initDataFromLocalStorage } from './modules/formDataModule.js';
import displayData from './modules/displayModule.js';

initDataFromLocalStorage();
displayData();
const form = document.getElementById('form');
form.addEventListener('submit', storeData);
