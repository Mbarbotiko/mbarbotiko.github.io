$(document).ready(function () {



  $('#about-icon').on('click', function(){
    $('#main').empty();
    $('body').html('<div class=container></div>');
    $('.container').html('<h1>About Me<h1><p>I am an adventurous soul with a love for design! I love to travel to beautiful destinations as well as create beautiful things. I am currently studying in the U of M Coding Bootcamp in order to start a career in Front End Web Development.</p><p> I have spent a decade of my professional time training others, coaching and developing their management skills as well as managing large groups of people.</p><p> I spent the first ten years of my professional life working for Burger King. I learned many skills; time management,people management, composure and temperment management, managing a P & L, everything HR (and MORE!) I ended my career with Burger King as a District Manager two years ago.</p><p> I am currently working for Office Depot at a Store Manager. The change of pace has granted me the ability topursue a career I am more interested in.</p><p> On the lighter side of things I have a love for commitment! I have a turtle named Princess who I have had for over 15 years. My favorite places I have visited so far have been Puerto Rico, Alaska and NYC.</p><p> In Puerto Rico I signed up for a trip that seemed fun and adventurous to explore a cave. Little did I know that I would be in the cave for 8 hours and had to zipline and repel into the cave. At the time is seemed impossible, but reminiscing its pretty exciting that I did it! (... at the end they made us rock climb back up, AND I got to see a crab eating a bat! A bat eating crab!)</p><p> Alaska was a little less intense, I rented a car and drove as far as the roads would take me around Anchorage. From Copper Creek to Seward. Spent a few nights camping, and took a few trips out walking on glaciers and kayaking through some as well.</p><p> The best trip was NYC, food everywhere!</p><p>My Profile is not fully complete, I still have several visual changes to make, and additions for projects as well. I havent completed a mobile friendly view yet either! Project completion date is end of May 2018! Thanks for stopping by :) !</p>')
    
    

  });

  $('#portfolio-icon').on('click', function(){
    $('#main').empty();
    $('body').html('<div class=container></div>')
    $('.container').html(`<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol><div class="carousel-inner">
    <div class="carousel-item active">
        <img class="d-block w-100" src="images/triviagame.jpg" href="https://mbarbotiko.github.io/TriviaGame/"target="_blank" alt="First slide">
        <a href="https://mbarbotiko.github.io/TriviaGame/" target="_blank"><h4>Trivia Game (JQuery)</h4></a>

    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="images/crystalsgame.jpg"href="https://mbarbotiko.github.io/Week-4-Game/"target="_blank" alt="Second slide">
        <a href="https://mbarbotiko.github.io/Week-4-Game/" target="_blank"><h4>Crystals Game (JQuery)</h4></a>
    </div>


    <div class="carousel-item">
        <img class="d-block w-100" src="images/api.jpg"href="https://mbarbotiko.github.io/API/"target="_blank" alt="Third slide">
        <a href="https://mbarbotiko.github.io/API/" target="_blank"><h4>Giphy (Querying API)</h4></a>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="images/trainschedule.JPG" href="https://mbarbotiko.github.io/Train-Schedule/"target="_blank"alt="Fourth slide">
        <a href="https://mbarbotiko.github.io/Train-Schedule/" target="_blank"><h4>Train Schedule (Firebase)</h4></a>
    </div>
    <div class="carousel-item">
        <img class="d-block w-100" src="images/donna.jpg" href="https://dbarthell.github.io/GroupProject1/"target="_blank"alt="Fifth slide">
        <a href="https://dbarthell.github.io/GroupProject1/" target="_blank"><h4>Group Project</h4></a>
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
</div>`)

  });

  $('#contact-icon').on('click', function(){
    $('#main').empty();
    $('body').html('<div class=container></div>')

  });




  var config = {
    apiKey: "AIzaSyC4f8X5KLqYfuzT9ayM8pgWB0f-1UDGJpY",
    authDomain: "portfolio-submit.firebaseapp.com",
    databaseURL: "https://portfolio-submit.firebaseio.com",
    projectId: "portfolio-submit",
    storageBucket: "https://portfolio-submit.appspot.com",
    messagingSenderId: "1087976841086"
  };
  firebase.initializeApp(config);

  var database = firebase.database();



  $('#submitBtn').one('click', function (event) {
    event.preventDefault();
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var userText = $('#user-entry').val().trim();

    var newSubmit = {
      enteredName: name,
      enteredEmail: email,
      enteredText: userText,
    };

    database.ref().push(newSubmit);

    $("#name").val("");
    $("#email").val("");
    $("#user-entry").val("");
    $("#modalsubmit").modal();
  });

  // window980();

    // function window980(a) {
  //   if (a.matches) {
  //     $('#about-icon').on({
  //       mouseenter: function () {
  //         $(this).animate({ width: "12%" }, 1000);
  //       },
  //       mouseleave: function () {
  //         $(this).animate({ width: "10%" }, 1000);
  //       }
  //     });

  //     $('#portfolio-icon').on({
  //       mouseenter: function () {
  //         $(this).animate({ width: "12%" }, 1000);
  //       },
  //       mouseleave: function () {
  //         $(this).animate({ width: "10%" }, 1000);
  //       }
  //     });

  //     $('#contact-icon').on({
  //       mouseenter: function () {
  //         $(this).animate({ width: "12%" }, 1000);
  //       },
  //       mouseleave: function () {
  //         $(this).animate({ width: "10%" }, 1000);
  //       }
  //     });

  //   } else {
  //     $('#about-icon').on({
  //       mouseenter: function () {
  //         $(this).animate({ width: "12%" }, 1000);
  //       },
  //       mouseleave: function () {
  //         $(this).animate({ width: "10%" }, 1000);
  //       }
  //     });

  //     $('#portfolio-icon').on({
  //       mouseenter: function () {
  //         $(this).animate({ width: "12%" }, 1000);
  //       },
  //       mouseleave: function () {
  //         $(this).animate({ width: "10%" }, 1000);
  //       }
  //     });

  //     $('#contact-icon').on({
  //       mouseenter: function () {
  //         $(this).animate({ width: "12%" }, 1000);
  //       },
  //       mouseleave: function () {
  //         $(this).animate({ width: "10%" }, 1000);
  //       }
  //     });
  //   }
  // }


  //     var a = window.matchMedia("(max-width: 980px)")
  //     window980(a);
  //     a.addListener(window980);

    

  //add an onclick or hover for my image for a short message welcoming the user to my page
});

