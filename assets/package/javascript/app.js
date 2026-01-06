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
var target = document.querySelector("#" + dealCarrouselID + " .rate-box");
var cardOutterWidth;
var maxCarrouselScroll;

function updateUpaCarrouselInfo() 
{
cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .rate-item").offsetWidth;
maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .rate-item").length *
cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .rate-box")
.clientWidth;
}

document.querySelector("#" + dealCarrouselID + " .svg-left").addEventListener("click",
function () 
{
updateUpaCarrouselInfo();
if (target.scrollLeft > 0) 
{
scrollLeftAnimate(target, -cardOutterWidth * 2);
}
}
);

document.querySelector("#" + dealCarrouselID + " .svg-right").addEventListener("click",
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
initDealCarrousel('rate-container');