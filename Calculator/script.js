let display = document.querySelector("input")
let buttons = document.querySelectorAll(".btn")
let value = ""
let arr = Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "AC"){
            value = ""
            display.value = value
        }else if(e.target.innerHTML == "="){
            value = eval(value)
            display.value = value
        }else if(e.target.innerHTML == "DEL"){
            value = value.substring(0, value.length-1)
            display.value = value
        }
        else{
            value += e.target.innerHTML
            display.value = value
        }
    })
})