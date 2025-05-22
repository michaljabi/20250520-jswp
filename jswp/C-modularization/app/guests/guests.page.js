import { PageHeader } from "../../shared/page-header.component.js";
import { GuestsList } from "../../app/guests/guests-list.component.js";
import { div } from "../../common/dom-elements.js";

export function GuestsPage() {


    return div([
        PageHeader({ title: 'A little party never killed nobody....' }),
        div([
            GuestsList({ guests: ['Michał', 'Anna'] })
        ], 'container')
    ]);
}