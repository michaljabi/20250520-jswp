function adaptToClassName(arrayOrString) {
    if (typeof arrayOrString === 'string') {
        return arrayOrString;
    } else if (Array.isArray(arrayOrString)) {
        return arrayOrString.join(' ');
    }
    return '';
}


function decorateWithClass(element, classNames) {
    if (classNames) {
        element.className = adaptToClassName(classNames);
    }
    return element
}

// toArray adapter
function assureArray(elementOrArray) {
    return Array.isArray(elementOrArray) ? elementOrArray : [elementOrArray]
}

function createElement(elementTAG, children = [], classes = '') {
    const element = document.createElement(elementTAG);
    element.append(...assureArray(children))
    return decorateWithClass(element, classes);
}

export const div = (elements, classes) => createElement('div', elements, classes);
export const h1 = (elements, classes) => createElement('h1', elements, classes);
export const h2 = (elements, classes) => createElement('h2', elements, classes);
export const ul = (elements, classes) => createElement('ul', elements, classes);
export const li = (elements, classes) => createElement('li', elements, classes);

