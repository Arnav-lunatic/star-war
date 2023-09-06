const menu = document.querySelector('.menu')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const dropDownMenu = document.querySelector('.dropDownMenu')
const firstPage = document.querySelector('.firstPage')


const cursorShip = document.querySelector('.cursorShip')
const cursor = document.querySelector('.cursor')


// Mouse Animation
document.addEventListener('mousemove', pos => {
    x = pos.clientX
    y = pos.clientY
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
})


//function to give a element properties
function setProps(obj, element) {
    Object.keys(obj).forEach(prop => {
        element.style.setProperty(prop, obj[prop])
    });
}

//function to open and close menu
function openMenu() {
    menu.classList.remove("hover")

    // Drop Down Menu
    dropDownMenu.style.right = '15px'

    //this change the menu icon into cross
    line1.style.transform = 'rotate(45deg) translateX(22%)'
    line2.style.transform = 'rotate(-45deg) translateX(22%)'

    //change background color of icon
    line1.style.backgroundColor = 'black'
    line2.style.backgroundColor = 'black'

    // increase the menu background size
    let props = {
        '--menuBgTop': '-250px',
        '--menuBgLeft': '-300px',
        '--menuBgWidth': '600px',
        '--menuBgHeight': '600px',
    }
    setProps(props, menu)
}
function closeMenu() {
    menu.classList.add("hover")

    // Drop Down Menu
    dropDownMenu.style.right = '-150px'

    //this again change the icon to menu icon from cross icon
    line1.style.transform = ''
    line2.style.transform = ''

    //switch to default color
    line1.style.backgroundColor = ''
    line2.style.backgroundColor = ''

    // back to normal
    let props = {
        '--menuBgTop': '-150px',
        '--menuBgLeft': '-150px',
        '--menuBgWidth': '0px',
        '--menuBgHeight': '0px',
    }
    setProps(props, menu)
}

//Right top corner menu logic
let click = 0
let timeout
menu.addEventListener('click', () => {
    if (click===0) {
        openMenu()

        click=1
    }else{
        closeMenu()

        click = 0
    }
    
})

//when mouse is over it dont close the menu
menu.addEventListener('mouseover', ()=>{
    clearTimeout(timeout)
})
dropDownMenu.addEventListener('mouseover', () => {
    clearTimeout(timeout)
})

//when mouse is not over the menu, close the menu in 3sec
menu.addEventListener('mouseout', ()=>{
    timeout = setTimeout(() => {
        closeMenu()
        click = 0
    }, 2000);
})


// First Page Scroll Animation
gsap.to('.firstPage-svg', {
    scale: 0.1,
    scrollTrigger:{
        trigger: '.firstPage-svg',
        scroller:"body",
        start:"top 0%",
        end: 'top -100%',
        scrub: 2
    }
})

//Second Page
let charSource = [
    {src: 'assests/img/anakin_skywalker.jpg', charName: 'Anakin Skywalker'},
    {src: 'assests/img/Obi-Wan-Kenobi.jpg', charName: 'Obi-Wan Kenobi'},
    {src: 'assests/img/Han_Solo.jpg', charName: 'Han Solo'},
    {src: 'assests/img/luke_skywalker.jpg', charName: 'Luke Skywalker'},
    {src: 'assests/img/ashoka.jpg', charName: 'Ashoka Tano'},
    {src: 'assests/img/Leia_Organa.jpg', charName: 'Leia Organa'},
    {src: 'assests/img/general-grievous.jpg', charName: 'General Grievous'},
    {src: 'assests/img/Palpatine.webp', charName: 'Emperor Palpatine'},
    {src: 'assests/img/count-dooku.jpg', charName: 'Count Dooku'},
    {src: 'assests/img/yoda.jpg', charName: 'Master Yoda'},
    {src: 'assests/img/Padme-Amidala.jpg', charName: 'Padme Amidala'},
    {src: 'assests/img/Windu.jpg', charName: 'Mace Windu'},
    {src: 'assests/img/rey.jpg', charName: 'Rey'},
    {src: 'assests/img/Qui-Gon.webp', charName: 'Qui-Gon Jinn'},
    {src: 'assests/img/Chewbacca.jpg', charName: 'Chewbacca'},
    {src: 'assests/img/C-3PO.jpg', charName: 'C-3PO'},
    {src: 'assests/img/R2D2.jpg', charName: 'R2-D2 '},
]


function addCharacter(source) {
    charSource.forEach(elem => {
        document.querySelector('.slider').innerHTML += `
        <div class="card">
            <img src=${elem.src} alt="img">
            <div class="charInfo">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                <h1>${elem.charName}</h1>
            </div>
        </div>`
    });
    
}
addCharacter()


