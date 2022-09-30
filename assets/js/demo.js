/**
 * demo.js
 * https://www.instagram.com/croco.code/
 * https://www.tiktok.com/@croco.code 
 * https://github.com/crococode-io 
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 * https://www.tiktok.com/@croco.code 
 * https://github.com/crococode-io 
 */

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '60px',
  slidesToShow: 3,
  infinite: false,
  prevArrow: $(".back"),
  nextArrow: $(".forward"),
  responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
