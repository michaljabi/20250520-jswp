import { button, div, h2 } from "../../common/dom-elements"
import { store } from "../../store"
import { selectCounter, increment, incrementBy, decrement } from "./counter.slice"

function useSelector(selector, onChange) {
    store.subscribe(() => {
        onChange(selector(store.getState()))
    })
    onChange(selector(store.getState()));
}

export function LabContainerCounter() {

    const counterRef = h2(['0'])

    useSelector(selectCounter, (value) => {
        counterRef.innerText = value;
    })

    /*
    store.subscribe(() => {
        counterRef.innerText = selectCounter(store.getState())
    })
    counterRef.innerText = selectCounter(store.getState());
    */

    const incRef = button('+', 'btn btn-secondary')
    incRef.addEventListener('click', () => {
        store.dispatch(increment())
    })

    const incByRef = button('+10', 'btn btn-primary mx-2')
    incByRef.addEventListener('click', () => {
        store.dispatch(incrementBy(10))
    })

    const decRef = button('-', 'btn btn-outline-secondary')
    decRef.addEventListener('click', () => {
        store.dispatch(decrement())
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