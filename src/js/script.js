// Input values for time
const minutesExcersice = document.getElementById("minutes").innerHTML;
const minutesIndicator = document.getElementById("minutes-indicator");

const inputTime = minutesExcersice;
const countdownDisplay = document.getElementById("countdown");
const countdownDisplayAlt = document.getElementById("countdown-alt");
const confettiButton = document.getElementById("demo");

var GUI = lil.GUI;
const gui = new GUI();
//gui.add( document, 'title' );

let confetti = new Confetti("demo");
confetti.setCount(250);
confetti.setSize(1);
confetti.setPower(50);
confetti.setFade(false);
confetti.destroyTarget(true)


function removeButton(t) {
(t.target.style.opacity = 0),
    setTimeout(() => {
    (t.target.style.visibility = ""), (t.target.style.opacity = 1);
    }, 5e3);
}



let startTime;

let countdownInterval;

function startCountdown() {
    stopCountdown()
    var audio = new Audio('../assets/mlg-airhorn.mp3');

    console.log(obj.inputTime);
    const minutes = parseInt(obj.inputTime);
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    // Calculate the end time by adding minutes to the current time
    const endTime = new Date().getTime() + minutes * 60 * 1000;

    // Update the countdown every second
    countdownInterval = setInterval(function() {
    const currentTime = new Date().getTime();
    const timeRemaining = endTime - currentTime;
    

const totalTime = endTime - startTime; // Assuming startTime is when the countdown started
const percentageGoneBy = ((totalTime - timeRemaining) / totalTime) * 100;
const percentageGoneByAlt = 100 - (((totalTime - timeRemaining) / totalTime) * 100);
console.log(`Percentage gone by: ${percentageGoneBy}%`);
    
countdownDisplay.style = "clip-path: inset(" + percentageGoneBy + "% 0% 0%);";
countdownDisplayAlt.style = "clip-path: inset( 0% 0% "+ percentageGoneByAlt + "% );"; 

// Convert remaining time to hours, minutes, and seconds
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the remaining time
    if(minutes < 1 && hours < 1){
    countdownDisplay.textContent = `${seconds}`;
    countdownDisplayAlt.textContent = `${seconds}`;
    }else if(hours < 1){
    
        if(seconds < 10){
            countdownDisplay.textContent = `${minutes}:0${seconds}`;
            countdownDisplayAlt.textContent = `${minutes}:0${seconds}`; 
        }else{
            countdownDisplay.textContent = `${minutes}:${seconds}`;
            countdownDisplayAlt.textContent = `${minutes}:${seconds}`;
        }
    }else{
        if(seconds < 10){
            if(minutes <10){
                countdownDisplay.textContent = `${hours}:0${minutes}:0${seconds}`;
                countdownDisplayAlt.textContent = `${hours}:0${minutes}:0${seconds}`; 
            }else{
                countdownDisplay.textContent = `${hours}:${minutes}:0${seconds}`;
                countdownDisplayAlt.textContent = `${hours}:${minutes}:0${seconds}`;
            }
        }else if(minutes <10){
            countdownDisplay.textContent = `${hours}:0${minutes}:${seconds}`;
            countdownDisplayAlt.textContent = `${hours}:0${minutes}:${seconds}`; 
        }
        else{
            countdownDisplay.textContent = `${hours}:${minutes}:${seconds}`;
            countdownDisplayAlt.textContent = `${hours}:${minutes}:${seconds}`;
        }
    
}
    

    // Check if the countdown has reached zero
    if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = "Done!";
    countdownDisplayAlt.textContent = "Done!";
    audio.play();
    confettiButton.click();
    }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
    startTime =  new Date().getTime()
    countdownDisplay.textContent = "Start!";
}

// Add event listeners to the buttons
//startButton.addEventListener("click", startCountdown);
obj = {
    inputTime: inputTime,
    'Start Countdown': function() { startCountdown() }
}


gui.add( obj, 'inputTime' ).onFinishChange(startCountdown)
gui.add( obj, 'Start Countdown' ); 
gui.hide(); 


function countdownControl() {
    if(countdownDisplay.classList.contains('countdown-inactive')){
        startCountdown() 
        countdownDisplay.classList.remove('countdown-inactive')
    }else{
        gui.show( gui._hidden ); 
    }
}
    
    

