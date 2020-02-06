hamburger = document.querySelector('.hamburger')
nav = document.querySelector('header ul')

const popOut = () => {
    hamburger.addEventListener('click', () => {
       nav.classList.toggle('active')
       hamburger.classList.toggle('toggle')
    })
}



popOut()
