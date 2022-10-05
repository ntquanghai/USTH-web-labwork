const fromCtoF = (c) => {
    return(
        (c) + ` degrees Celsius is ${(c*9/5+32)}  degrees Fahreinheit`
    ) 
}

const fromFtoC = (f) => {
    return(
        (f) +` degrees Fahreinheit is ${(f-32)*5/9} degrees Celsius` 
    )
}