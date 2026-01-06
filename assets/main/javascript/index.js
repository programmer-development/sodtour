/* контент хэсэг унших */
$(document).ready(function() 
{
setTimeout(function() 
{
$('body').addClass('loaded');
}, 1000);
}
);



/* контент хэсэг хөл */
function each(obj,callback) 
{
obj = ( typeof obj === 'string' ? document.querySelectorAll(obj) :
obj instanceof Node ? [obj] : obj );

var length = obj.length,
i = 0;
for ( ; i < length; i++ ) 
{
if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) 
{ 
  break; 
}
}
}
each('.article-paragraph',function()
{
    var elem = this,
    characters = elem.innerText.split(''),
    content = '';  
    
each(characters,function(i,c)
{
content += '<b class="paragraph-a"><b class="paragraph-b">' + c + '</b></b>';
}
);
elem.className += ' st';
elem.innerHTML = content;
});