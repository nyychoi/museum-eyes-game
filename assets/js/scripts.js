$(document).ready(function(){
  const cardsArray = [
    'card_1.png', 'card_2.png', 'card_3.png', 'card_4.png', 'card_5.png', 'card_6.png', 'card_7.png', 'card_8.png', 'card_9.png',
  ]
  let cardCache = 0;
  let clickCount = 0

  $('.button').click(function() {
    if (clickCount === 0 ) $('img').toggle(500); clickCount++;
    $(this).text(function(i, text) {

      console.log(cardCache, cardsArray.length)
        if (cardCache === cardsArray.length - 1) {
          return 'start over';
        } else {
          return 'pick a card';
        }
    });

    $('img').attr('src', `assets/images/card_${cardCache}.png`)
    cardCache = (cardCache + 1) % cardsArray.length;
  });
  

  $(".toggle").click(function(){
    $(".instructions").toggle(1000);
    $(this).text(function(i, text) {
      return text === 'hide instructions' ? 'show instructions' : 'hide instructions';
    });
  })
})
