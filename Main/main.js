function choice_1() {
  document.getElementById("1").style.display = "block";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
}

function choice_2() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "block";
  document.getElementById("3").style.display = "none";

}

function choice_3() {
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "inline";
  document.getElementById("4").style.display = "inline";
  document.getElementById("button_1").style.display = "none";
  document.getElementById("button_2").style.display = "none";
  document.getElementById("button_3").style.display = "inline";
  setTimeout(function(){
    document.getElementById("info").style.display = "block";
    document.getElementById("info_p2").style.display = "block";
  }, 2000)
}