let test = document.querySelector('#toggle')

let monthlyText = document.querySelector('#monthly')
let yearlyText = document.querySelector('#yearly')
let planOffer = document.querySelectorAll('#free-offer')

let arcadePrice = document.querySelector('#arcade-price')
let advancedPrice = document.querySelector('#advanced-price')
let proPrice = document.querySelector('#pro-price')


console.log(monthlyText,yearlyText,planOffer);


let activePlanClass = 'font-medium text-marineBlue';
let oldPlanClass = 'font-medium text-coolGray'

test.addEventListener('click',(e) => {
    if (e.target.checked) {

        monthlyText.className = activePlanClass
        yearlyText.className = oldPlanClass

        arcadePrice.innerHTML = '$9/mo'
        advancedPrice.innerHTML = '$12/mo'
        proPrice.innerHTML = '$15/mo'

        planOffer.forEach(text => {
            text.classList.add('hidden')
        })

        
    } else {
        yearlyText.className = activePlanClass
        monthlyText.className = oldPlanClass

        arcadePrice.innerHTML = '$90/yr'
        advancedPrice.innerHTML = '$120/yr'
        proPrice.innerHTML = '$150/yr'

        planOffer.forEach(text => {
            text.classList.remove('hidden')
        })
    }
})