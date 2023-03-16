import './index.css'
import IMAGE_JS from './assets/JS.png'
console.log('Hello world')

function createTemplateImage(image) {
	const itemImg = document.createElement('img')
	itemImg.src = image
	return itemImg
}

function renderImage(image) {
	document.body.append(createTemplateImage(image))
}

renderImage(IMAGE_JS)

function createTemplateText(text) {
	const itemText = document.createElement('h1')
	itemText.innerText = text
	return itemText
}

function renderText(text) {
	document.body.append(createTemplateText(text))
}

renderText('I love JavaScript')
