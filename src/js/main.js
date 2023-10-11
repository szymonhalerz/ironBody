const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')

const footerYear = document.querySelector('.footer__year')

const womanRadio = document.querySelector('#woman')
const manRadio = document.querySelector('#man')
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const age = document.querySelector('#age')
const activity = document.querySelector('#activity-level')
const dietGoal = document.querySelector('#diet-goal')
const calcBtn = document.querySelector('.calc-btn')

const resultPopup = document.querySelector('.result')
const closeBtn = document.querySelector('.close')
let kcal = document.querySelector('.kcal')

const errorBox = document.querySelector('.error-section')
const errorText = document.querySelector('.error')

//----------------------------------------------------------------

const handleNav = () => {
	document.body.classList.toggle('sticky-body')
	navMobile.classList.toggle('nav-mobile--active')
	burgerBtn.classList.toggle('is-active')
}

navMobile.querySelectorAll('a.nav__link').forEach(el =>
	el.addEventListener('click', () => {
		navMobile.classList.remove('nav-mobile--active')
		burgerBtn.classList.remove('is-active')
		document.body.classList.remove('sticky-body')
	})
)

//----------------------------------------------------------------

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

//----------------------------------------------------------------

const showError = () => {
	errorBox.style.display = 'block'
}

const clearError = () => {
	errorBox.style.display = ''
}

const checkCalc = () => {
	if(weight.value !== '' && height.value !== '' && age.value !== '' && (womanRadio.checked === true || manRadio.checked === true) && activity.options[activity.selectedIndex].value !== '' && dietGoal.options[dietGoal.selectedIndex].value !== '') {
		clearError()
		kcalCalc()
	} else {
		showError()
	}
}

const kcalCalc = () => {
	let weight2 = parseFloat(weight.value)
	let height2 = parseFloat(height.value)
	let age2 = parseFloat(age.value)
	let calculation
	let calculation2

	if (womanRadio.checked) {
		calculation = 655.1 + 9.567 * `${weight2}` + 1.85 * `${height2}` - 4.68 * `${age2}`
	} else {
		calculation = 66.47 + 13.7 * `${weight2}` + 5 * `${height2}` - 6.76 * `${age2}`
	}

	const pal = activity.options[activity.selectedIndex].value
	const dietVariable = parseFloat(dietGoal.options[dietGoal.selectedIndex].value)
	calculation = calculation * pal
	calculation2 = calculation * dietVariable
	kcal.textContent = parseInt(calculation2) + ' kcal'
	resultPopup.style.display = 'flex'
}

const closeResultPopup = () => {
	resultPopup.style.display = ''
	weight.value = ''
	height.value = ''
	age.value = ''
}

//----------------------------------------------------------------

burgerBtn.addEventListener('click', handleNav)
handleCurrentYear()
calcBtn.addEventListener('click', checkCalc)
closeBtn.addEventListener('click', closeResultPopup)
