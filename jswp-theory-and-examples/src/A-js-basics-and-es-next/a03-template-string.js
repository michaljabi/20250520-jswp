/**

 # Zadanie:
 1. Sprawdź działanie template stringów w konsoli
 2. Zobacz jak template string radzi sobie z formatowaniem i wieloma liniami tekstu
 3. Serializuj i sprawdź wynik z multiline template string'a funkcja JSON.stringify

 #Cel:
 Poznanie sposobów radzenia sobie z multiline string oraz interpolacją tekstu
 */

const cooler = 'Super-Freezer-2025';
const cost = 2300;

// dawniej "klejonka":
const cool = 'This is my ' + cooler + ' - you can buy it for ' + cost + 'zł';

// teraz  template-strings:
const templateCool = `This is my ${cooler} - you can buy it for ${cost}zł`;

const interpolate = 'official suit';
console.log(`
  
  My
  multi-lined console.log is wearing an ${interpolate} !
  
`);

// Rozwiązanie


