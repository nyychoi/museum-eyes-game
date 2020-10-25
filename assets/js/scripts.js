$(document).ready(function(){
  const cardsArray = [
    'card_1.png', 'card_2.png', 'card_3.png', 'card_4.png', 'card_5.png', 'card_6.png', 'card_7.png', 'card_8.png', 'card_9.png',
  ]
  let cardCache = 1;
  $('.button').click(function() {
    cardCache = (cardCache + 1) % cardsArray.length;
    $('.under').attr('src', `assets/images/card_${cardCache}.png`)
    $(".over").before($(".under"));
    $('#card-a').toggleClass('over under')
    $('#card-b').toggleClass('under over')

  });

  
})
