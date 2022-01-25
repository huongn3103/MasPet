//nav-hide-show
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
	  if (prevScrollpos > currentScrollPos) {
		document.getElementById("topnav").style.top = "0";
	  } else {
		document.getElementById("topnav").style.top = "-164px";
	  }
	  prevScrollpos = currentScrollPos;
}
//nav-dropdown-menu
$(document).ready(function(){
	$(".drop").mouseover(function(){
		 $(this).find(".drop-down").addClass("slideDown");
		 $(this).find(".item").css("color","#FF6F0C")
	})
	$(".drop").mouseleave(function(){
		  $(this).find(".drop-down").removeClass("slideDown");
		  $(this).find(".item").css("color","#1E0B05")
	});
});
//Loading
$(window).on('load',function(event){
	$('body').removeClass('preloading');
	$('.loading').delay(800).fadeOut('fast');
});
// bone-number-count
const initAnimatedCounts = () => {
	const ease = (n) => {
	  // https://github.com/component/ease/blob/master/index.js
	  return --n * n * n + 1;
	};
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach((entry) => {
		if (entry.isIntersecting) {
		  // Once this element is in view and starts animating, remove the observer,
		  // because it should only animate once per page load.
		  observer.unobserve(entry.target);
		  const countToString = entry.target.getAttribute('data-countTo');
		  const countTo = parseFloat(countToString);
		  const duration = parseFloat(entry.target.getAttribute('data-animateDuration'));
		  const countToParts = countToString.split('.');
		  const precision = countToParts.length === 2 ? countToParts[1].length : 0;
		  const startTime = performance.now();
		  const step = (currentTime) => {
			const progress = Math.min(ease((currentTime  - startTime) / duration), 1);
			entry.target.textContent = (progress * countTo).toFixed(precision);
			if (progress < 1) {
			  animationFrame = window.requestAnimationFrame(step);
			} else {
			  window.cancelAnimationFrame(animationFrame);
			}
		  };
		  let animationFrame = window.requestAnimationFrame(step);
		}
	  });
	});
	document.querySelectorAll('[data-animateDuration]').forEach((target) => {
	  target.setAttribute('data-countTo', target.textContent);
	  target.textContent = '0';
	  observer.observe(target);
	});
  };
  initAnimatedCounts();

