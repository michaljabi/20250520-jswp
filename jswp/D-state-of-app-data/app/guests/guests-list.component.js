import { div, h2, ul, input, button } from "../../common/dom-elements.js"
import { renderIf } from "../../common/dom-helpers.js"
import { IncrementButton } from "../../shared/increment-button.component.js"
import { GuestsListItem } from "./guests-list-item.component.js"
import { guestsService } from "./guests.service.js"

export function GuestsList({ title = 'Lista gości' }) {

    const h2Ref = h2(title);
    const listRef = ul([], 'list-group');
    const inputRef = input('form-control mx-2', { placeholder: 'wpisz imię...' });

    guestsService.getGuests().subscribe((list) => {
        listRef.innerHTML = '';
        listRef.append(...list.map(name => GuestsListItem({ name })));
    })

    guestsService.getGuestsCount().subscribe((nr) => {
        h2Ref.innerHTML = `Lista gości (${nr})`;
    })

    inputRef.addEventListener('keydown', (e) => {
        const name = inputRef.value.trim();
        if (e.key === 'Enter' && name) {
            guestsService.addGuest(name)
            inputRef.value = '';
        }
    })

    return div([
        h2Ref,
        listRef,
        div([
            inputRef,
            renderIf(() => true, IncrementButton({ value: 10, classes: 'btn btn-primary' })),
        ], 'p-2 d-flex'),

    ])
}