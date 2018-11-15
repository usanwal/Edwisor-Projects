$(document).ready(function (){
			
		   	var stickyNavTop = $('.fixed').offset().top;
		   	
		   	
		   	var stickyNav = function(){
			    var scrollTop = $(window).scrollTop(); 
			    console.log(scrollTop);
			         

			    if (scrollTop > stickyNavTop) { 
			        $('.fixed').addClass('sticky');
			    } else {
			        $('.fixed').removeClass('sticky'); 
			    }
			};

			stickyNav();
			// and run it again every time you scroll
			$(window).scroll(function() {
				stickyNav();
			});
		});