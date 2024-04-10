$(document).ready(function () {
    jQuery('td').one('click', edit);
    jQuery('button').bind('asdf', function () { alert('The cake is a lie!'); });
    jQuery('*').unbind();
});

function edit() {
    var input = jQuery('<input id="edit" type="text" />');
    input.val(jQuery(this).text());
    jQuery(this).html(input);
    input.focus();
    input.blur(save);
    jQuery('button').trigger('asdf');
}

function save() {
    var input = jQuery(this);
    var value = input.val();
    input.parent().text(value);
    input.remove();
}