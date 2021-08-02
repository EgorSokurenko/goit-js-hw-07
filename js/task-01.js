const categogriEl = document.querySelectorAll('.item')
console.log(`В списке ${categogriEl.length} категории.`);

categogriEl.forEach(element => {
    let categogriName = element.querySelector('h2')
const arrayEl = element.querySelectorAll('li')
    console.log(`Категория:${categogriName.textContent}, Количество элемнетов:${arrayEl.length}`);
});