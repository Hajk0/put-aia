/*$(function () {
    $('#a').css('color', 'red').append(' appended text');
    $('div').css('color', 'green');
    $('.c').css('font-size', 'x-large');
    $('tr + tr').css('color', 'aqua');
    $('table tr:first').css('color', 'yellow');
    $('tr:last').css('color', 'yellow');
    $('p:even').css('color', 'orange');
    $('[href]').css('border', '1px solid black').css('padding', '3px');
    $('a[href*=kalaka]').css('border', '1px solid pink');
    $('a[href$=\'.pdf\']').css('border', '1px solid red');
    alert('The color of an element with id="a" is ' + $('#a').css('color'));
});*/
$(function () {
    $('button:contains(\'A\')').click(function () {
        $('#classic').addClass('asdf');
    });
    $('button:contains(\'B\')').click(function () {
        $('#classic').removeClass('asdf');
    });
    $('button:contains(\'C\')').click(function () {
        $('#toggle').toggleClass('asdf');
    });
    $('tr:even').addClass('asdf');
    jQuery('ol.a li').not(':has(.b a)').addClass('asdf');
});