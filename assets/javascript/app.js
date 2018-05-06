$(document).ready(function () {


  function window980(a) {
    if (a.matches) {
      $('#about-icon').on({
        mouseenter: function () {
          $(this).animate({ width: "65%" }, 1000);
        },
        mouseleave: function () {
          $(this).animate({ width: "55%" }, 1000);
        }
      });

      $('#portfolio-icon').on({
        mouseenter: function () {
          $(this).animate({ width: "65%" }, 1000);
        },
        mouseleave: function () {
          $(this).animate({ width: "55%" }, 1000);
        }
      });

      $('#contact-icon').on({
        mouseenter: function () {
          $(this).animate({ width: "65%" }, 1000);
        },
        mouseleave: function () {
          $(this).animate({ width: "55%" }, 1000);
        }
      });

    } else {
      $('#about-icon').on({
        mouseenter: function () {
          $(this).animate({ width: "85%" }, 1000);
        },
        mouseleave: function () {
          $(this).animate({ width: "75%" }, 1000);
        }
      });

      $('#portfolio-icon').on({
        mouseenter: function () {
          $(this).animate({ width: "85%" }, 1000);
        },
        mouseleave: function () {
          $(this).animate({ width: "75%" }, 1000);
        }
      });

      $('#contact-icon').on({
        mouseenter: function () {
          $(this).animate({ width: "85%" }, 1000);
        },
        mouseleave: function () {
          $(this).animate({ width: "75%" }, 1000);
        }
      });
    }
  }


      var a = window.matchMedia("(max-width: 980px)")
      window980(a);
      a.addListener(window980);

    

  //add an onclick or hover for my image for a short message welcoming the user to my page



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

  window980();
});

