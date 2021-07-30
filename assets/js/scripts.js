function createChart(sugMax) {
    var labels = [];
    var config = {
        type: 'line',
        
        data: {
            
            labels: labels,
            datasets: [{
                label: (new Date().getFullYear()-2),
                borderColor: 'rgba(150, 150, 150, 0.5)',
                backgroundColor: 'rgba(150, 150, 150, 0.5)',
                data: [],
                borderDash: [5, 5],
                fill: false,
                lineTension: 0,
            },
            {
                label: (new Date().getFullYear()-1),
                borderColor: 'rgba(60, 60, 60, 0.5)',
                backgroundColor: 'rgba(60, 60, 60, 0.5)',
                data: [],
                fill: false,
                lineTension: 0,
            },
            {
                label: new Date().getFullYear(),
                borderColor: 'rgba(18, 62, 107, 0.75)',
                backgroundColor: 'rgba(18, 62, 107, 0.75)',
                data: [],
                fill: false,
                lineTension: 0,

            }
            ]
        },
        options: {
            responsive: true,
            bezierCurve: false,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            elements: {
                point: {
                    radius: 0
                }
            },
            animation: {
                duration: 0  
            },
            legend: {
                display: false
            },
            hover: {
                mode: 'nearest',
                intersect: false
            },
            tooltips: {
                callbacks: {
                    title: function(t, d) {
                        return "Month: "+d.labels[t[0].index];
                    }
                }
            },
            
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month',
                        fontColor: '#999'
                    },
                    ticks: {
                        fontColor: '#999'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'No. of Incidents',
                        fontColor: '#999'
                    },
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: sugMax,
                        fontColor: '#999',
                        maxTicksLimit: 6
                    }
                }]
            }
        }
    };
    return config;
}

