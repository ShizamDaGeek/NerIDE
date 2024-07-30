$(document).ready(function() 
{
    // TOGGLE TO HIDE OR SHOW FILE EXPLORER
    $('.hide-file').click(function () 
    { 
        $('.file-explorer').toggle();
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

    // FILE TREE TEMP
    var fileStructure = [
        {
            "text": "root",
            "children": [
                {
                    "text": "Folder 1",
                    "children": [
                        { "text": "File 1-1.txt", "type": "file" },
                        { "text": "File 1-2.txt", "type": "file" },
                        {
                            "text": "Subfolder 1-1",
                            "children": [
                                { "text": "File 1-1-1.txt", "type": "file" }
                            ]
                        }
                    ]
                },
                {
                    "text": "Folder 2",
                    "children": [
                        { "text": "File 2-1.txt", "type": "file" },
                        {
                            "text": "Subfolder 2-1",
                            "children": [
                                { "text": "File 2-1-1.txt", "type": "file" }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    // INITIALIZE JSTREE
    $('.jstree').jstree
    ({
        'core': 
        {
            'data': fileStructure
        },
        'types': 
        {
            'default': { 'icon': 'folder' },
            'file': { 'icon': 'file' }
        },
        'plugins': ['types']
    });
});