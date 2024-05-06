const h1 = document.querySelector('h1');


let msFrom1970 = new Date().getTime();
let eidDate = new Date();

eidDate.setDate(16);
eidDate.setMonth(5);
eidDate.setHours(0);
eidDate.setMinutes(0);
eidDate.setSeconds(0);

let daysRemaining = Math.floor((eidDate.getTime() - msFrom1970) / (1000 * 60 * 60 * 24));
let hoursRemaining = Math.floor((eidDate.getTime() - msFrom1970) / (1000 * 60 * 60));

h1.innerText = `${daysRemaining} Days are remaining in Eid`;