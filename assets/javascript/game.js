//User picks a character on click an sticks woth them until the game is finished

//when you pick a character all other characters are now enemies and move to another area

//when you pick and enemy to face their images moves to a defender area

//user gets to attack the defending character, making the defender lose hp

//the defender always responds with and attack of their own and the the hp of each chracter is on their image

// once the defenders hp reaches 0 he or she is removed and user can select anew opponent 

//user wins games by beating all opponents or loses if their hp reaches 0

//*each chracter has health points, attack power and counter attack power

//*eahc time the user attacks his attak power increases by the base attack power 



var characters = {
        anakin = {
            HP = 100,
            AP = 10,
            CA = 15,
            name = "Anakin Skywalker" 
        },
        maul = {
            HP = 250,
            AP = 30,
            CA = 35,
            name = "Darth Maul"
        },
        obi = {
            HP = 180,
            AP = 15,
            CA = 25,
            name = "Obi Wan Kenobi"
        },
        qui = {
            HP = 220,
            AP = 20,
            CA = 35,
            name = "Qui Gon Jin"
        }
}
