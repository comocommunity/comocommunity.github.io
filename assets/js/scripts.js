const years = [2023, 2024, 2025];
function createChart(sugMax) {
    var labels = [];
    var config = {
        type: 'line',
        
        data: {
            
            labels: labels,
            datasets: [{
                label: years[0],
                borderColor: 'rgba(150, 150, 150, 0.5)',
                backgroundColor: 'rgba(150, 150, 150, 0.5)',
                data: [],
                borderDash: [5, 5],
                fill: false,
                lineTension: 0,
            },
            {
                label: years[1],
                borderColor: 'rgba(60, 60, 60, 0.5)',
                backgroundColor: 'rgba(60, 60, 60, 0.5)',
                data: [],
                fill: false,
                lineTension: 0,
            },
            {
                label: years[2],
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
    {   // 2023
        'Burglary':                             [14, 15, 11, 7,  10, 7,  7,  4,  8,  6,  4,  4 ],
        'Theft':                                [60, 42, 54, 60, 76, 36, 47, 50, 59, 51, 53, 59],
        'Property Damage':                      [8,  17, 16, 10, 20, 1,  10, 13, 12, 12, 21, 14],
        'Stealing of Vehicles':                 [4,  6,  5,  4,  6,  7,  7,  3,  8,  0,  4,  3 ],
        'Robbery':                              [0,  1,  1,  1,  0,  0,  0,  1,  0,  3,  1,  1 ],
        'Threatening Behaviour (Non-Family)':   [0,  1,  1,  0,  0,  0,  0,  1,  0,  3,  2,  2 ],
        'Assault (Non-Family)':                 [9,  2,  0,  1,  4,  6,  7,  6,  2,  6,  4,  6 ],
        'Drug Offences':                        [15, 8,  10, 3,  3,  22, 18, 6,  10, 7,  6,  7 ],
        'Graffiti':                             [0,  1,  2,  0,  2,  0,  0,  0,  0,  0,  0,  0 ],
    },
    {   // 2024
        'Burglary':                             [7,  5,  6,  7,  3,  3,  5,  13, 11, 4,  8,  11],
        'Theft':                                [53, 52, 56, 38, 27, 39, 36, 40, 36, 35, 30, 30],
        'Property Damage':                      [12, 10, 12, 8,  11, 11, 13, 3,  8,  11, 5,  7 ],
        'Stealing of Vehicles':                 [4,  1,  6,  0,  1,  2,  0,  3,  2,  2,  1,  6 ],
        'Robbery':                              [1,  1,  4,  0,  0,  2,  1,  0,  0,  2,  1,  0 ],
        'Threatening Behaviour (Non-Family)':   [0,  0,  4,  0,  2,  3,  0,  3,  0,  3,  3,  1 ],
        'Assault (Non-Family)':                 [5,  6,  3,  0,  4,  4,  5,  5,  3,  6,  2,  2 ],
        'Drug Offences':                        [1,  3,  8,  5,  3,  0,  10, 10, 6,  7,  0,  9 ],
        'Graffiti':                             [0,  0,  0,  0,  2,  0,  0,  0,  0,  0,  0,  1 ]
    },
    {   // 2025
        'Burglary':                             [16, 9,  5 ],
        'Theft':                                [52, 44, 62],
        'Property Damage':                      [7,  7,  12],
        'Stealing of Vehicles':                 [2,  0,  1 ],
        'Robbery':                              [1,  2,  1 ],
        'Threatening Behaviour (Non-Family)':   [2,  1,  1 ],
        'Assault (Non-Family)':                 [7,  5,  4 ],
        'Drug Offences':                        [6,  8,  9 ],
        'Graffiti':                             [0,  0,  0 ]
    }
]

const globalMax =  {
        'Burglary': 20,
        'Theft': 80,
        'Property Damage': 10,
        'Stealing of Vehicles': 10,
        'Robbery': 10,
        'Threatening Behaviour (Non-Family)': 10,
        'Assault (Non-Family)': 15,
        'Drug Offences': 15,
        'Graffiti': 5
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
                            <p class="mb-0 mx-2">${years[0]}</p>
                        </div>
                        <div class="col col-4 d-flex justify-content-center align-items-center">
                            <svg class="legend"><g fill="#606060" fill-opacity="0.5"><rect width="100%" height="100%"></rect></g></svg>
                            <p class="mb-0 mx-2">${years[1]}</p>
                        </div>
                        <div class="col col-4 d-flex justify-content-center align-items-center">
                            <svg class="legend"><g fill="#123e6b" fill-opacity="0.75"><rect width="100%" height="100%"></rect></g></svg>
                            <p class="mb-0 mx-2">${years[2]}</p>
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
