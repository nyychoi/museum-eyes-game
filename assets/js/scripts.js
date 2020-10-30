$(document).ready(() =>{
  let cardNumber = 10;
  let $button = $(`.button`);
  let $toggle = $(`.toggle`);
  let $img = $(`img`)
  let cardCache = 0;
  let firstClick = true;
  let transitionSpeed = 500;
  let updateCardCache;
  let transitionBetweenCards;
  let toggleButtonText;
  let displayFirstCard;
  let toggleInstructions

  $button.click(() => {
    if (firstClick === true ) {
      $(`img`).toggle(transitionSpeed); firstClick = false;
      updateCardCache();
      return
    }

    toggleButtonText()
    transitionBetweenCards();
    updateCardCache()
  });

  $toggle.click(() => {
    toggleInstructions();
  })

  toggleInstructions = function() {
    $(`.instructions`).toggle(transitionSpeed);
    $toggle.text((i, text) => {
      return text === `hide instructions` ? `show instructions` : `hide instructions`;
    });
  }

  updateCardCache = function() {
    cardCache = (cardCache + 1) % cardNumber;
  };

  transitionBetweenCards = function() {
    $img.detach()
      .attr(`src`, `assets/images/card_${cardCache}.png`)
      .css(`display`,`none`)
      .appendTo(`.card`)
      .fadeIn(transitionSpeed)
  }

  toggleButtonText = function() {

    $button.text((text) => {
      if (cardCache === cardNumber - 1) {
        return 'start over';
      } else {
        return 'pick a card';
      }
    });
  }
})
