$(window).on('load', function() {
    $('.first_load').hide();
}); 

$.ajaxSetup({
    async: false
});

$(window).on('hashchange', function(e) {
    window.history.pushState("", document.title, window.location.pathname);
});

function display_space() {
    $('.next_box').show();
    rand_obj = Math.floor(Math.random() * 39);

    link_extend = '/_get_asset/' + rand_obj.toString();
    $.getJSON($SCRIPT_ROOT + link_extend, callback);
    
    function callback(asset_id) {
        var url = 'https://images-api.nasa.gov/asset/' + asset_id;
        const proxyurl = 'https://tranquil-reaches-81640.herokuapp.com/';
        img_url = 'https://images.nasa.gov/details-' + asset_id;
        
        fetch(proxyurl + 'https://images-assets.nasa.gov/image/' + asset_id + '/metadata.json')
        .then(response => response.json())
        .then(title_data => {
            $('#title_here').text(title_data['AVAIL:Title']);
        })

        fetch(proxyurl + url)
        .then(response => response.json())
        .then(data => {
            $(document).ready(function() {
                let img_src = data['collection']['items'][0]['href'];
                let img = new Image();
                img.onload = function() {
                    $('body').css('background-image', 'url(' + img.src + ')');
                    $('.next_box').hide();
                };
                img.src = img_src;
            });
            $('#title_here').attr('href', img_url);
        })
    }
};

$('#about_div').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_hide').hide();
    $('.boutme_transit').show();
    $('.boutme2_transit').show();
    $('.boutme_transit').hide('slide', {direction:'left'}, 1000);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 1000);
    $('#about_div').css('margin-bottom', '225px');
    $('#about_div').css('overflow', 'visible');
    $('#about_div').css('pointer-events', 'none');
});

$('.boutme_hide').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_hide').hide();
    $('.boutme_transit').show();
    $('.boutme2_transit').show();
    $('.boutme_transit').hide('slide', {direction:'left'}, 1000);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 1000);
    $('#about_div').css('margin-bottom', '225px');
    $('#about_div').css('overflow', 'visible');
    $('#about_div').css('pointer-events', 'none');
});

$('#resume_div').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_hide').hide();
    $('.resume_transit').show();
    $('.resume2_transit').show();
    $('.resume_transit').hide('slide', {direction:'left'}, 1000);
    $('.resume2_transit').hide('slide', {direction:'right'}, 1000);
    $('#resume_div').css('margin-bottom', '1000px');
    $('#resume_div').css('overflow', 'visible');
    $('#resume_div').css('pointer-events', 'none');
});

$('.resume_hide').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_hide').hide();
    $('.resume_transit').show();
    $('.resume2_transit').show();
    $('.resume_transit').hide('slide', {direction:'left'}, 1000);
    $('.resume2_transit').hide('slide', {direction:'right'}, 1000);
    $('#resume_div').css('margin-bottom', '1000px');
    $('#resume_div').css('overflow', 'visible');
    $('#resume_div').css('pointer-events', 'none');
});

$('#interests_div').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_hide').hide();
    $('.interests_transit').show();
    $('.interests2_transit').show();
    $('.interests_transit').hide('slide', {direction:'left'}, 1000);
    $('.interests2_transit').hide('slide', {direction:'right'}, 1000);
    $('#interests_div').css('margin-bottom', '300px');
    $('#interests_div').css('overflow', 'visible');
    $('#interests_div').css('pointer-events', 'none');
});

$('.interests_hide').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_hide').hide();
    $('.interests_transit').show();
    $('.interests2_transit').show();
    $('.interests_transit').hide('slide', {direction:'left'}, 1000);
    $('.interests2_transit').hide('slide', {direction:'right'}, 1000);
    $('#interests_div').css('margin-bottom', '300px');
    $('#interests_div').css('overflow', 'visible');
    $('#interests_div').css('pointer-events', 'none');
});

var executed = false;

$('#projects_div').click(function() {
    if (!executed) {
        $('#projects_div').css('background-color', 'transparent');
        $('.projects_hide').hide();
        $('.projects_transit').show();
        $('.projects2_transit').show();
        $('.projects_transit').hide('slide', {direction:'left'}, 1000);
        $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
        $('#projects_div').css('margin-bottom', '300px');
        $('#projects_div').css('overflow', 'visible');
        executed = true;
    }
});

$('.projects_hide').click(function() {
    if (!executed) {
        $('#projects_div').css('background-color', 'transparent');
        $('.projects_hide').hide();
        $('.projects_transit').show();
        $('.projects2_transit').show();
        $('.projects_transit').hide('slide', {direction:'left'}, 1000);
        $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
        $('#projects_div').css('margin-bottom', '300px');
        $('#projects_div').css('overflow', 'visible');
        executed = true;
    }
});

var about_exec = false;

