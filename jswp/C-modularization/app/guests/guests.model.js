export const guestList = ['Marysia', 'Jacek', 'Agata', 'Zbyszek'];

// 1. callback

// 2. Promise (async/await)
// 3. Streams / Observables

let addGuestHandlers = [/* ref1, ref2, ref3 */]; //  [/* ref1, ref3 */]

export function onAddGuestListener(eventHandler) {
    addGuestHandlers.push(eventHandler);
    return () => {
        addGuestHandlers = addGuestHandlers.filter(e => e !== eventHandler)
    }
}


export function addGuest(name) {
    guestList.push(name);
    for (const addHandler of addGuestHandlers) {
        addHandler(guestList)
    }
}