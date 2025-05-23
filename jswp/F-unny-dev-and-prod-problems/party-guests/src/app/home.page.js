import { div, h2 } from "../common/dom-elements";
import { NavBar } from "../shared/nav-bar.component";
import { PageHeader } from "../shared/page-header.component";

export function HomePage() {


    return div([
        PageHeader({ title: 'A little party never killed nobody....' }),
        div([
            NavBar(),
            h2('HomePAGE...')
        ], 'container')
    ]);
}