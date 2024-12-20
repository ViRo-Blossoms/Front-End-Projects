//To do :
// player clicks a square
// grab that square id
// player clicks x or o
// set the value of that square and disable it
// if all squares are disabled and none are the 10 possible combos, all lose
// if one of the combos is complete, that player wins

//BUG
//The first round goes fine, but resetting the board makes it think it's always player 2's turn 
//The console suggests that its registering two clicks or maybe there's two buttons? We basically wanted
//to show we could do it with minimal tutorials, so if friday we can't make it work we'll just watch the 
//promineo one lmao

//Init Setup
var player1 = '';
var player2 = '';
var turn = 0;
var gameActive = 0;
var posShort = '';
var posLong = '';
var p1Score = 0;
var p2Score = 0;

var bibbidi = ['TL', 'TM', 'TR', 'ML', 'MM', 'MR', 'BL', 'BM', 'BR']

var sTL = '';
var sTM = '';
var sTR = '';
var sML = '';
var sMM = '';
var sMR = '';
var sBL = '';
var sBM = '';
var sBR = '';


// Start CODE
document.getElementById('PvP').addEventListener('click', () =>{
    gameActive = 1; //Doesn't do anything atm

    //Set player names
    player1 = document.getElementById('p1Name').value;
    player2 = document.getElementById('p2Name').value;
    if (player1 == '') {
        player1 = 'Jeremy Francois';
    };
    if (player2 == '') {
        player2 = 'Dell Conagher';
    };

    //Activate board
    document.getElementById('TL').classList.remove('disabled')
    document.getElementById('TM').classList.remove('disabled')
    document.getElementById('TR').classList.remove('disabled')
    document.getElementById('ML').classList.remove('disabled')
    document.getElementById('MM').classList.remove('disabled')
    document.getElementById('MR').classList.remove('disabled')
    document.getElementById('BL').classList.remove('disabled')
    document.getElementById('BM').classList.remove('disabled')
    document.getElementById('BR').classList.remove('disabled')
    document.getElementById('PvP').classList.add('disabled')
    document.getElementById('Reset').classList.remove('disabled')

    document.getElementById('Reset').addEventListener('click', () => {
            reset();
        })

        //We think the bug lies in here somewhere, it's probably definetly from all the buttons getting a new listener

        document.getElementById('TL').addEventListener('click', () =>{
            let posShort = 'TL';
            let posLong  = 'Top Left';
            determine(posShort, posLong);
        });
        document.getElementById('TM').addEventListener('click', () =>{
            let posShort = 'TM';
            let posLong = 'Top Middle';
            determine(posShort, posLong);
        })
        document.getElementById('TR').addEventListener('click', () =>{
            let posShort = 'TR';
            let posLong = 'Top Right';
            determine(posShort, posLong);
        })
        document.getElementById('ML').addEventListener('click', () =>{
            let posShort = 'ML';
            let posLong = 'Middle Left';
            determine(posShort, posLong);
        })
        document.getElementById('MM').addEventListener('click', () =>{
            let posShort = 'MM';
            let posLong = 'Middle Middle';
            determine(posShort, posLong);
        })
        document.getElementById('MR').addEventListener('click', () =>{
            let posShort = 'MR';
            let posLong = 'Middle Right';
            determine(posShort, posLong);
        })
        document.getElementById('BL').addEventListener('click', () =>{
            let posShort = 'BL';
            let posLong = 'Bottom Left';
            determine(posShort, posLong);
        })
        document.getElementById('BM').addEventListener('click', () =>{
            let posShort = 'BM';
            let posLong = 'Bottom Middle';
            determine(posShort, posLong);
        })
        document.getElementById('BR').addEventListener('click', () =>{
            let posShort = 'BR';
            let posLong = 'Bottom Right';
            determine(posShort, posLong);
        })
    })

