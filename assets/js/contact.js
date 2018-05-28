$(document).ready(function () {


  function contact() {
    $('body').html('<div class=container></div>')
    $('.container').html(`<form id='contactme'>
<div class="card" >
<div class="card-header">
  Contact Information:
</div><div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Margarita Barbotiko</li>
  <li class="list-group-item"><a href="mailto:mbarbotiko@gmail.com">mbarbotiko@gmail.com</li></a> 
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


});

