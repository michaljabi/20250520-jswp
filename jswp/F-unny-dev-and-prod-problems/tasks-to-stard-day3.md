# Tasks to start day 3

## 1. Komponent `nav`

- `1.1` Dodaj odpowiednie factories w [dom-elements](./party-guests/src/common/dom-elements.js) tak aby możliwe było dodanie komponentu `NavBar` w takiej postaci:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light px-3 mb-3">
  <button class="navbar-toggler" type="button">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/guests">Lista Gości</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/labs">Lab testy</a>
      </li>
    </ul>
  </div>
  <div class="text-light">
    <a class="btn btn-primary"> Zalogouj </a>
  </div>
</nav>
```

- `1.2` Osadź komponent na widoku `GuestsPage()` w `div.container`

- `1.3` przygotuj miejsce i komponenty `HomePage()`, `LabsPage()`. Z przykładowymi danymi (tekstami do wyświetlenia np.). Tak, żeby dało się zobaczyć że jesteśmy na innej stronie.

## 2. Przygotowanie routingu

- `2.1` Przygotuj nowy plik `src/router.ts` i zaimportuj w [main.ts](./party-guests/src/main.ts)

- `2.2` W pliku `router.ts` zainstaluj i importuj paczkę `history` z `npm`

```typescript
import { createBrowserHistory } from "history";

const router = createBrowserHistory();
```

- `2.3` spraw aby `router` był dostępny dla innych moudłów.

- `2.4` Dodaj logikę do zmiany stron wiedząc że:

  - to jest zmiana widoku:

  ```typescript
  const app = document.querySelector<HTMLDivElement>("#app");
  if (app) {
    app.innerHTML = "";
    app.append(GuestPage());
  }
  ```

  - to jest reagowanie na zmianę widoku na podstawie `pathname`:

  ```typescript
  router.listen(({ location }) => {
    if (location.pathname === "/") {
      //....
    } else if (location.pathname === "/labs") {
      //....
    } //...
  });
  ```

  - to jest początkowa ścieżka:

  ```typescript
  router.location.pathname
  ```

## 3. Dodawanie akcji `useLinkTo` oraz `useNavLinkTo`

- `3.1` Zbuduj nową funkcję dostępną w module routingu: `useLinkTo`, która opakowuje `element`, dodaje do niego `listener` na `click` event i routuje do podanej w parametrze `useLinkTo` ścieżki.

- `3.2` Zbuduj kolejną funkcję `useNavLinkTo` będzie Pośrednikiem który opakuje wywołanie `useLinkTo` i sprawi, że dodatkowo dodamy `ev.preventDefault()` do wywołania linku

- `3.3` te funkcjonalności powinny automatycznie używać nasz `router` wywołując np.

```typescript
router.push("/guests");
```

- `3.4` potwierdź użycie `useNavLinkTo` przez elemety `<a>` w Twoim komponencie `nav` z zadania `1.1`. Sprawdź czy routing działa poprawnie.



