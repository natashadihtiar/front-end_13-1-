/* eslint-disable no-undef*/
$('.tooltip').css({
    margin: '30px',
    'font-size': '32px',
    'text-align': 'center',
    border: '1px double black',
});
$('.tooltip').mouseenter(function () {
    const prompt = '<span class="tooltip-content">';
    $(this).append(prompt + $(this).attr('data-tooltip'));
    $(this).css('background', 'pink');
});

$('.tooltip').mouseleave(function () {
    $(this).children('.tooltip-content').remove();
    $(this).css('background', 'white');
});
