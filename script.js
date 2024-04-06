//Generate random color
function getRandomColor(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let interValid

startChangingColor = function(){
    interValid = setInterval(() => {
        let newColor = getRandomColor()
        console.log(newColor)
        document.body.style.backgroundColor = newColor
    }, 1000); 
}

stopChangingColor = function(){
    clearInterval(interValid)
    interValid = null
}

const startInterval = document.querySelector("#start")
const stopInterval = document.querySelector("#stop")

startInterval.addEventListener("click",startChangingColor)

stopInterval.addEventListener("click",stopChangingColor)