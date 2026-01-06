/* контент хэсэг унших */
var loader = document.querySelector(".content-section-loader")
window.addEventListener("load", vanish);
function vanish() 
{
loader.classList.add("loader-box");
}



/* контент хэсэг лого */
var letters = $('#logo-article span');
TweenMax.staggerFrom
(
letters,
0.50,
{ 
      opacity: 0, 
      y: 100, 
      ease: Back.easeOut 
},
0.08);




/* контент хэсэг чиглүүлэгч */
(function($) 
{ 
"use strict";

$('body').on('mouseenter mouseleave','.nav-item',function(e)
{
if ($(window).width() > 750) 
{
var _d=$(e.target).closest('.nav-item');_d.addClass('show');
setTimeout(function()
{
_d[_d.is(':hover')?'addClass':'removeClass']('show');
},1);
}
});	
	
})
(jQuery);



/* контент хэсэг таб */
class StickyNavigation 
{
constructor() 
{
      this.currentId = null;
	this.currentTab = null;
	this.tabContainerHeight = 70;

      let self = this;

$('.tab-button').click(function() 
{
self.onTabClick(event, $(this)); 
});
$(window).scroll(() => { this.onScroll(); });
$(window).resize(() => { this.onResize(); });
}
onTabClick(event, element) 
{
       event.preventDefault();
       let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;

$('html, body').animate({ scrollTop: scrollTop }, 600);
}
onScroll() 
{
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
}
onResize() 
{
if(this.currentId) 
{
	this.setSliderCss();
}
}
checkTabContainerPosition() 
{
	let offset = $('.tab-navigation').offset().top + $('.tab-navigation').height() - this.tabContainerHeight;
	  
if($(window).scrollTop() > offset) 
{
$('.tab-box').addClass('tab-box--top');
} 
else 
{
$('.tab-box').removeClass('tab-box--top');
}
}
findCurrentTabSelector(element) 
{
      let newCurrentId;
	let newCurrentTab;
	let self = this;

$('.tab-button').each(function() 
{
	let id = $(this).attr('href');
	let offsetTop = $(id).offset().top - self.tabContainerHeight;
	let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;

if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) 
{
	newCurrentId = id;
	newCurrentTab = $(this);
}
});
if(this.currentId != newCurrentId || this.currentId === null) 
{
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
}
}
setSliderCss() 
{
      let width = 0;
	let left = 0;

if(this.currentTab) 
{
	width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
}
$('.tab-fixed').css('width', width);
$('.tab-fixed').css('left', left);
}	
}
new StickyNavigation();



/* */
var isAnimating = false;
function scrollLeftAnimate(elem, unit) 
{
if (!elem || isAnimating) 
{
return;
}
var time = 300;
var from = elem.scrollLeft; 
var aframe = 10; 
isAnimating = true;

var start = new Date().getTime(),
timer = setInterval(function () 
{
var step = Math.min(1, (new Date().getTime() - start) / time);
elem.scrollLeft = ((step * unit) + from);
if (step === 1) 
{
      clearInterval(timer);
      isAnimating = false;
}
}, 
aframe);
}

function initDealCarrousel(dealCarrouselID) 
{
var target = document.querySelector("#" + dealCarrouselID + " .thumb-box");
var cardOutterWidth;
var maxCarrouselScroll;

function updateUpaCarrouselInfo() 
{
cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .thumb-item").offsetWidth;
maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .thumb-item").length *
cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .thumb-box")
.clientWidth;
}

document.querySelector("#" + dealCarrouselID + " .button-left").addEventListener("click",
function () 
{
updateUpaCarrouselInfo();
if (target.scrollLeft > 0) 
{
scrollLeftAnimate(target, -cardOutterWidth * 2);
}
}
);

document.querySelector("#" + dealCarrouselID + " .button-right").addEventListener("click",
function () 
{
updateUpaCarrouselInfo(); //in case window resized, will get new info 
if (target.scrollLeft < maxCarrouselScroll) 
{
scrollLeftAnimate(target, cardOutterWidth * 2);
}
}
);
}
initDealCarrousel('thumb-container');



/* контент хэсэг дэлгэгдэх */
(function($) 
{
$('.accordion-list > li:eq(0) .accordion-button').addClass('active').next().slideDown();

$('.accordion-list .accordion-button').click(function(j) 
{
var dropDown = $(this).closest('li').find('.accordion-paragraph');

$(this).closest('.accordion-list').find('.accordion-paragraph').not(dropDown).slideUp();
if ($(this).hasClass('active')) 
{
$(this).removeClass('active');
} 
else 
{
$(this).closest('.accordion-list').find('a.active').removeClass('active');

$(this).addClass('active');
}
dropDown.stop(false, true).slideToggle();
j.preventDefault();
}
);
}
)
(jQuery);



/* контент хэсэг хавтас */
let menuItem = document.querySelectorAll(".wrapper-head");
let menuImage = document.querySelectorAll(".wrapper-background");
for (let i = 0; i < 4; i++) 
{
const animation = gsap.to(menuImage[i], 
{
      opacity: 1,
      duration: 0.2,
      scale: 1,
      ease: "ease-in-out"
});
menuItem[i].addEventListener("mouseenter", () => animation.play());
menuItem[i].addEventListener("mouseleave", () => animation.reverse());
animation.reverse();
}
function moveText(e) 
{
gsap.to([...menuImage], 
{
css: 
{
      left: e.pageX + 50,
      top: e.pageY,
},
duration: 0.3,
}
);
}
menuItem.forEach((el) => 
{
el.addEventListener("mousemove", moveText);
}
);



/* контент хэсэг паррлакс
let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;

let textContainers = document.querySelectorAll('.parallax-article');

textContainers.forEach((element, index) => {
let top = element.getBoundingClientRect().top;
let start = viewHeight - top;

let firstText = element.querySelector('.parallax-head:first-child');
let secondText = element.querySelector('.parallax-head:last-child');

gsap.to(firstText, 
{
      scrollTrigger: 
      {
      trigger: element,
      scrub: true,
      start: start + "px bottom",
      end: "bottom top"
      },
      x: '-800px',
      transformOrigin: "left center", 
      ease: "none"
}
);
gsap.to(secondText, 
{
      scrollTrigger: 
      {
      trigger: element,
      scrub: true,
      start: start + "px bottom",
      end: "center top"
      },
      x: '800px',
      transformOrigin: "left center", 
      ease: "none"
});
});
*/


