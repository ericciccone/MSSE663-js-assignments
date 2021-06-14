// #1 Convert this javascript function to a curried function
export function curryMe(string1, string2, string3): string {
  return string1 + ' ' + string2 + ' ' + string3;
}

// source code here
export function curried(string1: string) {
  return (string2: string) => {
    return (string3: string) => {
      return string1 + ' ' + string2 + ' ' + string3;
    }
  }
}

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: number) {
  return function add(b: number) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}
console.log(doMath(1)(2)(3));
// source code here
export function hoistMath(a: number, b: number, c: number) {
  return a + b - c;
}
console.log(hoistMath(1,2,3))

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
export const twoGroups: Array <any> = [...ninjasOne, ...ninjasTwo].filter(filtered => filtered.belt === 'black')
console.log(twoGroups);

/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};

interface types {
  white: string,
  green: string,
  black: string,
}

// source code here
export const objectsGroup = (obj1: Array <any>) => (obj2: Array <any>) => [...ninjasOne, ...ninjasTwo].map(ninjasWithStatus)

export const ninjasWithStatus = (ninjas: any) => {
  const status = statusTypes[ninjas.belt as keyof types]
  return {...ninjas, status}
}

console.log(objectsGroup(ninjasOne)(ninjasTwo))