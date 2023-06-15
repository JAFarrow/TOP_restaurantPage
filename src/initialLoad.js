import './additionalStyle.css'

function initialPageLoad () {
  const documentContainer = document.getElementById('content')

  const headerEle = document.createElement('header')
  documentContainer.appendChild(headerEle)

  const headerText = document.createElement('h1')
  headerText.textContent = 'Prego de (Now)'
  headerText.classList.add('nunitoItalic')
  headerEle.appendChild(headerText)

  const mainDiv = document.createElement('main')
  mainDiv.id = 'contentBody'
  mainDiv.classList.add('nunitoRegular')
  documentContainer.appendChild(mainDiv)

  const tabContainer = document.createElement('div')
  tabContainer.id = 'tabContainer'
  tabContainer.classList.add('nunitoRegular')
  mainDiv.appendChild(tabContainer)

  const mainTab = document.createElement('a')
  mainTab.textContent = 'Main'
  mainTab.id = 'mainTab'
  mainTab.classList.add('tabLink')
  tabContainer.appendChild(mainTab)

  const menuTab = document.createElement('a')
  menuTab.textContent = 'Menu'
  menuTab.id = 'menuTab'
  menuTab.classList.add('tabLink')
  tabContainer.appendChild(menuTab)

  const contactTab = document.createElement('a')
  contactTab.textContent = 'Contact'
  contactTab.id = 'contactTab'
  contactTab.classList.add('tabLink')
  tabContainer.appendChild(contactTab)

  const footerEle = document.createElement('footer')
  documentContainer.appendChild(footerEle)

  const footerTextContainer = document.createElement('div')
  footerTextContainer.classList.add('nunitoRegular')
  footerEle.appendChild(footerTextContainer)

  const footerText = document.createElement('h3')
  footerText.innerText = 'Built by Justin Farrow | '
  footerTextContainer.appendChild(footerText)

  const footerLink = document.createElement('a')
  footerLink.innerText = 'Source Code'
  footerLink.href = 'https://github.com/JAFarrow/TOP_restaurantPage'
  footerLink.target = '_blank'
  footerTextContainer.appendChild(footerLink)
};

export { initialPageLoad }
