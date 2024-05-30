function calculateAge() {
    const today = new Date()
    const birthdayInput = document.getElementById('birthday').value
    const birthday_parts = birthdayInput.split('-')
    const birthday = birthday_parts[0]
    const birthmonth = birthday_parts[1]
    const birthyear = birthday_parts[2]
    const birthDate = new Date(birthyear, birthmonth, birthday)




    const isValidate = (date) => {
        return (
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        )
    }


    if (!isValidate(birthDate)) {
        alert("Invalid date format")
        return
    }


    const ageInMiliseconds = today - birthDate
    const ageinSeconds = Math.floor(ageInMiliseconds / 1000)
    const ageInMinutes = Math.floor(ageinSeconds / 60)
    const ageInHours = Math.floor(ageInMinutes / 60)
    const ageInDays = Math.floor(ageInHours / 24)
    const ageinWeeks = Math.floor(ageInDays / 7)
    const ageInMonths = Math.floor(ageInDays / 30)
    const ageInYears = Math.floor(ageInDays / 365.25)


    const resultContainer = document.getElementById('result-container')
    const result = document.getElementById('result')

    result.innerHTML = `



<div class="result-item">
<h3>سن :  </h3>
<p>${ageInYears} years   ${ageInMonths % 12} months  ${ageInDays % 30} days</p>
</div>

<div class="result-item">
<h3>دقایق گذشته :  </h3>
<p>${ageInMinutes} minutes</p>
</div>

<div class="result-item">
<h3>هفته های گذشته :  </h3>
<p>${ageinWeeks} weeks</p>
</div>

<div class="result-item">
<h3>ثانیه های گذشته :  </h3>
<p>${ageinSeconds} seconds</p>
</div>



    `

    resultContainer.style.display = 'block'




}







const ageCalculator = document.getElementById('calculator-form')
ageCalculator.addEventListener('submit', (event) => {
    event.preventDefault()
    calculateAge()
})