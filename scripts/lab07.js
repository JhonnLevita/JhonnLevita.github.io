window.onload = function() {
    var ex = document.getElementById("ex");
    ex.onclick = extraer;

    var col = document.getElementById("col");
    col.onclick = colorear;
};

function extraer() {
    var nombre1 = document.getElementById("nombres1").value;
    var ap = nombre1.split(" ", 1);
    document.getElementById("aPaterno").value = ap;

    var am = nombre1.split(" ", 2).slice(1);
    document.getElementById("aMaterno").value = am;

    var nom1 = nombre1.split(" ").slice(2).join(' ');
    document.getElementById("nombress").value = nom1;

    apell = (ap + " " + am).length - 1;
    document.getElementById("la").value = apell;

    var fecha = document.getElementById("fecha").value;
    var año = fecha.split('/', 1);
    var edad = 2020 - parseInt(año);
    document.getElementById("ed").value = edad;

    var mes = fecha.split('/', 2).slice(1);

    if (mes == "01") {
        document.getElementById("mess").value = "Enero";
    }
    if (mes == "02") {
        document.getElementById("mess").value = "Febrero";
    }
    if (mes == "03") {
        document.getElementById("mess").value = "Marzo";
    }
    if (mes == "04") {
        document.getElementById("mess").value = "Abril";
    }
    if (mes == "05") {
        document.getElementById("mess").value = "Mayo";
    }
    if (mes == "06") {
        document.getElementById("mess").value = "Junio";
    }
    if (mes == "07") {
        document.getElementById("mess").value = "Julio";
    }
    if (mes == "08") {
        document.getElementById("mess").value = "Agosto";
    }
    if (mes == "09") {
        document.getElementById("mess").value = "Septiembre";
    }
    if (mes == "10") {
        document.getElementById("mess").value = "Octubre";
    }
    if (mes == "11") {
        document.getElementById("mess").value = "Noviembre";
    }
    if (mes == "12") {
        document.getElementById("mess").value = "Diciembre";
    }
}
let v = 1;

function colorear() {


    var col = document.getElementById("col");

    if (v) {

        var loA = document.getElementById("loA");
        loA.style.backgroundColor = '#3874b8';

        var edad = document.getElementById("edad");
        edad.style.backgroundColor = '#3874b8';

        var mes = document.getElementById("mes");
        mes.style.backgroundColor = '#3874b8';

        var na = document.getElementById("na");
        na.style.backgroundColor = '#b9604a';

        var f = document.getElementById("f");
        f.style.backgroundColor = '#b9604a';

        var p = document.getElementById("p");
        p.style.backgroundColor = '#b9604a';

        var m = document.getElementById("m");
        m.style.backgroundColor = '#b9604a';

        var n = document.getElementById("n");
        n.style.backgroundColor = '#b9604a';

        var col = document.getElementById("col");
        col.style.backgroundColor = '#3874b8';
        col.style.borderColor = '#ffffff'

        v = 0;
    } else {

        var loA = document.getElementById("loA");
        loA.style.backgroundColor = '#b9604a';

        var edad = document.getElementById("edad");
        edad.style.backgroundColor = '#b9604a';

        var mes = document.getElementById("mes");
        mes.style.backgroundColor = '#b9604a';

        var na = document.getElementById("na");
        na.style.backgroundColor = '#3874b8';

        var f = document.getElementById("f");
        f.style.backgroundColor = '#3874b8';

        var p = document.getElementById("p");
        p.style.backgroundColor = '#3874b8';

        var m = document.getElementById("m");
        m.style.backgroundColor = '#3874b8';

        var n = document.getElementById("n");
        n.style.backgroundColor = '#3874b8';

        var col = document.getElementById("col");
        col.style.backgroundColor = '#b9604a';

        v = 1
    }
}