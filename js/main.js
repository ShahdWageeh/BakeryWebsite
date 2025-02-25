/// <reference types = "../@types/jquery" />



// !SCROLL TO WHO SECTION
const whoOffset = $('#who').offset().top
$('.scroll-who').on('click', function(){
    $('html').animate({scrollTop: whoOffset}, 200)
})

