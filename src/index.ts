/**
 * This is programm
 *
 * By:      Igor
 * Version: 1.0
 * Since:   2022-11-07
 */

// Process
function reverseString(str: string): string {
  if (str === '') {
    return str
  } else {
    return reverseString(str.slice(1)) + str.slice(0, 1)
  }
}

// Input
const aString = 'recursion'

// Output
console.log()
console.log(`Original: ${aString}`)
console.log(`Reversed: ${reverseString(aString)}`)

console.log('\nDone.')
