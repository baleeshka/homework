import { button } from './utils'
import { cookieMessage } from './utils'
export default function initApp() {
	button.addEventListener('click', event => {
		event.preventDefault()
		localStorage.setItem('cookie', 'true')
		cookieMessage.style.display = 'none'
	})

	if (localStorage.getItem('cookie') === 'true') {
		cookieMessage.style.display = 'none'
	}
}

//localStorage.clear()
