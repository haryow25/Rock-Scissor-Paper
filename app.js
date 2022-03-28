function getComputerChoice() {
  const comp = Math.random();
  if (comp < 0.34) return "kertas";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "batu";
}

function getResult(computer, player) {
  // if (player == computer) {
  //   document.getElementById("result-img").src = "game/Draw.jpg";
  //   document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
  //   // document.getElementById("result-img").innerHTML = "Draw";
  //   return "Draw!";
  // }
  // if (player == "kertas") {
  //   // document.getElementById("result-img").src = "game/Player-1.jpg";
  //   // document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
  //   return computer == "gunting" ? "You Lose!" : "You Win!";
  // }
  // if (player == "gunting") {
  //   // document.getElementById("result-img").src = "game/Computer.jpg";
  //   // document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
  //   return computer == "batu" ? "You Lose!" : "You Win!";
  // }
  // if (player == "batu") {
  //   // document.getElementById("result-img").src = "game/Computer.jpg";
  //   // document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
  //   return computer == "kertas" ? "You Lose!" : "You Win!";
  // }
  if (player == computer) {
    document.getElementById("result-img").src = "game/Draw.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    // document.getElementById("result-img").innerHTML = "Draw";
    return "Draw!";
  }
  if (player == "kertas" && computer == "gunting") {
    document.getElementById("result-img").src = "game/Computer.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    return computer == "You Win!";
  }
  if (player == "gunting" && computer == "batu") {
    document.getElementById("result-img").src = "game/Computer.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    return computer == "You Win!";
  }
  if (player == "batu" && computer == "kertas") {
    document.getElementById("result-img").src = "game/Computer.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    return computer == "You Win!";
  }
  if (player == "kertas" && computer == "batu") {
    document.getElementById("result-img").src = "game/Player-1.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    return computer == "You Lose!";
  }
  if (player == "gunting" && computer == "kertas") {
    document.getElementById("result-img").src = "game/Player-1.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    return computer == "You Lose!";
  }
  if (player == "batu" && computer == "gunting") {
    document.getElementById("result-img").src = "game/Player-1.jpg";
    document.getElementById("result-img").style.transform = "rotate(-28.87deg)";
    return computer == "You Lose!";
  }
}

const choice = document.querySelectorAll("#img-player img");
var selected = "";
choice.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item.id);
    const ComputerChoice = getComputerChoice();
    const playerChoice = item.id;
    console.log(ComputerChoice);
    const result = getResult(ComputerChoice, playerChoice);
    console.log(result);

    if (ComputerChoice == "kertas") {
      document.getElementById("comp-kertas").classList.add("bg-secondary");
      document.getElementById("comp-gunting").classList.remove("bg-secondary");
      document.getElementById("comp-batu").classList.remove("bg-secondary");
    }
    if (ComputerChoice == "gunting") {
      document.getElementById("comp-gunting").classList.add("bg-secondary");
      document.getElementById("comp-kertas").classList.remove("bg-secondary");
      document.getElementById("comp-batu").classList.remove("bg-secondary");
    }

    if (ComputerChoice == "batu") {
      document.getElementById("comp-batu").classList.add("bg-secondary");
      document.getElementById("comp-gunting").classList.remove("bg-secondary");
      document.getElementById("comp-kertas").classList.remove("bg-secondary");
    }

    // const info = document.querySelector(".info");
    // info.innerHTML = result;
    if (selected != "") {
      document.getElementById(selected).classList.remove("bg-secondary");
      selected = item.id;
    } else {
      selected = item.id;
    }
    item.classList.add("bg-secondary");
    //
  });

  document.querySelector(".refresh").addEventListener("click", function () {
    document.getElementById("comp-batu").classList.remove("bg-secondary");
    document.getElementById("comp-gunting").classList.remove("bg-secondary");
    document.getElementById("comp-kertas").classList.remove("bg-secondary");
    document.getElementById("batu").classList.remove("bg-secondary");
    document.getElementById("gunting").classList.remove("bg-secondary");
    document.getElementById("kertas").classList.remove("bg-secondary");
    document.getElementById("result-img").src = "game/VS.png";
    document.getElementById("result-img").style.transform = "rotate(0deg)";
  });
});
