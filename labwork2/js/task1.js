const returnHours = () => {
    if((new Date()).getHours() > 12) {
        return (
            (new Date()).getHours() + 'PM: ' + (new Date()).getMinutes() + ': ' +  (new Date()).getSeconds()
        )
    }
    else {
        return (
            (new Date()).getHours() + 'AM: ' + (new Date()).getMinutes() + ': ' +  (new Date()).getSeconds()
        )
    }
}