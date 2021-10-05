// Back button
let backButton = document.querySelector('.backButton')
backButton.addEventListener('click', () => {
    window.history.back()
})

//Get current date
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

//Get current time
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();