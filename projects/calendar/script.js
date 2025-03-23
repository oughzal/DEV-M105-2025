function getDaysInMonth(month, year) {
    let date = new Date(year, month, 1);
    let firstDayIndex = date.getDay();
    // Adjust to the first Monday before or on the 1st of the month
    date.setDate(date.getDate() - ((firstDayIndex + 6) % 7));

    let days = [];
    let week = [];
    let i = 0;
    while (i++ <= 42) {
        week.push({
            day: date.getDate(),
            dayOfWeek: date.getDay(),
            dayName: date.toLocaleDateString('fr-FR', { weekday: 'long' }),
            month: date.getMonth(),
            year: date.getFullYear(),
            isInMonth: date.getMonth() === month
        });
        date.setDate(date.getDate() + 1);
        if (date.getDay() === 1) {
            days.push(week);
            week = [];
        }
    }
    if (days[days.length - 1].every(day => day.month === month + 1)) {
        days.pop();
    }
    return days;

}

function renderCalendar() {
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    let days = getDaysInMonth(parseInt(month), parseInt(year));
    let calender = document.getElementById('calendar');
    calender.innerHTML = '';
    days.forEach(week => {
        let row = document.createElement('div');
        row.className = 'row';
        week.forEach(day => {
            let col = document.createElement('div');
            col.className = 'col d-flex justify-content-center align-items-center text-center';
            col.innerHTML = day.day;
            if (!day.isInMonth) {
                col.classList.add('text-muted');
            }
            if (day.dayOfWeek===0 || day.dayOfWeek===6) {
                col.classList.add('text-danger');
            }
            row.appendChild(col);
        });
        calender.appendChild(row);
    });
}

const monthDiv = document.getElementById('month');
const yearDiv = document.getElementById('year');
year.innerHTML = "";
for(i=1900; i<=2100; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    yearDiv.appendChild(option);
}


let date = new Date();
monthDiv.value = date.getMonth();
yearDiv.value = date.getFullYear();
renderCalendar()


