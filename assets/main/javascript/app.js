/* контент хэсэг унших */
$(document).ready(function() 
{
setTimeout(function() 
{
$('body').addClass('loaded');
}, 1000);
}
);



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



/* контент хэсэг хөзөр */
const $menu = document.querySelector('.card-box');
const $items = document.querySelectorAll('.card-background');
const $images = document.querySelectorAll('.card-background img');
let menuWidth = $menu.clientWidth;
let itemWidth = $items[0].clientWidth;
let wrapWidth = $items.length * itemWidth;

let scrollSpeed = 0;
let oldScrollY = 0;
let scrollY = 0;
let y = 0;


const lerp = (v0, v1, t) => 
{
return v0 * (1 - t) + v1 * t;
};



const dispose = scroll => 
{
gsap.set($items, {
x: i => 
{
return i * itemWidth + scroll;
},
modifiers: 
{
x: (x, target) => 
{
const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x));
return `${s}px`;
}
}
});
};

dispose(0);



const handleMouseWheel = e => 
{
      scrollY -= e.deltaY * 0.9;
};



let touchStart = 0;
let touchX = 0;
let isDragging = false;

const handleTouchStart = e => 
{
      touchStart = e.clientX || e.touches[0].clientX;
      isDragging = true;
      $menu.classList.add('is-dragging');
};
const handleTouchMove = e => 
{
if (!isDragging) return;
      touchX = e.clientX || e.touches[0].clientX;
      scrollY += (touchX - touchStart) * 2.5;
      touchStart = touchX;
};
const handleTouchEnd = () => 
{
      isDragging = false;
      $menu.classList.remove('is-dragging');
};

$menu.addEventListener('mousewheel', handleMouseWheel);
$menu.addEventListener('touchstart', handleTouchStart);
$menu.addEventListener('touchmove', handleTouchMove);
$menu.addEventListener('touchend', handleTouchEnd);
$menu.addEventListener('mousedown', handleTouchStart);
$menu.addEventListener('mousemove', handleTouchMove);
$menu.addEventListener('mouseleave', handleTouchEnd);
$menu.addEventListener('mouseup', handleTouchEnd);
$menu.addEventListener('selectstart', () => {return false;});

window.addEventListener('resize', () => 
{
      menuWidth = $menu.clientWidth;
      itemWidth = $items[0].clientWidth;
      wrapWidth = $items.length * itemWidth;
});


const render = () => 
{
requestAnimationFrame(render);
      y = lerp(y, scrollY, .1);
      dispose(y);

      scrollSpeed = y - oldScrollY;
      oldScrollY = y;

gsap.to($items, 
{
      skewX: -scrollSpeed * .2,
      rotate: scrollSpeed * .01,
      scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003 });
};

render();



/* контент хэсэг карт */
const scroller = document.querySelectorAll('.cards-scroll')
scroller.forEach((scroller) => 
{
let latestScroll = 0,
      scrollElement = scroller.querySelector('.cards-box'),
      ticking = false

function onScroll(e) 
{
      scrollLeft = e.target.scrollLeft,
      scrollRight = e.target.scrollWidth - (scrollLeft + e.target.clientWidth)
      requestTick();
}
function requestTick() 
{
if(!ticking) 
{
      requestAnimationFrame(update);
}
ticking = true;
}
scrollElement.addEventListener('scroll', onScroll);

let isDown = false;
let startX;
let scroll_left;

scrollElement.addEventListener('mousedown', (e) => 
{
      isDown = true;
      scrollElement.classList.add('active');
      startX = e.pageX - scrollElement.offsetLeft;
      scroll_left = scrollElement.scrollLeft;
});
scrollElement.addEventListener('mouseleave', () => 
{
      isDown = false;
      scrollElement.classList.remove('active');
});
scrollElement.addEventListener('mouseup', () => 
{
      isDown = false;
      scrollElement.classList.remove('active');
});
scrollElement.addEventListener('mousemove', (e) => 
{
if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollElement.offsetLeft;
      const walk = (x - startX) * 3;
      scrollElement.scrollLeft = scroll_left - walk;
      console.log(walk);
});
})