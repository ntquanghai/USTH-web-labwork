const checkPrime = (input) => {
    let flagCount = 0
    for(let i = 2; i < input; i++) {
        if(input%i === 0) {
            flagCount++
        }
    }
    if(flagCount === 0) {
        console.log(`${input} is a prime number`)
    }
    else {
        console.log(`${input} is not a prime number`)
    }
}