$('.nav-item_bout').click(function() {
    if (!about_exec) {
        $('#about_div').css('background-color', 'transparent');
        $('.boutme_hide').hide();
        $('.boutme_transit').show();
        $('.boutme2_transit').show();
        $('.boutme_transit').hide('slide', {direction:'left'}, 1000);
        $('.boutme2_transit').hide('slide', {direction:'right'}, 1000);
        $('#about_div').css('margin-bottom', '225px');
        $('#about_div').css('overflow', 'visible');
        $('#about_div').css('pointer-events', 'none');
        about_exec = true;
    }
});

var res_exec = false;

$('.nav-item_res').click(function() {
    if (!res_exec) {
        $('#resume_div').css('background-color', 'transparent');
        $('.resume_hide').hide();
        $('.resume_transit').show();
        $('.resume2_transit').show();
        $('.resume_transit').hide('slide', {direction:'left'}, 1000);
        $('.resume2_transit').hide('slide', {direction:'right'}, 1000);
        $('#resume_div').css('margin-bottom', '1000px');
        $('#resume_div').css('overflow', 'visible');
        $('#resume_div').css('pointer-events', 'none');
        res_exec = true;
    }
});

var inter_exec = false;

$('.nav-item_inter').click(function() {
    if (!inter_exec) {
        $('#interests_div').css('background-color', 'transparent');
        $('.interests_hide').hide();
        $('.interests_transit').show();
        $('.interests2_transit').show();
        $('.interests_transit').hide('slide', {direction:'left'}, 1000);
        $('.interests2_transit').hide('slide', {direction:'right'}, 1000);
        $('#interests_div').css('margin-bottom', '300px');
        $('#interests_div').css('overflow', 'visible');
        $('#interests_div').css('pointer-events', 'none');
        inter_exec = true;
    }
});

$('.nav-item_pro').click(function() {
    if (!executed) {
        $('#projects_div').css('background-color', 'transparent');
        $('.projects_hide').hide();
        $('.projects_transit').show();
        $('.projects2_transit').show();
        $('.projects_transit').hide('slide', {direction:'left'}, 1000);
        $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
        $('#projects_div').css('margin-bottom', '300px');
        $('#projects_div').css('overflow', 'visible');
        executed = true;
    }
});

$(window).on('load', function() {
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        if (hash == 'projects') {
            if (!executed) {
                window.history.pushState("", document.title, window.location.pathname);
                $('#projects_div').css('background-color', 'transparent');
                $('.projects_hide').hide();
                $('.projects_transit').show();
                $('.projects2_transit').show();
                $('.projects_transit').hide('slide', {direction:'left'}, 1000);
                $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
                $('#projects_div').css('margin-bottom', '300px');
                $('#projects_div').css('overflow', 'visible');
                document.getElementById('projects').scrollIntoView();
                executed = true;
            }
        }
        else if (hash == 'interests') {
            if (!inter_exec) {
                window.history.pushState("", document.title, window.location.pathname);
                $('#interests_div').css('background-color', 'transparent');
                $('.interests_hide').hide();
                $('.interests_transit').show();
                $('.interests2_transit').show();
                $('.interests_transit').hide('slide', {direction:'left'}, 1000);
                $('.interests2_transit').hide('slide', {direction:'right'}, 1000);
                $('#interests_div').css('margin-bottom', '300px');
                $('#interests_div').css('overflow', 'visible');
                $('#interests_div').css('pointer-events', 'none');
                document.getElementById('interests').scrollIntoView();
                inter_exec = true;
            }
        }
        else if (hash == 'resume') {
            if (!res_exec) {
                window.history.pushState("", document.title, window.location.pathname);
                $('#resume_div').css('background-color', 'transparent');
                $('.resume_hide').hide();
                $('.resume_transit').show();
                $('.resume2_transit').show();
                $('.resume_transit').hide('slide', {direction:'left'}, 1000);
                $('.resume2_transit').hide('slide', {direction:'right'}, 1000);
                $('#resume_div').css('margin-bottom', '1000px');
                $('#resume_div').css('overflow', 'visible');
                $('#resume_div').css('pointer-events', 'none');
                document.getElementById('resume').scrollIntoView();
                res_exec = true;
            }
        }
        else if (hash == 'about') {
            if (!about_exec) {
                window.history.pushState("", document.title, window.location.pathname);
                $('#about_div').css('background-color', 'transparent');
                $('.boutme_hide').hide();
                $('.boutme_transit').show();
                $('.boutme2_transit').show();
                $('.boutme_transit').hide('slide', {direction:'left'}, 1000);
                $('.boutme2_transit').hide('slide', {direction:'right'}, 1000);
                $('#about_div').css('margin-bottom', '225px');
                $('#about_div').css('overflow', 'visible');
                $('#about_div').css('pointer-events', 'none');
                document.getElementById('about').scrollIntoView();
                about_exec = true;
            }
        }
    }
});