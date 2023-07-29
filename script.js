const header = document.querySelector("header")
const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".menu")
const textarea = document.querySelector("textarea")
const spanYear = document.querySelector(".year-date")


menu.addEventListener('click', () =>{
  if (menu.classList.contains("active")) {
    menu.classList.remove("active")
    navbar.style.transition = ".3s"
    navbar.style.right = "-100%"
  } else {
    menu.classList.add("active")
    navbar.style.transition = ".3s"
    navbar.style.right = "0"
  }
})


window.addEventListener('scroll', () => {
  if (window.scrollY > 70) {
    header.classList.add("scrollMode")
    navbar.classList.add("scroll")
  } else {
    header.classList.remove("scrollMode")
    navbar.classList.remove("scroll")
  }
})


textarea.addEventListener("keyup", e => {
  let scHeight = e.target.scrollHeight
  textarea.style.height = `${scHeight}px`
})

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
spanYear.innerHTML = anoAtual



