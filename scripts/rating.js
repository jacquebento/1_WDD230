const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");


function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
    document.querySelector(".rate").textContent = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

