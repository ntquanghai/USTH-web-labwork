const reverseNumber = (input) => {
    let splitInput = String(input).split("");
    let newNumArr = []
    let newNum = ""
    for(let i = splitInput.length-1; i >= 0; i--) {
        newNumArr.push(splitInput[i])
    }
    for(let i = 0; i < newNumArr.length; i++) {
        newNum = newNum + newNumArr[i]
    }
    
    return Number(newNum)
}