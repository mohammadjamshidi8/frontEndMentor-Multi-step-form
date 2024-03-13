let toggleBtn = document.querySelector('#toggle')

// let stepOneContainer = document.querySelector('#step-1')


let monthlyText = document.querySelector('#monthly')
let yearlyText = document.querySelector('#yearly')
let planOffer = document.querySelectorAll('#free-offer')

let arcadePrice = document.querySelector('#arcade-price')
let advancedPrice = document.querySelector('#advanced-price')
let proPrice = document.querySelector('#pro-price')

let onlineAdd = document.querySelector('#online-add')
let storageAdd = document.querySelector('#storage-add')
let customAdd = document.querySelector('#custom-add')

let allForms = document.querySelectorAll('#forms')
let allStepBtns = document.querySelectorAll('#step-buttons')

let stepOneInputs = document.querySelectorAll('#step-one-form input')

let nextStepBtn = document.querySelector('#next-button')
let backBtn = document.querySelector('#back-button')

let arrayForm = Array.from(allForms)
let arrayBtn = Array.from(allStepBtns)

let count = 0

let currentCount = 0

console.log(allStepBtns);

nextStepBtn.addEventListener('click', () => {
    arrayForm[currentCount].classList.add('hidden')
    arrayBtn[currentCount].classList.remove('active')

    if (arrayForm[0].className.includes('hidden')) {
        backBtn.classList.remove('hidden')
    }

    // else {
    //     backBtn.classList.add('hidden')
    // }

    // console.log(count);

    // console.log(arrayForm.length - 1);
    if (count < arrayForm.length - 1) {
        count++
        arrayForm[count].classList.remove('hidden')
        arrayBtn[count].classList.add('active')
        // console.log(count);
    } else {
        alert('finish')
        
    }

    currentCount = count
    console.log(count);
})

backBtn.addEventListener('click', () => {
    arrayForm[currentCount].classList.add('hidden')
    arrayBtn[currentCount].classList.remove('active')

    
    console.log(currentCount);
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



console.log(count);

window.addEventListener('load',() => {
    if (arrayForm[0].className.includes('hidden')) {
        console.log('step-1-pass');
        backBtn.classList.remove('hidden')
    } else {
        backBtn.classList.add('hidden')
    }
})

stepOneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length) {
            console.log('true');
        } else {
            console.log('false');
        }
    })
})


let activePlanClass = 'font-medium text-marineBlue';
let oldPlanClass = 'font-medium text-coolGray'

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




let inputs = arrayForm[1].querySelectorAll('input.radio')
console.log(inputs);
let arrayInputs = Array.from(inputs)

let test = null

arrayInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        test = e.target.parentElement.querySelector('span')
        console.log(test.innerHTML);
    })
})