export const guestList = ['Marysia', 'Jacek', 'Agata', 'Zbyszek'];

// 1. callback

// 2. Promise (async/await)
// 3. Streams / Observables

let handler;

export function onAddGuestListener(eventHandler) {
    handler = eventHandler;
}


export function addGuest(name) {
    guestList.push(name);

    handler(guestList)
}