$(document).ready(function () {


  function navbar() {
    $('body').prepend(`<nav>
  <ul class="nav nav-tabs">
  <li class="nav-item">
  <a class="nav-link" id="abt" href="#">About Me</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="port" href="#">Portfolio</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="cont" href="#">Contact Me</a>
    </li>
  </ul>
  </nav>`);


    $('#cont').on('click', function () {
      contact();
      navbar();


    });

    $('#abt').on('click', function () {
      about();
      navbar();
    });


    $('#port').on('click', function () {
      carousel();
      navbar();

    });

  }

  function about() {
    $('body').html('<div class=container></div>');
    $('.container').html(`<div id='myinfo'><p>I am an adventurous soul with a love for design! I love to travel to beautiful destinations as well as create beautiful interactive applications. I am currently studying in the U of M Coding Bootcamp in order to start a career in Full Stack Web Development.</p><p> I have spent a decade of my professional time training others, coaching and developing their management skills as well as managing large groups of people.</p><p> I spent the first ten years of my professional life working for Burger King. I learned many skills; time management,people management, composure and temperment management, managing a P & L, everything HR (and MORE!) I ended my career with Burger King as a District Manager two years ago.</p><p> I am currently working for Office Depot at a Store Manager. The change of pace has granted me the ability to pursue a career I am more interested in.</p><p> On the lighter side of things I have a love for commitment! I have a turtle named Princess who I have had for over 15 years. My favorite places I have visited so far have been Puerto Rico, Alaska and NYC.</p><p> In Puerto Rico I signed up for a trip that seemed fun and adventurous to explore a cave. Little did I know that I would be in the cave for 8 hours and had to zipline and repel into the cave. At the time is seemed impossible, but reminiscing its pretty exciting that I did it! (... at the end they made us rock climb back up, AND I got to see a crab eating a bat! A bat eating crab!)</p><p> Alaska was a little less intense, I rented a car and drove as far as the roads would take me around Anchorage. From Copper Creek to Seward. Spent a few nights camping, and took a few trips out walking on glaciers and kayaking through some as well.</p><p> The best trip was NYC, food everywhere!</p></div>`);
  }


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
      <a href="https://dbarthell.github.io/GroupProject1/" target="_blank"><h4>(APP)Travel with Donna</h4></a><a href="https://github.com/dbarthell/GroupProject1" target="_blank"><h4>(GitHub Repo</h4></a>
  </div>
  <div class="carousel-item">
  <img class="d-block w-100" src="images/group-project1.jpg" href="https://dbarthell.github.io/GroupProject1/"target="_blank"alt="Fifth slide">
  <a href="https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=60efee95-091b-4888-9a88-a8d7013a46fc" target="_blank"><h4>(APP)Travel with Donna DEMO Video</h4></a>
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

  function contact() {
    $('body').html('<div class=container></div>')
    $('.container').html(`<form id='contactme'>
<div class="card" >
<div class="card-header">
  Contact Information:
</div><div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Margarita Barbotiko</li>
  <li class="list-group-item">mbarbotiko@gmail.com</li>
  <li class="list-group-item"><a href="tel:1+651-600-1396">651-600-1396</a></li>
  <li class="list-group-item"> <a href="assets/MargaritaBarbotiko2018.pdf" target="_blank">Resume</a></li>
</ul>	</div><div>
<ul class="icons">
  <li>
    <a href="https://twitter.com/mbarbotiko1"  target="_blank" class="fa-twitter">Twitter</a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/margarita-barbotiko-b5814050/"  target="_blank" class="fa-linkedin">Instagram</a>
  </li>
  <li>
    <a href="https://github.com/Mbarbotiko" target="_blank" class="fa-github">Facebook</a>
  </li>
</ul>
</div>`);
  }



  $('#about-icon').on('click', function () {
    $('#main').hide();
    about();
    navbar();
  });

  $('#portfolio-icon').on('click', function () {
    $('#main').hide();
    carousel();
    navbar();

  });

  $('#contact-icon').on('click', function () {
    $('#main').hide();
    contact();
    navbar();

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

  //   `<div class="modal" id='modalsubmit' tabindex="-1" role="dialog">
  //     <div class="modal-dialog" role="document">
  //         <div class="modal-content">
  //             <div class="modal-header">
  //                 <h5 class="modal-title">Submit was Successful!</h5>
  //                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  //                     <span aria-hidden="true">&times;</span>
  //                 </button>
  //             </div>
  //             <div class="modal-body">
  //                 <p>Thank you!</p>
  //             </div>
  //             <div class="modal-footer">


  //             </div>
  //         </div>
  //     </div>
  // </div>

  // <form>
  //     <div class="form-group">
  //         <label for="name-label">Name</label>
  //         <input type="name" autocomplete="name" class="form-control" id="name" placeholder="John Doe">
  //     </div>
  //     <div class="form-group">
  //         <label for="email-label">Email address</label>
  //         <input type="email" autocomplete="email" class="form-control" id="email" placeholder="name@example.com">
  //     </div>


  //     <div class="form-group">
  //         <label for="text-label"></label>
  //         <textarea class="form-control" id="user-entry" placeholder="Please include constructive criticism here" rows="3"></textarea>
  //     </div>
  //     <button type="button" id='submitBtn' class="btn btn-dark">Submit</button>
  // </form>`);
});

