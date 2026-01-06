/* контент хэсэг параллакс */
const images = [...document.querySelectorAll("img")];

const lerp = (a, b, n) => (1 - n) * a + n * b;
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;
const getMousePosition = e => 
{
let posX = e.clientX;
let posY = e.clientY;
return { x: posX, y: posY };
};

let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
window.addEventListener("mousemove", e => mousePos = getMousePosition(e));

gsap.fromTo('img', 
{
      scale: 1.2,
      autoAlpha: 0,
      ease: 'power3.inOut' 
},
{
      scale: 1,
      autoAlpha: 1,
      stagger: 0.1,
      duration: 2.5 
}
);

images.forEach(img => 
{
let values = { x: 0, y: 0 };
const xStart = gsap.utils.random(16, 64);
const yStart = gsap.utils.random(-16, 64);
const render = () => 
{
values.x = lerp
(
values.x,
map(mousePos.x, 0, window.innerWidth, -xStart, xStart),
0.07);
values.y = lerp
(
values.y,
map(mousePos.y, 0, window.innerHeight, -yStart, yStart),
0.07
);
gsap.set(img, { x: values.x, y: values.y });
requestAnimationFrame(render);
};
render();
}
);



/* контент хэсэг хөзөр */
const scroller = document.querySelectorAll('.card-float')
scroller.forEach((scroller) => 
{
let latestScroll = 0,
      scrollElement = scroller.querySelector('.card-container'),
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
}
);
}
)