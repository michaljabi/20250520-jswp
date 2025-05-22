const guestList = ['Marysia', 'Jacek', 'Agata', 'Zbyszek'];

// 1. callback

// 2. Promise (async/await)
// 3. Streams / Observables

let addGuestHandlers = [/* ref1, ref2, ref3 */]; //  [/* ref1, ref3 */]

// FASADE (fasada)
// + 
// SINGLETON (guestsService jest tylko jeden na całą aplikację)
export const guestsService = {
    get guests() { // computed!
        // guests są tylko do odczytu...
        return [...guestList];
    },
    onAddGuestListener(eventHandler) {
        addGuestHandlers.push(eventHandler);
        return () => {
            addGuestHandlers = addGuestHandlers.filter(e => e !== eventHandler)
        }
    },
    addGuest(name) {
        guestList.push(name);
        for (const addHandler of addGuestHandlers) {
            addHandler(guestsService.guests)
        }
    }
}

/*
export function getGuests() {
    return [...guestList];
}

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
*/