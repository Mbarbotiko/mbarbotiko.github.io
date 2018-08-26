$(document).ready(function () {

  checkSize();
  $(window).resize(checkSize);

  function checkSize() {
    if ($(window).width() <= 800) {

      $('.project-card-container').on("click", function () {
        $('overlay').css({ 'opacity': '.8' });
        $(".overlay").fadeToggle(1000);
        $(".overlay-button").fadeToggle(1000);


      });

    }

  }

});

// https://your-bestfriend-finder.herokuapp.com/
// https://github.com/Mbarbotiko/FriendFinder
// https://github.com/Mbarbotiko/bamazon
// https://drive.google.com/file/d/1dRfkBjcGQ7oKHhpowLm6AbaoYvssZapD/view
// https://github.com/Mbarbotiko/liri-node-app
// https://drive.google.com/file/d/1EparZQQIjtx0XB9PTWqC_IH6sS07MWPJ/view
// https://github.com/dbarthell/GroupProject1
// https://dbarthell.github.io/GroupProject1/
// https://github.com/Mbarbotiko/Train-Schedule
// https://mbarbotiko.github.io/Train-Schedule/
// https://github.com/Mbarbotiko/API
// https://mbarbotiko.github.io/API/
// https://github.com/Mbarbotiko/Week-4-Game
// https://mbarbotiko.github.io/Week-4-Game/
// https://github.com/Mbarbotiko/TriviaGame
// https://mbarbotiko.github.io/TriviaGame/