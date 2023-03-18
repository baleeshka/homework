function getRandomColor() {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}
export default function initApp() {
	console.log('Hello world')

	const button = document.createElement('button')
	button.className = 'button'
	button.innerText = 'Изменить цвет страницы'
	document.body.append(button)

	button.addEventListener('click', event => {
		event.preventDefault()
		document.body.style.background = getRandomColor()
	})
}
