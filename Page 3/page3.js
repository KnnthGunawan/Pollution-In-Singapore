window.onload = function () {
    
    var chart = new CanvasJS.Chart("chartContainer",
        {
          title:{
            text: "Singapore Emissions Profile (2018)",
            fontFamily: "montserrat"
          },
          legend: {
            maxWidth: 350,
            itemWidth: 120
          },
          data: [
          {
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [
              { y: 38.9, indexLabel: "Power" },
              { y: 46.7, indexLabel: "Industry" },
              { y: 12.4, indexLabel: "Transport" },
              { y: 1.8, indexLabel: "Others"}
            ]
          }
          ]
        });
    
    chart.render()
    }

function toggleText() {
  var text = document.getElementById("button");
  text.style.display = "none";
  var text1 = document.getElementById("1");
  text1.style.display = "block";
  setTimeout(function(){
    var text2 = document.getElementById("2");
    text2.style.display = "block";
  }, 1500);
  setTimeout(function(){
    var text3 = document.getElementById("link");
    text3.style.display = "block";
  }, 2500);
}