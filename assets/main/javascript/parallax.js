/* контент хэсэг параллакс */
var parallaxImage = document.getElementById('parallax-background');
var parallaxContent = document.getElementById('parallax-article');
var windowScrolled;
window.addEventListener('scroll', function windowScroll() 
{
windowScrolled = window.pageYOffset || document.documentElement.scrollTop;
parallaxImage.style.transform = 'translate3d(0, ' + windowScrolled / 10 + 'px, 0)';
parallaxContent.style.transform = 'translate3d(0, ' + windowScrolled / 15 + 'px, 0)';
});
