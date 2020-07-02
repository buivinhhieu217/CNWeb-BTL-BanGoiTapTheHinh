$('.btn-info').click(function () {
    $(this).parent().parent().addClass('hidden');
    $(this).parent().parent().next().removeClass('hidden');
});
$('.btn-primary').click(function () {
    $(this).parent().parent().addClass('hidden');
    $(this).parent().parent().prev().removeClass('hidden');
});
