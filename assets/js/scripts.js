$(document).ready(() =>{
  const cardAltText = {
    0: `Image shows a scribble that alludes to a fallen banner or pooled rope, with the following text, Make a statement about your project.`,
    1: `Image shows an ordered list of 3 items with gibberish curssive after each bumber, with the following text, Describe your project in three words.`,
    2: `Image shows three faces, left is happy, middle has concerned eyebrows and a squiggled concerned mouth, with the following text, Using only a facial expressions, how do you feel about your project today?`,
    3: `Complete this sentence: "One question I currently have about my project is..."`,
    4: `Image shows a bubbled question mark, with the following text, Complete this sentence about your Style: "I like receiving feedback and support that is...`,
    5: `Image shows a standar orb light bulb with the filament prominently visible like an edison bulb, with the following text, Complete this sentence about your project: "I have discovered that...`,
    6: `Image shows, a scribble that alludes to a body in a fetal or kneeling position with the arms wrapped around the legs or body in a self hug, with the following text, Share one aspect of your project that feels unformed.`,
    7: `Image shows a speech bubble with the word "EEK!", with the following text, Share one thing that scares you about your project.`,
    8: `Image shows a looping line/arrow, that begins from the left and gets progressively larger as the curly cue moves right, with the following text, Complete this sentence about your Style: "I like giving your feedback and support that is..."`,
    9: `Image shows a feathered, dark blur or cloud, with the following text, Out of cards! What other questions do you have about your projects?`
  }
  let cardNumber = 10;
  let $button = $(`.button`);
  let $toggle = $(`.toggle`);
  let $img = $(`img`)
  let $instructions = $(`.instructions`)
  let cardCache = 0;
  let firstClick = true;
  let transitionSpeed = 500;
  let updateCardCache;
  let transitionBetweenCards;
  let toggleButtonText;
  let displayFirstCard;
  let toggleInstructions

  $button.click((e) => {
    e.preventDefault();
    if (firstClick === true ) {
      $(`img`).toggle(transitionSpeed); firstClick = false;
      updateCardCache();
      if ($instructions.not(`:hidden`)) { toggleInstructions(); }
      return
    }

    toggleButtonText()
    transitionBetweenCards();
    updateCardCache()
  });

  $toggle.click((e) => {
    e.preventDefault();
    toggleInstructions();
  })

  toggleInstructions = function() {
    $instructions.toggle(transitionSpeed);
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
      .attr(`alt`, cardAltText[cardCache])
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
