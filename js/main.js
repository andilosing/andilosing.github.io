/*=========================== MENU SHOW Y HIDDEN ===========================*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close"),
      header = document.getElementById("header")

/*==== MENU SHOW ====*/
/*validate if const exists */
if(navToggle){
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
    header.classList.add("header-bg")
  })
}

/*==== MENU HIDDEN ====*/
/*validate if const exists */
if(navClose){
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
    header.classList.remove("header-bg")
  })
}

/*=========================== REMOVE MENU MOBIL ===========================*/
const navLink = document.querySelectorAll(".nav_link")

function linkAction(){
  const navMenu = document.getElementById("nav-menu")
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=========================== QUALIFICATION TABS ===========================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach(tab => {
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
  


})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 


const toggle = document.getElementById("theme-button")
if(toggle){
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
      toggle.classList.remove("uil-sun")
      toggle.classList.add("uil-moon")
    } else{
      toggle.classList.remove("uil-moon")
      toggle.classList.add("uil-sun")
    }    
  })
}

/*==================== IPHONE ====================*/ 

 


    var video = document.getElementById("myVideo");
    var playButton = document.getElementById("playButton");
    var playIcon = document.getElementById("playIcon");

    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playIcon.className = "uil uil-pause";
        } else {
            video.pause();
            playIcon.className = "uil uil-play";
        }
    });

    video.addEventListener("ended", function() {
        playIcon.className = "uil uil-play";
    });

  
