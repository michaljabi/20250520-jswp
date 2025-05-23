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
  handleRouteChange(location.pathname);
});

handleRouteChange(router.location.pathname);

function handleRouteChange(pathname: string) {
  if (pathname === "/") {
    //....
    if (app) {
      app.innerHTML = "";
      app.append(HomePage());
    }
  } else if (pathname === "/guests") {
    //....
    if (app) {
      app.innerHTML = "";
      app.append(GuestsPage());
    }
  } else if (pathname === "/labs") {
    //....
    if (app) {
      app.innerHTML = "";
      app.append(LabsPage());
    }
  }
}
