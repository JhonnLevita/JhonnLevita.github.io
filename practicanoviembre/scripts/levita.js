window.onload = function() {
    var bt1 = document.getElementById("bt1");
    var bt2 = document.getElementById("bt2");
    var bt3 = document.getElementById("bt3");
    var bt4 = document.getElementById("bt4");
    var turis = document.getElementById("turis");
    var tal = document.getElementById("talen");
    bt1.onclick = tiempo;
    bt2.onclick = tiempo1;
    bt3.onclick = tiempo2;
    bt4.onclick = tiempo3;
    turis.onclick = carrusel;
    tal.onclick = hora;
};

let flag = 1;

function tiempo() {

    if (flag) {
        document.getElementById("tlc1").innerHTML = "Lectura Completada";
        flag = 0;
    } else {
        document.getElementById("tlc1").innerHTML = "Lectura de 3 min";
        flag = 1;
    }
}

function tiempo1() {

    if (flag) {
        document.getElementById("tlc2").innerHTML = "Lectura Completada";
        flag = 0;
    } else {
        document.getElementById("tlc2").innerHTML = "Lectura de 3 min";
        flag = 1;
    }
}

function tiempo2() {

    if (flag) {
        document.getElementById("tlc3").innerHTML = "Lectura Completada";
        flag = 0;
    } else {
        document.getElementById("tlc3").innerHTML = "Lectura de 3 min";
        flag = 1;
    }
}

function tiempo3() {

    if (flag) {
        document.getElementById("tlc4").innerHTML = "Lectura Completada";
        flag = 0;
    } else {
        document.getElementById("tlc4").innerHTML = "Lectura de 3 min";
        flag = 1;
    }

}

let c = 1;

var f = new Date();

function hora() {

    if (c) {
        document.getElementById("hora").innerHTML = " ";
        c = 0;
    } else {
        document.getElementById("hora").innerHTML = f;
        c = 1;
    }

}



function carrusel() {


    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = x.length
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }



}