const timeEl = document.getElementById('currentTime');
function updateTime() {
    timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);