// FUNC
    function determine (posShort, posLong) {
        document.getElementById(posShort).classList.remove('btn-secondary');
        document.getElementById(posShort).classList.add('disabled');
        if (turn % 2 == 0) { //PLAYER 1 - Blue X
            document.getElementById(posShort).classList.add('btn-primary');
            document.getElementById(posShort).value = 'X';
            document.getElementById('littleGreen').innerHTML = `${player1} takes ${posLong}.`
            document.getElementById('bigGreen').innerHTML = `Your turn, ${player2}`
            console.log(`turn - ${turn} / pos - ${posShort} / pl - ${player1}`)
        } else { //PLAYER 2 - Red O
            document.getElementById(posShort).classList.add('btn-danger');
            document.getElementById(posShort).value = 'O';
            document.getElementById('littleGreen').innerHTML = `${player2} takes ${posLong}.`
            document.getElementById('bigGreen').innerHTML = `Your turn, ${player1}`
            console.log(`turn - ${turn} / pos - ${posShort} / p - ${player2}`)
        };
        if (turn > 1) {
            winner();
        }
        turn++
    };

    function winner () {

        let sTL = document.getElementById('TL').value;
        let sTM = document.getElementById('TM').value;
        let sTR = document.getElementById('TR').value;
        let sML = document.getElementById('ML').value;
        let sMM = document.getElementById('MM').value;
        let sMR = document.getElementById('MR').value;
        let sBL = document.getElementById('BL').value;
        let sBM = document.getElementById('BM').value;
        let sBR = document.getElementById('BR').value;
        
        // TTT
        if (sTL + sTM + sTR == 'XXX') {
            declare(true)
        }
        else if (sTL + sTM + sTR == 'OOO') {
            declare(false)
        }

        // MMM <=>
        else if (sML + sMM + sMR == 'XXX') {
            declare(true)
        }
        else if (sML + sMM + sMR == 'OOO') {
            declare(false)
        }

        // BBB
        else if (sBL + sBM + sBR == 'XXX') {
            declare(true)
        }
        else if (sBL + sBM + sBR == 'OOO') {
            declare(false)
        }
 
        // LLL
        else if (sTL + sML + sBL == 'XXX') {
            declare(true)
        }
        else if (sTL + sML + sBL == 'OOO') {
            declare(false)
        }

        // MMM ttb
        else if (sTM + sMM + sBM == 'XXX') {
            declare(true)
        }
        else if (sTM + sMM + sBM == 'OOO') {
            declare(false)
        }

        // RRR 
        else if (sTR + sMR + sBR == 'XXX') {
            declare(true)
        }
        else if (sTR + sMR + sBR == 'OOO') {
            declare(false)
        }
        
        // TlMmBR
        else if (sTL + sMM + sBR == 'XXX') {
            declare(true)
        }
        else if (sTL + sMM + sBR == 'OOO') {
            declare(false)
        }
         
        // TrMmBL
        else if (sBL + sMM + sTR == 'XXX') {
            declare(true)
        }
        else if (sBL + sMM + sTR == 'OOO') {
            declare(false)
        }

        //Stalemate
        else if (turn == 8)
            loser();  
    };

    function loser () {
        document.getElementById('bigGreen').innerHTML =`You both lose!`
        document.getElementById('littleGreen').innerHTML = `${player2} and ${player1}, wanna try again?`
        console.log(`${player1} wins`)
    }

    function declare (winner) {
        lockdown();
        if (winner == true) { //P1
            document.getElementById('bigGreen').innerHTML =`${player1} Wins in ${turn} turns!`
            document.getElementById('littleGreen').innerHTML = `Try again for a Zeni, ${player2}?`
            console.log(`${player1} wins`)
        } else { //P2
            document.getElementById('bigGreen').innerHTML =`${player2} Wins in ${turn} turns!`
            document.getElementById('littleGreen').innerHTML = `Try again for a Zeni, ${player1}?`
            console.log(`${player2} wins`)
        }
    }

    function lockdown () {
        bibbidi.forEach(element => //Disable buttons
            document.getElementById(element).classList.add('disabled')
        )
    }

    function reset () {
     
        turn = 0;
        gameActive = 0;

        bibbidi.forEach(element => //Remove p1 moves
            document.getElementById(element).classList.remove('btn-primary')
        );

        bibbidi.forEach(element => //Remove p2 moves
            document.getElementById(element).classList.remove('btn-danger')
        );

        bibbidi.forEach(element => //Reset button color
            document.getElementById(element).classList.add('btn-secondary')
        );

        bibbidi.forEach(element =>  //Reset button value
            document.getElementById(element).value = ''
        );

        document.getElementById('PvP').classList.remove('disabled')
        document.getElementById('Reset').classList.add('disabled')
    }