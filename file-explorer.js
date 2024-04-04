$(document).ready(function() {
    $('.add-file').click(function() {
        var fileName = prompt('Enter file name: ');
        if (fileName) {
            var fileItem = $('<li><a href="#">' + fileName + '</a></li>');
            $('.file-list').append(fileItem);
        }
    });

    $('.add-folder').click(function() {
        var folderName = prompt('Enter folder name:');
        if (folderName) {
            var folderItem = $('<li><a href="#">' + folderName + '/</a></li>');
            $('.file-list').append(folderItem);
        }
    });
});