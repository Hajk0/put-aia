$(function () {
    $('button').click(function() {
        $.getJSON('guitars.json', function(data) {
            console.log(data);
            createList(data);
        });
    });
});

function createList(data) {
    var list = $('<ul></ul>');
    $.each(data.Guitars.Guitar, function(index, value) {
        list.append('<li>' + value.Brand + ' - ' + value.Model + '</li>');
    });
    $('body').append(list);
}