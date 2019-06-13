
//LIVE MODAL Bootstrap----------------------------------------------------------------------------------------------------------------------------------------------------------------
//Math.floor(Math.random() * (max - min + 1)) + min;
var startModal = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11)+10);
var startModalShort = Array.from({ length: 5 }, () => Math.floor(Math.random() * 51)+20);
var highModal = Array.from({ length: 10 }, () => Math.floor(Math.random() * 51) + 100);
var startModalRev = startModal.reverse();

var modalTrend = startModal.concat(highModal);
var modalTrend2 = startModalShort.concat(highModal);
var modalTrend3 = startModalShort.concat(startModal,startModalShort);
var modalTrend4 = startModal.concat(startModalRev)

var lineChart11 = document.getElementById("lineChart11");

if (lineChart11) { 
    
    var chart = new Chart(lineChart11, {
        // The type of chart we want to create
        id: 'chartLine11',
        type: 'line',
        // The data for our dataset
        data: {
            labels: [
                'Badenialp.',	'Wilhelm-Leu.-Str',	'Oberreut Zentrum',	'Albert-Braun-Straße',	'Hardecksiedlung', 'Bannwaldallee',	'Europahalle',	'Landesbausparkasse',	'Weinbrennerplatz',	'Sophienstraße', 'Schillerstraße',	'Mühlburger Tor',	'Europaplatz',	'Herrenstraße',	'Marktplatz',	'Kronenplatz',	'Durlacher Tor / K  I  T', 'Gottesauer Platz / B G V',	'Tullastraße / V B K',	'Weinweg',	'Untermühlstraße',	'Auer Straße/Dr.W Schwabe', 'Friedrichschule',	'Turmberg',
            ],
            datasets: [{
                label: 'History of occupancy level: Oberreut - Durlach',
                backgroundColor: [
                    
                    '#c1e5b0'
                ],
                borderColor: 'rgb(0,26,4)',
                hoverBackgroundColor: 'red',
                data: modalTrend
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

var lineChart12 = document.getElementById("lineChart12");



if (lineChart12) { 
    
    var chart = new Chart(lineChart12, {
        // The type of chart we want to create
        id: 'chartLine12',
        type: 'line',
        // The data for our dataset
        data: {
            labels: [
                "Turmberg", "Friedrichschule", "Auer Straße/Dr.W Schwabe", "Untermühlstraße", "Weinweg", "Tullastraße / V B K", "Gottesauer Platz / B G V", "Durlacher Tor / K  I  T", "Kronenplatz", "Marktplatz","Herrenstraße","Europaplatz", "Mühlburger Tor", "Schillerstraße","Sophienstraße","Weinbrennerplatz","Landesbausparkasse",
                "Europahalle",
                "Bannwaldallee",
                "Hardecksiedlung",
                "Albert-Braun-Straße",
                "Oberreut Zentrum",
                "Wilhelm-Leuschner-Straße",
                "Badenialp."
            ],
            datasets: [{
                label: 'History of occupancy level: Durlach - Oberreut',
                backgroundColor: [
                    '#c1e5b0'
                ],
                borderColor: 'rgb(0,26,4)',
                hoverBackgroundColor: 'red',
                data: modalTrend2
            }]
        },
    
        // Configuration options go here
        options:{
            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        suggestedMax: 200
                    }
                }]
            }
        
        }
    
    });
}

var lineChart21 = document.getElementById("lineChart21");

if (lineChart21) { 
    
    var chart = new Chart(lineChart21, {
        // The type of chart we want to create
        id: 'chartLine21',
        type: 'line',
        // The data for our dataset Siemensalle Wolfartsweier
        data: {
            labels: [
                'Lassallestr',	'Siemensallee',	'Neureuter Str',	'Feierabendweg',	'Hertzstr', 'Stadt. Klinikum',	'Yorckstr',	'Mühlburger Tor',	'Europaplatz',	'Karlstor', 'Mathystr',	'Otto-Sachs-Str',	'Arbeitsagentur',	'ZKM',	'Welfenstr',	'Barbarossaplatz',	'Ebertstr', 'Hbf Vorplatz',	'Poststr',	'Tivoli',	'Werderstr',	'Rüppurer Tor', 'Kronenplatz',	'Durlacher Tor', 'Gottesauer Platz',	'Tulla Str',	'Weinweg', 'Auer Straße', 'Gritznerstr',	'Killisfelderweg', ' Ellmendinger Str', 'Ostmark Str',	'Schlesier Str',	'Steiermärker Str', 'Zündhütle', 'Wolfartsweier',

            ],
            datasets: [{
                label: 'History of occupancy level: Siemensallee - Wolfartsweier',
                backgroundColor: [
                    
                    '#c1e5b0'
                ],
                borderColor: 'rgb(0,26,4)',
                hoverBackgroundColor: 'red',
                data: modalTrend3
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

var lineChart22 = document.getElementById("lineChart22");

if (lineChart22) { 
    
    var chart = new Chart(lineChart22, {
        // The type of chart we want to create
        id: 'chartLine22',
        type: 'line',
        // The data for our dataset
        data: {
            labels: [

               "Wolfartsweier",'Zündhütle','SteiermärkerStr' ,'SchlesierStr' ,'OstmarkStr' , 'EllmendingerStr' ,'Killisfelderweg','Gritznerstr','Auer Straße','Weinweg','Tulla Str','Gottesauer Platz','Durlacher Tor','Kronenplatz','Rüppurer Tor','Werderstr','Tivoli','Poststr','Hbf Vorplatz','Ebertstr','Barbarossaplatz','Welfenstr','ZKM','Arbeitsagentur','Otto-Sachs-Str','Mathystr','Karlstor','Europaplatz','Mühlburger Tor','Yorckstr','Stadt. Klinikum','Hertzstr','Feierabendweg','Neureuter Str','Siemensallee',"Lassallestr"
            ],
            datasets: [{
                label: 'History of occupancy level: Wolfartsweier - Siemensallee',
                backgroundColor: [
                    
                    '#c1e5b0'
                ],
                borderColor: 'rgb(0,26,4)',
                hoverBackgroundColor: 'red',
                data:  modalTrend4
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