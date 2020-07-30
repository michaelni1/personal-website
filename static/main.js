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

$('.boutmediv').click(function() {
    $('#about').css('background-color', 'transparent');
    $('.boutmediv').hide('slide', {direction:'left'}, 300);
    $('.boutme2div').hide('slide', {direction:'right'}, 300);
    $('.boutme_hide').hide();
});

$('.boutme2div').click(function() {
    $('#about').css('background-color', 'transparent');
    $('.boutmediv').hide('slide', {direction:'left'}, 300);
    $('.boutme2div').hide('slide', {direction:'right'}, 300);
    $('.boutme_hide').hide();
});

$('.boutme_hide').click(function() {
    $('#about').css('background-color', 'transparent');
    $('.boutmediv').hide('slide', {direction:'left'}, 300);
    $('.boutme2div').hide('slide', {direction:'right'}, 300);
    $('.boutme_hide').hide();
});

$('.resumediv').click(function() {
    $('#resume').css('background-color', 'transparent');
    $('.resumediv').hide('slide', {direction:'left'}, 300);
    $('.resume2div').hide('slide', {direction:'right'}, 300);
    $('.resume_hide').hide();
});

$('.resume2div').click(function() {
    $('#resume').css('background-color', 'transparent');
    $('.resumediv').hide('slide', {direction:'left'}, 300);
    $('.resume2div').hide('slide', {direction:'right'}, 300);
    $('.resume_hide').hide();
});

$('.resume_hide').click(function() {
    $('#resume').css('background-color', 'transparent');
    $('.resumediv').hide('slide', {direction:'left'}, 300);
    $('.resume2div').hide('slide', {direction:'right'}, 300);
    $('.resume_hide').hide();
});

$('.interestsdiv').click(function() {
    $('#interests').css('background-color', 'transparent');
    $('.interestsdiv').hide('slide', {direction:'left'}, 300);
    $('.interests2div').hide('slide', {direction:'right'}, 300);
    $('.interests_hide').hide();
});

$('.interests2div').click(function() {
    $('#interests').css('background-color', 'transparent');
    $('.interestsdiv').hide('slide', {direction:'left'}, 300);
    $('.interests2div').hide('slide', {direction:'right'}, 300);
    $('.interests_hide').hide();
});

$('.interests_hide').click(function() {
    $('#interests').css('background-color', 'transparent');
    $('.interestsdiv').hide('slide', {direction:'left'}, 300);
    $('.interests2div').hide('slide', {direction:'right'}, 300);
    $('.interests_hide').hide();
});

$('.projectsdiv').click(function() {
    $('#projects').css('background-color', 'transparent');
    $('.projectsdiv').hide('slide', {direction:'left'}, 300);
    $('.projects2div').hide('slide', {direction:'right'}, 300);
    $('.projects_hide').hide();
});

$('.projects2div').click(function() {
    $('#projects').css('background-color', 'transparent');
    $('.projectsdiv').hide('slide', {direction:'left'}, 300);
    $('.projects2div').hide('slide', {direction:'right'}, 300);
    $('.projects_hide').hide();
});

$('.projects_hide').click(function() {
    $('#projects').css('background-color', 'transparent');
    $('.projectsdiv').hide('slide', {direction:'left'}, 300);
    $('.projects2div').hide('slide', {direction:'right'}, 300);
    $('.projects_hide').hide();
});

// $('.nav-item_bout').click(function() {
//     $('#about').css('background-color', 'transparent');
//     $('.boutmediv').hide('slide', {direction:'left'}, 300);
//     $('.boutme2div').hide('slide', {direction:'right'}, 300);
//     $('.boutme_hide').hide();
// });

$('.nav-item_res').click(function() {
    $('#resume').css('background-color', 'transparent');
    $('.resumediv').hide('slide', {direction:'left'}, 300);
    $('.resume2div').hide('slide', {direction:'right'}, 300);
    $('.resume_hide').hide();
});

$('.nav-item_inter').click(function() {
    $('#interests').css('background-color', 'transparent');
    $('.interestsdiv').hide('slide', {direction:'left'}, 300);
    $('.interests2div').hide('slide', {direction:'right'}, 300);
    $('.interests_hide').hide();
});

$('.nav-item_pro').click(function() {
    $('#projects').css('background-color', 'transparent');
    $('.projectsdiv').hide('slide', {direction:'left'}, 300);
    $('.projects2div').hide('slide', {direction:'right'}, 300);
    $('.projects_hide').hide();
})