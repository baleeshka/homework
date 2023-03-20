import { button } from './globalVariables'
import { cookieMessage } from './globalVariables'
export default function initApp() {
	button.addEventListener('click', event => {
		localStorage.setItem('cookie', 'true')
		cookieMessage.classList.add('hide')
	})

	if (localStorage.getItem('cookie') === 'true') {
		cookieMessage.classList.add('hide')
	}
}
