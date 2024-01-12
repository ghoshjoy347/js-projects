const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener("click",function(event){
        console.log(event)
        console.log(event.target)
        if(event.target.id === 'grey'){
            body.style.backgroundColor = 'rgba(128, 128, 128, 0.89)'
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = 'rgba(15, 15, 213, 0.864)'
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = 'rgba(222, 222, 10, 0.866)'
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = 'rgba(255, 255, 255, 0.896)'
        }
        if(event.target.id === 'red'){
            body.style.backgroundColor = 'rgba(207, 14, 14, 0.863)'
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = 'rgba(11, 198, 11, 0.873)'
        }
    })
})