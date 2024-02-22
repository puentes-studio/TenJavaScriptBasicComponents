
function calculateAge() {

    const today = new Date();
    const birthDateInput = document.getElementById('birthDate').value;
    const birthDateParts = birthDateInput.split('-');
    const birthDay = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;
    const birthYear = birthDateParts[2];
    const birthDate = new Date(birthYear, birthMonth, birthDay);


    console.log(birthDateInput);
    console.log(birthDateParts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const isValidDate = (date) => {
        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };

    if(!isValidDate(birthDate)) {
        alert('Invalid Date Format: Please enter a valid date DD-MM-YYYY');
        return;

    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds/1000);
    const ageInMinutes = Math.floor(ageInSeconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageinMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById('resultContainer');
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} years, ${ageinMonths % 12} months and ${ageInDays % 30} days.</p>
        </div>
        <div class="result-item">
            <h3>Months Passed:</h3>
            <p>${ageinMonths}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInWeeks}</p>
        </div>
        <div class="result-item">
            <h3>Weeks Passed:</h3>
            <p>${ageInDays}</p>
        </div>
        <div class="result-item">
            <h3>Hours Passed:</h3>
            <p>${ageInHours}</p>
        </div>
        <div class="result-item">
            <h3>Minutes Passed:</h3>
            <p>${ageInMinutes}</p>
        </div>
        <div class="result-item">
            <h3>Seconds Passed:</h3>
            <p>${ageInSeconds}</p>
        </div>
        <div class="result-item">
            <h3>Milliseconds Passed:</h3>
            <p>${ageInMilliseconds}</p>
        </div>

    `;

    resultContainer.style.display = "block";



}


const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculateAge();
});