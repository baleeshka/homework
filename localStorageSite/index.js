import './index.css'

const cookieMessage = document.querySelector('.cookie-consent')
const button = document.querySelector('.cookie-consent__button')

button.addEventListener('click', event => {
	event.preventDefault()
	localStorage.setItem('cookie', 'true')
	cookieMessage.style.display = 'none'
})

if (localStorage.getItem('cookie') === 'true') {
	cookieMessage.style.display = 'none'
}

//localStorage.clear()
