import './style.css';
import { addScore, fetchData } from './modules/addScore.js';

const scoreList = document.querySelector('.lists');

const form = document.querySelector('#add-new');
const refresh = document.querySelector('.refresh');

const displayLists = async () => {
  const scores = await fetchData();
  scoreList.innerHTML = '';
  scores.forEach((data, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="list-name">${data.user}</span>
        <span class="list-score">${data.score}</span>`;

    if (index % 2 !== 0) {
      listItem.classList.add('even');
    }
    scoreList.appendChild(listItem);
  });
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.querySelector('#leader-name').value.trim();
  const score = document.querySelector('#leader-score').value.trim();

  if (name !== '' && score !== '') {
    const scoreData = {
      user: name,
      score,
    };
    await addScore(scoreData);
    document.querySelector('#leader-name').value = '';
    document.querySelector('#leader-score').value = '';
  }
});

refresh.addEventListener('click', displayLists);