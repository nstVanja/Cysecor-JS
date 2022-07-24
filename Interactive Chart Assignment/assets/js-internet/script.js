const dataJson = [
  {
    "country": "China",
    "region": "Asia",
    "internet_users": 1156.74,
    "population": 1425.89,
    "percentage": 81.12
  },
  {
    "country": "India",
    "region": "Asia",
    "internet_users": 1010.71,
    "population": 1407.56,
    "percentage": 71.81
  },
  {
    "country": "United States",
    "region": "Americas",
    "internet_users": 312.32,
    "population": 337,
    "percentage": 92.68
  },
  {
    "country": "Indonesia",
    "region": "Asia",
    "internet_users": 196,
    "population": 273.75,
    "percentage": 71.6
  },
  {
    "country": "Brazil",
    "region": "Americas",
    "internet_users": 160.01,
    "population": 214.33,
    "percentage": 74.66
  },
  {
    "country": "Nigeria",
    "region": "Africa",
    "internet_users": 136.2,
    "population": 213.4,
    "percentage": 63.82
  },
  {
    "country": "Bangladesh",
    "region": "Asia",
    "internet_users": 129.18,
    "population": 166.3,
    "percentage": 77.68
  },
  {
    "country": "Russia",
    "region": "Europe",
    "internet_users": 124,
    "population": 145.1,
    "percentage": 85.46
  },
  {
    "country": "Pakistan",
    "region": "Asia",
    "internet_users": 118.8,
    "population": 213.76,
    "percentage": 55.58
  },
  {
    "country": "Japan",
    "region": "Asia",
    "internet_users": 117.4,
    "population": 124.61,
    "percentage": 94.21
  },
  {
    "country": "Mexico",
    "region": "Americas",
    "internet_users": 92.01,
    "population": 128.97,
    "percentage": 71.34
  },
  {
    "country": "Iran",
    "region": "Asia",
    "internet_users": 78.09,
    "population": 87.92,
    "percentage": 88.82
  },
  {
    "country": "Germany",
    "region": "Europe",
    "internet_users": 77.79,
    "population": 83.41,
    "percentage": 93.26
  },
  {
    "country": "Philippines",
    "region": "Asia",
    "internet_users": 73,
    "population": 113.88,
    "percentage": 64.1
  },
  {
    "country": "Turkey",
    "region": "Asia",
    "internet_users": 69.95,
    "population": 84.78,
    "percentage": 82.51
  },
  {
    "country": "Vietnam",
    "region": "Asia",
    "internet_users": 68.17,
    "population": 97.47,
    "percentage": 69.94
  },
  {
    "country": "United Kingdom",
    "region": "Europe",
    "internet_users": 65,
    "population": 67.28,
    "percentage": 96.61
  },
  {
    "country": "France",
    "region": "Europe",
    "internet_users": 59.47,
    "population": 64.53,
    "percentage": 92.16
  },
  {
    "country": "Egypt",
    "region": "Africa",
    "internet_users": 54.74,
    "population": 109.26,
    "percentage": 50.1
  },
  {
    "country": "Italy",
    "region": "Europe",
    "internet_users": 50.54,
    "population": 59.24,
    "percentage": 85.31
  },
  {
    "country": "South Korea",
    "region": "Asia",
    "internet_users": 49.42,
    "population": 51.83,
    "percentage": 95.35
  },
  {
    "country": "Spain",
    "region": "Europe",
    "internet_users": 42.4,
    "population": 47.49,
    "percentage": 89.28
  },
  {
    "country": "Canada",
    "region": "Americas",
    "internet_users": 33.95,
    "population": 38.16,
    "percentage": 88.97
  },
  {
    "country": "Argentina",
    "region": "Americas",
    "internet_users": 33.56,
    "population": 44.36,
    "percentage": 75.65
  },
  {
    "country": "South Africa",
    "region": "Africa",
    "internet_users": 31.86,
    "population": 59.39,
    "percentage": 53.65
  },
  {
    "country": "Colombia",
    "region": "Americas",
    "internet_users": 30.55,
    "population": 51.52,
    "percentage": 59.3
  },
  {
    "country": "Tanzania",
    "region": "Africa",
    "internet_users": 30,
    "population": 63.59,
    "percentage": 47.18
  },
  {
    "country": "Saudi Arabia",
    "region": "Asia",
    "internet_users": 27.05,
    "population": 35.95,
    "percentage": 75.24
  },
  {
    "country": "Algeria",
    "region": "Africa",
    "internet_users": 26.35,
    "population": 44.18,
    "percentage": 59.64
  },
  {
    "country": "Malaysia",
    "region": "Asia",
    "internet_users": 25.34,
    "population": 33.57,
    "percentage": 75.48
  },
  {
    "country": "Morocco",
    "region": "Africa",
    "internet_users": 22.07,
    "population": 37.08,
    "percentage": 59.52
  },
  {
    "country": "Taiwan",
    "region": "Asia",
    "internet_users": 21.92,
    "population": 23.86,
    "percentage": 91.87
  },
  {
    "country": "Australia",
    "region": "Oceania",
    "internet_users": 21.16,
    "population": 25.92,
    "percentage": 81.64
  },
  {
    "country": "Venezuela",
    "region": "Americas",
    "internet_users": 20.56,
    "population": 28.2,
    "percentage": 72.91
  },
  {
    "country": "Ethiopia",
    "region": "Africa",
    "internet_users": 19.54,
    "population": 120.28,
    "percentage": 16.25
  },
  {
    "country": "Iraq",
    "region": "Asia",
    "internet_users": 18.89,
    "population": 43.53,
    "percentage": 43.4
  },
  {
    "country": "Uzbekistan",
    "region": "Asia",
    "internet_users": 16.69,
    "population": 34.08,
    "percentage": 48.97
  },
  {
    "country": "Myanmar",
    "region": "Asia",
    "internet_users": 16.37,
    "population": 53.8,
    "percentage": 30.43
  },
  {
    "country": "Nepal",
    "region": "Asia",
    "internet_users": 16.19,
    "population": 30.03,
    "percentage": 53.91
  },
  {
    "country": "Netherlands",
    "region": "Europe",
    "internet_users": 15.88,
    "population": 17.5,
    "percentage": 90.74
  },
  {
    "country": "Peru",
    "region": "Americas",
    "internet_users": 15.67,
    "population": 33.72,
    "percentage": 46.47
  },
  {
    "country": "Ghana",
    "region": "Africa",
    "internet_users": 15.07,
    "population": 32.83,
    "percentage": 45.9
  }
]

