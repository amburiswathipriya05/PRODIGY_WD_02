
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
    const time = Date.now() - startTime + elapsedTime;
    const date = new Date(time);
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, '0');
    document.getElementById('display').innerText = \`\${minutes}:\${seconds}:\${milliseconds}\`;
}

function start() {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
}

function pause() {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById('display').innerText = '00:00:00';
    elapsedTime = 0;
    document.getElementById('laps').innerHTML = '';
}

function lap() {
    const lapTime = document.getElementById('display').innerText;
    const lapList = document.getElementById('laps');
    const listItem = document.createElement('li');
    listItem.textContent = lapTime;
    lapList.appendChild(listItem);
}
