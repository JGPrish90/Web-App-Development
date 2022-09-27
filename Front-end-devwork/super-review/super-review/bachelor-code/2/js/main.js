const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add(claire)
	sharleen.classList.add(sharleen)
	andi.classList.toggle(andi)
}

function claireNext(){
	andi.classList.add(andi)
	sharleen.classList.add(sharleen)
	claire.classList.toggle(claire)
}

function sharleenNext(){
	andi.classList.add(andi)
	claire.classList.add(claire)
	sharleen.classList.toggle(sharleen)
}
