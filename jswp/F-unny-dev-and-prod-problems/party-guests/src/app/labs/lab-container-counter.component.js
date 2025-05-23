import { button, div } from "../../common/dom-elements"

export function LabContainerCounter() {

    const counterRef = div(['0'])


    const incRef = button('+', 'btn btn-secondary')
    incRef.addEventListener('click', () => {
        // store.dispatch(increment())
    })

    const incByRef = button('+10', 'btn btn-primary mx-2')
    incByRef.addEventListener('click', () => {
        // store.dispatch(incrementBy(10))
    })

    const decRef = button('-', 'btn btn-outline-secondary')
    decRef.addEventListener('click', () => {
        // store.dispatch(decrement())
    })

    return div([
        counterRef,
        div([
            incRef,
            incByRef,
            decRef
        ])
    ], 'd-flex justify-content-between')
}