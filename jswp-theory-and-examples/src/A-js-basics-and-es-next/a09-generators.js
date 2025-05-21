/**

 # Zadanie
 1. Sprawdź działanie generatora na konsoli
 2. Jaki obiekt zwraca iterator
 3. Sprawdź co się stanie po 10 wywołaniach next() iteratora.

 #Cel:
 Poznanie generatorów - funkcji, która zwraca nam iterator.
 Możemy otrzymać kolejną wartość ustaloną przez wewnętrzną logikę funkcji

 */


function* giveMeNumber() {
  for(let x = 0; x <= 10; x++) {
    yield x;
  }
}

const iterator = giveMeNumber();
console.log('Generuje...', iterator.next().value);
console.log('Generuje...', iterator.next().value);
console.log('Generuje...', iterator.next().value);
