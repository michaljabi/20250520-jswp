import { BehaviorSubject, map } from "rxjs";

// 1. callback
// 2. Promise (async/await)
// 3. Streams / Observables
// warto sprawdzić w rxjs
// cold vs hot stream
// endless stream

// const myNumber = 10n;

// console.log(typeof myNumber);

const guestList = ["Marysia", "Jacek", "Agata", "Zbyszek"];
const guestSubject = new BehaviorSubject(guestList);
const guest$ = guestSubject.asObservable();
const guestWithExcalation$ = guest$.pipe(
  map((gL) => gL.filter((n) => n !== "Jacek")),
  map((guestList) => guestList.map((n) => n + "!"))
);
const numberOfGuest$ = guest$.pipe(map((guestList) => guestList.length));

export const guestsService = {
  getGuests() {
    return guest$;
  },
  getExclamatedGuests() {
    return guestWithExcalation$;
  },
  getGuestsCount() {
    return numberOfGuest$;
  },
  addGuest(name: string) {
    guestSubject.next([...guestSubject.getValue(), name]);
  },
};
