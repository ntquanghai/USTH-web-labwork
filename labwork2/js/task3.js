const randomNumber = Math.ceil(Math.random()*10) 
if(Number(document.getElementById("input").value) === randomNumber) {
    return("Good Work!")
}
else {
    return("Not Matched!")
}