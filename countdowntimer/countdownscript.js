function countdownto(target, time,callback) {

    (function timer() {
        var timestring =  time;
        target.innerHTML = timestring
        time=time-1; 
        if (time >= 0) {
            setTimeout(timer, 1000);
        } else {
            callback()
        }
        
    })()

}

// countdown element
var countdownel = document.getElementById('countdown')
var time=10;
// countdown function call
countdownto(countdownel, time, function(){
   countdownel.style.display = "none"
   document.getElementById('msg').innerHTML="Happy Birthday"
})