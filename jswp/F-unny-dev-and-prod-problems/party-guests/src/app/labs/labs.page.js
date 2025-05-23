import { div, h2 } from "../../common/dom-elements";
import { renderIf } from "../../common/dom-helpers";
import { IncrementButton } from "../../shared/increment-button.component";
import { NavBar } from "../../shared/nav-bar.component";
import { PageHeader } from "../../shared/page-header.component";
import { usersService } from "../users/users.service";
import { LabContainerCounter } from "./lab-container-counter.component";

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
            h2Ref,
            LabContainerCounter(),
            renderIf(usersService.isAuth(), () => div('Hello you see me now..')),
            renderIf(usersService.isAuth(), IncrementButton)
        ], 'container')
    ]);
}