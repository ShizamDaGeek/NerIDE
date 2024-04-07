$(document).ready(function() 
{
    $('textarea').linenumbers({col_width:'75px', start: 0, gutter_width:'auto',});	
    $.getJSON("code-snippets.json", data,

    );
});