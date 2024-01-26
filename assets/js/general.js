if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  document.querySelector(".start-btn button").style.display = 'none';
}

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
      }, 750, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });
});

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// SIDEBAR JS [REQUIRED FOR ALL]

$(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
})

// NAVBAR JS [REQUIRED FOR ALL]

$(".menu > ul > li").click(function(e) {
    $(this).siblings().removeClass("active");
    $(this).closest("ul").siblings().find("li").removeClass("active");
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle(200, "swing");
        $(this).siblings().find("ul").slideUp(200, "swing");
        $(this).closest('ul').siblings().find('ul').slideUp(200, "swing");
        $(this).siblings().find(".menu").find("ul").find("li").removeClass("active");
});

$(".faq-text > li").click(function(e) {
  $(this).find("p").slideToggle();
  $(this).toggleClass("active")
});

const stars = document.querySelectorAll(".rating-toast .stars i");
const starRating = document.querySelector(".rating-toast .stars")
const ratingText = document.querySelector(".rating-toast header")
const ratingToast = document.querySelector(".rating-toast")

setTimeout(function() {
  ratingToast.style.right = "2rem"
}, 180000);

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      ratingText.innerHTML = "Thank you for your opinion!";
      setTimeout(function() {
        ratingToast.style.right = "-30rem"
        setTimeout(function() {
          ratingToast.style.opacity = "0"
        }, 2000);
      }, 2000);
    })
  })
})

const sr = ScrollReveal();

window.sr = new ScrollReveal()

ScrollReveal({
    reset: true,
    duration: 1500,
    delay: 250
})

// format: (scale, rotate, distance, delay, origin)

sr.reveal('.start-section', { scale: '1.1', reset: false});
sr.reveal('.start-section .content h1', { distance: '50px', origin: 'right'});
sr.reveal('.start-section .content p', { distance: '50px', origin: 'left'});
sr.reveal('.start-section .content a', { scale: '1.2', delay: 1000});
sr.reveal('.start-section .box', { delay: 500, distance: '50px'});

sr.reveal('.about-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.about-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.about-section .image', { delay: 500, distance: '50px', origin: 'bottom'});
sr.reveal('.about-section .content', { delay: 500, distance: '50px', origin: 'top'});

sr.reveal('.course-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.course-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.course-section .course-slider', { delay: 500, distance: '50px', origin: 'bottom'});

sr.reveal('.testimonial-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.testimonial-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.testimonial-section .testimonial-slider', { delay: 500, distance: '50px', origin: 'bottom'});
sr.reveal('.testimonial-section .stats-counter', { delay: 500, scale: '1.2', origin: 'top'});

sr.reveal('.header-section', { scale: '1.1', reset: false});
sr.reveal('.header-section .content h1', { distance: '50px', origin: 'right'});
sr.reveal('.header-section .content p', { distance: '50px', origin: 'left'});
sr.reveal('.header-section .content a', { scale: '1.2', delay: 1000});

sr.reveal('.assessment-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.assessment-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.assessment-section .box-container .box', { delay: 500, distance: '25px', origin: 'bottom'});
sr.reveal('.assessment-section .header', { delay: 500, distance: '25px', origin: 'top'});

sr.reveal('.flashcard-section', { scale: '1.1'});
sr.reveal('.flashcard-section .title h1', { distance: '25px', origin: 'top'});
sr.reveal('.flashcard-section .title span', { delay: 500, distance: '25px', origin: 'top'});

sr.reveal('.premium-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.premium-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.premium-section .table-content', { delay: 500, distance: '25px', origin: 'bottom'});

sr.reveal('.payment-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.payment-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.payment-section .content', { delay: 500, distance: '25px', origin: 'top'});
sr.reveal('.payment-section .sub-payment-methods', { delay: 500, distance: '25px', origin: 'top'});

sr.reveal('.plan-section .heading', { distance: '25px', origin: 'left'});
sr.reveal('.plan-section .column', { distance: '25px', origin: 'right'});

sr.reveal('.plan-section .content', { delay: 500, distance: '25px', origin: 'top'});

sr.reveal('.module-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.module-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.module-section .content .index', { distance: '25px', origin: 'bottom', reset: false});
sr.reveal('.module-section .content .lesson h3', { distance: '25px', origin: 'bottom', reset: false});
sr.reveal('.module-section .content .lesson p', { distance: '25px', origin: 'bottom', reset: false});
sr.reveal('.module-section .content .lesson .column', { distance: '25px', origin: 'bottom', reset: false});
sr.reveal('.module-section .content .lesson .lesson-image', { delay: 500, distance: '25px', origin: 'bottom', reset: false});

sr.reveal('.tutor-section .heading', { distance: '25px', origin: 'right'});
sr.reveal('.tutor-section .title', { distance: '25px', origin: 'left'});
sr.reveal('.tutor-section .box-container', { distance: '25px', origin: 'bottom'});

sr.reveal('footer')

gsap.to(".sidebar-container", 
    {
        x: 0,
        delay: 0.5,
        duration: 2,
        ease: "power4.out"
    });

gsap.to(".page-return", 
    {
        y: 0,
        delay: 2.5,
        duration: 1,
        ease: "power4.out"
    });

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      1300: {
        slidesPerView: 2,
      },
      1470: {
        slidesPerView: 3,
      },
    },
    });

    var swiper = new Swiper(".testimonial-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
    });


$(".assessment-section > .box-container > a > .box.gen").click(function () {
    $(".main").addClass("active");
    $(".confirmation.gen").fadeIn();
    $('body').addClass('stop-scrolling')
})

$(".assessment-section > .box-container > a > .box.calc").click(function () {
  $(".main").addClass("active");
  $(".confirmation.calc").fadeIn();
  $('body').addClass('stop-scrolling')
})

$(".confirmation > .header > .close").click(function () {
    $(".main").removeClass("active");
    $(".confirmation").fadeOut();
    $('body').removeClass('stop-scrolling')
})

let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }