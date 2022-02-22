
class Timer {

 constructor( minutes, interval, counter) {
   
    this.minutes = minutes
    this.interval = interval
    this.counter = counter
 }


 runTimer() {

  this.minutes--
 
  while (this.minutes <= -1 ) {

    alert ("Time is finished")
 
  
  }
  
  document.getElementById("timer").innerHTML = this.minutes
//document.getElementById("timer1").innerHTML = this.minutes  
}

startTimer() {

  if (this.counter === false) {
   this.interval = window.setInterval(() => this.runTimer(),1000)
    document.getElementById("startTimer").innerHTML = "Start"
    this.counter = true 

  } else { 
        
        this.counter = false
 }
}

stopTimer() {

  if (this.counter === true) {
  window.clearInterval(this.interval)
  document.getElementById("stopTimer").innerHTML = "Stop"
  this.counter = false
 
  }
 } 

}

   const timer = new Timer( 60,null,false,)
// const timer1 = new Timer( 5,null,false,)

startTimer = ()=>timer.startTimer()
stopTimer = ()=>timer.stopTimer()


// startTimer = ()=>timer1.startTimer()
// stopTimer = ()=>timer1.stopTimer()




