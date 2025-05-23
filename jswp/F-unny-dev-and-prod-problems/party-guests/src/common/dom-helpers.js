import { div } from "./dom-elements";

export const renderIf = (condition$, elementFactory) => {

    const fragment = div();
    condition$.subscribe((result) => {
        //
        const element = elementFactory();
        fragment.innerHTML = '';
        if (result) {
            //
            fragment.append(element);
        } else {
            ///
            fragment.append(new Comment(`${element.tagName}(${element.className}) not rendered because result is: ${result}`))
        }
    })
    return fragment;
}
// const result = condition();
// if (result) {
//     return element;
// }
// return
// } 