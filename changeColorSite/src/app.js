import getRandomColor from './src/utils'

export default function initApp() {
	const button = document.createElement('button')
	button.className = 'button'
	button.innerText = 'Изменить цвет страницы'
	document.body.append(button)

	button.addEventListener('click', event => {
		event.preventDefault()
		document.body.style.background = getRandomColor()
	})
}
