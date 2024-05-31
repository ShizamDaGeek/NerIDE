$(document).ready(function() 
{
    // TOGGLE TO HIDE OR SHOW FILE EXPLORER
    $('.hide-file').click(function () 
    { 
        $('.file-explorer').toggle();
    });

    // ADD A VERTICAL NUMBER LINE IN THE TEXTAREA
    const $textarea = $('textarea');
    const $lineNumbers = $('.vertical-number-line');

    $textarea.on('keyup', function(event) {
    const numberOfLines = $(this).val().split('\n').length;

    $lineNumbers.html(new Array(numberOfLines)
        .fill('<span></span>')
        .join(''));
    });

    // TAB SYSTEM FOR INDENTATION
    $('textarea').on('keydown', function(event) 
    {
        if (event.key === 'Tab') 
        {
            const textarea = this;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            const tabSpaces = '    ';
            textarea.value = textarea.value.substring(0, start) + tabSpaces + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + tabSpaces.length;
            textarea.focus();

            event.preventDefault();
        }
    });
});