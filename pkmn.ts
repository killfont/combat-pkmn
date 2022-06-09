//2 var =vie cpu et vie player= 50
import promptSync from 'prompt-sync';
const prompt: any = promptSync();
let lifeplay: number = 50
let lifecpu: number = 50
let currentPlayer: string = "player"
let choixattaque: string[] = ["charge", "soin", "aqua-jet", "draco-rage"]
let round: number = 1

function choiceAttack() {
    for (let i = 0; i < choixattaque.length; i++) {
        console.log(choixattaque[i] + ": " + i);
    }
    let choice: number = parseInt(prompt("quelle est ton attaque :  "));
    let attack: string = choixattaque[choice]


    return attack
}

function changeCurrentPlayer(){
    if (round % 2 != 0) {
        currentPlayer = "player"
    }else{
        currentPlayer = "cpu"
    }
}
function attacks(attack: string) {
    switch (attack) {
        case "charge":
            console.log(currentPlayer + " utilise charge");
            if (checkAttackSuccess(0,1) == true) {
                console.log(currentPlayer, " perd 10 pv");
                updateLifeOpponent(-10)
            } else {
                console.log("votre attaque a echoué...");
            }
            break;
        case "soin":
            console.log(currentPlayer +" utilise soin");
            if (checkAttackSuccess(0, 1) == true) {
                console.log(currentPlayer, " gagne 10 pv");
                updatemylife(10)
            } else {
                console.log("votre attaque a echoué...");
            }

        break;
        case "aqua-jet":
            console.log(currentPlayer +" utilise aqua-jet");
            if (checkAttackSuccess(0, 2) == true) {
                console.log(currentPlayer, " perd 20 pv");
                updateLifeOpponent(-20)
            } else {
                console.log("votre attaque a echoué...");
            }
            break;
        case "draco-rage":
            console.log(currentPlayer +" utilise draco-rage");
            if (checkAttackSuccess(0, 3) == true) {
                console.log(currentPlayer, " perd 50 pv");
                updateLifeOpponent(-50)
            } else {
                console.log("votre attaque a echoué...");
            }
            break;
        default:
            console.log("erreur, passe ton tour");
            break;
    }
    return attack
}
function updateLifeOpponent(nmb_pv: number) {
    if (round % 2 == 0) {
        lifeplay = lifeplay + nmb_pv
    } else {
        lifecpu = lifecpu + nmb_pv
    }
    return nmb_pv
}
function random(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
}
function checkAttackSuccess(min: number, max: number) {
    let success = false
    if (random(min, max) == max) {
        success = true;
    }
    return success
}
function updatemylife(mypv: number) {

    if (round % 2 == 0) {
        lifecpu = lifecpu + mypv
    } else {
        lifeplay = lifeplay + mypv
        return mypv
    }
}
function game() {
 
    while (lifecpu > 0 && lifeplay > 0) {

        if (round % 2 != 0) {
            let choisenAttack: string = choiceAttack()
            attacks(choisenAttack)
        }else{
            console.log("le CPU attaque : ");
            
            let cpuChoisenAttack: string = cpuAttack()
            attacks(cpuChoisenAttack)
        }
        console.log(lifeplay);
        console.log(lifecpu);
        if (lifecpu < 1) {
            console.log("gagné");
        } else if (lifeplay < 1) {
            console.log("perdu");
        }
        round++
        changeCurrentPlayer()

    }


}
function cpuAttack(): string {
    let rand: number = random(0, choixattaque.length - 1)
    let choisenAttack :string  = choixattaque[rand]
    return choisenAttack

}




cpuAttack()
game()




