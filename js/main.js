var form = document.getElementById('contact_form');
var fields = form.querySelectorAll('.field')

function movecookes(id) {
	var element = document.getElementById(id);
	var from = document.documentElement.clientHeight;
	var to = document.documentElement.clientHeight-element.offsetHeight;
	element.style.top = document.documentElement.clientHeight;

	element.style.display="inline-block";

	let start = Date.now(); // запомнить время начала

	let timer = setInterval(function() {
  		let timePassed = Date.now() - start;

  		if (timePassed >= 1000) {
    		clearInterval(timer); // закончить анимацию через 2 секунды
    		return;
  		}

  	draw(timePassed);

	}, 20);

	function draw(timePassed) {
  		element.style.top = document.documentElement.clientHeight - element.offsetHeight * timePassed / 1000 + 'px';
	}
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  bcolor="#ff0000";
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
		fields[i].style.border="2px solid red";
    } else {
    	fields[i].style.border="2px solid green";
    }
  }
})

setTimeout(movecookes, 3000, "divcookies");
