const user = {
    isAuth: false
}

// tradeoff

// 1. jeśli będzie jedno na całą aplikacje
function renderIfAuthContainer() {
    if (user.isAuth) {
        return 'hello';
    }
    return "musisz się zalogować żeby to zobaczyć"
}

// 1. chcemy użyć w wielu miejscach aplikacji
// 2. nie zawsze chcemy uzależniać od stanu globalnego (edge-case)
function renderIfAuth(isAuth) {
    if (isAuth) {
        return 'hello';
    }
    return "musisz się zalogować żeby to zobaczyć"
}


// Composition:
// Adapter:
function connectToAuth(component) {
    return component(user.isAuth)
}

const container = connectToAuth(renderIfAuth);
const pureComponent = renderIfAuth;
