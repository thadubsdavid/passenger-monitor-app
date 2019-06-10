//initial Variables-------------------------------------------------------------------------------------------------------------------------------------
var lineChart1 = document.getElementById('lineChart1').getContext('2d');
var lineChart2 = document.getElementById('lineChart2').getContext('2d');
var lineChart3 = document.getElementById('lineChart3').getContext('2d');
var lineChart5 = document.getElementById('lineChart5').getContext('2d');
var lineChartS1 = document.getElementById('lineChartS1').getContext('2d');
var lineChartS2 = document.getElementById('lineChartS2').getContext('2d');


// Line Charts-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



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
                data:  trend   
                
            }]
        },
    
        // Configuration options go here
        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 200
                    }
                }]
            }
        }
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
                data: dummy
                
            }]
        },
    
        // Configuration options go here
        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 200
                    }
                }]
            }
        }
    });
}


function addChart3 () {
    var chart = new Chart(lineChart3, {
        // The type of chart we want to create
        id: 'chartLine3',
        type: 'line',

        // The data for our dataset
        data: {
            labels: [
                'Neureut Heide',	'Heidehof',	'Duale Hochschule',	'Lilienthalstr',	'Synagoge', 'Kunstakademie',	'Mühlburger Tor',	'Europaplatz',	'Karlstor', 'Mathystr',	'Kolpingplatz', 'Ebertstr', 'Hbf Vorplatz',	'Poststr',	'Tivoli',
            ],
            datasets: [{
                label: 'Besetzungsgrad Tram 3',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(0,26,4)',
                data: dummy                   
                                   
    
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function addChart5 () {
    var chart = new Chart(lineChart5, {
        // The type of chart we want to create
        id: 'chartLine5',
        type: 'line',

        // The data for our dataset
        data: {
            labels: [
                'Rheinhafen',	'Lameyplaz',	'Entenfang',	'Mühlburger Feld',	'Kühler Krug', 'Hübschstr',	'Weinbrennerplatz',	'Lessingstr',	'Otto-Sachs-Str', 'Mathystr',	'Konzerthaus', 'Volkswohnung', 'Rüppurer Tor',	'Kronenplatz',	'Durlacher Tor', 'Karl-Wilhelm-Platz', 'Hauptfriedhof', 'Dunantstr', 'Forststr', 'Rintheim'
            ],
            datasets: [{
                label: 'Besetzungsgrad Tram 5',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(0,26,4)',
                data: dummy


            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function addChartS1() {
    var chart = new Chart(lineChartS1, {
        // The type of chart we want to create
        id: 'chartLineS1',
        type: 'line',

        // The data for our dataset
        data: {
            labels: [
                 'Kirchfeld',	'Adolf-Ehrmann-Bad',	'Bärenweg',	'Welschneureuter Str',	'Kurt-Schumacher Str', 'August-Bebel Str',	'Knielinger Allee',	'Stadt. Klinikum',	'Yorckstr', 'Mühlburger Tor',	'Europaplatz', 'Herrenstr', 'Marktplatz',	'Kronenplatz',	'Rüppurer Tor', 'Werderstr',	'Tivoli',	'Poststr',	'Hbf Vorplatz',	'Albtalbahnhof', 'Dammerstock',	'Schloss Rüppurr',	'Ostendorfplatz',	'Tulpenstr', 'Battstr',	'Ettlingen'
            ],
            datasets: [{
                label: 'Besetzungsgrad S1',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(0,26,4)',
                data: dummy
                    
                                   
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

function addChartS2 () {
    var chart = new Chart(lineChartS2, {
        // The type of chart we want to create
        id: 'chartLineS2',
        type: 'line',

        // The data for our dataset
        data: {
            labels: [
                'Hammäcker',	'Dornröschenweg',	'Karl-Delisle-Str',	'Thomas-Mann-Str',	'Rheinhafenstr', 'Eckenerstr',	'Entenfang',	'Philippstr',	'Händelstr', 'Yorckstr',	'Mühlburger Tor', 'Europaplatz', 'Herrenstr',	'Marktplatz',	'Kronenplatz', 'Durlacher Tor',	'Karl-Wilhelm-Platz',	'Hauptfriedhof',	'Hirtenweg',	'Sinsheimer Str', 'Hagsfeld Süd',	'Hagsfeld Bf',	'Geroldsäcker',	'Jenaer Str', 'Reitschulschlag'
            ],
            datasets: [{
                label: 'Besetzungsgrad S2',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(0,26,4)',
                data: 
                    dummy
                                   
                
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}





