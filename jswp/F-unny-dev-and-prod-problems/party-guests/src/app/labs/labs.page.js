import { div, h2 } from "../../common/dom-elements";
import { NavBar } from "../../shared/nav-bar.component";
import { PageHeader } from "../../shared/page-header.component";
import { usersService } from "../users/users.service";

export function LabsPage() {


    // do zad. 1 - zrób tutaj subscirbe i zmieniań terść h2
    // w zależności od tego czy ktoś jest zalogowany czy nie
    const h2Ref = h2('');

    usersService.isAuth().subscribe((auth) => {
        h2Ref.innerText = auth ? 'Welcome in LABS' : 'please... log in...';
    })

    return div([
        PageHeader({ title: 'A little party never killed nobody....' }),
        div([
            NavBar(),
            h2Ref
        ], 'container')
    ]);
}