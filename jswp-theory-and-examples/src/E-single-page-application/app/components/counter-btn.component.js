
export const counterBtn = document.createElement('button');

let counter = 0;
counterBtn.className = 'button is-info is-fullwidth';
counterBtn.textContent = 'Count: 0';
counterBtn.addEventListener('click', () => {
    counterBtn.textContent = `Count: ${++counter}`;
})