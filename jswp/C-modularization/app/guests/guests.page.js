import { PageHeader } from "../../shared/page-header.component.js";
import { GuestsList } from "../../app/guests/guests-list.component.js";
import { div } from "../../common/dom-elements.js";
import { guestsService } from "./guests.service.js";

export function GuestsPage() {

    guestsService.guests.splice(0, 10);

    const unsub = guestsService.onAddGuestListener((list) => {
        console.log(list)
    })

    setTimeout(() => {
        unsub();
    }, 5000);

    return div([
        PageHeader({ title: 'A little party never killed nobody....' }),
        div([
            GuestsList({ guests: ['Michał', 'Anna'] })
        ], 'container')
    ]);
}