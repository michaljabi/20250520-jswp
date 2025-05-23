import { createBrowserHistory } from "history";
import { HomePage } from "./app/home.page";
import { GuestsPage } from "./app/guests/guests.page";
import { LabsPage } from "./app/labs/labs.page";

type CalculateLinkFn = (ev: MouseEvent) => string | null;

export const router = createBrowserHistory();

export function withLinkTo(
  element: HTMLElement,
  calculateLink: string | CalculateLinkFn
) {
  element.addEventListener("click", (ev: MouseEvent) => {
    const link =
      typeof calculateLink === "string" ? calculateLink : calculateLink(ev);
    if (link) {
      router.push(link);
    }
  });
  return element;
}

export function withNavLinkTo(element: HTMLAnchorElement) {
  // element.addEventListener("click", (ev) => {
  //   ev.preventDefault();
  //   const href = element.getAttribute("href");
  //   if (href) {
  //     router.push(href);
  //   }
  // });
  return withLinkTo(element, (ev: MouseEvent) => {
    ev.preventDefault();
    return element.getAttribute("href");
  });
}

const app = document.querySelector<HTMLDivElement>("#app");

router.listen(({ location }) => {
  //@ts-ignore
  handleRouteChange(location.pathname);
});

// Strategies:
const routes = {
  "/": () => HomePage(),
  "/guests": () => GuestsPage(),
  "/labs": () => LabsPage(),
};

// implementacja2:
/*
const routesArr = [
  { path: '/' , component: () => HomePage()},
]
*/

// @ts-ignore
handleRouteChange(router.location.pathname);

// handleRouteChange("");

// function handleRouteChange(pathname: "/" | "/guests" | "/labs") {
function handleRouteChange(pathname: keyof typeof routes) {
  /*
  const route = routesArr.find(r => r.path === pathname)
  if(route && app) {
    app.innerHTML = "";
    app.append(route.component());
  }
  */

  // użycie strategy pattern;
  const switchComponentAction = routes[pathname];

  if (switchComponentAction && app) {
    app.innerHTML = "";
    app.append(switchComponentAction());
  }
}
