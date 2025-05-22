import { div, h2, ul, input, button } from "../../common/dom-elements.js"
import { renderIf } from "../../common/dom-helpers.js"
import { IncrementButton } from "../../shared/increment-button.component.js"
import { GuestsListItem } from "./guests-list-item.component.js"
import { guestList } from "./guests.model.js"

export function GuestsList({ title = 'Lista gości' }) {

    const guests = guestList;
    const listRef = ul(guests.map(name => GuestsListItem({ name })), 'list-group');

    // setTimeout(() => {
    //     guests.push('test');
    //     listRef.innerHTML = '';
    //     listRef.append(...guests.map(name => GuestsListItem({ name })));
    // }, 3000)

    // inputRef.value
    // btn

    return div([
        h2(title),
        listRef,
        div([
            input('form-control mx-2', { placeholder: 'wpisz imię...' }),
            renderIf(() => true, IncrementButton({ value: 10, classes: 'btn btn-primary' })),
        ], 'p-2 d-flex'),

    ])
}