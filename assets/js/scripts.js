$(document).ready(function(){
  const cardNumber = 10;
  // [
  //   'card_1.png', 'card_2.png', 'card_3.png', 'card_4.png', 'card_5.png', 'card_6.png', 'card_7.png', 'card_8.png', 'card_9.png',
  // ]
  let cardCache = 0;
  let firstClick = true;
  let $img;


  $('.button').click(function() {
    if (firstClick === true ) {
      $('img').toggle(1000); firstClick = false; 
      cardCache = (cardCache + 1) % cardNumber;
      return
    }

    $(this).text(function(i, text) {

      console.log(cardCache, cardNumber)
        if (cardCache === cardNumber - 1) {
          return 'start over';
        } else {
          return 'pick a card';
        }
    });

    $img = $('img').detach()
    $img.attr('src', `assets/images/card_${cardCache}.png`)
        .css('display','none')
        .appendTo('.card')
        .show(1500)

    cardCache = (cardCache + 1) % cardNumber;
  });
  

  $(".toggle").click(function(){
    $(".instructions").toggle(1000);
    $(this).text(function(i, text) {
      return text === 'hide instructions' ? 'show instructions' : 'hide instructions';
    });
  })
})
