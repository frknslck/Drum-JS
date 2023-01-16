const crash = document.querySelector(".crash-a");
const ride = document.querySelector(".ride-a");
const hihato = document.querySelector(".hihato-a");
// const hihatc = document.querySelector(".hihatc-a");
const floor = document.querySelector(".floor-a");
const mid = document.querySelector(".mid-a");
const high = document.querySelector(".high-a");
const snare = document.querySelector(".snare-a");
const kick = document.querySelector(".kick-a");

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 82){
        crash.currentTime=0;
        crash.play();
        document.querySelector(".crash").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 82){
        document.querySelector(".crash").classList.remove("active");
    }
});

document.querySelector(".crash").addEventListener("click", function(){
    crash.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 84){
        ride.currentTime=0;
        ride.play();
        document.querySelector(".ride").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 84){
        document.querySelector(".ride").classList.remove("active");
    }
});

document.querySelector(".ride").addEventListener("click", function(){
    ride.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 89){
        hihato.currentTime=0;
        hihato.play();
        document.querySelector(".hihato").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 89){
        document.querySelector(".hihato").classList.remove("active");
    }
});

document.querySelector(".hihato").addEventListener("click", function(){
    hihato.play();
})

// document.addEventListener('keydown', function(e) {
//     if (e.keyCode === 73){
//         hihatc.currentTime=0;
//         hihatc.play();
//         document.querySelector(".hihatc").classList.add("active");
//     }
// });

// document.addEventListener('keyup', function(e) {
//     if (e.keyCode ===73){
//         document.querySelector(".hihatc").classList.remove("active");
//     }
// });

// document.querySelector(".hihatc").addEventListener("click", function(){
//     hihatc.play();
// })

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 70){
        floor.currentTime=0;
        floor.play();
        document.querySelector(".floor").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 70){
        document.querySelector(".floor").classList.remove("active");
    }
});

document.querySelector(".floor").addEventListener("click", function(){
    floor.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 71){
        mid.currentTime=0;
        mid.play();
        document.querySelector(".mid").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 71){
        document.querySelector(".mid").classList.remove("active");
    }
});

document.querySelector(".mid").addEventListener("click", function(){
    mid.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 72){
        high.currentTime=0;
        high.play();
        document.querySelector(".high").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 72){
        document.querySelector(".high").classList.remove("active");
    }
});

document.querySelector(".high").addEventListener("click", function(){
    high.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 74){
        snare.currentTime=0;
        snare.play();
        document.querySelector(".snare").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 74){
        document.querySelector(".snare").classList.remove("active");
    }
});

document.querySelector(".snare").addEventListener("click", function(){
    snare.play();
})

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 66){
        kick.currentTime=0;
        kick.play();
        document.querySelector(".kick").classList.add("active");
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode === 66){
        document.querySelector(".kick").classList.remove("active");
    }
});

document.querySelector(".kick").addEventListener("click", function(){
    kick.play();
})
