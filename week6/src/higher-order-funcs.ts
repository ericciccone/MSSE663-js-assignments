/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name: 'thing1' }, { id: 2, name: 'thing2' }]
 *
 * - Then Hoist the callback function.
 *
 */
export const things = ['thing1', 'thing2'];

// create callback here
export function callback(id: number, name: string) {
    return {id, name}
}

// create map here
export const thingMap = things.map((name, id) => callback(id +1, name))
console.log(thingMap)
const testObj = thingMap
/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

export function acceptKey2(object: any, string: any) {
    return Object.assign(object, {id: string})
}

// create function here
const filter 