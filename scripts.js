let slideShowArea = document.querySelector('.slide-show-area');
let toggleDots = true;
let openMenu = false;

function next(){
    slideShowArea.style.left = "-100vw";
    afterClone();
    changeDot();
};

function previous(){
    slideShowArea.style.left = "0";
    beforeClone();
    changeDot();
}

function afterClone(){
    slideShowArea.removeChild(slideShowArea.children[0])
    let banner = slideShowArea.children[0].cloneNode();
    slideShowArea.append(banner);
}

function beforeClone(){
    slideShowArea.removeChild(slideShowArea.children[2]);
    let banner = slideShowArea.children[1].cloneNode();
    slideShowArea.prepend(banner);
}


function changeDot(){
    document.querySelector('.dot--active').classList.remove('dot--active');
    if(toggleDots){
        document.querySelector('.dots').children[0].classList.add('dot--active');
        toggleDots = false;
    }else {
        document.querySelector('.dots').children[1].classList.add('dot--active');
        toggleDots = true;
    }
}

setInterval(next, 5000)

function toggleMenu(){
    openMenu = !openMenu;
    if(openMenu){
        document.querySelector('.menu-responsive').style.left = '0';
        document.querySelector('.menu-responsive').style.backgroundColor = 'rgba(0, 0, 0, .4)';
        document.querySelector('#menu-button').style.zIndex = "100";
    }else{
        document.querySelector('.menu-responsive').style.left = '-100vw';
        document.querySelector('.menu-responsive').style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
}

