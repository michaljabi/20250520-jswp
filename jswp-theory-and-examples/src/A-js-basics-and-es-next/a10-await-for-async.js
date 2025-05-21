/**

 # Zadanie
 Odbierz Promise i pokaż na konsoli tak aby zobaczyć wynik jej działania

 #Cel:
 Poznanie nowych elementów w tzw. lukrze składniowym.
 Pisanie kodu asynchronicznego w sposób synchroniczny, dzięki użyciu nowego syntaksu

 */

// operatory async i await pozwalające pisać kodzik asynchroniczny tak samo jak synchroniczny
const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(['hello', 'asyc'])
  }, 1000)
});

(() => {
  fetchData().then((arr) => console.log('#5  ---- then array:', arr))
})();

(async () => {
  // Dowolna Promise będzie obsługiwalna przez async/await
  await fetchData();
})();