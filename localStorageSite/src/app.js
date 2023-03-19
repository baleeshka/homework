import { button } from './globalVariables'
import { cookieMessage } from './globalVariables'
export default function initApp() {
	button.addEventListener('click', event => {
		localStorage.setItem('cookie', 'true')
		cookieMessage.style.display = 'none'
	})

	if (localStorage.getItem('cookie') === 'true') {
		cookieMessage.style.display = 'none'
	}
}
