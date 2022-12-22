/**
 * This is programm
 *
 * By:      Igor
 * Version: 1.0
 * Since:   2022-11-07
 */

//process
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
  console.log(`The original string is: ${aString}`)
  console.log(`The reversed string is: ${reverseString(aString)}`)
  
  console.log('\nDone.')