$(document).ready(function(){
 	$("#page_top").click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
	});
$(window).load(function() {
		$('#slider').nivoSlider({
			animSpeed: 500,
			pauseTime: 2000,
			directionNav: false,
			controlNav: true,
		});
	});
		var navbar = document.getElementById("header");
		var sticky = navbar.offsetTop;
		var fixedside= $('#sidenav');

$(window).scroll(function(){
	if (window.pageYOffset >= 100) {
		fixedside.addClass("scroll");
	} else {
		fixedside.removeClass("scroll");
		}
	});	
});