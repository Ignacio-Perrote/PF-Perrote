"use script"
const hamburger = document.querySelector('.hamburger-icon-container')
const nav    = document.querySelector('.nav')

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})


const enlaces  = document.querySelectorAll('.gallery-container .a')
const lightbox = document.querySelector('.lightbox')
const grande   = document.querySelector('.grande')
const cerrar   = document.querySelector('.cerrar')

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo')
})
