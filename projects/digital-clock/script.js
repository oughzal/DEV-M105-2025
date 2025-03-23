
function updateClock() {
    const clockDiv = document.getElementById('clock');
    const dateDiv = document.getElementById('date');
    const daysDiv = document.getElementById('days');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const dayOfWeek = (now.getDay() === 0) ? 6 : now.getDay() - 1;
    const timeStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const dateStr = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year % 100}`;
    Array.from(daysDiv.children).forEach(d => d.classList.remove('active'));
    daysDiv.children[dayOfWeek].classList.add('active');
    clockDiv.innerText = timeStr;
    dateDiv.innerText = dateStr;
}

setInterval(updateClock, 1000);
updateClock();