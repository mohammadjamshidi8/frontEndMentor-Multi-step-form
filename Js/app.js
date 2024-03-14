let $ = document;

let toggleBtn = $.querySelector('#toggle')

let nameInputElem = $.querySelector('#name')
let emailInputElem = $.querySelector('#email')
let phoneInputElem = $.querySelector('#phone')

let monthlyText = $.querySelector('#monthly')
let yearlyText = $.querySelector('#yearly')
let planOffer = $.querySelectorAll('#free-offer')

let arcadePrice = $.querySelector('#arcade-price')
let advancedPrice = $.querySelector('#advanced-price')
let proPrice = $.querySelector('#pro-price')

let onlineAdd = $.querySelector('#online-add')
let storageAdd = $.querySelector('#storage-add')
let customAdd = $.querySelector('#custom-add')

let allForms = $.querySelectorAll('#forms')
let allStepBtns = $.querySelectorAll('#step-buttons')

let stepOneInputs = $.querySelectorAll('#step-one-form input')

let nextStepBtn = $.querySelector('#next-button')
let backBtn = $.querySelector('#back-button')

let perDuration = $.querySelector('#per')


let planPrice = $.querySelector('#plan-price')
let planNameElem = $.querySelector('#plan-name')
let planTime = $.querySelector('#plan-time')

let addOnContainer = $.querySelector('#add-on-container')
let userBasket = $.querySelector('#user-summary')

let buttonBox = $.querySelector('#button-box')

let count = 0

let currentCount = 0

let sum = 0

let arrayForm = Array.from(allForms)
let arrayBtn = Array.from(allStepBtns)

let thankBox = $.querySelector('.thank-box')


nextStepBtn.addEventListener('click', (e) => {

    e.preventDefault()
// hidden button box
    if (!(arrayForm[3].className.includes('hidden'))) {
        buttonBox.classList.add('hidden')
    }

    

    let requiredInputElems = document.getElementById('step-one-form').querySelectorAll("[required]")
    // if phone number input have value go to next step
    requiredInputElems.forEach(input => {
        if (input.value) {
            input.parentElement.querySelector('#error-massege').classList.add('hidden')

            arrayForm[currentCount].classList.add('hidden')
            arrayBtn[currentCount].classList.remove('active')

            if (arrayForm[0].className.includes('hidden')) {
                backBtn.classList.remove('hidden')
            }

            if (count < arrayForm.length - 1) {
                count++
                arrayForm[count].classList.remove('hidden')
                arrayBtn[count].classList.add('active')

                
            } else {
                alert('finish')

            }

            currentCount = count
            // else show phone number error massege
        } else {
            input.parentElement.querySelector('#error-massege').classList.remove('hidden')
        }

        // if user select his plan calculate user bill
        if (!(arrayForm[3].className.includes('hidden'))) {
            nextStepBtn.innerHTML = 'confrim'
            nextStepBtn.classList.add('bg-purplishBlue')
            let regex = /\d+/
            let userPlanePrice = regex.exec(planPrice.innerHTML)

            let userAddOns = $.querySelectorAll('#user-add-price')
            userAddOns.forEach(add => {
                let x = regex.exec(add.innerHTML)
                sum = Number(x[0]) + sum
            })


            let totalSum = sum + Number(userPlanePrice[0])

            userBasket.innerHTML = `$${totalSum}`

        }


    })


})

// go back button logic
backBtn.addEventListener('click', () => {
    arrayForm[currentCount].classList.add('hidden')
    arrayBtn[currentCount].classList.remove('active')


    if (currentCount <= 0) {
        alert('start')
        return false
    } else {
        currentCount--
        arrayForm[currentCount].classList.remove('hidden')
        arrayBtn[currentCount].classList.add('active')
    }

    if (arrayBtn[0].className.includes('active')) {
        backBtn.classList.add('hidden')
    }


    count = currentCount
})



// in first loading hiden go back button
window.addEventListener('load', () => {
    if (arrayForm[0].className.includes('hidden')) {
        backBtn.classList.remove('hidden')
    } else {
        backBtn.classList.add('hidden')
    }

})


let activePlanClass = 'font-medium text-marineBlue';
let oldPlanClass = 'font-medium text-coolGray'

// if user select monthly or yearly plan change the prices
toggleBtn.addEventListener('click', (e) => {
    if (e.target.checked) {

        monthlyText.className = activePlanClass
        yearlyText.className = oldPlanClass

        arcadePrice.innerHTML = '$9/mo'
        advancedPrice.innerHTML = '$12/mo'
        proPrice.innerHTML = '$15/mo'

        onlineAdd.innerHTML = '$1/mo'
        storageAdd.innerHTML = '$2/mo'
        customAdd.innerHTML = '$2/mo'

        planOffer.forEach(text => {
            text.classList.add('hidden')
        })


    } else {
        yearlyText.className = activePlanClass
        monthlyText.className = oldPlanClass

        arcadePrice.innerHTML = '$90/yr'
        advancedPrice.innerHTML = '$120/yr'
        proPrice.innerHTML = '$150/yr'


        onlineAdd.innerHTML = '$10/yr'
        storageAdd.innerHTML = '$20/yr'
        customAdd.innerHTML = '$20/yr'


        planOffer.forEach(text => {
            text.classList.remove('hidden')
        })
    }
})


// get all add-ons and import to summary step
let allAddOns = allForms[2].querySelectorAll('input')

let allAddOnsArray = Array.from(allAddOns)

allAddOnsArray.forEach(checkbox => {
    checkbox.addEventListener('input', (e) => {
        if (e.target.checked) {
            let selectAddPrice = e.target.parentElement.querySelector('.add-on-price').innerHTML;
            let selectAddName = e.target.parentElement.querySelector('h3').innerHTML
            addOnContainer.insertAdjacentHTML('beforeend', `
            <div id="user-add-on" class="flex justify-between items-center">
                <span id="add-temp-title" class="text-coolGray">${selectAddName}</span>
                <span id="user-add-price" class="text-marineBlue">${selectAddPrice}</span>
              </div>
            `)

        }
    })
})

// add selected add-on to summary page 
let inputs = arrayForm[1].querySelectorAll('input.radio')
let arrayInputs = Array.from(inputs)

let selectedPlanPrice = null

arrayInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        selectedPlanPrice = e.target.parentElement.querySelector('span')

        let planName = e.target.parentElement.querySelector('h2')

        planPrice.innerHTML = selectedPlanPrice.innerHTML

        let fullPlanMonthly = `${planName.innerHTML} (Monthly)`
        let fullPlanYearly = `${planName.innerHTML} (Yearly)`


        if (toggleBtn.checked) {
            planNameElem.innerHTML = fullPlanMonthly
            perDuration.innerHTML = 'per month'

        } else {
            planNameElem.innerHTML = fullPlanYearly
            perDuration.innerHTML = 'per year'
        }
    })
})