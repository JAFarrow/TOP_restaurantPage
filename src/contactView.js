import location from './assets/location.png'

function populateWithContactContent () {
  const contentContainer = document.getElementById('contentBody')

  const contactView = document.createElement('div')
  contactView.id = 'contactView'

  const infoContainer = document.createElement('div')
  infoContainer.id = 'contactInfoContainer'

  const infoHeading = document.createElement('h3')
  infoHeading.innerText = 'Call in for delivery or stop by for a visit at our beautifully renovated dining lounge in the heart of Cape Town!'
  infoContainer.appendChild(infoHeading)

  const infoBody = document.createElement('h5')
  infoBody.innerText = '☎️ 011 777 7777\n🏠 12 Virginia Ave, Vredehoek, Cape Town, 8001'
  infoContainer.appendChild(infoBody)
  contactView.appendChild(infoContainer)

  const imgContainer = document.createElement('div')
  imgContainer.id = 'contactImgContainer'

  const locationImg = new Image()
  locationImg.src = location
  imgContainer.appendChild(locationImg)
  contactView.appendChild(imgContainer)

  contentContainer.appendChild(contactView)
}

export { populateWithContactContent }
