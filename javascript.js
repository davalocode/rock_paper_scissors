let wins = 0;
let loses = 0;
let empates = 0;

let posibilidades = ["rock", "paper", "scissors"];


/*Almacenar los valores de las imagenes mediante el atributo alt*/ 

let seleccion;
let boleano;
let quees;

function quees_function() {
    switch (quees) {
        case "scissors": document.getElementById("computer").src="img/tijera.png";
        break;
        case "rock": document.getElementById("computer").src="img/roca.png";
        break;
        case "paper": document.getElementById("computer").src="img/papel.png";
        break;
    }
}

function pop_up() {
    if (wins==5) {
        swal({
            title: "Good job!",
            text: "You win!",
            icon: "success",
            button: "Play Again!",
          });
          wins=0;
          loses=0;
          ties=0;
    }
    else if (loses==5) {
        swal({
            title: "Bad job!",
            text: "You lose!",
            icon: "error",
            button: "Play Again!",
          });
          wins=0;
          loses=0;
          ties=0;
    }
}

function almacenar_roca() {
    let random = Math.floor(Math.random() * 3);
    seleccion = document.getElementById("rock").alt;
    console.log(seleccion);
    document.getElementById("you").src="img/roca.png";
    operaciones(random);
    quees=posibilidades[random];
    quees_function();
    pop_up();
    
}

function almacenar_papel() {
    let random = Math.floor(Math.random() * 3);
    seleccion = document.getElementById("paper").alt;
    console.log(seleccion);
    document.getElementById("you").src="img/papel.png";
    operaciones(random);
    quees=posibilidades[random];
    quees_function();
    pop_up();
}

function almacenar_tijera() {
    let random = Math.floor(Math.random() * 3);
    seleccion = document.getElementById("scissors").alt;
    console.log(seleccion);
    document.getElementById("you").src="img/tijera.png";
    operaciones(random);
    quees=posibilidades[random];
    quees_function();
    pop_up();
}

/*Condiciones para ganar, perder o empate*/

function operaciones(random) {

if (seleccion == posibilidades[random]) {
    empates++;
}
else {
    if (
        (seleccion == "rock" && posibilidades[random] != "paper") ||
        (seleccion == "paper" && posibilidades[random] != "scissors") ||
        (seleccion == "scissors" && posibilidades[random] != "rock")
    ) {
        wins++;
        boleano=true;
    }
    else {
        loses++;
        boleano=false;
    }
}
document.getElementById("result_wins").innerHTML=wins;
document.getElementById("result_loses").innerHTML=loses;
document.getElementById("result_ties").innerHTML=empates;



}

