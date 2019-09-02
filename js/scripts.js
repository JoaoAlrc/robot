// Wrap every letter in a span
var anime1 = document.querySelector('.ml1 .letters');
anime1.innerHTML = anime1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
    })
// .add({
//     targets: '.ml1 .line',
//     scaleX: [0, 1],
//     opacity: [0.5, 1],
//     easing: "easeOutExpo",
//     duration: 700,
//     offset: '-=875',
//     delay: (el, i, l) => 80 * (l - i)
// }).add({
//     targets: '.ml1',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
// });

// Wrap every letter in a span
var anime2 = document.querySelector('.ml3');
anime2.innerHTML = anime2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: 0
    }).add({
        targets: '.ml3',
        opacity: [1, 0],
        duration: 800,
        easing: "easeInOutQuad",
        delay: 0
    });

anime.timeline({ loop: false })
    .add({
        targets: '.cleaner',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 550,
        delay: 0
    }).add({
        targets: '.cleaner',
        opacity: [1, 0],
        duration: 400,
        easing: "easeOutExpo",
        delay: 3250
    });

window.onload = function () {
    // var objeto = document.getElementById('headerImage');
    $(document).ready(function () {
        $('#headerImage').fadeIn(3000);
    })

    setInterval(() => $(".cleaner").animate({ left: '65vw' }, 1000).animate({ opacity: 0 }, 0), 2250)
}



let done = false
$(document).ready(function () {

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.my-robot1').each(function (i) {

            let animation = 'fadeInUp'
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object && (done === false)) {
                done = true
                document.getElementById("robot1").style.opacity = "1";
                document.getElementById("robot2").style.opacity = "1";
                document.getElementById("robot3").style.opacity = "1";
                document.getElementById("robot4").style.opacity = "1";
                animateCSS('.my-robot1', animation)
                animateCSS('.my-robot2', animation)
                animateCSS('.my-robot3', animation)
                animateCSS('.my-robot4', animation)
            }

        });

    });

});

function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
