// Initial Variables-------------------------------------------------------------------------------------------------------------------------------------
var barChartSub1 = document.getElementById('barChart1').getContext('2d');
var barChartSub2 = document.getElementById('barChart2').getContext('2d');
var barChartSub3 = document.getElementById('barChart3').getContext('2d');
var barChartSub4 = document.getElementById('barChart4').getContext('2d');
var barChartSub5 = document.getElementById('barChart5').getContext('2d');
var barChartSub6 = document.getElementById('barChart6').getContext('2d');
var barChartSub7 = document.getElementById('barChart7').getContext('2d');
var barChartSub8 = document.getElementById('barChart8').getContext('2d');

// BAR Charts-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addChartSub1 () {
    var chart = new Chart(barChartSub1, {
        id: 'barChartSub1',
        type: 'bar',

        data: {
            labels: [
                'TEST', 'TEST1', 'TEST2'
            ],
            datasets: [{
                label: 'TEST',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub2 () {
    var chart = new Chart(barChartSub2, {
        id: 'ChartSubInnenOst',
        type: 'bar',

        data: {
            labels: [
                'TESTsub2', 'TESTsub2', 'TEST2'
            ],
            datasets: [{
                label: 'TESTsub2',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub3 () {
    var chart = new Chart(barChartSub3, {
        id: 'barChartSub3',
        type: 'bar',

        data: {
            labels: [
                'TEST1', 'TESTsub', 'TEST'
            ],
            datasets: [{
                label: 'TESTsub3',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub4 () {
    var chart = new Chart(barChartSub4, {
        id: 'barChartSub4',
        type: 'bar',

        data: {
            labels: [
                'TESTsub2', 'TESTsub2', 'TEST2'
            ],
            datasets: [{
                label: 'TESTsub4',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub5 () {
    var chart = new Chart(barChartSub5, {
        id: 'barChartSub5',
        type: 'bar',

        data: {
            labels: [
                'TESTsub2', 'TESTsub2', 'TEST2'
            ],
            datasets: [{
                label: 'TESTsub5',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub6 () {
    var chart = new Chart(barChartSub6, {
        id: 'barChartSub6',
        type: 'bar',

        data: {
            labels: [
                'TESTsub2', 'TESTsub2', 'TEST2'
            ],
            datasets: [{
                label: 'TESTsub6',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub7 () {
    var chart = new Chart(barChartSub7, {
        id: 'barChartSub7',
        type: 'bar',

        data: {
            labels: [
                'TESTsub2', 'TESTsub2', 'TEST2'
            ],
            datasets: [{
                label: 'TESTsub7',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

function addChartSub8 () {
    var chart = new Chart(barChartSub8, {
        id: 'barChartSub8',
        type: 'bar',

        data: {
            labels: [
                'TESTsub2', 'TESTsub2', 'TEST2'
            ],
            datasets: [{
                label: 'TESTsub8',
                backgroundColor: 'rgb(70,130,180)',
                borderColor: 'rgb(70,130,180)',
                data: [
                    5, 6, 10
                ]
            }]
        },

        options:{}
    })
}

