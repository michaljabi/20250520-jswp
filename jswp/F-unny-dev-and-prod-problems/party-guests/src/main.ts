import "bootstrap/dist/css/bootstrap.css";
import { GuestsPage } from "./app/guests/guests.page";

document.querySelector<HTMLDivElement>("#app")!.append(GuestsPage());