// BAR CHART
let iUsers = dataJson;

iUsers.sort(function(a, b){
    return a.internet_users - b.internet_users;
});

iUsers.reverse();
console.log(iUsers);
console.log('dataJson');
console.log(dataJson);

const barChart = document.getElementById('barChart_01');

new Chart(barChart_01, {
  type: 'bar',
  data: {
    labels: [
      iUsers[0].country,
      iUsers[1].country,
      iUsers[2].country,
      iUsers[3].country,
      iUsers[4].country,
      iUsers[5].country,
      iUsers[6].country,
      iUsers[7].country,
      iUsers[8].country,
      iUsers[9].country,
      iUsers[10].country,
      iUsers[11].country,
      iUsers[12].country,
      iUsers[13].country,
      iUsers[14].country
    ],
    datasets: [{
      label: 'Broj korisnika interneta u milionima',
      data: [
        iUsers[0].internet_users,
        iUsers[1].internet_users,
        iUsers[2].internet_users,
        iUsers[3].internet_users,
        iUsers[4].internet_users,
        iUsers[5].internet_users,
        iUsers[6].internet_users,
        iUsers[7].internet_users,
        iUsers[8].internet_users,
        iUsers[9].internet_users,
        iUsers[10].internet_users,
        iUsers[11].internet_users,
        iUsers[12].internet_users,
        iUsers[13].internet_users,
        iUsers[14].internet_users
        ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 182, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(155, 159, 64, 0.5)'
      ]
    }]
  }
});

// BAR CHART
let eUsers = dataJson;

eUsers.sort(function(a, b){
    return a.percentage - b.percentage;
});

eUsers.reverse();
console.log(eUsers);
console.log('dataJson');
console.log(dataJson);


const barChart_02 = document.getElementById('barChart_02');

new Chart(barChart_02, {
  type: 'bar',
  data: {
    labels: [
      iUsers[0].country,
      iUsers[1].country,
      iUsers[2].country,
      iUsers[3].country,
      iUsers[4].country,
      iUsers[5].country,
      iUsers[6].country,
      iUsers[7].country,
      iUsers[8].country,
      iUsers[9].country,
      iUsers[10].country,
      iUsers[11].country,
      iUsers[12].country,
      iUsers[13].country,
      iUsers[14].country
    ],
    datasets: [{
      label: 'Procenat stanovnika koji koriste internet',
      data: [
        iUsers[0].percentage,
        iUsers[1].percentage,
        iUsers[2].percentage,
        iUsers[3].percentage,
        iUsers[4].percentage,
        iUsers[5].percentage,
        iUsers[6].percentage,
        iUsers[7].percentage,
        iUsers[8].percentage,
        iUsers[9].percentage,
        iUsers[10].percentage,
        iUsers[11].percentage,
        iUsers[12].percentage,
        iUsers[13].percentage,
        iUsers[14].percentage
        ],
      backgroundColor: [
        'rgba(36, 58, 115, 0.5)', 
        'rgba(54, 262, 235, 0.5)',
        'rgba(255, 6, 186, 0.5)',
        'rgba(75, 92, 192, 0.5)',
        'rgba(153, 82, 255, 0.5)',
        'rgba(255, 59, 164, 0.5)',
        'rgba(155, 19, 64, 0.5)'
      ]
    }]
  }
});
