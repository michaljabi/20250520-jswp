import { button } from "../common/dom-elements.js";

export function IncrementButton({ value = 1, classes = 'btn btn-secondary' } = {}) {

    let state = value;
    const bntRef = button(String(state), classes);

    bntRef.addEventListener('click', () => {
        state++;
        bntRef.innerText = String(state);
    })

    return bntRef
}