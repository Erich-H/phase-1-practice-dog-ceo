console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const selectMenu = document.getElementById('breed-dropdown')
const breedsList = []
document.addEventListener('DOMContentLoaded', () => {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
        data.message.forEach(element => {
            let container = document.getElementById('dog-image-container')
            let newImage = document.createElement('img')
            newImage.src = `${element}`
            container.appendChild(newImage)
        })  
    })    
})


let breeds = []
function getBreedsNames() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(res => {
        breeds = Object.keys(res.message)
        addBreedToDom(breeds)
    })
}

function addBreedToDom(breeds) {
    const ul = document.querySelector('#dog-breeds')
        breeds.map(breed => {
            const li = document.createElement('li')
            li.textContent = breed
            ul.append(li)
        })
}

document.addEventListener('click', event => {
    if(event.target.matches('li')) {
        event.target.style.color = "red"
    }
})

document.addEventListener('change', event => {
    if(event.target.matches('#breed-dropdown')) {
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ''
        const filterBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedToDom(filterBreeds)
    }
})

getBreedsNames()

