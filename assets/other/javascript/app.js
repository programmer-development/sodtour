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
var target = document.querySelector("#" + dealCarrouselID + " .flex-box");
var cardOutterWidth;
var maxCarrouselScroll;

function updateUpaCarrouselInfo() 
{
cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .flex-item").offsetWidth;
maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .flex-item").length *
cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .flex-box")
.clientWidth;
}

document.querySelector("#" + dealCarrouselID + " .arrow-next").addEventListener("click",
function () 
{
updateUpaCarrouselInfo();
if (target.scrollLeft > 0) 
{
scrollLeftAnimate(target, -cardOutterWidth * 1);
}
}
);

document.querySelector("#" + dealCarrouselID + " .arrow-prev").addEventListener("click",
function () 
{
updateUpaCarrouselInfo(); //in case window resized, will get new info 
if (target.scrollLeft < maxCarrouselScroll) 
{
scrollLeftAnimate(target, cardOutterWidth * 1);
}
}
);
}
initDealCarrousel('flex-container');