$(document).ready(function () {

  checkSize();
  $(window).resize(checkSize);

  function checkSize() {
    if ($(window).width() <= 800) {

      $('.overlay-button').hide();
      $('.overlay').hide();


    }

  }


  const projectList = [
    {
      header: 'Cava',
      title: 'Front End Development',
      text: 'HTML|CSS|JQuery',
      footer: 'August 2018',
      githubLink: 'https://github.com/Mbarbotiko/cava',
      projectLink: 'https://mbarbotiko.github.io/cava/',
    },
    {
      header: 'Neighborly|Group Project',
      title: 'Back End Development',
      text: 'MongoDB|Mongoose|Express|React|ES6',
      footer: 'August 2018',
      githubLink: 'https://github.com/robynocraig/neighborly',
      projectLink: 'https://app-neighborly.herokuapp.com/',
    },
    {
      header: 'Poke-Switch',
      title: 'Front End Development',
      text: 'JSX|ES6|CSS|React',
      footer: 'August 2018',
      githubLink: 'https://github.com/Mbarbotiko/pokeswitch',
      projectLink: 'https://morning-mesa-94984.herokuapp.com/',
    },

  ]


  // function printProjectList() {
  //   return projectList.map(function (print) {
  //     return print.header + 'Header' + print.title + 'Title'
  //   })
  // }
  // console.log(printProjectList());

//   function mapIt() {
//     projectList.map(function (iterate) {
//       console.log(iterate.header + iterate.title);
//     })
//   }

// mapIt();







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