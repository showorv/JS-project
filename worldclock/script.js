const clock= document.getElementById('time')

setInterval(() => {
    let date= new Date()
    clock.innerHTML= date.toLocaleTimeString();
}, 1000);