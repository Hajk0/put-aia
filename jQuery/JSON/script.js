$(function () {
    $('button').click(function() {
        $.getJSON('guitars.json', function(data) {
            console.log(data);
            createList(data);
        });
    });
});

function createList(data) {
}