// var scene = document.getElementById('home');
// var parallaxInstance = new Parallax(scene);


//AOS
AOS.init({
    offset: 200,
    duration: 450,
    delay: 250,
    startEvent: 'DOMContentLoaded', 
});



const cardBottom = document.getElementsByClassName("card-bottom");
//nav Vars


const aboutNav = document.querySelector('.about-nav'),
      projectsNav = document.querySelector('.projects-nav'),
      contactNav = document.querySelector('.contact-nav')

const nav = document.querySelector('.nav'),
      navTop = nav.offsetTop;

const about = document.querySelector('.about'),
      aboutTop = about.offsetTop

const project = document.querySelector('.projects'),
      projectTop = project.offsetTop

const contact = document.querySelector('#contact'),
      contactTop = contact.offsetTop 


function stickyNavigation() {
    if (window.scrollY >= aboutTop) {
       
        nav.classList.add('nav-fixed');
        about.classList.add('ex-padding');
      } else {
        nav.classList.remove('nav-fixed');
        about.classList.remove('ex-padding');
      }
  }
  
function aboutLinkScrollChanger(){
    if (window.scrollY >= aboutTop && window.scrollY <= projectTop) {
        
        aboutNav.classList.add('scrolledLink');
       
    }  
    else {
        aboutNav.classList.remove('scrolledLink');
      }
}

function projectLinkScrollChanger(){
    if (window.scrollY >= projectTop && window.scrollY <= contactTop) {
        
        projectsNav.classList.add('scrolledLink');
      }
    else {
        projectsNav.classList.remove('scrolledLink'); 
       
    }
}

function contactLinkScrollChanger(){
    if (window.scrollY >= contactTop) {
        
        contactNav.classList.add('scrolledLink');
    }
    else {
        
        contactNav.classList.remove('scrolledLink');
    }
}




function projectLayout (){
    for(var i = 0; i < cardBottom.length; i++){
        cardBottom[i].classList.add('card-bottom-grid');
       
    }


    
    console.log("hit")
}




window.addEventListener('scroll', stickyNavigation);
window.addEventListener('scroll', aboutLinkScrollChanger);
window.addEventListener('scroll', projectLinkScrollChanger);
window.addEventListener('scroll', contactLinkScrollChanger);


