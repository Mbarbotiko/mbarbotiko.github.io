$(document).ready(function () {

  if ('addEventListener' in window) {
    window.addEventListener('load', function () { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
  }
  

  const projectList = [
    {
      header: 'Pokemon Battle',
      imageSource: './images/pokebattle.jpg',
      alt: 'Pokemon Battle App',
      title: 'Front End Development',
      text: 'Javascript|ES6|OOP',
      footer: 'Aug 2020',
      githubLink: 'https://github.com/Mbarbotiko/pokebattle',
      projectLink: 'http://www.margarita.design/pokebattle',
    },
    {
      header: 'To Do List',
      imageSource: './images/todolist.jpg',
      alt: 'To Do List Application',
      title: 'Front End Development',
      text: 'SASS|REACT',
      footer: 'May 2020',
      githubLink: 'https://github.com/Mbarbotiko/new-to-do-list',
      projectLink: 'http://www.margarita.design/new-to-do-list/',
    },
    {
      header: 'Raku Sushi Lounge',
      imageSource: './images/raku.jpg',
      alt: 'Raku Sushi and Lounge Minnesota',
      title: 'Front End Development',
      text: 'HTML|CSS|SASS|Javascript|JQuery',
      footer: 'January 2020',
      githubLink: 'https://github.com/Mbarbotiko/Raku',
      projectLink: 'http://rakusushi.herokuapp.com',
    },
    {
      header: 'Citizenship Test',
      imageSource: './images/citizen.jpg',
      alt: 'Citizenship test app',
      title: 'Front End Development',
      text: 'HTML|CSS|Javascript',
      footer: 'December 2018',
      githubLink: 'https://github.com/Mbarbotiko/citizenship',
      projectLink: 'http://mbarbotiko.github.io/citizenship',
    },/*
    {
      header: 'Cava Manager App',
      imageSource: './images/cava-manager.jpg',
      alt: 'Cava Restaurant Website Manager',
      title: 'Full Stack Development',
      text: 'React|Express|MongoDB|Mongoose|CSS|Bootstrap',
      footer: 'October 2018',
      githubLink: 'https://github.com/Mbarbotiko/cavamanager',
      projectLink: 'https://cava-manager.herokuapp.com',
    },*/
    {
      header: 'Cava',
      imageSource: './images/cava.jpg',
      alt: 'Cava Restaurant Website',
      title: 'Front End Development',
      text: 'HTML|CSS|SASS|JQuery|Bootstrap',
      footer: 'August 2018',
      githubLink: 'https://github.com/Mbarbotiko/cava',
      projectLink: 'https://mbarbotiko.github.io/cava',
    },/*
    {
      header: 'Neighborly|Group Project',
      imageSource: './images/neighborly.jpg',
      alt: 'Social Website',
      title: 'Back End Development',
      text: 'MongoDB|Mongoose|Express|React',
      footer: 'August 2018',
      githubLink: 'https://github.com/robynocraig/neighborly',
      projectLink: 'https://app-neighborly.herokuapp.com',
    },
    {
      header: 'Poke-Switch',
      imageSource: './images/pokemonswitch.jpg',
      alt: 'Poke Switch Game',
      title: 'Front End Development',
      text: 'React|CSS|Bootstrap',
      footer: 'August 2018',
      githubLink: 'https://github.com/Mbarbotiko/pokeswitch',
      projectLink: 'https://morning-mesa-94984.herokuapp.com',
    },
    {
      header: 'SwapMee+Up|Group Project',
      imageSource: './images/swapmeetup.jpg',
      alt: 'SwapMeetup Website',
      title: 'Back End Development',
      text: 'MySQL|Sequelize|Express|Node',
      footer: 'June 2018',
      githubLink: 'https://github.com/Mbarbotiko/swapmeetup',
      projectLink: 'https://swapmeetup.herokuapp.com',
    },
    {
      header: 'Friend Finder',
      imageSource: './images/friendfinder.jpg',
      alt: 'Friend Finder App',
      title: 'Front & Back End Development',
      text: 'HTML|CSS|JQuery|Express|Node',
      footer: 'June 2018',
      githubLink: 'https://github.com/Mbarbotiko/FriendFinder',
      projectLink: 'https://your-bestfriend-finder.herokuapp.com',
    },*/
    {
      header: 'Train Schedule',
      imageSource: './images/trainschedule.jpg',
      alt: 'Train Schedule App',
      title: 'Front End Development',
      text: 'HTML|CSS|JQuery|Firebase',
      footer: 'May 2018',
      githubLink: 'https://github.com/Mbarbotiko/Train-Schedule',
      projectLink: 'https://mbarbotiko.github.io/Train-Schedule',
    },
    {
      header: 'Travel with Donna|Group Project',
      imageSource: './images/donna.jpg',
      alt: 'Travel with Donna App',
      title: 'Front End Development',
      text: 'HTML|CSS|JQuery',
      footer: 'May 2018',
      githubLink: 'https://github.com/dbarthell/GroupProject1',
      projectLink: 'https://dbarthell.github.io/GroupProject1',
    },
    {
      header: 'Bamazon',
      imageSource: './images/bamazon.jpg',
      alt: 'Bamazon Store App',
      title: 'Back End Development',
      text: 'Node JS',
      footer: 'May 2018',
      githubLink: 'https://github.com/Mbarbotiko/bamazon',
      projectLink: 'https://drive.google.com/file/d/1dRfkBjcGQ7oKHhpowLm6AbaoYvssZapD/view',
    },
    {
      header: 'LiriBot',
      imageSource: './images/liri.JPG',
      alt: 'LiriBot App',
      title: 'Back End Development',
      text: 'Node JS',
      footer: 'May 2018',
      githubLink: 'https://github.com/Mbarbotiko/liri-node-app',
      projectLink: 'https://drive.google.com/file/d/1EparZQQIjtx0XB9PTWqC_IH6sS07MWPJ/view',
    },
    {
      header: 'Cartoon GIPHY',
      imageSource: './images/api.jpg',
      alt: 'Cartoon Gif App',
      title: 'Front End Development',
      text: 'HTML|CSS|JQuery',
      footer: 'April 2018',
      githubLink: 'https://github.com/Mbarbotiko/API',
      projectLink: 'https://mbarbotiko.github.io/API',
    },

    {
      header: 'Got Game Trivia',
      imageSource: './images/triviagame.jpg',
      alt: 'Got Game Trivia App',
      title: 'Front End Development',
      text: 'HTML|CSS|JQuery',
      footer: 'April 2018',
      githubLink: 'https://github.com/Mbarbotiko/TriviaGame',
      projectLink: 'https://mbarbotiko.github.io/TriviaGame',
    },
    {
      header: 'Crystal Game',
      imageSource: './images/crystalsgame.jpg',
      alt: 'Crystal Game',
      title: 'Front End Development',
      text: 'HTML|CSS|Javascript|JQuery',
      footer: 'March 2018',
      githubLink: 'https://github.com/Mbarbotiko/Week-4-Game',
      projectLink: 'https://mbarbotiko.github.io/Week-4-Game',
    },

    // {
    //   header: ' ',
    //   imageSource: ' ',
    //   alt: ' ',
    //   title: ' ',
    //   text: ' ',
    //   footer: ' ',
    //   githubLink: ' ',
    //   projectLink: ' ',
    // },


  ]

  checkSize();
  window.addEventListener("resize", checkSize);
  function checkSize() {
    if ($(window).width() <= 800) {
      $('.project-list').empty();
      printProjectList();
      $('.overlay-button').hide();
      $('.overlay').hide();
    } else {

      $('.project-list').empty();
      printProjectList();
      $('.overlay-button').show();
      $('.overlay').show();
    }

  }
  function printProjectList() {
    projectList.map(function (print) {
      $('.project-list').append(
        `<div class="inner-container"></div>
        <div class="card">
					<div class="project-card-container">
							<a href="`+ print.projectLink + `"target="_blank">` +
        `<img src=` + print.imageSource + ` alt=` + print.alt + `>
						</a>
						<div class="card text-center project-card">
							<div class="card-header">
							`+ print.header + `
							</div>
							<div class="card-body">
								<h5 class="card-title">`+ print.title + `</h5>
								<p class="card-text">`+ print.text + `</p>
							</div>
							<div class="card-footer text-muted">
								`+ print.footer + `</div>
						</div>
						<div class="overlay-button">
							<div class="github-container">
								<a class="github-link" href=`+ print.githubLink + ` target="_blank">
									<i class="fab fa-github fa-3x"></i>
									<h2>Repository</h2>
								</a>
							</div>
							<div class="projectlink-container">
								<a class="project-link" href= `+ print.projectLink + ` target="_blank">
									<i class="fas fa-book-open fa-2x"></i>
									<h2>Live Project</h2>
								</a>
							</div>
            </div>
            <div id='hide'>
            <div class="overlay" href=""></div>
            </div>
					</div>
				</div>
			</div>`

      )

      
    })
  }


});

