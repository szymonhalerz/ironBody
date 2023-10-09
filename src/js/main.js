const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')



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

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

burgerBtn.addEventListener('click', handleNav)
handleCurrentYear()