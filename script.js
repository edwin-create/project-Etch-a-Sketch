const gridContainer = document.querySelector('#container');
function createGrid(size) {
for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.width = `${320/size}px`;
    gridItem.style.height = `${320/size}px`;
    gridContainer.appendChild(gridItem);  
}}


createGrid(16); 