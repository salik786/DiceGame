var totalscore1 = 0; //storing player1 score
var totalscore2 = 0; //storing player2 score
var turn = 1;
document
  .getElementById("roll-btn")
  .addEventListener("click", function generateRandomdice() {
    if (totalscore1 >= 100) {
      alert("Player 1 Wins!!! :New game going to start");
      totalscore1 = 0;
      totalscore2 = 0;
      return;
    } else if (totalscore2 >= 100) {
      alert("Player 2 Wins!!! :New game going to start");
      totalscore2 = 0;
      totalscore1 = 0;
      return;
    }
    var getimg = document.getElementById("diceimg");
    var dicenumber = Math.floor(Math.random() * 6) + 1;

    ///////////////////////////////
    //For player 1
    ////////////////////////////////
    if (turn == 1) {
      var getscore = document.getElementById("score1");
      var gettotalscore = document.getElementById("totalscore1");
      if (dicenumber == 1) {
        getimg.src = "images/1.png";
        getscore.innerText = 1;
        turn = 2;
        totalscore1 = 0;
        gettotalscore.innerText = totalscore1;
      } else if (dicenumber == 2) {
        getscore.innerText = 2;
        totalscore1 = totalscore1 + 2;
        gettotalscore.innerText = totalscore1;
        getimg.src = "images/2.png";
      } else if (dicenumber == 3) {
        getscore.innerText = 3;

        totalscore1 = totalscore1 + 3;
        gettotalscore.innerText = totalscore1;
        getimg.src = "images/3.png";
      } else if (dicenumber == 4) {
        getscore.innerText = 4;
        totalscore1 += 4;
        gettotalscore.innerText = totalscore1;
        getimg.src = "images/4.png";
      } else if (dicenumber == 5) {
        getscore.innerText = 5;
        totalscore1 += 5;
        gettotalscore.innerText = totalscore1;
        getimg.src = "images/5.png";
      } else if (dicenumber == 6) {
        getscore.innerText = 6;
        totalscore1 += 6;
        gettotalscore.innerText = totalscore1;
        getimg.src = "images/6.png";
      }
    }
    ///////////////////////////////
    //For player 2
    ////////////////////////////////
    else if (turn == 2) {
      var getscore2 = document.getElementById("score2");
      var gettotalscore2 = document.getElementById("totalscore2");
      console.log("player2");
      if (dicenumber == 1) {
        getimg.src = "images/1.png";
        getscore2.innerText = 1;
        turn = 1;
        totalscore2 = 0;
        gettotalscore2.innerText = totalscore2;
      } else if (dicenumber == 2) {
        getscore2.innerText = 2;
        totalscore2 = totalscore2 + 2;
        gettotalscore2.innerText = totalscore2;
        getimg.src = "images/2.png";
      } else if (dicenumber == 3) {
        getscore2.innerText = 3;

        totalscore2 = totalscore2 + 3;
        gettotalscore2.innerText = totalscore2;
        getimg.src = "images/3.png";
      } else if (dicenumber == 4) {
        getscore2.innerText = 4;
        totalscore2 += 4;
        gettotalscore2.innerText = totalscore2;
        getimg.src = "images/4.png";
      } else if (dicenumber == 5) {
        getscore2.innerText = 5;
        totalscore2 += 5;
        gettotalscore2.innerText = totalscore2;
        getimg.src = "images/5.png";
      } else if (dicenumber == 6) {
        getscore2.innerText = 6;
        totalscore2 += 6;
        gettotalscore2.innerText = totalscore2;
        getimg.src = "images/6.png";
      }
    }
  });
function scoreStore() {
  document.getElementById("playershift").addEventListener("click", () => {
    if (turn == 1) {
      turn = 2;
    } else if (turn == 2) {
      turn = 1;
    }
  });
}
document.getElementById("icon").addEventListener("click", () => {
  alert(
    "-This game has 2 players\n-In each turn A player rolls a dice as many times as he wishes.Each result get added to his Round score\n-The player can hold his score and give player2 to take chance.At that time His score stored in his global score.\n-On (1) player total score will be 0.\n-The player Whose global score reaches 100 first will win the game "
  );
});
scoreStore();
