let Slides = {
	container : $('#slides'),
  
	totalSlides : 0,
  
	translateAmount : 0,
  
	currentSlide : 0,
  
	slideWidth : 0,

	init : function(totalSlides) {
		var each;
  
		Slides.totalSlides = totalSlides;
  
		Slides.container.hide();
		for ( var i = 0; i < Slides.totalSlides; i++ ) {
			$('<div id="#slide-' + i + '"></div>').load('slides/' + i + '.html').appendTo(Slides.container);
		}
		Slides.container.show();

		each = Slides.container.children('div');
		
		Slides.slideWidth = each.width() + parseInt(each.css('margin-right'), 10);

		$(document.body).keydown(function(e) {
			if ( e.keyCode === 39 || e.keyCode === 37 ) {
				e.preventDefault();
				(e.keyCode === 39) ? Slides.next() : Slides.prev();
		    }
		});
	},

	next : function() {
		Slides.translateAmount -= Slides.slideWidth;
		++Slides.currentSlide;
		Slides.updateHash();
		Slides.animate();
	},

	prev : function() {
		if (Slides.translateAmount === 0) return;
		Slides.translateAmount += Slides.slideWidth;
		--Slides.currentSlide;
		Slides.updateHash();
		Slides.animate();
    },

	animate : function() {
		Slides.container.children().css( '-webkit-transform', 'translateX(' + Slides.translateAmount + 'px)' );
	},

	updateHash : function() {
		location.hash = '#slide-' + Slides.currentSlide;
	}
};
  
Slides.init(3);