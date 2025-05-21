// Ten kod potrzebny jest jedynie do symulacji :
function fetch(url = '') {
	return Promise.resolve(url.split('/'));
}

/**
 # Zadanie
 1. Jak podzielić kod na mniejsze części - żeby wyodrębnić zależności i poprawić jego czytelność

 # Cel
 Zrozumienie idei i potrzeby "umodułowienia" JavaScript.
 Przykład jest specjalnie uproszczony i trochę "za mały" jednak - pozwala wyobrazić sobie dalszy rozwój wydarzeń i problemy związane z:
    a) dostępem do zmiennych i ich podmienianiem
    b) kolizjami ich nazw
    c) brakiem określonego "obszaru" ich działania, są globalne - działają wszędzie...

 * */


var config = {
	site: 'http://localhost:3000/products'
}

var hello = 'Welcome on the site, please log in...';


// tutaj jakiś request AJAX....
console.log('Fetching api at:', config.site)
fetch(config.site)
	.then(r => console.log(r))

// -- załadowanie strony
console.log(hello)

hello = 'Check out my new products!'
console.log(hello);
