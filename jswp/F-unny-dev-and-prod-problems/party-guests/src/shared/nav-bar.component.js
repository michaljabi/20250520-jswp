import { usersService } from "../app/users/users.service";
import { a, div, nav, button, ul, span, li } from "../common/dom-elements";
import { router, withNavLinkTo, withLinkTo } from "../router";

export function NavBar() {

    // aHome.addEventListener('click', ev => {
    //     ev.preventDefault();
    //     router.push(aHome.getAttribute('href'))
    // })
    const logInBtn = withLinkTo(a('', 'Zaloguj', 'btn btn-primary'), (ev) => {
        ev.preventDefault();
        usersService.toggleAuth();
        // logika do zmiany stanu...
        // if (isUserAuth) {
        //     usersService.logOut();
        // } else {
        //     usersService.logIn();
        // }
    });

    //let isUserAuth = false;
    usersService.getUser().subscribe(({ isAuth }) => {
        //isUserAuth = isAuth;
        logInBtn.innerText = isAuth ? 'Wyloguj' : 'Zaloguj'
    })

    return nav([
        button([
            span('', 'navbar-toggler-icon')
        ], 'navbar-toggler', { type: 'button' }),
        div([
            ul([
                li([
                    withNavLinkTo(a('/', 'Home', 'nav-link'))
                ], 'nav-item'),
                li([
                    withNavLinkTo(a('/guests', 'Lista Gości', 'nav-link'))
                ], 'nav-item'),
                li([
                    withNavLinkTo(a('/labs', 'Lab testy', 'nav-link'))
                ], 'nav-item')
            ], 'navbar-nav')
        ], 'collapse navbar-collapse show'),
        div([
            logInBtn
        ], 'text-light')
    ], 'navbar navbar-expand-lg navbar-light bg-light px-3 mb-3')
}