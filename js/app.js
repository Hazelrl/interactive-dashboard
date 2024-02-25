
/***********************************
 ALERT BANNER
***********************************/
// Insert alert banner text
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = 
`
    <p><span class="bold">Alert:</span> You have unread messages</p>
    <p class="close-notif">x</p>
`;

// Add event listener to remove the banner when user clicks the x
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("close-notif")){
        alertBanner.style.display = "none";
    }
}
);

// Add event listen to expand the banner when use clicks on alerts bell icon
const bell = document.getElementById("bell-icon");

bell.addEventListener('click', e => {
        alertBanner.id = '';
        alertBanner.innerHTML = 
        `
            <div id="top-alert">    
                <p><span class="bold">Alert:</span> You have unread messages</p>
                <p class="close-notif">x</p>
            </div>
            <div id="detail-alert">
                <p>Victoria Chambers liked your post</p>
                <p>Dan Oliver commented on your post</p>
                <p>Dawn Wood tagged you in a post</p>
            </div>
    `;
    }
)


/***********************************
 CHART WIDGET - TRAFFIC
***********************************/

const trafficCanvas = document.getElementById("traffic-chart");

let trafficData = {
    labels: [ '16-22','23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31' ],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1900, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
        },
    scales: {
        y: {
        beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});


/***********************************
 CHART WIDGET - DAILY CHART
***********************************/
/* Select hourly, daily, weekly or monthly */


const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
        }]
    };

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
            }
    },
    plugins: {
        legend: {
        display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


/***********************************
 CHART WIDGET - MOBILE CHART
***********************************/

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Phones'],
    datasets: [{
        label: '# of users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


/***********************************
 MESSAGING
***********************************/
const user = document.getElementById("search-name");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});