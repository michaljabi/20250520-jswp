# Tasks to start day 2

>  Na to zadanie mamy od `20-30` min. na spokojnie. Zależy nam na przećwieczeniu tego co poznaliśmy do tej pory.


## 1. Refaktoring podziału modułowego

- `1.1` zastanów się nad podziałem aplikacji, jak chcesz ustawić jego strukturę i popraw ją przebudowując aplikację do części `C`
- `1.2` zastanów się nad nazewnictwem i konwencjami w plikach - zrefaktoryzuj
- `1.3` podziel widok na odpowiednie komponenty


## 2. Przećwicz poznane wczoraj techniki

- `2.1` Dodaj do `dom` odpowiednią factory jako `input` oraz `button`

```html
<input type="text"> </input>
```

```html
<button type="button"> Click me </button>
```


- `2.2` ustal odpowiednie `API` tak aby dało się dodawać `attributes` do naszych `elements`

- `2.3` dodaj logikę która potrafi dodać dowolną listę atrybutów do już istniejących elementów

- `2.4` wtedy ustalaj `API` do wywołania `input()` oraz `button()` z odowiednimi parametrami, samodzielnie zdecyduj jak ma wyglądać

## 3. Renderowanie warunkowe

- `3.1` Zaproponuj `API` do renderowania elementu jeśli spełniony jest warunek
- `3.2` Na razie będzie to statyczne... Będzie działać jeśli zmienię warunek ręcznie


## 4. Kolejne problemy

- `4.1` spróbuj zaimplementować osobny `button` i zmieniaj stan lokalny 
- `4.2` przygotuj to w osobnym komponencie
- `4.3` stan zmieniany to zwykły `increment` na buttonie:

```html
<button>1</button>
```

_...a po kliknięciu_

```html
<button>2</button>
```