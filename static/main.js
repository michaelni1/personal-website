$(window).on('load', function() {
    $('.first_load').hide();
});

$('.boutme').hover(function() {
    $('.boutme').hide('slide', {direction:'left'}, 300);
    $('.boutme2').hide('slide', {direction:'right'}, 300);
    $('.boutme_text').hide();
});

$('.boutme2').hover(function() {
    $('.boutme').hide('slide', {direction:'left'}, 300);
    $('.boutme2').hide('slide', {direction:'right'}, 300);
    $('.boutme_text').hide();
});