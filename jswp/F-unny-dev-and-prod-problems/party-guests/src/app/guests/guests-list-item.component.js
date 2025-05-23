import { li, span } from "../../common/dom-elements.js";

export function GuestsListItem({ id, uuid, name, status }) {
    return li([
        name,
        span(status)
    ], 'list-group-item d-flex justify-content-between')
}