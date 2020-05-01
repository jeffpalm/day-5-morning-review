// Nested for loops

// Returns an array containing 'len' number of random numbers between 1 and 10 inclusively 
const arrayGenerator = len => {
    let arr = []
    for (let i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random()*10))
    }
    return arr
}


// Returns array of unique values contained in both arr1 and arr2
const compareArrays = (arr1, arr2) => {
    let rArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                rArr.push(arr1[i])
            }
        }
    }
    for (let i = 0; i < rArr.length; i++){
        console.log(`For loop 1 (i): ${rArr[i]}`)
        for (let j = rArr.length; j > i; j--){
            if (rArr[i] === rArr[j]) {
                console.log(`For loop 2 (j): ${rArr[j]}`)
                rArr.splice(j, 1)
            }
        }
    }
    return rArr
}

let x = arrayGenerator(10)
let y = arrayGenerator(10)
let z = arrayGenerator(10)


console.log(`x Array: ${x}`)
console.log(`y Array: ${y}`)
console.log(`z Array: ${z}`)

console.log(compareArrays(x, y))
console.log(compareArrays(x, z))
console.log(compareArrays(y, z))

// Ternaries and mod operator

const isItEven = num => num % 2 === 0 ? 'Even' : 'Odd'

console.log(isItEven(10))
console.log(isItEven(11))

