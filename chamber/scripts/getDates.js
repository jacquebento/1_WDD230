let date =  new Date().getFullYear();
let weekday = new Date().getDay();
y.innerHTML = date;

let modify = document.lastModified;
document.querySelector("#lastModified").innerHTML = `Last modified: ${modify}`;
// console.log(weekday)

// // show banner on Mondays, Tuesdays and Wednesdays
// function showBanner(){
//     if (weekday < 4){
//         banner.style.display = "block";
//         banner.style.position = "absolute";
//     }
// }

// showBanner();

// function forecastDay(){
//     // from Monday to Thursday
//     if (weekday < 5){
//         var day1 = weekday;
//         var day2 = weekday + 1;
//         var day3 = weekday + 2;
    
//         nextday1.innerHTML = `${days[day1]}`;
//         nextday2.innerHTML = `${days[day2]}`;
//         nextday3.innerHTML = `${days[day3]}`;
//     }
//     // for Friday
//     if (weekday === 5){
//         nextday1.innerHTML = `${days[5]}`;
//         nextday2.innerHTML = `${days[6]}`;
//         nextday3.innerHTML = `${days[0]}`;
//     }

//     // for Saturday
//     if (weekday === 6){
//         nextday1.innerHTML = `${days[6]}`
//         nextday2.innerHTML = `${days[0]}`;
//         nextday3.innerHTML = `${days[1]}`;
//     }

//     // for Sunday
//     if (weekday === 7){
//         nextday1.innerHTML = `${days[0]}`;
//         nextday2.innerHTML = `${days[1]}`;
//         nextday3.innerHTML = `${days[2]}`;
//     }
    
// }

// forecastDay();