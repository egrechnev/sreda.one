$(function() {

	//--disabled link
	$('a.disabled').on('click', function(e) {
		e.preventDefault();
   	});

	//--active menu header	
		var pathname_url = window.location.pathname;
		var href_url = window.location.href;
		$(".header-menu li").each(function() {
			var link = $(this).find("a").attr("href");
			if(pathname_url == link || href_url == link) {
				$(this).addClass("active");
			}
		});
	
	
	//--hide element
		function windowScrollPosition(){
		// $(window).scroll(function(){
	
			var blockPosition0 = $('#trigger-00').offset().top,
				windowScrollPosition = $(window).scrollTop();
			if( blockPosition0 < windowScrollPosition ) {
				$('.page-nav-first').addClass('active');
			}
			 
			// 
	
			var blockPosition1 = $('#trigger-01').offset().top,
				windowScrollPosition = $(window).scrollTop();
			if( blockPosition1 < windowScrollPosition ) {
				$('.page-nav-first').removeClass('active');
			}
	
			// 
	
			var blockPosition2 = $('#trigger-02').offset().top,
				windowScrollPosition = $(window).scrollTop();
	
			if( blockPosition2 < windowScrollPosition ) {
				$('#info-text-02, .info-title-02').attr('data-aos', 'hide');
				// $('.info').css({'max-width': '420px'});
			} else {
				$('#info-text-02, .info-title-02').attr('data-aos', 'fade');
			}
	
			// 
	
			var blockPosition5 = $('#trigger-05').offset().top,
				windowScrollPosition = $(window).scrollTop();
		   
			if( blockPosition5 < windowScrollPosition ) {
				$('#bloom').attr('data-aos', 'hide');
			} else {
				$('#bloom').attr('data-aos', 'fade');
			}
	
			// 
	
			var blockPosition6 = $('#trigger-06').offset().top,
				windowScrollPosition = $(window).scrollTop();
		   
			if( blockPosition6 < windowScrollPosition ) {
				$('#info-text-03, .info-title-03').attr('data-aos', 'hide');
				// $('.info').css({'max-width': '510px'});
				$('.info').addClass('info-width-02');
			} else {
				$('#info-text-03, .info-title-03').attr('data-aos', 'fade');
				$('.info').removeClass('info-width-02');
			}
	
			// 
	
			var blockPosition7 = $('#trigger-07').offset().top,
				windowScrollPosition = $(window).scrollTop();
		   
			if( blockPosition7 < windowScrollPosition ) {
				$('#info-text-04, .info-title-04').attr('data-aos', 'hide');
				$('#farmer, .culture-main').attr('data-aos', 'hide');
				// $('.info').css({'max-width': '460px'});
				$('.info').removeClass('info-width-02');
				$('.info').addClass('info-width-03');
				
			} else {
				$('#info-text-04, .info-title-04').attr('data-aos', 'fade');
				$('#farmer, .culture-main').attr('data-aos', 'fade');
				$('.info').removeClass('info-width-03');
			}			
	
			// 
	
			var blockPosition8 = $('#trigger-08').offset().top,
				windowScrollPosition = $(window).scrollTop();
		   
			if( blockPosition8 < windowScrollPosition ) {
				$('#info-text-05, .info-title-05').attr('data-aos', 'hide');
				$('.harvest').attr('data-aos', 'hide');
				$('.harvest').attr('data-aos-delay', '900');
				$('#car').attr('data-aos', 'car');
				$('#car').show();
			} else {
				$('#info-text-05, .info-title-05').attr('data-aos', 'fade');
				$('.harvest').attr('data-aos', 'fade');
				$('.harvest').attr('data-aos-delay', '0');
			}	
	
			// 
	
			var blockPosition9 = $('#trigger-09').offset().top,
				windowScrollPosition = $(window).scrollTop();
		   
			if( blockPosition9 < windowScrollPosition ) {
				// $('#car').attr('data-aos', 'car-end');
				$('#car').addClass('car-end');
			} else {
				// $('#car').attr('data-aos', 'car-start');
				$('#car').removeClass('car-end');
			}
	
			// 
	
			var blockPosition10 = $('#trigger-10').offset().top,
				windowScrollPosition = $(window).scrollTop();
		   
			if( blockPosition10 < windowScrollPosition ) {
				// $('.culture-main, .harvest').attr('data-aos', 'hide');
				$('#car').hide();
			} else {
				// $('.culture-main, .harvest').attr('data-aos', 'fade');
				
			}	
	
	
		// });
		}
	
		$(window).on('scroll load resize',windowScrollPosition);
		
		
	//--windowSize
		function windowSize(){
					
			$('.mobile-bg').each(function(){
				let width = $(this).width();
	
				if ($(window).width() > width){
					$('.mobile-header, .mobile-btn-create, .mobile-bg-final').css('width', width);
				} else {
					$('.mobile-header, .mobile-btn-create, .mobile-bg-final').css('width', '100%');
				}
				  
			});
		
		}
		$(window).on('load resize',windowSize);
	
		
	//--AOS	
		AOS.init()
	
	
	//--disable scaling
		$(document).keydown(function(e) {
			if (e.ctrlKey==true && (e.which == '61' || e.which == '107' || e.which == '173' || e.which == '109'  || e.which == '187'  || e.which == '189'  ) ) {
				e.preventDefault();
			}
				// 107 Num Key  +
				// 109 Num Key  -
				// 173 Min Key  hyphen/underscor Hey
				// 61 Plus key  +/= key
		});
	
		document.addEventListener('wheel', function(e) {
			if (e.ctrlKey == true) {
				e.preventDefault();
			}
		}, {
			passive: false
		});
	
	
	//--navigation menu links
		var lastId,
		topMenu = $('#page-nav'),
		// topMenuHeight = topMenu.outerHeight()+15,
	
		// All list items
		menuItems = topMenu.find('.anchor'),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr('href'));
			if (item.length) { return item; }
		});
	
		// Bind click handler to menu items
		// so we can get a fancy scroll animation
		menuItems.click(function(e){
			var href = $(this).attr('href'),
			//   offsetTop = href === '#' ? 0 : $(href).offset().top-topMenuHeight+1;
			offsetTop = href === '#' ? 0 : $(href).offset().top+1;
			$('html, body').stop().animate({
			scrollTop: offsetTop
			}, 0);
			e.preventDefault();
		});
	
		// Bind to scroll
		$(window).scroll(function(){
			// Get container scroll position
			var fromTop = $(this).scrollTop();
			// var fromTop = $(this).scrollTop()+topMenuHeight;
	
			// Get id of current scroll item
			var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
			return this;
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
	
			if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass('active')
				.end().filter('[href="#'+id+'"]').parent().addClass('active');
			}
		});
	
	
	//--ScrollPage
		if(!(/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
			$.scrollify({
				section : ".trigger",
				sectionName : "section-name",
				// scrollSpeed: 800,
				offset : 500,
				scrollbars: false,
				// standardScrollElements: "",
				// setHeights: false,
				updateHash: false,
				// easing: "easeOutExpo",
			});	
	
			$("#page-nav a").on("click",$.scrollify.move);
	
		}
	
	
	//--orientationchange
	
	//--Прослушка события изменения ориентации
	// var mql = window.matchMedia("(orientation: landscape)");
	
	// if(mql.matches) {  
	// 	// Портретная ориентация
	// 	$('body').addClass('landscape');
	
	// } else {  
	// 	// Горизонтальная ориентация
	// 	$('body').removeClass('landscape');
	// }
	
	// // Прослушка события изменения ориентации
	// mql.addListener(function(m) {
	//     if(m.matches) {
	// 		// Изменено на портретный режим
	// 		$('body').addClass('landscape');
	//     }
	//     else {
	// 		// Изменено на горизонтальный режим
	// 		$('body').removeClass('landscape');
	//     }
	// });
	
	
	//--scrollTop refresh
		// $(window).on('beforeunload', function(){
		// 	$(window).scrollTop(0);
		// });
	
		$(window).on('unload', function(){
			$(window).scrollTop(0);
		});
	
	
	//--mobile carousel
		$('.owl-carousel').owlCarousel({
			items:1,
			// animateOut: 'fadeOut',
			nav:true,
			// loop:true,
			smartSpeed: 450
		});
	
		
		// var owl = $('.owl-carousel');
		// owl.owlCarousel({
		// 	items:1,
		// 	// animateOut: 'fadeOut',
		// 	// loop:true,
		// });
	
		// owl.on('mousewheel', '.owl-stage', function (e) {
		// 	if (e.deltaY>0) {
		// 		owl.trigger('prev.owl', 800);
		// 	} else {
		// 		owl.trigger('next.owl', 800);
		// 	}
		// 	e.preventDefault();
		// });	
	
	
	//--IE
		if(/(MSIE|Triden)/.test(navigator.userAgent)){
			document.body.innerHTML = '<div class="ie d-flex justify-content-center"><img class="bg-landing" src="img/bg-landing.svg" alt="sreda" /><p class="info"><b>Браузер не поддерживается</b> Пожалуйста, <a href="https://www.google.ru/chrome/">установите другой браузер</a></p></div>';
		}
	
	});
	
	$(window).on('load resize', function(){
	
		if ($(window).height() < '600'){
			$('body').addClass('mobile');
		} else {
			$('body').removeClass('mobile');
		}
	
		if ($(window).height() < '680'){
			$('.bubble-bottom-right').addClass('min');
		} else {
			$('.bubble-bottom-right').removeClass('min');
		}	
	
		if ($(window).height() < '540'){
			$('.mobile-wrapper').addClass('min-h');
		} else {
			$('.mobile-wrapper').removeClass('min-h');
		}
	
		if ($(window).width() < '420'){
			$('.mobile-wrapper').addClass('min-w');
		} else {
			$('.mobile-wrapper').removeClass('min-w');
		}
	
		if ($(window).height() < '390'){
			$('body').addClass('resize');
		} else {
			$('body').removeClass('resize');
		}	
	
	
		var mobileWindowHeight = $(window).height(),
		mobileHeaderHeight = $('.mobile-header').height(),
		mobileBtnCreate = $('.mobile-btn-create').height(),
		mobileItemHeight = mobileWindowHeight - mobileHeaderHeight - mobileBtnCreate;
	
		$('.mobile-item').css('height', mobileItemHeight);
	
	
		
		if (($(window).height() > '728') && ($(window).width() < '478')){
			$('.mobile-item').each(function(){
				var height = $(this).height() * 0.3;
				var heightTop = $(this).height() * 0.65;
				$(this).find('.mobile-bg, .mobile-bg-final').css('height', height);	
				$(this).find('.mobile-text-wrapper').css('height', heightTop);		  
			});
		} else {
			$('.mobile-item').each(function(){
				var height = $(this).height() * 0.4;
				var heightTop = $(this).height() * 0.55;
				$(this).find('.mobile-bg, .mobile-bg-final').css('height', height);	
				$(this).find('.mobile-text-wrapper').css('height', heightTop);		  
			});
		}
	
		setTimeout(function() {
			let heightBg = $('.mobile-bg').height();	
			$('.owl-dots').css({'bottom': heightBg + 25, 'opacity': '1'});
			$('.owl-nav').css({'bottom': heightBg, 'opacity': '1'});
		}, 200);
	
	});