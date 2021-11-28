const myDate = new Date(); 
const xmas = Date.parse("Dec 25, "+ myDate.getFullYear()) 
const today = Date.parse(myDate) 

const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 
const days = document.getElementById('days')

if (daysToChristmas == 0) {
    days.textContent = "C'est noël !! Joyeux Noël !";
}

if (daysToChristmas > 0) {
    days.textContent = "Il reste "+ daysToChristmas + " avant Noël.";
}

if (daysToChristmas < 0) {
    days.textContent = daysToChristmas + " jours depuis Noël !";
}

