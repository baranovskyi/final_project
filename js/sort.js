
var $catalog = $('.catalog');
$('#sortMin').click(function () {
$catalog.find('.catalog-content').sort(function (a, b) {
    return -a.dataset.cost + +b.dataset.cost;
})
.appendTo( $catalog );
})


$('#sortMax').click(function () {
$catalog.find('.catalog-content').sort(function (a, b) {
    return +a.dataset.cost - +b.dataset.cost;
})
.appendTo( $catalog );
})