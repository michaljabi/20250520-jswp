import { BehaviorSubject } from "rxjs";

const userSubject = new BehaviorSubject({
  isAuth: false,
  email: "",
});

const user$ = userSubject.asObservable();

export const usersService = {
  getUser() {
    return user$;
  },
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
