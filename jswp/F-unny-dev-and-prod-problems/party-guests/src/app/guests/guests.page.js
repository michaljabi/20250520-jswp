import { PageHeader } from "../../shared/page-header.component.js";
import { GuestsList } from "../../app/guests/guests-list.component.js";
import { div } from "../../common/dom-elements.js";
import { guestsService } from "./guests.service.js";
import { NavBar } from "../../shared/nav-bar.component.js";
import { of } from 'rxjs'

export function GuestsPage() {

    //guestsService.getGuests().next([])

    const subscription = guestsService.getExclamatedGuests().subscribe((list) => {
        console.log(list)
    })

    setTimeout(() => {
        subscription.unsubscribe();
    }, 5000);

    return div([
        PageHeader({ title: 'A little party never killed nobody....' }),
        div([
            NavBar(),
            GuestsList({ guest$: guestsService.getGuests(), guestsCount$: guestsService.getGuestsCount() }),
            GuestsList({ guest$: of([]), guestsCount$: of(0) })
        ], 'container')
    ]);
}