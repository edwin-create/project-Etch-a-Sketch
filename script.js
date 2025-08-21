
function createGrid(size) {
    const gridContainer = document.querySelector('#container');
    gridContainer.textContent = ''; // Clear previous grid
for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${320/size}px`;
    gridItem.style.height = `${320/size}px`;
    gridContainer.appendChild(gridItem);  
}
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'black';
    });
});
}

const createGridButton = document.querySelector('#create-grid');
createGridButton.addEventListener('click',() => {
let size= Number(prompt("Enter grid size:"));
if (size < 1 || size > 100 || isNaN(size)) {
    document.querySelector('#container').textContent = ''; // Clear previous grid
}
else{ 
    createGrid(size);
   
}
});
document.querySelector('#container').textContent = ''; 