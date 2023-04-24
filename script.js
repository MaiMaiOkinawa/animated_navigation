const nav = document.getElementById('nav')
// const button = document.querySelector('.icon') <--My version
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})