import { BehaviorSubject, map } from "rxjs";

const userSubject = new BehaviorSubject({
  isAuth: false,
  email: "",
});

/*
const arr: (number | string)[] = [2]

arr.push("23")
*/

const user$ = userSubject.asObservable();

export const usersService = {
  getUser() {
    return user$;
  },
  // computed state:
  isAuth() {
    return user$.pipe(map((u) => u.isAuth));
  },
  // ---
  logIn() {
    userSubject.next({ ...userSubject.getValue(), isAuth: true });
  },
  logOut() {
    userSubject.next({ ...userSubject.getValue(), isAuth: false });
  },
  toggleAuth() {
    if (userSubject.getValue().isAuth) {
      usersService.logOut();
    } else {
      usersService.logIn();
    }
  },
};
