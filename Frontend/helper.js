// Back button
let backButton = document.querySelector('.backButton')
if (backButton != null) {
    backButton.addEventListener('click', () => {
        window.history.back()
    })
}

// Get current date and time
var today = new Date();
var date = today.getFullYear('y') + '-' + (today.getMonth('M') + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes()

// Update current time and date in the UI
var currentDate = document.getElementById("currentDate")
currentDate.innerHTML = date

var currentTime = document.getElementById("currentTime")
currentTime.innerHTML = time