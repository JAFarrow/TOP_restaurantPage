import pregoRoll from './assets/pregoRoll.jpg'
import chorizoHash from './assets/chorizoHash.jpg'
import cortado from './assets/cortado.jpg'
import francesinha from './assets/francesinha.jpg'
import grilledSardines from './assets/grilledSardines.jpg'
import pastiesDeNata from './assets/pastiesDeNata.jpg'

function cycleMenuItems (index) {
  const menuItems = [
    {
      img: pregoRoll,
      title: 'Tender Steak Prego Roll',
      desc: 'Melt in your mouth steak fried in a delicious garlic and vinegar sauce, topped with fried onion, lettuce and tomato on a crispy Portugese roll.'
    },
    {
      img: chorizoHash,
      title: 'Chorizo Breakfast Hash Bowl',
      desc: 'Fried chorizo and hash brown, sauted in garlic and red onion and served with a poached egg and diced tomato. It\'s as breakfast as breakfast gets.'
    },
    {
      img: francesinha,
      title: 'Pork Belly Francesinha',
      desc: 'Sticky pork belly strips, smoked ham slices and a vegatable medley, served as a delightfully cheese-enrobed sandwich topped with runny egg.'
    },
    {
      img: grilledSardines,
      title: 'Pesto Salt-Grilled Sardines',
      desc: 'Fresh sardines flame-grilled in a flavour-intensifying salt rub, basted in a simple pesto paste and served with grilled green peppers.'
    },
    {
      img: pastiesDeNata,
      title: 'Flakey Pastéis De Nata',
      desc: 'A Portuguese legend, custard tartlets in an flakey egg pastry, caramalized to perfection.'
    },
    {
      img: cortado,
      title: 'Energizing Cortado Coffee',
      desc: 'The perfect pick-me-up after a big meal, we deliver our Cortado\'s steaming hot in a convenient to-go cup.'
    }
  ]

  return menuItems[index]
}

function populateWithMenuContent () {
  const contentContainer = document.getElementById('contentBody')

  const menuView = document.createElement('div')
  menuView.id = 'menuView'
  contentContainer.appendChild(menuView)

  const menuHeader = document.createElement('h3')
  menuHeader.innerText = 'All Items Listed Are To-Go Or For Delivery, Please Enquire About Our Dining Menu Once Seated'
  menuView.appendChild(menuHeader)

  const menuItemsContainer = document.createElement('div')
  menuItemsContainer.id = 'menuContainer'
  menuView.appendChild(menuItemsContainer)

  for (let i = 0; i <= 5; i++) {
    const menuItemDiv = document.createElement('div')
    menuItemDiv.classList.add('indvMenuItem')

    const menuItem = cycleMenuItems(i)

    const menuItemImg = new Image()
    menuItemImg.src = menuItem.img
    menuItemImg.classList.add('menuItemImg')
    menuItemDiv.appendChild(menuItemImg)

    const menuItemWriteupContainer = document.createElement('div')
    menuItemWriteupContainer.classList.add('menuItemWriteupContainer')
    menuItemDiv.appendChild(menuItemWriteupContainer)

    const menuItemHeader = document.createElement('h5')
    menuItemHeader.innerText = menuItem.title
    menuItemHeader.classList.add('menuItemHeader')
    menuItemWriteupContainer.appendChild(menuItemHeader)

    const menuItemBodyText = document.createElement('p')
    menuItemBodyText.innerText = menuItem.desc
    menuItemBodyText.classList.add('menuItemBodyText')
    menuItemWriteupContainer.appendChild(menuItemBodyText)

    menuItemsContainer.appendChild(menuItemDiv)
  }
}

export { populateWithMenuContent }
