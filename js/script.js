let countdownOnesec = setInterval(function() {

    let dateToday = new Date().getTime();
    var countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

    let difference = countDownDate - dateToday;
  
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("seconds").innerHTML = seconds + "s ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("days").innerHTML = days + "d ";
    
   
    
  
    if (difference < 0) {
      clearInterval(countdownOnesec);
      document.querySelector("body div.container h2 span").innerHTML = "EXPIRED";
      console.log(clearInterval)
    }
  }, 1000);





