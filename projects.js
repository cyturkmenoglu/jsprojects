//clock
function saatgoster(){

var time = new Date();
    
var saat = time.getHours();
var dakika = time.getMinutes()
var saniye = time.getSeconds();

if(saat.toString().length == 1){
    saat = "0" + saat;
}

if(dakika.toString().length == 1){
    dakika = "0" + dakika;
}

if(saniye.toString().length == 1){
    saniye = "0" + saniye;
}

if (saniye %2 == 0){
document.getElementById("time").innerHTML = saat + " . " + dakika + " . " + saniye;
}else{
    document.getElementById("time").innerHTML = saat + " . " + dakika + " &nbsp&nbsp" + saniye;
}

}

function yilgoster(){

var time = new Date();

var yil = time.getFullYear();
var ay = time.getMonth();
var gun = time.getDate(); 

if(ay.toString().length == 1){
    ay = "0" + ay;
}

if(gun.toString().length == 1){
    gun = "0" + gun;
}

document.getElementById("year").innerHTML = gun + " / " + ay + " / " + yil;
}

document.getElementById("yazi").innerHTML = "Time Is Passing Go Do Something";

saatgoster();
yilgoster()
setInterval(saatgoster,1000);

//clock

//bgcolor
function getCode(){
    var cc = document.getElementById("cc").value;
    document.getElementById("bgcolor").style.backgroundColor = cc;
}

//bgcolor

//guess
var num,secilen;
var radios = document.getElementsByName("rad");

function showTip(){
    if(num == null){
    num = Math.floor(Math.random() * 9)+1;
    }
    tip.value=num;
}

function checkN(){
    if(num==null){
        num = Math.floor(Math.random() * 9)+1;
    }

    for (var i = 0; i < 9; i++) {
        if (radios[i].checked) {
          secilen = radios[i].value;
          break;
        }
      }

    if(num == secilen){
        document.getElementById("gmesaj").innerHTML= "Nice<br/>Job";
        tip.value="Tip";
        num = null;
    }else{
        document.getElementById("gmesaj").innerHTML= "Wrong<br/>Choice";
    }

}

//guess

var c,kont,t;
var sayilar = new Array(4);

    function createG(){
        for(i=0;i<4;i++){
            t = Math.floor(Math.random() * 2)
            if(t==0){
                sayilar[i]=String(Math.floor(Math.random() * 9)+1);
            }else{
                sayilar[i]= String(String.fromCharCode(Math.floor(Math.random() * 25)+65));
            }
        }
        kont = sayilar[0]+sayilar[1]+sayilar[2]+sayilar[3];

        c = document.getElementById("can").getContext("2d");
        c.clearRect(0,0,200,70);
        c.font = "30px Arial";
        c.fillStyle = "darkgreen";
        c.fillRect(0,0,200,70);
        c.strokeText(kont, 65, 45);
    }
    //authenticater
    function checkG(){
        girilen = document.getElementById("au").value.toUpperCase();
        if(girilen==kont){
            document.getElementById("mau").innerHTML="Good Job";
            createG();
        }else{
            document.getElementById("mau").innerHTML="Nope";
            createG();
        }


    }

    createG();

//authenticater