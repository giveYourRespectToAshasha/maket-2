$('.wrapper .third-block .third-footer .button-arrow').first().click(function() {
let firstItem = $('.wrapper .third-block .slider .item').eq(0).detach();
$('.wrapper .third-block .slider').append(firstItem);
let firstItem1 = $('.wrapper .third-block .third-footer .dots .item').eq(0).detach();
$('.wrapper .third-block .third-footer .dots').append(firstItem1);
	});
$('.wrapper .third-block .third-footer .button-arrow').eq(1).click(function() {
let lastItem = $('.wrapper .third-block .slider .item').eq(5).detach();
$('.wrapper .third-block .slider').prepend(lastItem);
let lastItem1 = $('.wrapper .third-block .third-footer .dots .item').eq(4).detach();
$('.wrapper .third-block .third-footer .dots').prepend(lastItem1);
	});

$('.wrapper .footer .comments .left-arrow').click(function() {
	let firstItem2 = $('.wrapper .footer .comments .items .item').eq(0).detach();
	$('.wrapper .footer .comments .items').append(firstItem2);
	let firstItem3 = $('.wrapper .footer .comments .dots .dottes .cent .dot').eq(0).detach();
	$('.wrapper .footer .comments .dots .dottes .cent').append(firstItem3);


});
$('.wrapper .footer .comments .right-arrow').click(function() {
	let lastItem2 = $('.wrapper .footer .comments .items .item').eq(3).detach();
	$('.wrapper .footer .comments .items').prepend(lastItem2);
	let lastItem3 = $('.wrapper .footer .comments .dots .dottes .cent .dot').eq(8).detach();
	$('.wrapper .footer .comments .dots .dottes .cent').prepend(lastItem3);
});