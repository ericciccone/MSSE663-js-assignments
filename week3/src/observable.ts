//1 Create an observable stream of an array (utilizing the of keyword).

//2 Map over the values in the array.

//3 Subscribe and ouput values to the concole.

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
    const array = of([1,3,5,7,9]);
    const printArray = array.pipe(map(values => values));
    export const a = printArray.subscribe(console.log);
