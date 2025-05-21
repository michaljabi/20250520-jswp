/**
 * Ok. jesteśmy w dobrym miejscu.
 * Mamy Obserwowalny stan,
 * Mamy komponenty,
 * Mamy nowoczesny styl aplikacji
 * Mamy pomysłów moc na kontynuację....
 *
 * ...i... Stefan zadaje sobie pytanie - czy można lepiej, co można poprawić
 *
 * Podzielił problemy na 2 grupy - DEV i PROD:
 *
 * DEV (Development) [Proces budowy kodu]:
 * - brak sprawdzania średników, nieużywanych zmiennych, różnicy w " i ' oraz pozostawione console.log (coding standards)
 * - ewentualny kod CSS i tak trzeba dodawać z poziomu HTML
 * - ewentualne obrazki i inne elementy (assety) - też trzeba pilnować ręcznie
 * - biblioteki dodatkowe - i tak są "z kosmosu" i trzeba je dodawać z poziomu HTML
 *
 * PROD (Production) [Wystawienie kodu na serwer]:
 * - jeśli pójdzie wersja 1.0 to ok - ale wersja 1.1 to te same pliki (cache przeglądarki uniemożliwi update plików)
 * - przeglądarka wykona tyle requestów ile plików będzie w naszym folderze projektu (co jak ich będzie np. 100)
 * - co jak się okaże, że musimy coś pisać na starszą przeglądarkę 😱 ?!
 *
 *
 * Okazuje się, że wszystkie te problemy można rozwiązać w Node.js
 * korzystając z narzędzi takich jak:
 *  - ESLint - Linter do kodu (coding standards)
 *  - Babel.js (ew. core-js) - Konwersja kodu (transpilacja) oraz zmiana z CommonJS na ES6 Modules!
 *  - WebPack - Bundler (spakowanie wszystkiego to 1 - 2 plików + obsługa cache przeglądarki z checksum + ładowanie CSS z poziomu JS)
 *
 * ### Zadanie:
 * przechodzimy na Node.js
 * */
