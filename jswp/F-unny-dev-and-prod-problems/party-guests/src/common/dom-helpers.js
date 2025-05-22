export const renderIf = (condition, element) => {
    const result = condition();
    if (result) {
        return element;
    }
    return new Comment(`${element.tagName}(${element.className}) not rendered because result is: ${result}`);
} 