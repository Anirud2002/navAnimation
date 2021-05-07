// selectors

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const lists = document.querySelectorAll(".lists li")
const changingImage = document.querySelector('.changing-img')


// event listeners

burger.addEventListener('click', function(){
    nav.classList.toggle('show')
    lists.forEach(function(list){
        list.classList.toggle('show')
    })
    changingImage.classList.toggle('animate')
})

lists.forEach(function(list){
    list.addEventListener("mouseover", function(){
        if(list.classList.contains('home')){
            changingImage.src = "./img/lilman.jpg"
        }
        if(list.classList.contains('about')){
            changingImage.src = "./img/bro.jpg"
        }
        if(list.classList.contains('services')){
            changingImage.src = "./img/sneakers.jpg"
        }
        if(list.classList.contains('contact')){
            changingImage.src = "./img/lpImage.jpg"
        }
    })
    
})
