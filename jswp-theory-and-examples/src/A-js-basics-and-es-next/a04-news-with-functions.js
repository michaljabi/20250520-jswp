/**

 #Zadanie:
 1. Przekaż i wywołaj callback dla callCarFunction
 2. Sprawdź (użyj) funkcji carCollector'a : useHorn() a dla engine: start(), stop()

 #Cel:
 Utrwalenie podstawowych sposobów wykorzystywania funkcji w JavaScript.
*/



//engineStart();

const engineStart = function() {
  //I am anonymous
  console.log('-start-');
};


const engineStop = function engineStop() {
  console.log('-stop-');
};


function useHorn() {
  console.log('beep Beep !!!');
}
// useHorn();

const carCollector = {

  engine : {
    start: engineStart,
    stop: engineStop
  },
  useHorn: useHorn
};

// carCollector.engine.start();

function callCarFunction(callback) {
  callback();
}

// Rozwiązania:

// #1
callCarFunction(function() {
  console.log('Hello Ja')
});
callCarFunction(carCollector.engine.stop)
// engineStop()
//carCollector.engine.stop();
// #2


// Nowości ES6+:
// dostajemy Arrow functions:
// const newFunc  = (name) => 'Hello ' + name + '!';
const newFunc  = (name) => `Hello ${name} ${name} ${2+3+4*2}!`;
const newFuncOld = function(name) {
  return 'Hello\' ' + name + "!";
};
console.log(newFunc('Michal'))
console.log(newFuncOld('Michal'))



const newFunc2 =  name  => `Hello ${name}!`;
const newFunc3 = (name, od) => {
  return `Hello ${name}!`;
};


// Nowości ES6+:
// domyślne wartości argumentów funkcji:
function funcWithDefaultParameters(hello = 'Hello', world = 'World', status = 1, object = {a: 'aaa', b: 'bee'}) {
  console.log(hello, world, status, object);
}

funcWithDefaultParameters();
funcWithDefaultParameters('Goodbye', undefined, 2);
funcWithDefaultParameters('Welcome to', 'my World', 3, {});

// Przykład #2
// Domyślne wartości dla argumentów funkcji
function callMyGrandpa(name, phoneNo = '111-223-222', device = 'Motorola') {
  console.log('Grab', device, 'dial', phoneNo, 'call', name)
}

//callMyGrandpa();
callMyGrandpa('Józef');
callMyGrandpa('Staszek', '0000-1202917');
callMyGrandpa('Zbyszek', '+48 601-284-212', 'Xiaomi');

// Żegnaj if'ologio stosowana?
