import { div, h2, ul, input, button } from "../../common/dom-elements.js"
import { renderIf } from "../../common/dom-helpers.js"
import { GuestsListItem } from "./guests-list-item.component.js"

export function GuestsList({ title = 'Lista gości', guests = [] }) {

    return div([
        h2(title),
        ul(guests.map(name => GuestsListItem({ name })), 'list-group'),
        div([
            input('form-control mx-2', { placeholder: 'wpisz imię...' }),
            renderIf(() => true, button('1', 'btn btn-primary')),
        ], 'p-2 d-flex')
    ])
}