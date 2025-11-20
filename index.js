let speedWalk = 3.6;
let speedBike = 20.1;
let speedCar = 70;
let speedPlane = 800;


function convertTime(hours) {
    let h = Math.floor(hours);
    let m = Math.round((hours - h) * 60);
    return h + " soat " + m + " daqiqa";
}

document.getElementById("calcBtn").addEventListener("click", function () {
    let distance = document.getElementById("distance").value;

    if (!distance || distance <= 0) {
        alert("Masofani to'g'ri kiriting!");
        return;
    }

    let walkTime = distance / speedWalk;
    let bikeTime = distance / speedBike;
    let carTime = distance / speedCar;
    let planeTime = distance / speedPlane;

  
    document.getElementById("walk").innerText = convertTime(walkTime);
    document.getElementById("bike").innerText = convertTime(bikeTime);
    document.getElementById("car").innerText = convertTime(carTime);
    document.getElementById("plane").innerText = convertTime(planeTime);
});
