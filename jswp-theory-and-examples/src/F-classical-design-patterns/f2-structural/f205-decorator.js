/**
 * Wzorzec: Decorator | Dekorator
 *
 * @_Zasada-działania:
 * Przygotowujemy podobne funkcje bądź obiekty,
 * jednak z tym samym interfejsem!
 * "opakowują" one obiekt bazowy
 * i zmieniają jego charakter
 *
 * @_Przypadki-użycia:
 * Wszędzie tam gdzie chcemy rozszerzyć funkcjonalność
 * danego obiektu np. o dodatkowe właściwości
 * lub
 * chcemy mieć inną kalkulacje własności obiektu
 * w zależności od jego przeznaczenia
 *
 * @_Ciekawostki-JavaScript:
 * Często możemy używać dekoratorów w sposób dużo bardziej
 * uproszczony (be używania klas)
 * do rozszerzania funkcjonalności obiektów
 * - po przez ich "kompozycję"
 *
 * */

class Car {

	bumper = 'black';

	constructor(weight) {
		this.weight = 1200;
	}
	calculateMaxSpeed(startSpeed) {
		return 10 * startSpeed;
	}
}

class RaceCar {

	weight;

	constructor(car) {
		this.weight = car.weight - 250;
	}
	calculateMaxSpeed(startSpeed) {
		return 30 * startSpeed;
	}
}

class MonsterTruckCar {

	weight;

	constructor(car) {
		this.weight = car.weight + 2500;
	}
	calculateMaxSpeed(startSpeed) {
		return 0.5 * startSpeed;
	}
}

const baseCar = new Car(1500);
const raceCar = new RaceCar(baseCar);

console.log(baseCar)
console.log(raceCar)

export { };
