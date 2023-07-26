
import './style.css';
import { storeData, initDataFromLocalStorage } from "./modules/formDataModule";
import { displayData } from "./modules/displayModule";

initDataFromLocalStorage();
displayData();

form.addEventListener("submit", storeData);