const globalData = [
    {   // 2019
        'Burglary (Dwelling)': [14, 16, 12, 4, 13, 13, 18, 20, 24, 20, 24, 14],
        'Burglary (Non-Dwelling)': [ 0,  0, 1, 3, 3, 3, 1, 1, 3, 4, 1, 2],
        'Theft': [21, 30, 16, 33, 36, 21, 39, 44, 33, 38, 41, 27],
        'Property Damage': [6, 5, 8, 5, 9, 7, 8, 13, 9, 10, 16, 14],
        'Stealing of Vehicles': [3, 4, 2, 2, 2, 3, 5, 6, 6, 8, 3, 7],
        'Robbery': [1, 1,  0,  0,  0,  0,  0, 2, 1, 1,  0,  0],
        'Threatening Behaviour (Non-Family)': [ 0, 1,  0,  0,  0,  0, 1, 2,  0,  0, 2, 2],
        'Assault (Non-Family)': [1, 2, 1, 1, 1, 1, 3, 4, 3, 3, 4, 9],
        'Drug Offences': [2, 2, 6,  0, 2, 10, 4, 2, 8, 1, 3, 4]
    },
    {   // 2020
        'Burglary (Dwelling)': [13, 12, 15, 11, 6, 8, 9, 9, 18, 14, 14, 11],
        'Burglary (Non-Dwelling)': [1, 0, 2, 1, 1, 0, 1, 1, 1, 1, 1, 0],
        'Theft': [41, 36, 39, 37, 27, 13, 12, 20, 47, 18, 38, 34],
        'Property Damage': [13, 10, 14, 7, 8, 5, 8, 6, 6, 1, 4, 8],
        'Stealing of Vehicles': [4, 3, 4, 2, 2, 3, 0, 2, 1, 2, 1, 2],
        'Robbery': [1, 0, 3, 0, 0, 0, 0, 0, 2, 1, 0, 2],
        'Threatening Behaviour (Non-Family)': [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        'Assault (Non-Family)': [2, 1, 2, 1, 2, 6, 4, 1, 1, 3, 2, 0],
        'Drug Offences': [4, 4, 7, 2, 7, 8, 3, 16, 7, 5, 0, 7]
    },
    {   // 2021
        'Burglary (Dwelling)': [16, 13, 7, 13, 9, 19],
        'Burglary (Non-Dwelling)': [5, 2, 0, 2, 0, 0],
        'Theft': [42, 44, 32, 44, 34, 27],
        'Property Damage': [13, 10, 6, 9, 9, 4],
        'Stealing of Vehicles': [1, 2, 1, 5, 2, 4],
        'Robbery': [1, 0, 1, 0, 0, 1],
        'Threatening Behaviour (Non-Family)': [1, 1, 0, 0, 0, 2],
        'Assault (Non-Family)': [5, 4, 5, 2, 7, 6],
        'Drug Offences': [1, 10, 3, 11, 4, 1]
    }
]

const globalMax =  {
        'Burglary (Dwelling)': 30,
        'Burglary (Non-Dwelling)': 10,
        'Theft': 50,
        'Property Damage': 10,
        'Stealing of Vehicles': 10,
        'Robbery': 10,
        'Threatening Behaviour (Non-Family)': 10,
        'Assault (Non-Family)': 15,
        'Drug Offences': 15
}

window.charts = [];

for (let i=0; i<9; i++) {
    let innerHTML = `<div class="col col-xs-12 col-sm-6 col-lg-4">
                        <h4 class="text-center">${Object.getOwnPropertyNames(globalData[0])[i]}</h4>
                        <div class="row text-center my-2">
                        <div class="col col-4 d-flex justify-content-center align-items-center">
                        <svg class="legend">
                        <defs>
                          <linearGradient id="solids" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style="stop-color:rgb(150, 150, 150);stop-opacity:0.5" />
                            <stop offset="20%" style="stop-color:rgb(150, 150, 150);stop-opacity:0.5" />
                            <stop offset="20%" style="stop-color:rgb(150, 150, 150);stop-opacity:0" />
                            <stop offset="40%" style="stop-color:rgb(150, 150, 150);stop-opacity:0" />
                            <stop offset="40%" style="stop-color:rgb(150, 150, 150);stop-opacity:0.5" />
                            <stop offset="60%" style="stop-color:rgb(150, 150, 150);stop-opacity:0.5" />
                            <stop offset="60%" style="stop-color:rgb(150, 150, 150);stop-opacity:0" />
                            <stop offset="80%" style="stop-color:rgb(150, 150, 150);stop-opacity:0" />
                            <stop offset="80%" style="stop-color:rgb(150, 150, 150);stop-opacity:0.5" />
                            <stop offset="100%" style="stop-color:rgb(150, 150, 150);stop-opacity:0.5" />
                          </linearGradient>
                        </defs>
                        <rect width="20px" height="5px" fill="url(#solids)" />
                      </svg>
                            <p class="mb-0 mx-2">2019</p>
                        </div>
                        <div class="col col-4 d-flex justify-content-center align-items-center">
                            <svg class="legend"><g fill="#606060" fill-opacity="0.5"><rect width="100%" height="100%"></rect></g></svg>
                            <p class="mb-0 mx-2">2020</p>
                        </div>
                        <div class="col col-4 d-flex justify-content-center align-items-center">
                            <svg class="legend"><g fill="#123e6b" fill-opacity="0.75"><rect width="100%" height="100%"></rect></g></svg>
                            <p class="mb-0 mx-2">2021</p>
                        </div>
                    </div>
                        <canvas id="chart${i+1}">
                    </div>`;
    document.getElementById('stats').innerHTML += innerHTML;
}

for (let i=0; i<9; i++) {
    const propertyName = Object.getOwnPropertyNames(globalData[0])[i];
    const ctx = document.getElementById(`chart${i+1}`).getContext('2d');
    window.charts[propertyName] = new Chart(ctx, createChart(globalMax[Object.getOwnPropertyNames(globalMax)[i]]));
    window.charts[propertyName].data.labels = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for (let j=0; j<3; j++) {
        window.charts[propertyName].data.datasets[j].data = globalData[j][propertyName];
    }
    window.charts[propertyName].update();
}

window.onscroll = function() {scrollFunction()};
const scrollBtn = document.getElementById('scrollBtn');

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
}
