/*$(function () {
    $('a').click(function () {
        $('#content').fadeOut('medium', function () {
            $('#content').load($(this).attr('href'), function () {
                $('#content').fadeIn();
            });
        });
        return false;
    });
});*/

$(function () {
    $('a').click(function () {
        $('#content').animate({ height: '0px', width: '0px' }, () => {
            $('#content').load($(this).attr('href'), () => {
                $('#content').animate({ height: '500px', width: '500px' });
            });
        });
        return false;
    });
});
