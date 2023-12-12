
var goBtn = document.getElementById("go")
var carOne = document.getElementById("car1")
var carTwo = document.getElementById("car2")
var raceOne =  document.getElementById('race1')

goBtn.addEventListener("click", function () {

    var carWidth = carOne.clientWidth;
     var track = window.innerWidth - carWidth;

    let raceTimeOne = Math.floor((Math.random() * 500) + 1);
    let raceTimeTwo = Math.floor((Math.random() * 500) + 1);
    
    let isDone = false;
    let position = "first"
   
    // vanilla js for car animation 
    carOne.style.left = track + "px";
    setTimeout(function () {
        if (!isDone) {
            isDone = true;
        } else {
            position = "second";
        }

        raceOne.textContent =
            'Finished in ' + position + ' place and clocked in at ' + raceTimeOne + ' milliseconds!';
    }, raceTimeOne);
   
    // jquery for car animation
   $("#car2").animate({
        left : track
   }, raceTimeTwo , function(){
        if(isDone == false){
                isDone = true;
        }else{
                position = "second";
        }
   
         $('#race2').text( 'Finished in ' + position + ' place and clocked in at ' + raceTimeTwo + ' milliseconds!' );
   });
    
    
})


