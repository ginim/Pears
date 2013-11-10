var cards = [
	{ "chinese":"狗" , "pinyin":"gŏu" , "english":"dog" },
	{ "chinese":"爱" , "pinyin":"ài" , "english":"love" },
	{ "chinese":"中" , "pinyin":"zhōng" , "english":"middle" },
	{ "chinese":"吃" , "pinyin":"chī" , "english":"to eat" },
	{ "chinese":"臉" , "pinyin":"liăn" , "english":"face" },
	{ "chinese":"眼鏡" , "pinyin":"yănjìng" , "english":"glasses" },
	{ "chinese":"要" , "pinyin":"yào" , "english":"to want" },
	{ "chinese":"不要" , "pinyin":"búyào" , "english":"do not, do not want" },
	{ "chinese":"妹妹" , "pinyin":"mèimei" , "english":"younger sister" },
	{ "chinese":"美国" , "pinyin":"Mĕiguó" , "english":"America" },
	{ "chinese":"美丽" , "pinyin":"mĕilì" , "english":"beautiful" },
	{ "chinese":"鼻子" , "pinyin":"bízi" , "english":"nose" },
	{ "chinese":"耳朵" , "pinyin":"ĕrduo" , "english":"ear" },
	{ "chinese":"水" , "pinyin":"shuĭ" , "english":"water" },
	{ "chinese":"饭" , "pinyin":"fàn" , "english":"meal, food" },
	{ "chinese":"太阳" , "pinyin":"tàiyáng" , "english":"sun" },
	{ "chinese":"聽" , "pinyin":"tīng" , "english":"to hear, to listen" },
	{ "chinese":"冰淇淋" , "pinyin":"bīngqílín" , "english":"ice cream" },
	{ "chinese":"茶" , "pinyin":"chá" , "english":"tea" },
	{ "chinese":"你" , "pinyin":"nĭ" , "english":"you (familiar)" },
	{ "chinese":"你好" , "pinyin":"nĭ hăo" , "english":"hello, how are you" },
	{ "chinese":"睡" , "pinyin":"shuì" , "english":"to sleep" },
	{ "chinese":"睡觉" , "pinyin":"shuìjiào" , "english":"to go to bed" }
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNewCard() {
	return cards[getRandomInt(0,cards.length - 1)];
}

function setCardHtml(card) {
	$('#card_chinese').html(card.chinese);
	$('#card_pinyin').html(card.pinyin);
	$('#card_english').html(card.english);

	if($('#set_chinese').hasClass('set')) {
		$('#card_side1').show();
		$('#card_side2').hide();
	}
	if($('#set_english').hasClass('set')) {
		$('#card_side1').hide();
		$('#card_side2').show();
	}
}

$('#flip_card').on('click', function() {
	$('#card_side1').toggle();
	$('#card_side2').toggle();
});

$('#new_card').on('click', function() {
	var newCard = getNewCard();
	setCardHtml(newCard);
});


settingsMap = {'#set_chinese':'#set_english','#set_english':'#set_chinese'}

$('#set_chinese, #set_english').on('click', function() {
	setId = "#"+$(this).attr('id');
	$(this).toggleClass('set');
	$(settingsMap[setId]).toggleClass('set');

	$('#card_side1').toggle();
	$('#card_side2').toggle();	
});


$(document).ready( function() {
	var currentCard = getNewCard();
	setCardHtml(currentCard);
});