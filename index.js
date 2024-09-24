function showTimer(){
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();

    document.querySelector(".seconds").innerText=seconds;
    document.querySelector(".minutes").innerText=minutes+":";
    document.querySelector(".hours").innerText=hours+":";
}

setInterval(()=>{
    showTimer();
},1000);