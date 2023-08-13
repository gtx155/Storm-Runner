function LightningDistCalc(time) {
    let speedOfSound = 343; //speed in m/s
    let stormDist = time * speedOfSound; //Storm distance = Time × Speed of sound
    return stormDist / 1000; //converts m to km
}

document.querySelector('#form').addEventListener("submit", function(event) {
    event.preventDefault();
  
    let time = document.querySelector('#time').value;
    let final = LightningDistCalc(time);
    alert("⛈️ Storm distance: " + final + "km");
  });
