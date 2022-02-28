var pressiona = document.getElementById("btn");
pressiona.addEventListener("click", test);
pressiona.addEventListener("click", start, {once: true});
pressiona.addEventListener("click", define, {once: true});

pressiona.addEventListener("click", function() {
    var audio = new Audio('./som.mp3');
    audio.play();
    audio.volume = 0.7;
});

var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resultado2");

function define(){
    pressiona.innerHTML = 1;
}

function test(){
    for(i=0; i<1; i++){
    pressiona.innerHTML = parseInt(pressiona.innerHTML, 10) + 1;
    }
};

// TIMER 

var countdown = document.getElementById('countdown');
var cron;
var seg = 0;

function start(){
    cron = setInterval(() => {
        timer();
        }, 1000);
}

function timer(){
    seg++;
    countdown.innerHTML = (seg < 10 ? "00:0"+seg : "00:"+seg);
    if(seg == 10){
        clearInterval(cron);
        speed();
    }
}

function speed(){
    if(seg == 10){
    var metodo = (pressiona.innerText * 1) / 10;
    var metodo2 = (pressiona.innerText * 60) / 10;

    resultado.innerHTML = metodo + " CPS";
    resultado2.innerText = metodo2 + " CPM";

    pressiona.removeEventListener("click", test);
    countdown.style.color = "rgb(227, 30, 0)";
    }
}