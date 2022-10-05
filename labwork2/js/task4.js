const largestNum = (input) => {
    // const input = JSON.parse("[" + document.getElementById("input").value + "]")
    for(let i = 0; i < input.length; i++) {
        let count = 0;
        for(let r = 0; r < input.length; r++) {
        if(input[i]<input[r]) {
            count++
        }
        }
        if(count === 0) {
            alert("The biggest number in the array is "+input[i])
        }
    }
}