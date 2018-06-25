document.addEventListener('DOMContentLoaded', function(){
    let stars = document.querySelectorAll('.i-head__rating_star');

    stars.forEach(function(star){
        star.addEventListener('click', setRating);
    });
    let rating = parseInt(document.querySelector('.i-head__rating_num').getAttribute('data-rating'));
    let target = stars[rating - 1];

    target.dispatchEvent(new MouseEvent('click'));
});
function setRating(ev){
    let span = ev.currentTarget;

    let stars = document.querySelectorAll('.i-head__rating_star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index){

        if(match){
            star.classList.remove('full');
        }else{
            star.classList.add('full');
        }

        if(star === span){
            match = true;
            num = index + 1;
        }
    });
}

var count = 0;
var size = $('.slider__item').length;


$(document).ready((function() {
    $(".slider__next").click(function () {
        var currentSlide = $('.slider__item').eq(count),
            nextSlide = $('.slider__item').eq(count + 2),
            dots = $('.s-points__dot').eq(count);

        if (count >= size-1) {
            count = 0;
            nextSlide = $('.slider__item').eq(count);
            currentSlide.hide();
            nextSlide.fadeIn(1000);
            console.log(currentSlide)
        } else {
            currentSlide.hide();
            nextSlide.fadeIn(1000);
            dots.css({"background-color": "rgba(19, 193, 229, 1);"});
            count += 1;
        }
    })

    $(".slider__previous").click(function () {
        var currentSlide = $('.slider__item').eq(count),
            nextSlide = $('.slider__item').eq(size-1);

        if (count >= size) {
            count = 0;
            nextSlide = $('.slider__item').eq(count);
            currentSlide.hide();
            nextSlide.fadeIn(1000);
            console.log(count)
        } else {
            currentSlide.hide();
            nextSlide.fadeIn(1000);

            count += 1;

            console.log(count)
        }
    })
}));

















// // let stars = document.querySelectorAll('.i-head__rating_star');
// //
// //
// //     stars.forEach(function (star, i) {
// //         star.addEventListener("mousemove", function (e) {
// //             let box = this.getBoundingClientRect(),
// //                 starIndex = Math.floor((e.pageX - box.left) / box.width * 5);
// //             star.classList.toggle('full');
// //             console.log(starIndex )
// //         })
// //     })
//
//
//