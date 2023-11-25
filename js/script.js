//effettuare il conto alla rovescia per la fine di quest'anno//
let countdownOnesec = setInterval(function() {

    //ottengo la data di oggi in millisecondi//
    let dateToday = new Date().getTime();

    //ottengo la data di capodanno in millisecondi//
    let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

    //calcolo la differenza di tempo tra le due date//
    let difference = countDownDate - dateToday;
  
    //converto il valore da millisecondi in secondi , minuti , ore e giorni//
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);


    document.getElementById("seconds").innerHTML = seconds + "s ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("days").innerHTML = days + "d ";
    

    //clear interval per la fine dell'anno//
    if (difference < 0) {
      clearInterval(countdownOnesec);
      document.querySelector("body div.container h2 span").innerHTML = "Happy new year";
      console.log(clearInterval)
    }
  }, 1000);





