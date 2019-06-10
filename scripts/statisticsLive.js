/*
//Initial Variables---------------------------------------------------------------------------------------------------------------------------------------
var lineChartX = document.getElementById('lineChartX').getContext('2d');


// LIVE CHART ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Chart.default.global.defaultFontSize = 18,
function addChartX () {
    var chart = new Chart(lineChartX, {
        // The type of chart we want to create
        id: 'chartLineX',
        type: 'doughnut',
        // The data for our dataset
        data: {
            labels: [
                'Badeniaplatz', 'Empty'
            ],
            datasets: [{
                label: 'Besetzungsgrad Tram 1',
                backgroundColor: [
                    'rgb(0,26,4)',
                    'rgb(211,211,211)'
                ],
                borderColor: 'rgb(0,26,4)',
                hoverBackgroundColor: 'red',
                data: [
                    70, 30                           
                ]
            }]
        },
    
        // Configuration options go here
        options: {
        
            cutoutPercentage: 50,
            rotation: 15,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            legend: {
                position: 'bottom',
            },
            elements: {
                center: {
                    text: 'Test',
                    sidePadding: 15
                }
            }
        },

    });
}
var chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      data: [589, 445, 483, 503, 689, 692, 634],
    },
    {
      data: [639, 465, 493, 478, 589, 632, 674],
    }]
  };
*/
//LIVE MODAL Bootstrap----------------------------------------------------------------------------------------------------------------------------------------------------------------


var lineChartX = document.getElementById("lineChartX");

if (lineChartX) { 
    
    var chart = new Chart(lineChartX, {
        // The type of chart we want to create
        id: 'chartLineX',
        type: 'doughnut',
        // The data for our dataset
        data: {
            labels: [
                'Badeniaplatz', 'Empty'
            ],
            datasets: [{
                label: 'Besetzungsgrad Tram 1',
                backgroundColor: [
                    'rgb(0,26,4)',
                    'rgb(211,211,211)'
                ],
                borderColor: 'rgb(0,26,4)',
                hoverBackgroundColor: 'red',
                data: [
                    70, 30                           
                ]
            }]
        },
    
        // Configuration options go here
        options: {
        
            cutoutPercentage: 50,
            rotation: 15,
            animation: {
                animateScale: true,
                animateRotate: true
            },
            legend: {
                position: 'bottom',
            },
            elements: {
                center: {
                    text: 'Test',
                    sidePadding: 15
                }
            }
        },
});
}