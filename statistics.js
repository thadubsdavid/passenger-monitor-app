var lineChart1 = document.getElementById('lineChart1').getContext('2d');

var lineChart2 = document.getElementById('lineChart2').getContext('2d');

var lineChartX = document.getElementById('lineChartX').getContext('2d');

//Chart.default.global.defaultFontSize = 18,
function addChart1 () {
    var chart = new Chart(lineChart1, {
        // The type of chart we want to create
        id: 'chartLine1',
        type: 'line',

        // The data for our dataset
        data: {
            labels: [
                'Badeniaplatz',	'Wilhelm-Leuschner-Straße',	'Oberreut Zentrum',	'Albert-Braun-Straße',	'Hardecksiedlung', 'Bannwaldallee',	'Europahalle',	'Landesbausparkasse',	'Weinbrennerplatz',	'Sophienstraße', 'Schillerstraße',	'Mühlburger Tor',	'Europaplatz',	'Herrenstraße',	'Marktplatz',	'Kronenplatz',	'Durlacher Tor / K  I  T', 'Gottesauer Platz / B G V',	'Tullastraße / V B K',	'Weinweg',	'Untermühlstraße',	'Auer Straße/Dr.W Schwabe', 'Friedrichschule',	'Durlach Turmberg',
            ],
            datasets: [{
                label: 'Besetzungsgrad Tram 1',
                backgroundColor: 'rgb(240,128,128)',
                borderColor: 'rgb(0,26,4)',
                data: [
                    1023,
                    367,
                    1070,
                    1074,
                    383,
                    184,
                    798,
                    242,
                    648,
                    331,
                    197,
                    1101,
                    3399,
                    1583,
                    1197,
                    990,
                    1231,
                    435,
                    485,
                    242,
                    56,
                    889,
                    194,
                    183,
                    1                
                ]
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function addChart2 () {
    var chart = new Chart(lineChart2, {
        // The type of chart we want to create
        id: 'chartLine2',
        type: 'line',

        // The data for our dataset
        data: {
            labels: [
                'Lassallestr',	'Siemensallee',	'Neureuter Str',	'Feierabendweg',	'Hertzstr', 'Stadt. Klinikum',	'Yorckstr',	'Mühlburger Tor',	'Europaplatz',	'Karlstor', 'Mathystr',	'Otto-Sachs-Str',	'Arbeitsagentur',	'ZKM',	'Welfenstr',	'Barbarossaplatz',	'Ebertstr', 'Hbf Vorplatz',	'Poststr',	'Tivoli',	'Werderstr',	'Rüppurer Tor', 'Kronenplatz',	'Durlacher Tor', 'Gottesauer Platz',	'Tulla Str',	'Weinweg', 'Auer Straße', 'Gritznerstr',	'Killisfelderweg', ' Ellmendinger Str', 'Ostmark Str',	'Schlesier Str',	'Steiermärker Str', 'Zündhütle', 'Wolfartsweier',
            ],
            datasets: [{
                label: 'Besetzungsgrad Tram 2',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(0,26,4)',
                data: [
                    123,
                    667,
                    670,
                    874,
                    383,
                    1284,
                    1798,
                    2242,
                    1848,
                    2231,
                    1297,
                    1101,
                    1399,
                    1583,
                    1197,
                    1990,
                    2231,
                    435,
                    485,
                    242,
                    526,
                    889,
                    694,
                    1083,
                    1000,
                    990,
                    1231,
                    435,
                    485,
                    242,
                    56,
                    889,
                    194,
                    183,
                    200,
                    300,
                    990,
                    500
                                   
                ]
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}


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
                    'rgb(255,165,0'
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


