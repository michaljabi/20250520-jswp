/**

 # Zadania
 v--- dostępne poniżej ---v

 #Cel:
 Poznanie nowych Obiektów w ES6+: Sety i Map'y, iteratory.

 */


// Dawniej jako Hash Mapę można było uzyskać dzięki wykorzystaniu obiektu
// i jego dynamicznych rozszerzeniach

const oldFashionWay = {};
oldFashionWay['key'] = 'value';
oldFashionWay['key'] = 'other-value';
console.log(oldFashionWay['key']);

//MAPS:

const myMap = new Map();

myMap.set('hello', 'world');
myMap.set('hello', 'world 2');
myMap.set('myName', 'Andrew Walker');

console.log(myMap);
console.log(myMap.get('non-existing'));
console.log(myMap.get('hello'));

const mapFromArray = new Map([ ['key', 'value'], ['key2', 'value2'] ]);

console.log(mapFromArray.get('key'));

console.assert(mapFromArray.delete('key'));
console.log(mapFromArray.get('key'));

// SETS:
const mySet = new Set();

mySet.add('value');
mySet.add('value');
mySet.add('value');

console.log(mySet);

const mySetFromArray = new Set([1,1,2,3,3,4,6,8,10,190,190]);

let iterator = mySetFromArray.values();
console.log(iterator.next());
iterator = mySetFromArray.values();
console.log(iterator.next());

for(let item of myMap.values()) {
  console.log(item);
}


// Iterators

// Używając syntaksu: 'variable[Symbol.iterator]()' możemy iterować
// Po obiektach typu: array lub string

const str = 'Przykładowe zdanie';
const exampleStringIteration = str[Symbol.iterator]();

const array = [1, 10, 100];
const exampleArrayIteration = array[Symbol.iterator]();

// Zadania:

// #1 Iteruj używając pętli for...of

// #2 Jak rozwiązać iterowanie pętlą while ?

// #3 Sprawdź iteratory exampleStringIteration oraz exampleArrayIteration na konsoli

// #4 Dodaj i odejmij elementy do map'y i do set'u



