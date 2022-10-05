const largestAndSmallestNumbers = (input) => {
    for(let i = 0; i < input.length; i++) {
        let count = 0;
        for(let r = 0; r < input.length; r++) {
        if(input[i]<input[r]) {
            count++
        }
        }
        if(count === 1) {
            console.log("The second largest number in the array is "+input[i])
        }
    }

    for(let i = 0; i < input.length; i++) {
        let count = 0;
        for(let r = 0; r < input.length; r++) {
        if(input[i]>input[r]) {
            count++
        }
        }
        if(count === 1) {
            console.log("The second smallest number in the array is "+input[i])
        }
    }
}