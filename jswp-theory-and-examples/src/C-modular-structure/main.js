/**
 *
 * Tutaj modułowy zapis kodu opiera się na korzystaniu ze składni import/export
 * Jest to standard ESM (Ecma Script Modules) wprowadzony do JS od 2015 roku.
 *
 * */
import moduleContent from "./c01-sample-esm-module.js";

console.log(moduleContent);

console.log(moduleContent.SAMPLE);
moduleContent.helloFromSampleModule();
