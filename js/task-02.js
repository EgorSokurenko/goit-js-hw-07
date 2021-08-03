const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');

// forEACH

// const ingredientsEl = [];
// ingredients.forEach(ingredient => {
//   const element = document.createElement('li');
//   const link = document.createElement('a');
//   link.href = 'https://www.youtube.com/watch?v=Q-qgMT1QrwQ';
//   link.textContent = ingredient;
//   element.appendChild(link);
//   ingredientsEl.push(element);
// });

// MAP

const ingredientsEl = ingredients.map(ingredient => {
  const element = document.createElement('li');
  const link = document.createElement('a');
  link.href = 'https://www.youtube.com/watch?v=Q-qgMT1QrwQ';
  link.textContent = ingredient;
  element.appendChild(link);
  return element;
});
ingredientsList.append(...ingredientsEl);
