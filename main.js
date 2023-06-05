let colors = ['green','red','pink','purple','blue','yellow','orange']
const body = document.querySelector('body')
const button = document.querySelector('.button')
const color = document.getElementById('color')

button.addEventListener("click",(event) => {
    let random = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[random]
    color.style.color = colors[random]
    color.textContent = colors[random]
})