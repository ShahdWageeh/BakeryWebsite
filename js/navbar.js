/// <reference types = "../@types/jquery" />

//! CHANGE NAVBAR COLOR
$(window).on('scroll resize', function(){
    if ($(window).width() >= 993){
        if($(window).scrollTop() > 50){
            $('nav').css("cssText","background-color:white; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;")
            $('.navbar-brand img').attr("src", "images/bakery-color.png")
            $('.navbar-toggler i').css("cssText","color:black !important;")
            $('.navbar-toggler').css("borderColor", "black")
            $('nav ul li .nav-link').css("color", "black")
            $('.back').fadeIn(500).css('display', 'flex')
        }else{
            $('nav').css("cssText", "background-color:transparent; box-shadow:none;")
            $('.navbar-brand img').attr("src", "images/bakery-light-1.png")
            $('.navbar-toggler i').css("cssText","color:white !important;")
            $('.navbar-toggler').css("borderColor", "white")
            $('nav ul li a').css("color", "white")
            $('.back').fadeOut(200)
        }
    }
    
})

// !BLOG DROP DOWN
$('.dropdownn').on('mouseover', function(){
    $('.dropdown-menu').css("display", "block")
})
$('.dropdown-menu').on('mouseenter', function(){
    $('.dropdown-menu').show()
})
$('.dropdown-menu').on('mouseleave', function(){
    $('.dropdown-menu').hide()
})
$('.dropdownn').on('mouseout', function(){
    $('.dropdown-menu').hide() 
})

// !BACK TO TOP
$('.back').on('click', function(){
    $(window).scrollTop(0)
})

// !CHANGE COLOR THEME
const myColors = $('.box-color')
myColors.eq(0).on('click', function(){
    document.documentElement.style.setProperty('--main-color', '#218FE6');
})
myColors.eq(1).on('click', function(){
    document.documentElement.style.setProperty('--main-color', '#F44336');
})
myColors.eq(2).on('click', function(){
    document.documentElement.style.setProperty('--main-color', '#9C27B0');
})
myColors.eq(3).on('click', function(){
    document.documentElement.style.setProperty('--main-color', '#3F51B5');
})
myColors.eq(4).on('click', function(){
    document.documentElement.style.setProperty('--main-color', '#4CAF50');
})
myColors.eq(5).on('click', function(){
    document.documentElement.style.setProperty('--main-color', '#8e7754');
})
$('.setIcon').on('click', function(){
    $('.theme').animate({width:"toggle", paddingInline: "toggle"},2000)
})