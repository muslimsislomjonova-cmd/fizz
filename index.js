const speeds = {
    walk: 3.6,
    bike: 20.1,
    car: 70,
    plane: 800
};


function convertTime(hours) {
    let h = Math.floor(hours);
    let m = Math.round((hours - h) * 60);
    return `${h} soat ${m} daqiqa`;
}

document.getElementById("calcBtn").addEventListener("click", function () {
    let distance = document.getElementById("distance").value;

    if (!distance || distance <= 0) {
        alert("Masofani to'g'ri kiriting!");
        return;
    }

   
    document.getElementById("walk").innerText = convertTime(distance / speeds.walk);
    document.getElementById("bike").innerText = convertTime(distance / speeds.bike);
    document.getElementById("car").innerText = convertTime(distance / speeds.car);
    document.getElementById("plane").innerText = convertTime(distance / speeds.plane);
});
