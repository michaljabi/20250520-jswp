export const renderIf = (condition$, element) => {

    const fragment = new DocumentFragment();
    condition$.subscribe((result) => {
        //
        console.log(result, element);
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