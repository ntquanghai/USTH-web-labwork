const returnHappyNum = () => {
    let input = 1;
    let array = [];
    while(array.length < 10) {
        let flag= true
        let tempInput = input
        while(flag) {
            let tempValue = String(tempInput).split("");
            let result = 0;
            for(let i =0; i <tempValue.length; i++) {
                result = result + (tempValue[i])**2
            }
            if(result ===1) {
                array.push(input)
                input++
                flag = false;
            }
            else if(result ===4) {
                input++
                flag = false;
            }
            else {
                tempInput = result
            }
        }
    }
    return array
}