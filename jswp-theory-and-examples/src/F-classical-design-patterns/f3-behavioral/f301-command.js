/**
 * Wzorzec: Command | Polecenie
 *
 * @_Zasada-działania:
 * Utworzenie metody, która otrzymując parametry wejściowe
 * jest w stanie dynamicznie wywołać akcje na podstawie naszego interfejsu
 *
 * @_Przypadki-użycia:
 * Wszędzie tam, gdzie chcemy mieć możliwość odtworzenia
 * poleceń wydawanych danemu API np. z twardego zapisu (JSON, localStorage, etc.)
 *
 * */


const calculator = {
	add(num1 = 0, num2 = 0) {
		return num1 + num2;
	},
	subtract(num1 = 0, num2 = 0) {
		return num1 - num2;
	},
	multiply(num1 = 0, num2 = 1) {
		return num1 * num2;
	},
	divide(num1 = 0, num2 = 1) {
		return num1 / num2;
	},
	calc(command) {
		if (command.type !== 'calc') {
			return this[command.type](command.num1, command.num2);
		}
		return 0;
	}
};

class Command {
	constructor(type, num1, num2) {
		this.type = type;
		this.num1 = num1;
		this.num2 = num2;
	}
}

console.log(calculator.calc(new Command('divide', 100, 2)))
console.log(calculator.calc(new Command('subtract', 10, 2)))

console.log(calculator.calc(new Command('subtract', calculator.calc(new Command('divide', 100, 2)), 2)))

const SERIALIZED = [
	{ type: 'divide', num1: 100, num2: 2 },
	{ type: 'subtract', num2: 2 },
]

let result = 0;
for (const action of SERIALIZED) {
	if (action.num1) {
		result = calculator.calc(action)
	} else {
		result = calculator.calc({ ...action, num1: result })
	}
}

console.log(result);