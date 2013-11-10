var cards = [
	{ "chinese":"狗" , "pinyin":"gŏu" , "english":"dog" },
	{ "chinese":"爱" , "pinyin":"ài" , "english":"love" },
	{ "chinese":"中" , "pinyin":"zhōng" , "english":"middle" }
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewCard() {
	return cards[getRandomInt(0,2)];
}

function setCardHtml(card) {
	$('#card_chinese').html(card.chinese);
	$('#card_pinyin').html(card.pinyin);
	$('#card_english').html(card.english);

	$('#card_side1').show();
	$('#card_side2').hide();
}

$('#flip_card').on('click', function() {
	$('#card_side1').toggle();
	$('#card_side2').toggle();
});

$('#new_card').on('click', function() {
	var newCard = getNewCard();
	setCardHtml(newCard);
});

$(document).ready( function() {
	var currentCard = getNewCard();
	setCardHtml(currentCard);
});