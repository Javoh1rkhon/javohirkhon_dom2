// let text = document.querySelector('#text')
// let btn = document.querySelector('#btn')

// // btn.onclick = () => {
// //     console.log("salom");
// // }

// let active = false

// btn .addEventListener('click', () => {
//     // text.innerText = 'hello'

//     active = !active

//     if (active) {
//         text.innerText = 'hello'
//     } else {
//         text.innerText = 'salom'
//     }
// })
// let a = false

let content = document.querySelector('.content') 

// content.addEventListener('click', () => {
//     a = !a
//     if (a) {
//         content.style.backgroundColor = 'blue'
//         content.style.borderRadius = '50%'
//     } else {
//         content.style.borderRadius = '0'
//         content.style.backgroundColor = 'green'
//     }
// })

// content.onmouseenter = () => {
//     content.style.backgroundColor = 'blue'
//         content.style.borderRadius = '50%'
// }

// content.onmouseleave = () => {
//     content.style.borderRadius = '0'
//     content.style.backgroundColor = 'green'
// }

// content.addEventListener('mouseenter', () => {
//     content.style.backgroundColor = 'blue'
//     content.style.borderRadius = '50%'
// })

// content.addEventListener('mouseleave', () => {
//     content.style.borderRadius = '0'
//     content.style.backgroundColor = 'green'
// })
let inp = document.querySelector('input')

inp.addEventListener('keyup', (event) => {
    let value = event.target.value
    console.log(value);
})