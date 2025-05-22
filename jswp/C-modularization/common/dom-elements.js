// ADAPTER
function assureArray(elementOrArray) {
    return Array.isArray(elementOrArray) ? elementOrArray : [elementOrArray]
}

// DECORATOR
function decorateWithStyle(element, stylesOrClasses) {
    if (typeof stylesOrClasses === 'string' || Array.isArray(stylesOrClasses)) {
        element.className = assureArray(stylesOrClasses).join(' ');
    } else if (stylesOrClasses instanceof Object) {
        Object.assign(element.style, stylesOrClasses)
    }
    return element;
}

function decorateWithAttributes(element, attributes = {}) {
    for (const attr in attributes) {
        element.setAttribute(attr, attributes[attr])
    }
    return element;
}

// FACTORY
function createElement(elementTAG, children = []) {
    const element = document.createElement(elementTAG);
    element.append(...assureArray(children))
    return element;
}

// FACTORIES
export const div = (elements, classOrStyle) => decorateWithStyle(createElement('div', elements), classOrStyle);
export const h1 = (elements, classes) => decorateWithStyle(createElement('h1', elements), classes);
export const h2 = (elements, classes) => decorateWithStyle(createElement('h2', elements), classes);
export const ul = (elements, classes) => decorateWithStyle(createElement('ul', elements), classes);
export const li = (elements, classes) => decorateWithStyle(createElement('li', elements), classes);


export const input = (classOrStyle, attributes) => decorateWithAttributes(decorateWithStyle(createElement('input'), classOrStyle), attributes);
export const button = (elements, classOrStyle, attributes) => decorateWithAttributes(decorateWithStyle(createElement('button', elements), classOrStyle), attributes); 