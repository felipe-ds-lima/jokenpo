var count = 0;
var cpuPlacar = 0;
var playerPlacar = 0;
var empatePlacar = 0;

function attack( attack ){
    document.querySelector(".controles").style.visibility = "hidden";
    var cpuGame = parseInt(Math.random() * 4);
    var playerGame;
    
    switch (attack) {
        case "pedra":
            playerGame = 0;
            break;
        case "papel":
            playerGame = 1;
            break;
        case "tesoura":
            playerGame = 2;
            break;
        case "lagarto":
            playerGame = 3;
            break;
        case "spock":
            playerGame = 4;
            break;
        default:
            alert("Mano, onde vc clicou? para de bugar o app");
            break;
    }

    document.getElementById("pcpu").style.backgroundImage = "url('src/img/enemy" + cpuGame + ".png')";
    document.getElementById("pplayer").style.backgroundImage = "url('src/img/game" + playerGame + ".png')";
    
    count++;
    document.getElementById("jogadas").innerHTML = count;

        if ( win(cpuGame, playerGame) == 1 ) {
            document.getElementById("userPlacar").innerHTML = ++playerPlacar;
            modal("success", "Parabéns", "Parabéns, você venceu!");
        } else if ( win(cpuGame, playerGame) == 0 ) {
            document.getElementById("empatePlacar").innerHTML = ++empatePlacar;
            modal("warning", "Quase lá", "Deu empate!");
        } else if ( win(cpuGame, playerGame) == -1 ){
            document.getElementById("cpuPlacar").innerHTML = ++cpuPlacar;
            modal("danger", "Sinto muito...", "Você perdeu.");
        }

    setTimeout(()=>{
        document.querySelector(".controles").style.visibility = "visible";
    }, 1500);

}

function choseName(){
    var nome = document.getElementById("name").value;
    if ( nome == "" || nome == " "){
        nome = "Player";
    }
    document.getElementById("userName").innerHTML = nome + ": ";
    document.getElementById("playerName").innerHTML = "<pre>" + nome + "</pre>";

    document.getElementsByClassName("enter")[0].style.display = "none";
    document.getElementsByClassName("sadBoy2001")[0].style.display = "block";
}

function win(cpu, player){
    var win = 0;
    if (player == 0){
        switch (cpu) {
            case 2:
                win = 1;
                break;
            case 3:
                win = 1;
                break;
            case 0:
                win = 0;
                break;
            default:
                win = -1;
                break;
        }
        return win;
    }

    else if (player == 1){
        switch (cpu) {
            case 0:
                win = 1;
                break;
            case 4:
                win = 1;
                break;
            case 1:
                win = 0;
                break;
            default:
                win = -1;
                break;
        }
        return win;
    }

    if (player == 2){
        switch (cpu) {
            case 1:
                win = 1;
                break;
            case 3:
                win = 1;
                break;
            case 2:
                win = 0;
                break;
            default:
                win = -1;
                break;
        }
        return win;
    }

    if (player == 3){
        switch (cpu) {
            case 1:
                win = 1;
                break;
            case 4:
                win = 1;
                break;
            case 3:
                win = 0;
                break;
            default:
                win = -1;
                break;
        }
        return win;
    }

    if (player == 4){
        switch (cpu) {
            case 0:
                win = 1;
                break;
            case 2:
                win = 1;
                break;
            case 4:
                win = 0;
                break;
            default:
                win = -1;
                break;
        }
        return win;
    }

}

function modal(style, title, message) {

    setTimeout(()=>{
        document.querySelector(".modal-title").innerHTML = title;

        document.querySelector(".modal-message").innerHTML = message;

        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".modal").style.animation = "open .5s normal";

        if (style == "success") {
            document.querySelector(".modal-header").style.backgroundColor = "#43e97b";
        } else if (style == "danger") {
            document.querySelector(".modal-header").style.backgroundColor = "#fa4d53";
        } else if (style == "warning") {
            document.querySelector(".modal-header").style.backgroundColor = "#ffac53";
        }

        
    }, 900);

    setTimeout(()=>{
        document.querySelector(".modal").style.animation = "close .5s normal";
    }, 2600);

    setTimeout(()=>{
        document.querySelector(".modal").style.display = "none";
    }, 3050);


}