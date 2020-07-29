$(window).on('load', function() {
    $('.first_load').hide();
});

function display_painting() {
    $('.next_box').show();
    $('.next_box').css('right', '1px');
    rand_obj = Math.floor(Math.random() * 48);
    link_extend = '/_get_painting/' + rand_obj.toString();
    $.getJSON($SCRIPT_ROOT + link_extend, function(data) {
        $(document).ready(function() {
            let img_src = data.image_link;
            let img = new Image();
            img.onload = function() {
                $('.next_box').hide();
                $('.next_box').css('right', '');
                $('body').css('background-image', 'url(' + img.src + ')');
            };
            img.src = img_src;
        });
        $('#title_here').attr('href', data.met_link);
        $('#title_here').text(data.title);
    });
};

function animate_box(url) {
    $('.next_box').show();
    $('.next_box').css('right', '1px');
    setTimeout(function() {
        window.location.replace(url);
    }, 300);
}