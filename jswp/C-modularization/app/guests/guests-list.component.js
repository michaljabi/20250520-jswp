import { div, h2, ul, li } from "../../common/dom-elements.js"
import { GuestsListItem } from "./guests-list-item.component.js"

export function GuestsList({ title = 'Lista gości', guests = [] }) {

    return div([
        h2(title),
        ul(guests.map(name => GuestsListItem({ name })), 'list-group')
    ])
}