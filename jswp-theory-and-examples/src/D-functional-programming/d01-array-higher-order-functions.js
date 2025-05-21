/**

 W programowaniu funkcyjnym jedną z ważniejszych koncepcji są funkcje wyższego rzędu (higher order functions).
 Są to funkcje, które przyjmują jako argumenty inne funkcje lub zwracają funkcje.

 Dzięki nim możemy transformować dane w sposób deklaratywny, czyli w sposób opisujący co chcemy uzyskać, a nie jak to zrobić.

 Dobrze można to pokazać na przykładzie API do tablic:

 Załóżmy, że chcemy np. średnią wieku użytkowników, którzy pracują w IT.
 */


const users = [
  {
    name: 'Janusz',
    age: 41,
    profession: 'Hydraulik',
    professionId: 1
  },
  {
    name: 'Kazimiera',
    age: 25,
    profession: 'Developer',
    professionId: 3
  },
  {
    name: 'Barbara',
    age: 35,
    profession: 'Programistka',
    professionId: 3
  },
  {
    name: 'Zbyszek',
    age: 55,
    profession: 'Kierowca',
    professionId: 2
  }
];

// Rozwiązanie, z API do tablic:

const allITPerson = users.filter(user => user.professionId === 3);
const averageAge = allITPerson.map(user => user.age).reduce((a, b) => a + b, 0) / allITPerson.length;

console.log(averageAge);


// Programowanie funkcyjne korzysta z idei, że funkcje są wartościami i mogą być przekazywane jako argumenty do innych funkcji.
// Dodatkowo funkcje mają być tzw. "PURE", czyli nie powinny modyfikować stanu oraz powodować efektów ubocznych, a jedynie zwracać nowe wartości.
// Realizując jedno zadanie:
// Dzięki takiemu podejściu możemy przykład powyżej przedstawić w następujący zrefaktoryzowany sposób:

// oto nasze pure functions:
const isItPerson = (user) => user.professionId === 3;


const pluckField = (fieldName) => (obj) => obj[fieldName];

console.log((() => { }) instanceof Function)
console.log((() => { }) instanceof Object)

// const getAge = (user) => user.age;
const getAge = pluckField('age');
const sum = (a = 0, b = 0) => a + b;

console.log(getAge({ age: 365 }, 'age'))
console.log(getAge({ profession: 'Kierowca' }, 'profession'));

// const pluckField = (fieldName) => {
//   console.log(fieldName);
//   return (obj) => obj[fieldName]
// }



pluckField('age')({ age: 65 }); //=

/*
console.log({ age: 65 }['age'])

const myObj = { age: 12 };
const field = 'age';

console.log(myObj[field]);
*/

const allITPerson2 = users.filter(isItPerson);

const addTwo = (n) => n + 2;

const pluckAgeAndMapToOne = (obj) => addTwo(pluckField('age')(obj));
// -> functional with Ramda (.pipe)
// https://ramdajs.com/docs/#pipe

console.log(users.filter(isItPerson).map(pluckField('age')).map(addTwo));
console.log(users.filter(isItPerson).map(pluckAgeAndMapToOne));

const averageAge2 = allITPerson2.map(getAge).reduce(sum, 0) / allITPerson2.length;
const averageAge3 = allITPerson2.map(pluckField('age')).reduce(sum, 0) / allITPerson2.length;

console.log(averageAge2);
console.log(averageAge3);

export { };
