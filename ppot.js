function game() {
	jugador=prompt("Piedra, Papel o Tijeras?");
	let computadora=['piedra','papel','tijeras'];
	let rand=Math.floor(Math.random()*computadora.length);
	let rValue=computadora[rand];

    document.write(jugador + " vs " + rValue + "</br>")

    if (jugador=="piedra" && rValue=="piedra"){
    document.write("Empate")
    }

    else if (jugador=="piedra" && rValue=="papel"){
    document.write("Perdiste :(")
    }

    else if (jugador=="piedra" && rValue=="tijeras"){
    document.write("Ganaste!!")
    }

    else if (jugador=="papel" && rValue=="piedra"){
    document.write("Ganaste!!")
    }
    
    else if (jugador=="papel" && rValue=="papel"){
    document.write("Empate")
    }

    else if (jugador=="papel" && rValue=="tijeras"){
    document.write("Perdiste :(")
    }

    else if (jugador=="tijeras" && rValue=="piedra"){
    document.write("Perdiste :(")
    }

    else if (jugador=="tijeras" && rValue=="papel"){
    document.write("Ganaste!!")
    }

    else if (jugador=="tijeras" && rValue=="tijeras"){
    document.write("Empate")
    }


}
game()









//function game() {
	//jugador=prompt("Piedra, Papel o Tijeras?")
	//let computadora=['Piedra','Papel','Tijeras']


//	document.write(jugador + " vs" computadora)



//}/

//game()


//function computerSelection(datos) {
	//let opciones = ["Piedra"," Papel"," Tijeras"];
	
	//document.write(opciones)


//}
//computerSelection()


//function playRound() {
	//playerSelection=prompt("Piedra, papel o tijeras")

//}
	//opciones[(int)(System.currentTimeMillis()%opciones.length)]

	//let rand=Math.floor(Math.random()*computadora.length);
	//let rValue=computadora[rand];
    //randomNumberFromArray(computadora)

//computadora=random(computadora)

	//jugador=prompt("Piedra, Papel o Tijeras?");
	//let computadora=['piedra','papel','tijeras'];
	//let rand=Math.floor(Math.random

//let rand=Math.floor(Math.random()*computadora.length);
	//let rValue=computadora[rand];