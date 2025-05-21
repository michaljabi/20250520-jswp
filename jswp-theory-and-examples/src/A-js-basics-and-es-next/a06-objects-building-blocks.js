/**

 # Zadanie
 1. Sprawdź na konsoli jak działa i jakie pola mają shortenObject oraz shortenFunction
 2. Dodaj dodatkową funkcję arrow do cat
 3. Jakiej metody statycznej trzeba użyć żeby powielić naszego kota (cat)?

 #Cel:
 Przypomnienie oczywistych i poznanie nowych sposobów deklarowania, kreowania
 rozszerzania i operacji na obiektach w JavaScript.

*/


// Przykład obiektu JS:
// Po deklaracji i przypisaniu, jest gotowy do użytku!
const cat = {
  whiskers: 'long',
  eyes: 2,
  voice: function() {
    return 'Mrauuu';
  },
  voice2: () => 'Mrauuu2',
  alwaysLandsOn4Feet: true
};

console.log(cat.voice2()) // Mrauuu

// Literał obiektowy:
const objectAvoid = {name: 'Michal'};
console.log(objectAvoid)

const object = {};

object.hello = 'World';
console.log(object);

// Nowości ES6+:
// skrót do nazw pól obiektu (jeśli pole nazywa się tak samo jak zmienna)
function welcome() {
  console.log('Welcome Back !');
  return 123;
}
const name = 'Krystyna';
const shortenObject = {
  name,
  welcome
};
const shortenObjectNoName = {
  welcome
};
const shortenObjectWithAddress = {
  address: 'ul. XYZ',
  welcome
};
console.log(shortenObject.name);
shortenObject.welcome();


// Zapis funkcji wewnątrz obiektu:
const shortenFunctionObject = {

  myFunction: function(a) {
    return 'this is what function returns';
  },
  myFunction2() {
    return 'this is what function returns';
  },
  myField: 'this is a field'
};

// Zwróć uwagę na przecinek na końcu deklaracji pól
const objCanEndWithComma = {
  field1: '',
  field2: '',
  field3: 'comma-after',
};

// Object API:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// pobranie nazw pól obiektu:
const catKeys = Object.keys(cat);
console.log(catKeys)

// rozszerzenie obiektu:
const extendedCat = Object.assign({}, cat, {breed: 'Persian'});

const obj = {name: 'Krysia'};

const newObject = Object.assign({}, obj, {name: 'Michał', lastName: 'Kowalski'});

console.log(obj);
console.log(newObject);

console.log(extendedCat)

// ES8 --------------
// tablica wartości danego obiektu
const barrel = {
  lid: 'plastic',
  body: 'wooden',
  content: 'pickles'
};
// sposób dodania pola do obiektu (nowy charakter barrel)
function barrelWithName(barrel) {
  barrel.productName = '';
}
console.log(barrel)

console.log(barrel)
console.log('barrel values:', Object.values(barrel));





















