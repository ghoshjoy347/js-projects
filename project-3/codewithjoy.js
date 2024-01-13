
//const clock = document.getElementById('clock') // we can use this, or below one,i.e ,querySelector
const clock = document.querySelector('#clock')

setInterval(function () {

    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000) // 2000 for 2 seconds 