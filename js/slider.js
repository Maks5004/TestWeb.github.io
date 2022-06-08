var slideIndex = 1;
var timeout = null;

showSlides(slideIndex);

function evaluate() {
    window.clearTimeout(timeout);
    timeout = null;
}

function plusSlide() {
    if( timeout ) {
        return;
    }
    showSlides(slideIndex += 1,1);
    timeout = window.setTimeout(evaluate, 2000);
}

function minusSlide() {
    if( timeout ) {
        return;
    }
    showSlides(slideIndex -= 1,-1);
    timeout = window.setTimeout(evaluate, 2000);
}

function currentSlide(n) {
    showSlides(slideIndex = n,0);
}

function showSlides(n,hh) {

    var i,pp,mm;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    pp = slideIndex + 1;
    mm = slideIndex - 1;
    var bleft = document.getElementsByClassName("prev");
    bleft.disabled=true;

    var  bright = document.getElementsByClassName("next");
    bright.disabled=true;

//    console.log(bleft);

    if (pp > slides.length) {
      pp = 1;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (mm < 1) {
        mm = slides.length;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.left = '0px';
    slides[slideIndex - 1].style.display = "block";

    if (hh==0) {
        slides[slideIndex - 1].style.left = '0px';
        slides[slideIndex - 1].style.display = "block";
    }

    if (hh==1) {
        slides[slideIndex - 1].style.left = '600px';
        slides[mm - 1].style.display = "block";
        slides[slideIndex - 1].style.display = "block";

        let start = Date.now(); //

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;

            if (timePassed >= 2000) {
                clearInterval(timer);
                return;
            }

        draw(timePassed);

        }, 1);

        function draw(timePassed) {
            slides[slideIndex-1].style.left = 600-600 * timePassed / 2000 + 'px';
            slides[mm - 1].style.left = -600 * timePassed / 2000 + 'px';
        }
    }

    if (hh==-1) {
        slides[slideIndex - 1].style.left = '-600px';
        slides[pp - 1].style.display = "block";
        slides[slideIndex - 1].style.display = "block";

        let start = Date.now(); //

        let timer = setInterval(function() {
            let timePassed = Date.now() - start;

            if (timePassed >= 2000) {
                clearInterval(timer);
                return;
            }

        draw(timePassed);

        }, 1);

        function draw(timePassed) {
            slides[pp - 1].style.left = 600 * timePassed / 2000 + 'px';
            slides[slideIndex-1].style.left = -600+600 * timePassed / 2000 + 'px';
        }
    }

    dots[slideIndex - 1].className += " active";
}
