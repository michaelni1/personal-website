$(window).on('load', function() {
    $('.first_load').hide();
}); 

$.ajaxSetup({
    async: false
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

$('#projects_div').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_hide').hide();
    $('.projects_transit').show();
    $('.projects2_transit').show();
    $('.projects_transit').hide('slide', {direction:'left'}, 1000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
    $('#projects_div').css('margin-bottom', '600px');
    $('#projects_div').css('overflow', 'visible');
    $('#projects_div').css('pointer-events', 'none');
});

$('.projects_hide').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_hide').hide();
    $('.projects_transit').show();
    $('.projects2_transit').show();
    $('.projects_transit').hide('slide', {direction:'left'}, 1000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
    $('#projects_div').css('margin-bottom', '600px');
    $('#projects_div').css('overflow', 'visible');
    $('#projects_div').css('pointer-events', 'none');
});

$('.nav-item_bout').click(function() {
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

$('.nav-item_res').click(function() {
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

$('.nav-item_inter').click(function() {
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

$('.nav-item_pro').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_hide').hide();
    $('.projects_transit').show();
    $('.projects2_transit').show();
    $('.projects_transit').hide('slide', {direction:'left'}, 1000);
    $('.projects2_transit').hide('slide', {direction:'right'}, 1000);
    $('#projects_div').css('margin-bottom', '600px');
    $('#projects_div').css('overflow', 'visible');
    $('#projects_div').css('pointer-events', 'none');
})