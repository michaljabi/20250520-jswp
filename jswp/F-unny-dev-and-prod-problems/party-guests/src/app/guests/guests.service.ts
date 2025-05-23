import { BehaviorSubject, map } from "rxjs";

// 1. callback
// 2. Promise (async/await)
// 3. Streams / Observables
// warto sprawdzić w rxjs
// cold vs hot stream
// endless stream

// const myNumber = 10n;

// console.log(typeof myNumber);

interface Guest {
  id: number;
  uuid: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  status: "INVITED" | "CONFIRMED" | "DECLINED";
}

let trackId = 1;
function makeGuest(name: string): Guest {
  return {
    id: trackId++,
    uuid: crypto.randomUUID(),
    name,
    status: "INVITED",
  };
}

const guestSubject = new BehaviorSubject([
  makeGuest("Marysia"),
  makeGuest("Jacek"),
  makeGuest("Agata"),
  makeGuest("Zbyszek"),
]);
const guest$ = guestSubject.asObservable();
const guestWithExcalation$ = guest$.pipe(
  // map((gL) => gL.filter((n) => n !== "Jacek")),
  map((gL) => gL.filter((u) => u.name !== "Jacek")),
  // map((guestList) => guestList.map((n) => n + "!"))
  map((guestList) => guestList.map((u) => u.name + "!"))
);
const numberOfGuest$ = guest$.pipe(map((guestList) => guestList.length));

export const guestsService = {
  // GET STATE
  getGuests() {
    return guest$;
  },
  getExclamatedGuests() {
    return guestWithExcalation$;
  },
  getGuestsCount() {
    return numberOfGuest$;
  },

  // SET / CHANGE STATE
  addGuest(name: string) {
    guestSubject.next([...guestSubject.getValue(), makeGuest(name)]);
  },
  changeStatus(guest: Guest, status: Guest["status"]) {
    guest.status = status;
    guestSubject.next(guestSubject.getValue());
  },
};
