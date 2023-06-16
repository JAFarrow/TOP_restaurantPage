import { initialPageLoad } from './initialLoad.js'
import { populateWithMainContent } from './mainView.js'
import { populateWithMenuContent } from './menuView.js'

initialPageLoad()
populateWithMainContent()

// eslint-disable-next-line no-unused-vars
const domMethods = (function () {
  const documentBody = document.getElementById('contentBody')

  const allTabs = document.querySelectorAll('.tabLink')

  function returnTabMethod (tabId) {
    switch (tabId) {
      case 'mainTab':
        return populateWithMainContent()
      case 'menuTab':
        return populateWithMenuContent()
    }
  }

  function clearBody () {
    documentBody.removeChild(documentBody.childNodes[1])
  }

  function clearTabBackgrounds () {
    allTabs.forEach((tab) => {
      tab.style.backgroundColor = '#e9f7eb'
      tab.style.color = '#000'
    })
  }

  allTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      clearTabBackgrounds()
      tab.style.backgroundColor = '#046A38'
      tab.style.color = '#e9f7eb'
      clearBody()
      returnTabMethod(tab.id)
    })
  })
})()
