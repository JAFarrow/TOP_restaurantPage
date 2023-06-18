import './additionalStyle.css'
import MainImg from './assets/mainImg.jpg'

function populateWithMainContent () {
  const contentContainer = document.getElementById('contentBody')

  const mainView = document.createElement('div')
  mainView.id = 'mainView'
  contentContainer.appendChild(mainView)

  const writeUpContainer = document.createElement('div')
  writeUpContainer.id = 'writeUpContainer'
  mainView.appendChild(writeUpContainer)

  const writeUpHeader = document.createElement('h3')
  writeUpHeader.textContent = 'The Taste Of Portugal, To Your Doorstep!'
  writeUpHeader.classList.add('nunitoItalic')
  writeUpContainer.appendChild(writeUpHeader)

  const writeUpParagraph = document.createElement('p')
  writeUpParagraph.innerText = 'Spicing up Cape Town since \'09.\nCall in your delivery or enjoy the windy city on our (comfortanbly enclosed) doorstep.'
  writeUpContainer.appendChild(writeUpParagraph)

  const imgContainer = document.createElement('div')
  imgContainer.id = 'imgContainer'
  mainView.appendChild(imgContainer)

  const mainImg = new Image()
  mainImg.src = MainImg
  imgContainer.appendChild(mainImg)
}

export { populateWithMainContent }
