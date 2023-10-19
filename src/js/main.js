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
const closeErrorBtn = document.querySelector('.close-error-btn')

const menuItems = document.querySelectorAll('.nav-desktop .nav__link')
const scrollSpySections = document.querySelectorAll('.section')

const weightWater = document.querySelector('#weight-w')
const activityWater = document.querySelector('#activity-level-w')
const calcBtnWater = document.querySelector('#calc-btn-w')
const errorBoxWater = document.querySelector('.error-section')
const errorBoxWaterCloseBtn = document.querySelector('#close-error-btn-w')
const resultWater = document.querySelector('#result-w')
const waterVolume = document.querySelector('.water-volume')
const warmClimat = document.querySelector('#warm-climat-check')
const closeResultWaterBtn = document.querySelector('#close-w')

//----------------------------------------------------------------

const handleNav = () => {
	document.body.classList.toggle('sticky-body')
	navMobile.classList.toggle('nav-mobile--active')
	burgerBtn.classList.toggle('is-active')
	document.body.style = 'overflow: hidden;'
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
	errorBox.style.display = 'flex'
}

const closeError = () => {
	errorBox.style.display = ''
}

const clearError = () => {
	errorBox.style.display = ''
}

const checkCalc = () => {
	if (
		weight.value !== '' &&
		height.value !== '' &&
		age.value !== '' &&
		(womanRadio.checked === true || manRadio.checked === true) &&
		activity.options[activity.selectedIndex].value !== '' &&
		dietGoal.options[dietGoal.selectedIndex].value !== ''
	) {
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

//----------------------------------------------------------------

const showError2 = () => {
	errorBoxWater.style.display = 'flex'
}

const closeError2 = () => {
	errorBoxWater.style.display = ''
}

const checkWater = () => {
	if (weightWater.value !== '' && activityWater.options[activityWater.selectedIndex].value !== '') {
		closeError2()
		waterCalc()
	} else {
		showError2()
	}
}

const waterCalc = () => {
	let weightW = parseFloat(weightWater.value)
	let activityLevelWater = activityWater.options[activityWater.selectedIndex].value
	let waterAmount = 0

	if (warmClimat.checked) {
		waterAmount = weightW * parseFloat(activityLevelWater) * 1.1
	} else {
		waterAmount = weightW * parseFloat(activityLevelWater)
	}

	let waterAmount2 = parseInt(waterAmount)
	waterVolume.textContent = waterAmount2 + ' ml'
	resultPopup.style.display = 'flex'
}

const checkSite2 = () => {
	if (document.body.classList.contains('water-calc')) {
		errorBoxWaterCloseBtn.addEventListener('click', closeError2)
		calcBtnWater.addEventListener('click', checkWater)

		closeResultWaterBtn.addEventListener('click', e => {
			resultPopup.style.display = ''
			weightWater.value = ''
			warmClimat.checked = false
			activityWater.selectedIndex = 0
		})
	}
}

//----------------------------------------------------------------

const closeResultPopup = () => {
	resultPopup.style.display = ''
	weight.value = ''
	height.value = ''
	age.value = ''
	manRadio.checked = false
	womanRadio.checked = false
	activity.selectedIndex = 0
}

//----------------------------------------------------------------

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			// console.log(window.scrollY);
			// console.log(section.offsetTop);
			// console.log(section.offsetHeight);

			if (window.scrollY <= section.offsetTop + section.offsetHeight - 130) {
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active'))
				activeSection.classList.add('active')
			}
		})
	}
}

//----------------------------------------------------------------

const checkSite = () => {
	if (document.body.classList.contains('kcal-calc')) {
		closeBtn.addEventListener('click', closeResultPopup)
		calcBtn.addEventListener('click', checkCalc)
		closeErrorBtn.addEventListener('click', closeError)
	}
}

burgerBtn.addEventListener('click', handleNav)
handleCurrentYear()
checkSite()
checkSite2()
window.addEventListener('scroll', handleScrollSpy)
