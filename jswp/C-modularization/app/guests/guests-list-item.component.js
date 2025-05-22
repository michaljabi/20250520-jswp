import { li } from "../../common/dom-elements.js";

export function GuestsListItem({ name }) {
    return li(name, 'list-group-item')
}