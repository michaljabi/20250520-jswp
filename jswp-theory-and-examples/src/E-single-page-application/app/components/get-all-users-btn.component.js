import { appComponent } from "./app.component.js";

export const getAllUsersBtn = document.createElement('button');
getAllUsersBtn.className = 'button mt-3';
getAllUsersBtn.textContent = 'Get all users';
getAllUsersBtn.addEventListener('click', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = JSON.stringify(await res.json(), null, 2);
    const preElement = document.createElement('pre');
    preElement.textContent = jsonData;
    appComponent.append(preElement)
})