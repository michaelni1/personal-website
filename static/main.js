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

$('.boutme_transit').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 450);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 450);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.boutme2_transit').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 450);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 450);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.boutme_hide').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 450);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 450);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.resume_transit').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 450);
    $('.resume2_transit').hide('slide', {direction:'right'}, 450);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.resume2_transit').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 450);
    $('.resume2_transit').hide('slide', {direction:'right'}, 450);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.resume_hide').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 450);
    $('.resume2_transit').hide('slide', {direction:'right'}, 450);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.interests_transit').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 450);
    $('.interests2_transit').hide('slide', {direction:'right'}, 450);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.interests2_transit').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 450);
    $('.interests2_transit').hide('slide', {direction:'right'}, 450);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.interests_hide').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 450);
    $('.interests2_transit').hide('slide', {direction:'right'}, 450);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.projects_transit').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 450);
    $('.projects2_transit').hide('slide', {direction:'right'}, 450);
    $('.projects_hide').hide();
    $('#projects_div').css('height', '');
    $('.projects_content').css('margin-bottom', '200px');
});

$('.projects2_transit').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 450);
    $('.projects2_transit').hide('slide', {direction:'right'}, 450);
    $('.projects_hide').hide();
    $('.projects_content').css('margin-bottom', '200px');
    $('#projects_div').css('height', '');
});

$('.projects_hide').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 450);
    $('.projects2_transit').hide('slide', {direction:'right'}, 450);
    $('.projects_hide').hide();
    $('.projects_content').css('margin-bottom', '200px');
    $('#projects_div').css('height', '');
});

$('.nav-item_bout').click(function() {
    $('#about_div').css('background-color', 'transparent');
    $('.boutme_transit').hide('slide', {direction:'left'}, 450);
    $('.boutme2_transit').hide('slide', {direction:'right'}, 450);
    $('.boutme_hide').hide();
    $('#about_div').css('height', '');
});

$('.nav-item_res').click(function() {
    $('#resume_div').css('background-color', 'transparent');
    $('.resume_transit').hide('slide', {direction:'left'}, 450);
    $('.resume2_transit').hide('slide', {direction:'right'}, 450);
    $('.resume_hide').hide();
    $('#resume_div').css('height', '');
});

$('.nav-item_inter').click(function() {
    $('#interests_div').css('background-color', 'transparent');
    $('.interests_transit').hide('slide', {direction:'left'}, 450);
    $('.interests2_transit').hide('slide', {direction:'right'}, 450);
    $('.interests_hide').hide();
    $('#interests_div').css('height', '');
});

$('.nav-item_pro').click(function() {
    $('#projects_div').css('background-color', 'transparent');
    $('.projects_transit').hide('slide', {direction:'left'}, 450);
    $('.projects2_transit').hide('slide', {direction:'right'}, 450);
    $('.projects_hide').hide();
    $('.projects_content').css('margin-bottom', '200px');
    $('#projects_div').css('height', '');
})