/**
 *
 * Tutaj masz przed sobą moduły ESM (ECMAScript Modules).
 * Podobnie: są one hermetyzowane, tzn. nie mają dostępu do zmiennych z innych plików.
 *
 * Podobnie jak w CommonJS, aby udostępnić funkcjonalność z modułu, musimy ją wyeksportować.
 * Z kolei inny moduł, aby z niej skorzystać, musi ją zaimportować.
 *
 * różnica w porównaniu do CommonJS (Node.js) to składnia eksportu i importu.
*/

// ta stała nie będzie dostępna w innych modułach
const imALocalVariable = 'I am a local module variable';

// W ESM zawartość modułu eksportujemy za pomocą słowa kluczowego export
export default {
    SAMPLE: 'SAMPLE text....',
    helloFromSampleModule() {
        console.log('Hello from sample module');
    }
}

