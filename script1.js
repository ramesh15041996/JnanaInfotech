function showTime(){
    const timeMow = new Date();
    const hours = timeMow.getHours();
    const minutes = timeMow.getMinutes();
    const seconds = timeMow.getSeconds();

    document.querySelector(".seconds").innerText = seconds;
    document.querySelector(".minutes").innerText = minutes+":";
    document.querySelector(".hours").innerText = hours+":";
}


setInterval(()=>{
    showTime();
},1000)