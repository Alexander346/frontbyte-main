document.addEventListener('scroll', () => {
	if (scrollY > 10) {
	  document.querySelector('.header').classList.add('header--scroll')
	  document.querySelector('.header__content').classList.add('header__content--scroll')
	} else {
	  document.querySelector('.header').classList.remove('header--scroll')
	  document.querySelector('.header__content').classList.remove('header__content--scroll')
	}
})

// lang__link--active
const langClick = document.querySelectorAll('.lang__link')
langClick.forEach(item => {
	item.addEventListener('click', () => {
		langClick.forEach(el => {
			el.classList.remove('lang__link--active')
		})

		item.classList.add('lang__link--active')
	})
})


// slider__button
const buttonClick = document.querySelectorAll('.slider__button')
buttonClick.forEach(item => {
	
	// динамическая ширина button
	item.style.width = `calc((100% - 9px * ${buttonClick.length}) / ${buttonClick.length})`
	
	// обработчик при клике на button
	item.addEventListener('click', () => {		
		buttonClick.forEach(el => {
			el.classList.remove('slider__button--active')
		})

		item.classList.add('slider__button--active')
	})
})

const links = document.querySelectorAll('.menu__link')
if (links.length > 0 ) {
	links.forEach(menulink => {
		menulink.addEventListener('click', onMenuLickClick)
	})

	function onMenuLickClick (e) {
		const menuLink = e.target
		const startIndexWordId = menuLink.getAttribute('href').indexOf('#') + 1
		const word = menuLink.getAttribute('href').slice(startIndexWordId)
		const headerHeight = document.querySelector('.header').offsetHeight

		if (word && document.getElementById(word)){
			const blockMenu = document.getElementById(word)
			const scrollBlock = blockMenu.getBoundingClientRect().top + scrollY - headerHeight

			window.scrollTo({
				top: scrollBlock,
				behavior: 'smooth'
			})

			e.preventDefault()
		}
	}
}