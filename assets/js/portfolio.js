$(document).ready(function () {



  function carousel() {
    $('body').html('<div class=container></div>')
    $('.container').html(`<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol><div class="carousel-inner">
  <div class="carousel-item active">
  <img class="d-block w-100" src="images/triviagame.jpg"href="https://mbarbotiko.github.io/TriviaGame/"target="_blank" alt="Second slide">
  <a href="https://mbarbotiko.github.io/TriviaGame/" target="_blank"><h4>(APP) Video Game Trivia (JQuery)</h4></a>
<a href="https://github.com/Mbarbotiko/TriviaGame" target="_blank"><h4>(GitHub Repo)</h4></a>
  </div>
  <div class="carousel-item">
      <img class="d-block w-100" src="images/crystalsgame.jpg"href="https://mbarbotiko.github.io/Week-4-Game/"target="_blank" alt="Second slide">
      <a href="https://mbarbotiko.github.io/Week-4-Game/" target="_blank"><h4>(APP) Crystals Game (JQuery)</h4></a>
  <a href="https://github.com/Mbarbotiko/Week-4-Game" target="_blank"><h4>(GitHub Repo)</h4></a>
  </div>


  <div class="carousel-item">
      <img class="d-block w-100" src="images/api.jpg"href="https://mbarbotiko.github.io/API/"target="_blank" alt="Third slide">
      <a href="https://mbarbotiko.github.io/API/" target="_blank"><h4>(APP)Cartoon Giphy (Querying API)</h4></a><a href="https://github.com/Mbarbotiko/API" target="_blank"><h4>(GitHub Repo)</h4></a>
  </div>
  <div class="carousel-item">
      <img class="d-block w-100" src="images/trainschedule.JPG" href="https://mbarbotiko.github.io/Train-Schedule/"target="_blank"alt="Fourth slide">
      <a href="https://mbarbotiko.github.io/Train-Schedule/" target="_blank"><h4>(APP)Train Schedule (Firebase)</h4></a><a href="https://github.com/Mbarbotiko/Train-Schedule" target="_blank"><h4>(GitHub Repo)</h4></a>
  </div>
  <div class="carousel-item">
      <img class="d-block w-100" src="images/donna.jpg" href="https://dbarthell.github.io/GroupProject1/"target="_blank"alt="Fifth slide">
      <a href="https://dbarthell.github.io/GroupProject1/" target="_blank"><h4>(APP)Travel with Donna</h4></a><a href="https://github.com/dbarthell/GroupProject1" target="_blank"><h4>(GitHub Repo)</h4></a>
  </div>
  <div class="carousel-item">
  <img class="d-block w-100" src="images/group-project1.jpg" href="https://dbarthell.github.io/GroupProject1/"target="_blank"alt="Fifth slide">
  <a href="https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=60efee95-091b-4888-9a88-a8d7013a46fc" target="_blank"><h4>(APP)Travel with Donna DEMO Video</h4></a>
</div>
<div class="carousel-item">
<img class="d-block w-100" src="images/liri.jpg" href="https://dbarthell.github.io/GroupProject1/"target="_blank"alt="Fifth slide">
<a href="https://github.com/Mbarbotiko/liri-node-app" target="_blank"><h4>(Node.JS)Liri Bot(GitHub Repo)</h4></a>
</div>
</div>
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`);

  }

});

