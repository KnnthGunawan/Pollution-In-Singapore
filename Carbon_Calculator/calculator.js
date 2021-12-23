// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var score = 0;
  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add value to 'score'
      var num = choices[i].value
      score = score + Number(num)
    }
  }

  
  document.getElementById('answer').innerHTML = score
  
  // Display answer corresponding to that choice
  if (score < 8) {
    document.getElementById('review').innerHTML = "Great! Your carbon footprint is below average!"
  }
  else if (score < 10) {
    document.getElementById('review').innerHTML = "Not Bad! Your carbon footprint is close average!"
  }
  else if (score < 15) { 
    document.getElementById('review').innerHTML = "Uh Oh! Your carbon footprint is above average!"
  }
  else{ 
    document.getElementById('review').innerHTML = "Oh No! Your carbon footprint is way above average!"
  }
}

function resetAnswer() {
  document.getElementById('answer').innerHTML = "";
  document.getElementById('review').innerHTML = "";
}