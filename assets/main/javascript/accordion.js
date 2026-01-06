/* контент хэсэг лист */
(function($) 
{
$('.accordion-list > li:eq(0) a').addClass('active').next().slideDown();

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
$(this).closest('.accordion').find('a.active').removeClass('active');

$(this).addClass('active');
}
dropDown.stop(false, true).slideToggle();
j.preventDefault();
}
);
}
)
(jQuery);
