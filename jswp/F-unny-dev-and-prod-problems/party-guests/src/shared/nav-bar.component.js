import { a, div, nav, button, ul, span, li } from "../common/dom-elements";

export function NavBar() {

    return nav([
        button([
            span('', 'navbar-toggler-icon')
        ], 'navbar-toggler', { type: 'button' }),
        div([
            ul([
                li([
                    a('/', 'Home', 'nav-link')
                ], 'nav-item'),
                li([
                    a('/guests', 'Lista Gości', 'nav-link')
                ], 'nav-item'),
                li([
                    a('/labs', 'Lab testy', 'nav-link')
                ], 'nav-item')
            ], 'navbar-nav')
        ], 'collapse navbar-collapse show'),
        div([
            a('', 'Zaloguj', 'btn btn-primary')
        ], 'text-light')
    ], 'navbar navbar-expand-lg navbar-light bg-light px-3 mb-3')
}