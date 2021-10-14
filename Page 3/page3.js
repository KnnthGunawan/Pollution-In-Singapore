window.onload = function () {
    
    var chart = new CanvasJS.Chart("chartContainer2",
        {
          title:{
            //text: "Singapore Emissions Profile (2018)",
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