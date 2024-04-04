$(document).ready(function() 
{
    $.getJSON("code-data.json", function(data)
    {
        var codeSnippets = data.code_Snippets;

        $("#autocomplete").autocomplete
        ({
            source: codeSnippets
        });
    });
});