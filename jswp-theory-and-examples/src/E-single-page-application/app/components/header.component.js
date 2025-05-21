import {titleComponent} from "./title.component.js";

export const headerElement = document.createElement('header');
headerElement.className = 'header p-6';
headerElement.append(titleComponent);