let dayEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let mintuesEl = document.getElementById("minutes");
let secondsEl = document.getElementById("seconds");

function getTimeDiffrance(start, end) {
    let milliseonds = Math.floor(end - start);

    let seconds = Math.floor(milliseonds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) -  (hours * 60);
    seconds = seconds -  (days * 24 * 60 * 60)- (hours * 60 * 60) - (minutes  * 60)


      dayEl.innerText = (`${days}`);
      hoursEl.innerText = (`${hours}`);
      mintuesEl.innerText = (`${minutes}`);
      secondsEl.innerText = (`${seconds}`);

      
        return {
           rDays: days,
           rHours: hours,
           rminutes: minutes,
           rSeonds: seconds
       }
   

}


let startDate = new Date();
let endDAte = new Date("Feburay 17, 2022 8:24:00");





let timer = setInterval(function() {
let startDate = new Date();
let endDAte = new Date("Feburay 17, 2022 8:24:00");

let getTimeDiffranceObj = getTimeDiffrance(startDate, endDAte) ;

}, 1000)