// back-to-top
$(document).ready(function () {
	$(window).scroll(function (event) {
		var pos_body = $('html, body').scrollTop();
		if(pos_body>500){
			$('.back-to-top').addClass('show-back-to-top');
		}
		else {
			$('.back-to-top').removeClass('show-back-to-top');
		}
	});
	$('.back-to-top').click(function (event) {
		$('html, body').animate({
			scrollTop: 0},
			800);
	});
});
// Scroll-reveal
$(document).ready(function () {
	window.addEventListener('scroll', reveal);
		function reveal() {
			var reveals = document.querySelectorAll('.reveal');
			for(var i = 0; i < reveals.length; i++) {
				var windowheight = window.innerHeight;
				var revealtop = reveals[i].getBoundingClientRect().top;
				var revealpoint = 150;

				if(revealtop < windowheight - revealpoint){
					reveals[i].classList.add('active');
				}
				else{
					reveals[i].classList.remove('active');
				}
			}
		}
});
// nav - responsive
$(document).ready(function(){
	const navSlide = () => {
		const menurps = document.querySelector('.menurps');
		const nav = document.querySelector('.nav-main-menu-links');
		const navLinks = document.querySelectorAll('.nav-main-menu-links li');
		
		menurps.addEventListener('click', () => {
			//toggle nav menu
			nav.classList.toggle('nav-active');
			//animate Links
			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${index / 15 + 0.3}s`;
				}
			});
			//menurps animation
			menurps.classList.toggle('toggle');
		});
		// window.onscroll = () => {
		// 	nav.classList.remove('nav-active');
		// }
	}
	navSlide();
});
//Slick- slideShow-comments
$(document).ready(function (){
	$('.customer-main-content-comments-slides').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
	});
});
//slideshow-gallery
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
		auto: true,
		pauseOnHover: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    }); 
});
//services-box-hide-show
$(document).ready(function() {
	$(".services-boarding-condo").click(function(){
		$(".services-boarding-condo-main").toggle(500);
		$(this).find(".services-arrow-price").toggleClass('services-animation-arrow');
		$(".services-boarding-classic-pattern2").toggle(500);
	});
	$(".services-boarding-classic").click(function(){
		$(".services-boarding-classic-main").toggle(500);
		$(this).find(".services-arrow-price").toggleClass('services-animation-arrow');
	});
	$(".services-boarding-luxury").click(function(){
		$(".services-boarding-luxury-main").toggle(500);
		$(this).find(".services-arrow-price").toggleClass('services-animation-arrow');
	});
})
//show-images-gallery
$(document).ready(function (){
	$(".gallery-renew-btn").click(function(){
		$(".gallery-renew-images-hide").slideToggle(500);
	});
	$(".gallery-experience-main-btn").click(function(){
		$(".gallery-experience-main-images-hide").slideToggle(500);
	});
	$(".gallery-funday-btn").click(function(){
		$(".gallery-funday-grid-image-hide").slideToggle(500);
	});
})
//google-maps
// Initialize and add the map
function initMap() {
	// The location of maspet
	const maspet = { lat: 20.977609, lng: 105.783500 };
	// The map, centered at maspet
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 15,
	  center: maspet,
	});
	// The marker, positioned at maspet
	const marker = new google.maps.Marker({
	  position: maspet,
	  map: map,
	});
	const infoWindow = new google.maps.InfoWindow({
		content:'<h1>Maspet</h1>'
	});
	market.addListener('click', function(){
		infoWindow.open(map, marker);
	});
}
//hover-input-text
$(document).ready(function(){
	$("input").on({
		mouseenter: function(){
			$(this).css("border-color", "#FF6F0C");
		},
		mouseleave: function(){
			$(this).css("border-color", "#1E0B05");
		},
		click: function(){
			$(this).css("border-color", "#FF6F0C");
		}
	})
})
$(document).ready(function(){
	$("textarea").on({
		mouseenter: function(){
			$(this).css("border-color", "#FF6F0C");
		},
		mouseleave: function(){
			$(this).css("border-color", "#1E0B05");
		},
		click: function(){
			$(this).css("border-color", "#FF6F0C");
		},
	})
})
//link-scroll-smooth
$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
  
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  	} // End if
	});
});
//about-slideshow-question
$(document).ready(function() {
	$(".about-our-question-1").click(function(){
		$(".about-our-question-answer-1").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
	$(".about-our-question-2").click(function(){
		$(".about-our-question-answer-2").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
	$(".about-our-question-3").click(function(){
		$(".about-our-question-answer-3").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
	$(".about-our-question-4").click(function(){
		$(".about-our-question-answer-4").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
	$(".about-our-question-5").click(function(){
		$(".about-our-question-answer-5").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
	$(".about-our-question-6").click(function(){
		$(".about-our-question-answer-6").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
	$(".about-our-question-7").click(function(){
		$(".about-our-question-answer-7").toggle(500);
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-animation');
		$(this).toggleClass('about-our-question-onclick');
		$(this).find(".about-our-question-icon").toggleClass('about-our-question-icon-onclick');
		$(this).find(".about-our-question-arrow").toggleClass('about-our-question-arrow-onclick');
	});
})
//login toggle eye password
$(document).ready(function(){
	$('#eye').click(function(){
		$(this).children('i').toggleClass('fa-eye fa-eye-slash')
		$(this).toggleClass('open')
		if ($(this).hasClass('open')){
			$(this).prev().attr('type', 'text');
		} else ($(this).prev().attr('type', 'password'));
	});
	$('#eye2').click(function(){
		$(this).children('i').toggleClass('fa-eye fa-eye-slash')
		$(this).toggleClass('open')
		if ($(this).hasClass('open')){
			$(this).prev().attr('type', 'text');
		} else ($(this).prev().attr('type', 'password'));
	});
	$('#eye3').click(function(){
		$(this).children('i').toggleClass('fa-eye fa-eye-slash')
		$(this).toggleClass('open')
		if ($(this).hasClass('open')){
			$(this).prev().attr('type', 'text');
		} else ($(this).prev().attr('type', 'password'));
	});
})
//button back page
function goBack() {
	window.history.back();
	alert('Welcome MasPet')
}
// NAV-NOTI-SHOW/HIDE
$(document).ready(function(){
	$(".nav-noti-icon").click(function(){
		$(".nav-main-menu-noti-content").toggleClass("nav-noti-active");
	});
	// window.onscroll = () => {
	// 	$(".nav-main-menu-noti-content").removeClass("nav-noti-active");
	// };
});

