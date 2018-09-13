//User picks a character on click an sticks woth them until the game is finished

//when you pick a character all other characters are now enemies and move to another area

//when you pick and enemy to face their images moves to a defender area

//user gets to attack the defending character, making the defender lose hp

//the defender always responds with and attack of their own and the the hp of each chracter is on their image

// once the defenders hp reaches 0 he or she is removed and user can select anew opponent 

//user wins games by beating all opponents or loses if their hp reaches 0

//*each chracter has health points, attack power and counter attack power

//*eahc time the user attacks his attak power increases by the base attack power 


var user;
var defender = null;
var characters = ["anakin","obi-wan","qui-gon","maul"];
var attackBtn = document.querySelector("#attack");
var userAttack ;
var userCounter;
var userHealth;
var userExp = 0;
var defenderAttack;
var defenderHealth;
var defenderHealth;
var userStats = document.querySelector("#attackStats");
var defenderStats = document.querySelector("#counterStats");
var userName;
var defenderName;
var userHP;
var userAP;
var defenderHP;
var enemiesLeft = 3;
$("document").ready(function(){
    
$("#anakin").attr("HP", 100);
$("#anakin").attr("AP", 6);
$("#anakin").attr("CA", 10);
$("#anakin").attr("name", "Anakin Skywalker");

$("#obi-wan").attr("HP", 120);
$("#obi-wan").attr("AP", 8);
$("#obi-wan").attr("CA", 15);
$("#obi-wan").attr("name", "Obi Wan Kenobi");

$("#qui-gon").attr("HP", 150);
$("#qui-gon").attr("AP", 10);
$("#qui-gon").attr("CA", 20);
$("#qui-gon").attr("name", "Qui gon Jin");

$("#maul").attr("HP", 180);
$("#maul").attr("AP", 12);
$("#maul").attr("CA", 25);
$("#maul").attr("name", "Darth Maul");
    
    function chooseCharacter() {
    $(".characterSelection").on("click", ".character", function () {
        console.log(this);
        user= $(this).attr("id");
        console.log(user);
        $("#characterChoosen").append($("#"+user));
        for (i=0; i < characters.length; i++) {
            if (characters[i] != user) {
                $("#enemiesAvailable").append($("#"+characters[i]));
            }
        }
         userAttack = ($("#"+user)).attr("AP");
         userCounter = ($("#"+user)).attr("CA");
         userHealth = ($("#"+user)).attr("HP");
         userName = ($("#"+user)).attr("name");
         userHP = ($("#"+user+"HP"));
         userAP = ($("#"+user+"AP"));
        console.log(userHP.text());
        
    });
  
    
    }
    function choosedefender() {
        $("#enemiesAvailable").one("click",".character", function () {
            defender= $(this).attr("id");
            $("#defenderChoosen").append($("#"+defender));
            defenderAttack = ($("#"+defender)).attr("AP");
            defenderCounter = ($("#"+defender)).attr("CA");
            defenderHealth = ($("#"+defender)).attr("HP");
            defenderName = ($("#"+defender)).attr("name");
            defenderHP = ($("#"+defender+"HP"));
            console.log(this);
            

        })
    }
    function attackPhase(){
       
        $(attackBtn).on("click", function() {
            console.log(defender);
            if (defender === null) {
                console.log("pick an enemy");
            }
            else {
                userExp = userExp + Number(userAttack);
                defenderHealth = defenderHealth - userExp;
                userHealth = userHealth - defenderCounter;
          
                console.log("______")
                console.log(userExp);
                console.log(userHealth);
                console.log(defenderHealth);
                $("#attackStats").text("You attacked " + defenderName + " for " + userExp + " damage.");
                $("#counterStats").text(defenderName + " attacked you for " + defenderCounter + " damage.");
                $(userHP).text("HP:" + userHealth);
                $(userAP).text("AP:" + userExp);
                $(defenderHP).text("HP:" + defenderHealth);
                if (defenderHealth <= 1) {
                    $("#attackStats").text("You defeated " + defenderName );
                    ($("#"+defender)).css("display", "none");
                    defender=null;
                    enemiesLeft--;
                    console.log("hi");
                    choosedefender();
                }
                if (enemiesLeft === 0) {
                    console.log("You win");
                    reset();
                    gameLoop();
                }
             
                if (userHealth <= 0) {

                    console.log("you lose");
                    reset();
                    gameLoop();
                }
                console.log(enemiesLeft);
            }
        })
    }
    function reset() {
        $(".characterSelection").append($("#qui-gon"));
        $(".characterSelection").append($("#obi-wan"));
        $(".characterSelection").append($("#anakin"));
        $(".characterSelection").append($("#maul"));

        $("#qui-gon").css("display", "block");
        $("#obi-wan").css("display", "block");
        $("#maul").css("display", "block");
        $("#anakin").css("display", "block");

        $("#qui-gonHP").text("HP:"+($("#qui-gon")).attr("HP"));
        $("#qui-gonAP").text("AP:"+($("#qui-gon")).attr("AP"));
        $("#qui-gonCA").text("CA:"+($("#qui-gon")).attr("CA"));

        $("#obi-wanHP").text("HP:"+($("#obi-wan")).attr("HP"));
        $("#obi-wanAP").text("AP:"+($("#obi-wan")).attr("AP"));
        $("#obi-wanCA").text("CA:"+($("#obi-wan")).attr("CA"));

        $("#anakinHP").text("HP:"+($("#anakin")).attr("HP"));
        $("#anakinAP").text("AP:"+($("#anakin")).attr("AP"));
        $("#anakinCA").text("CA:"+($("#anakin")).attr("CA"));

        $("#maulHP").text("HP:"+($("#maul")).attr("HP"));
        $("#maulAP").text("AP:"+($("#maul")).attr("AP"));
        $("#maulCA").text("CA:"+($("#maul")).attr("CA"));

        enemiesLeft= 3;
        $("#counterStats").text(defenderName + " attacked you for " + defenderCounter + " damage.");
        userExp=0;
        defender=null;

    }
    function gameLoop() {
        chooseCharacter();
        choosedefender();
      
    }

    chooseCharacter(); 
    choosedefender();
    attackPhase();
    
    
    
});








