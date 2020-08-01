$(window).on('load', function() {
    $('.first_load').hide();
});

function display_space() {
    $('.next_box').show();
    $('.next_box').css('right', '1px');
    rand_obj = Math.floor(Math.random() * 39);
    link_extend = '/_get_image/' + rand_obj.toString();
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
        $('#title_here').attr('href', data.link);
        $('#title_here').text(data.title);
    });
};

$('.boutme_transit').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 5000);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 5000);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.boutme2_transit').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 5000);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 5000);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.boutme_hide').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 5000);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 5000);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.resume_transit').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 5000);
    $('.resume2_transit').hide('slide', {direction:'right'}, 5000);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.resume2_transit').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 5000);
    $('.resume2_transit').hide('slide', {direction:'right'}, 5000);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.resume_hide').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 5000);
    $('.resume2_transit').hide('slide', {direction:'right'}, 5000);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.interests_transit').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 5000);
    $('.interests2_transit').hide('slide', {direction:'right'}, 5000);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.interests2_transit').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 5000);
    $('.interests2_transit').hide('slide', {direction:'right'}, 5000);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.interests_hide').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 5000);
    $('.interests2_transit').hide('slide', {direction:'right'}, 5000);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.projects_transit').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 5000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 5000);
    $('.projects_hide').hide();
    $('#projects_div').css('height', '');
});

$('.projects2_transit').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 5000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 5000);
    $('.projects_hide').hide();
    $('#projects_div').css('height', '');
});

$('.projects_hide').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 5000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 5000);
    $('.projects_hide').hide();
    $('#projects_div').css('height', '');
});

$('.nav-item_bout').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 5000);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 5000);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.nav-item_res').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 5000);
    $('.resume2_transit').hide('slide', {direction:'right'}, 5000);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.nav-item_inter').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 5000);
    $('.interests2_transit').hide('slide', {direction:'right'}, 5000);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.nav-item_pro').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 5000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 5000);
    $('.projects_hide').hide();
    $('#projects_div').css('height', '');
})