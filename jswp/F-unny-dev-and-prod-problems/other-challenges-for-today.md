## 1. Własna fasada i obserwowalny stan danych

- `1.1` Dodaj `userService` który będzie determinował czy, ktoś jest zalogowany czy nie

- `1.2` Po kliknięciu na `Zaloguj` w menu, powinniśmy zmienić ten stan, na `Zalogowany` a treść przycisku na `Wyloguj`

- `1.3` Użyj `BehaviorSubject` do rozgłaszania danych

- `1.4` Przygotuj odpowiednio fasadę z `userService

## 2. `**` Dodatek `<fragment>` (`<></>`)

- `2.1` poczytaj o [DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- `2.2` Przykładowy kod:

```javascript
const fragment = new DocumentFragment();
fragment.append(li());

ul([fragment]);

```

- `2.3` sprawia że nie opakowywać elementu w dodatkowy _wrapper_ np. `<ul><div> <li></li> </div></ul>`

- `2.4` możemy zastosować to zjawisko w połączeniu z `Observable` oraz naszym `dom-helperem` -> `renderIf` wtedy renderować lub nie, na podstawie otaczającego fragmentu

## 3. Zmiana stanu danych dla `guests`

- `3.1` Przygotujmy nowy stan danych w którym zamiast przechowywać tablice stringów `['Michał', 'Zosia', 'Marysia']` - będziemy mieli następujący model danych dla `guest`:

```typescript
const guest = { id: 1, uuid: '981c37e9-b4ad-47e5-a9d1-99d43a6fae81', name: 'Michał', status: 'INVITED' }
```

- `3.2` obsługujemy statusy: `INVITED` | `CONFIRMED` | `DECLINED`

- `3.3` każdy nowo dodany `guest` będzie miał randomowe `uuid` oraz kolejny numer `id` - inkrementowany. Domyślny status to `INVITED`

    - uuid możesz uzyskać za pomocą prostego globalnego: `crypto.randomUUID()`

- `3.4` wykonaj potrzebne zmiany w `guestsService` i zmień implementację, popraw również renderowanie widoków


## 4. Metoda do zmiany statusu:

- `4.1` Dopisz do naszego `guestService` metodę do zmiany statusu dla danego użytkownika

- `4.2` Aby pokazywać zmiany zatosuj nastpęujące `GUI` w `GuestListItem`: 

```html
<div class="btn-group" role="group">
    <button type="button" class="btn btn-outline-primary">📨<button>
    <button type="button" class="btn btn-outline-primary active">✅<button>
    <button type="button" class="btn btn-outline-primary">❌</button>
</div>
```

- `4.3` powyższe buttony odpowiadają za statusy kolejno: `INVITED`, `CONFIRMED`, `DECLINED` i mają mieć wpiętą klasę `active` w zalezności od statusu

- `4.4` potwierdź że wywołanie Twojego `API` będzie powodowało zminaę na widoku.

- `4.5` podepnij odpowiednie akcje do buttonów - zmianę stanu dla danego użytkownika z `INVITED` np. na `CONFIRMED` - potwierdź, że działa.