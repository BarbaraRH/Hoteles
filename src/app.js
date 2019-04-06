
const hotels = [
    { hotel: 'Lakewood', stars: 3, price: 110, vipPrice: 80, wePrice: 90, weVipPrice: 80 },
    { hotel: 'Bridgewood', stars: 4, price: 160, vipPrice: 110, wePrice: 60, weVipPrice: 50 },
    { hotel: 'Ridgewood', stars: 5, price: 220, vipPrice: 100, wePrice: 150, weVipPrice: 40 }
]

function bestHotel(premium, array) {
    let compareArray = [];
    for (let i = 0; i < hotels.length; i++) {
        let cost = 0;
        for (let j = 0; j < array.length; j++) {
            if (premium === false) {
                if (array[j] === "week") {
                    cost += hotels[i].price;
                } else if (array[j] === "wknd") {
                    cost += hotels[i].wePrice;
                }
            } else if (premium === true) {
                if (array[j] === "week") {
                    cost += hotels[i].vipPrice;
                } else if (array[j] === "wknd") {
                    cost += hotels[i].weVipPrice;
                }
            }
        }
        compareArray.push(cost)
    }
    console.log(compareArray)
}



submit.addEventListener("click", getInput);

function getInput() {
    let start = new Date(from.value);
    let end = new Date(to.value);
    let premium = vip.checked;
    console.log(start, end, premium);
    dayType(start, end)
}

function dayArray(start, end) {
    let array = [];
    while (start <= end) {
        array.push((String(new Date(start))).substring(0, 3));
        start.setDate(start.getDate() + 1);
    }
    return array;
}

function dayType(start, end) {
    array = dayArray(start, end);
    dayTypeArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Fri" || array[i] === "Sat") {
            dayTypeArray.push("wknd");
        } else {
            dayTypeArray.push("week")
        }
    }
    console.log(dayTypeArray)
}





/* function getDates() {
    let start = new Date(document.getElementById("from").value);
    let end = new Date(document.getElementById("to").value);
    dayArray = [];
    while (start <= end) {
        dayArray.push((String(new Date(start))).substring(0, 3));
        start.setDate(start.getDate() + 1);
    }
    return dayArray;
} */









/* function myFunction() {
    let date = document.getElementById("from").value;
    let splitDate = date.split("-");
    let numberDate = splitDate.map(x => parseInt(x));
    let k = numberDate[2];
    let m;
    let D = Number(((numberDate[0]).toString().split('').slice(2)).join(''))
    let C = Number(((numberDate[0]).toString().split('').slice(0, 2)).join(''))
    if (numberDate[1] > 2) {
        m = numberDate[1] - 2;
    } else if (numberDate[1] <= 2) {
        m = numberDate[1] + 2;
        D -= 1;
    }
    let f = k + Math.floor((13 * m - 1) / 5) + D + Math.floor(D / 4) + Math.floor(C / 4) - 2 * C;
    if (f > 7) {
        f = f % 7;
    }
    document.getElementById("root").innerHTML = f
} */

/*
http://mathforum.org/dr.math/faq/faq.calendar.html
k is the day of the month. Let's use January 29, 2064 as an example. For this date, k = 29.
m is the month number. Months have to be counted specially for Zeller's Rule: March is 1, April is 2, and so on to February, which is 12. (This makes the formula simpler, because on leap years February 29 is counted as the last day of the year.) Because of this rule, January and February are always counted as the 11th and 12th months of the previous year. In our example, m = 11.
D is the last two digits of the year. Because in our example we are using January (see previous bullet) D = 63 even though we are using a date from 2064.
C stands for century: it's the first two digits of the year. In our case, C = 20. */