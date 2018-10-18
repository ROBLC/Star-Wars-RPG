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
var wins = 0;
var losses =0;
var restartBtn = document.querySelector("#restart");
var gameStatus = false;
$("document").ready(function(){
    
$("#anakin").attr("HP", 100);
$("#anakin").attr("AP", 6);
$("#anakin").attr("CA", 10);
$("#anakin").attr("name", "Anakin Skywalker");

$("#obi-wan").attr("HP", 120);
$("#obi-wan").attr("AP", 8);
$("#obi-wan").attr("CA", 8);
$("#obi-wan").attr("name", "Obi Wan Kenobi");

$("#qui-gon").attr("HP", 150);
$("#qui-gon").attr("AP", 10);
$("#qui-gon").attr("CA", 13);
$("#qui-gon").attr("name", "Qui gon Jin");

$("#maul").attr("HP", 180);
$("#maul").attr("AP", 10);
$("#maul").attr("CA", 15);
$("#maul").attr("name", "Darth Maul");
    
    function chooseCharacter() {
        $("#attackStats").text("" );
        $("#counterStats").text("");
    $(".characterSelection").on("click", ".character", function () {
        $("#counterStats").text("");
        $("#attackStats").text("");
        user= $(this).attr("id");
        $("#characterChoosen").append($("#"+user));
        for (i=0; i < characters.length; i++) {
            if (characters[i] != user) {
                $("#enemiesAvailable").append($("#"+characters[i]));
                ($("#"+characters[i])).css("background-color","red");
            }
        }
         userAttack = ($("#"+user)).attr("AP");
         userCounter = ($("#"+user)).attr("CA");
         userHealth = ($("#"+user)).attr("HP");
         userName = ($("#"+user)).attr("name");
         userHP = ($("#"+user+"HP"));
         userAP = ($("#"+user+"AP"));
        
        
    });
  
    
    }
    function choosedefender() {
        $("#enemiesAvailable").one("click",".character", function () {
            defender= $(this).attr("id");
            $("#defenderChoosen").append($("#"+defender));
            ($("#"+defender)).css("background-color", "black");
            ($("#"+defender+"HP")).css("color", "#ffffff");
            ($("#"+defender+"AP")).css("color", "#ffffff");
            ($("#"+defender+"CA")).css("color", "#ffffff");
            ($("#"+defender+"Name")).css("color", "#ffffff");
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
            if (gameStatus){
                $("#attackStats").text("Click play again!!" );
                $("#counterStats").text("");
            }
            else if (defender === null) {
                $("#attackStats").text("Choose an enemy first!!" );
                $("#counterStats").text("");
            }
            else {
                userExp = userExp + Number(userAttack);
                defenderHealth = defenderHealth - userExp;
                $("#attackStats").text("You attacked " + defenderName + " for " + userExp + " damage.");
                $(userAP).text("AP:" + userExp);
                $(defenderHP).text("HP:" + defenderHealth);
                if (defenderHealth <= 1) {
                    $("#attackStats").text("You defeated " + defenderName + "!!" );
                    $("#counterStats").text("Choose another enemy to attack");
                    ($("#"+defender)).css("display", "none");
                    defender=null;
                    enemiesLeft--;
                    choosedefender();
                }
                else {
                    userHealth = userHealth - defenderCounter;
                    $("#counterStats").text(defenderName + " attacked you for " + defenderCounter + " damage.");
                    if (userHealth < 0) {
                        $(userHP).text("HP:0");
                    }
                    else {
                        $(userHP).text("HP:" + userHealth);
                    }
                }
                if (enemiesLeft === 0) {
                    gameStatus = true;
                    wins++;
                    $("#wins").text("Wins:"+wins);
                    $("#attackStats").text("You won!!" );
                    $("#counterStats").text("Play again!");
                    ($("#restart")).css("display", "block");
                    $(restartBtn).on("click", function() {
                    reset();
                    gameLoop();
                    });
                }
             
                else if (userHealth <= 0) {
                    gameStatus = true;
                    losses++;
                    $("#losses").text("Losses:"+losses);
                    $("#attackStats").text("You Lost!!" );
                    $("#counterStats").text("Play again!");
                    ($("#restart")).css("display", "block");
                    $(restartBtn).on("click", function() {
                    reset();
                    gameLoop();
                    });
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

        $(".style").css("background-color","#ffff");
        $("#anakinHP").css("color","black");
        $("#anakinAP").css("color","black");
        $("#anakinCA").css("color","black");
        $("#anakinName").css("color","black");

        $(".style").css("background-color","#ffff");
        $("#obi-wanHP").css("color","black");
        $("#obi-wanAP").css("color","black");
        $("#obi-wanCA").css("color","black");
        $("#obi-wanName").css("color","black");

        $(".style").css("background-color","#ffff");
        $("#qui-gonHP").css("color","black");
        $("#qui-gonAP").css("color","black");
        $("#qui-gonCA").css("color","black");
        $("#qui-gonName").css("color","black");

        $(".style").css("color","#ffff");
        $("#maulHP").css("color","black");
        $("#maulAP").css("color","black");
        $("#maulCA").css("color","black");
        $("#maulName").css("color","black");

        enemiesLeft= 3;
        userExp=0;
        defender=null;
        gameStatus=false;
        ($("#restart")).css("display", "none");

    }
    function gameLoop() {
        chooseCharacter();
        choosedefender();
      
    }

    chooseCharacter(); 
    choosedefender();
    attackPhase();
    
    
    
});








