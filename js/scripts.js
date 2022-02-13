function main() {
	currentSlide = 0;
	maxSlide = 2;

	slides = $('.slides');

	// load all slides
	slides.hide();
	for (var i = 0; i <= maxSlide; i++) {
		$('<div id="' + i + '"></div>').load('slides/' + i + '.html').appendTo(slides);
	}
	slides.show();

	// hide all except first slide
	for (var i = 1; i <= maxSlide; i++)
		slides.children()[i].style.display = "none";

	function move(n) {
		if ((currentSlide === maxSlide && n === 1) || (currentSlide === 0 && n === -1)) return null;
		
		document.getElementById(String(currentSlide)).style.display = "none";
		currentSlide += n;
		document.getElementById(String(currentSlide)).style.display = "flex";
	}

	$(document.body).keydown(function(e) {
		// Fullscreen with 'f'
		if (e.keyCode === 70) {
			let e = document.querySelector('.slides');
			if (e.requestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullScreen) {
				e.requestFullscreen();
			}
		} // left and right arrows
		else if ( e.keyCode === 39 || e.keyCode === 37 ) {
			e.preventDefault();
			(e.keyCode === 39) ? move(1) : move(-1);
		}
	});
}

main();
