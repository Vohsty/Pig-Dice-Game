//Global Variables
var player1, player2;
//Back-End Logic
//Constructor function for a player
function Player(name, turnTotal, overallScore) {
    this.name = name;
    this.turnTotal = 0;
    this.overallScore = 0;
}

//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1);
   
         if (randomNo === 1) {
              this.turnTotal = 0;
         console.log(this.turnTotal);
        return alert("Oops you got a 1. Your turn is over");
      } else {
          this.turnTotal += randomNo;
          console.log(this.turnTotal);
    };
     return randomNo;
};
//Function on what is to happen when a player holds the game.
//Player.prototype.hold = function(){
//    this.overallScore += turnTotal;
//}

//Reset the fields
function resetFields() {
    $("input#player1Name").val("");
    $("input#player2Name").val("");
}


//Front End Logic
$(document).ready(function () {
    //Makes the 'Rules' title clickeable and the rules themselves hideable.
    $("#rulesHeader").click(function () {
        $("#rulesDefinitions").toggle();
    });
    //Actions when player enters name
    $("#playerNames").submit(function (event) {

        event.preventDefault();
        //Store the players names in variables and output them.
        var gamer1 = $("#player1Name").val();
        console.log(gamer1);
        var gamer2 = $("#player2Name").val();
        console.log(gamer2);
        //Put the names into an object using the constructor Players
        player1 = new Player(gamer1);
        player2 = new Player(gamer2);
        console.log(player1, player2);
        //Output the names into each appropriate section
        $(".player1NameOutput").text(player1.name);
        $(".player2NameOutput").text(player2.name);
        //Clear the input fields
        resetFields();
        });

        $('.roll').click(function (event) {
            event.preventDefault();
            //call the function to generate random numbers
            //display the rolled dice number
            $('.diceroll1').text(player1.roll());
            //display the turn score (temporary score)
            $('.turnScore1').text(player1.turnTotal);
            //display the overall score            $('.overralScore1').text(player1.totalScore);
    
        });


});
