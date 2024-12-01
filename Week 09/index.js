class Deck {
    constructor () {
        this.deck = [];
        this.suits = ["Spades", "Clubs", "Diamonds", "Hearts"];
        this.rank = [2, 3 , 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    }

    build() {
        for (let x = 0; x < this.suits.length; x++) { //suit
            for (let y = 0; y < this.rank.length; y++) { //rank
                this.deck.push({name: `${this.rank[y]} of ${this.suits[x]}`, value: y + 1});
                //so so so glad we checked the video again, we were building a func to take 
                //the first two chars and convert them to numbers and it sucked
            }
        }
    }

    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) { 
    
            // Generate random index 
            const j = Math.floor(Math.random() * (i + 1));
                          
            // Swap elements at indices i and j
            const temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        } 
    } //Thanks GeeksForGeeks! This is the fisher yates shuffle, we saw it a couple times 
    //while scrolling the google and we went with GFG's because that's when it clicked for us
    //Kinda weird js doesn't have a shuffle() when we remember java having one
}

// class Player {
//     constructor() {
//         this.hand = [];
//         this.score = 0
//     }} THings got dicey again, returning to the video to speed this up to make sure
// I get done on time; not a good feeling but I know I could have made it work

class War {
    constructor() {
        this.P1 = {
            name: "Billy",
            score: 0,
            hand: []
        }
        this.P2 = {
            name: "Sally",
            score: 0,
            hand: []
        }
    }

    start() {
        var PlayDeck = new Deck;  // Instantiation
        // let P1 = new Player;
        // let P2 = new Player;
        PlayDeck.build();           // Builds a deck (not a patio)
        PlayDeck.shuffle();         // Shuffles it
        // this.deal(P1,P2, PlayDeck);
        while (PlayDeck.deck.length !==0) {
            this.P1.hand.push(PlayDeck.deck.shift())
            this.P2.hand.push(PlayDeck.deck.shift())
            //this is way smarter than what were doing
        }

        for (let i = 0; i < this.P1.hand.length; i++) {
            if (this.P1.hand[i].value > this.P2.hand[i].value) {
                console.log(`${this.P1.name}'s ${this.P1.hand[i].name} beats ${this.P2.name}'s ${this.P2.hand[i].name}`);
                this.P1.score = this.P1.score + 1;
            }
            else if (this.P1.hand[i].value < this.P2.hand[i].value) {
                console.log(`${this.P2.name}'s ${this.P2.hand[i].name} beats ${this.P1.name}'s ${this.P1.hand[i].name}`);
                this.P2.score = this.P2.score + 1;
            }
            else {
                console.log(`${this.P1.name}'s ${this.P1.hand[i].name} Ties ${this.P2.name}'s ${this.P2.hand[i].name}`);
            }
            console.log("Round " + (i+1) + `
                ${this.P1.name} <${this.P1.score}>
                ${this.P2.name} <${this.P2.score}>`)
        }

        let cheater = 0 //DEBUG TO TEST OUTCOMES
        switch (cheater) { //Refreshing for 30 mins sucks to find a tie, put your hand on the scales!
            case 1: //Billy
                this.P1.score = 999;
                break;
            case 2: //Sally
                this.P2.score = 999;
                break;
            case 3: //Tie
                this.P1.score = 0
                this.P2.score = 0
                break;
            default:
                break;

        }

        if (this.P1.score > this.P2.score) {
            console.log(`${this.P1.name} triumphs over ${this.P2.name}!`)
        }
        else if (this.P1.score < this.P2.score) {
            console.log(`${this.P2.name} triumphs over ${this.P1.name}!`)
        }
        else {
            console.log("Everyone loses!")
        }
    }

    // deal(player1, player2, deck) {
    //     for (let i = 0; i < deck.length - 1; i++) {
    //         if (i % 2 == 0) {
    //             console.log(deck[i])
    //             player1.hand.push(deck[i]);
    //         }
    //         else {
    //             player2.hand.push(deck[i]);
    //         }
    //     }
    // }
}
let war = new War;
war.start();