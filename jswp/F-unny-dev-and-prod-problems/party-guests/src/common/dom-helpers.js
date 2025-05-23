import { div } from "./dom-elements";

export const renderIf = (condition$, elementFactory) => {

    const fragment = new DocumentFragment();
    condition$.subscribe((result) => {
        //
        const element = elementFactory();
        // fragment.replaceChildren();
        if (result) {
           // console.log(element)
            fragment.replaceChildren(element);
        } else {
            ///
            fragment.replaceChildren(new Comment(`${element.tagName}(${element.className}) not rendered because result is: ${result}`))
        }

        console.log(fragment.children)
    })
    return fragment;
}
// const result = condition();
// if (result) {
//     return element;
// }
// return
// } 