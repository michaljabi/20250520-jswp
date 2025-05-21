import { headerElement } from "./app/components/header.component.js";
import { counterBtn } from "./app/components/counter-btn.component.js";
import { appComponent } from "./app/components/app.component.js";
import { getAllUsersBtn } from "./app/components/get-all-users-btn.component.js";

const $app = document.querySelector('#app');

appComponent.append(counterBtn, getAllUsersBtn)
$app.append(
    headerElement,
    appComponent
)
