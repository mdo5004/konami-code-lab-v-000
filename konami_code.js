const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
    document.addEventListener('keydown',onKeyDownHandler)
}

function onKeyDownHandler(e) {

    const key = parseInt(e.location)
    console.log(String(key))
//    debugger
    if (key === code[index]){
        index++

        if (index === code.length - 1) {
            alert("You did it")
            index = 0
        }

    }else{
        index = 0
    }
}