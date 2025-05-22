import { div, h2, ul, input, button } from "../../common/dom-elements.js"
import { renderIf } from "../../common/dom-helpers.js"
import { IncrementButton } from "../../shared/increment-button.component.js"
import { GuestsListItem } from "./guests-list-item.component.js"
import { guestList, addGuest, onAddGuestListener } from "./guests.model.js"

export function GuestsList({ title = 'Lista gości' }) {

    const guests = guestList;
    const listRef = ul(guests.map(name => GuestsListItem({ name })), 'list-group');
    const inputRef = input('form-control mx-2', { placeholder: 'wpisz imię...' })

    // setTimeout(() => {
    //     guests.push('test');
    //     listRef.innerHTML = '';
    //     listRef.append(...guests.map(name => GuestsListItem({ name })));
    // }, 3000)

    // btn

    onAddGuestListener((list) => {
        listRef.innerHTML = '';
        listRef.append(...list.map(name => GuestsListItem({ name })));
    })

    inputRef.addEventListener('keydown', (e) => {
        const name = inputRef.value.trim();
        if (e.key === 'Enter' && name) {
            addGuest(name)
            inputRef.value = '';
        }
    })

    return div([
        h2(title),
        listRef,
        div([
            inputRef,
            renderIf(() => true, IncrementButton({ value: 10, classes: 'btn btn-primary' })),
        ], 'p-2 d-flex'),

    ])
}