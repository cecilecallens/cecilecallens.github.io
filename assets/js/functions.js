$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

function smoothScroll(){
	
	$('a[href^="#"]').click(function(event){
		
		var target = $($(this).attr('href'));

    if (target.length){
      event.preventDefault();
      $('html, body').animate({
	      scrollTop: target.offset().top - 15
      }, 300);
    }
		
		$('.nav').toggleClass('open');
		
	});
	
}

function fullSlider(){

	$('#full-slide-ocre .prev, #full-slide-ocre .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-ocre .banner').find('.active'),
				position = $('#full-slide-ocre .banner').children().index(current),
				totalPics = $('#full-slide-ocre .banner').children().length;

		if ($this.hasClass('next')){
		
			if (position < totalPics - 1){
				$('#full-slide-ocre .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-ocre .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-ocre .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-ocre .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});

	$('#full-slide-gris .prev, #full-slide-gris .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-gris .banner').find('.active'),
				position = $('#full-slide-gris .banner').children().index(current),
				totalPics = $('#full-slide-gris .banner').children().length;

		if ($this.hasClass('next')){
		
			if (position < totalPics - 1){
				$('#full-slide-gris .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-gris .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-gris .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-gris .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});


	$('#full-slide-bleu .prev, #full-slide-bleu .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-bleu .banner').find('.active'),
				position = $('#full-slide-bleu .banner').children().index(current),
				totalPics = $('#full-slide-bleu .banner').children().length;

		if ($this.hasClass('next')){
			

			if (position < totalPics - 1){
				$('#full-slide-bleu .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-bleu .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-bleu .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-bleu .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});


	$('#full-slide-jaune .prev, #full-slide-jaune .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-jaune .banner').find('.active'),
				position = $('#full-slide-jaune .banner').children().index(current),
				totalPics = $('#full-slide-jaune .banner').children().length;

		if ($this.hasClass('next')){
			
			if (position < totalPics - 1){
				$('#full-slide-jaune .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-jaune .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-jaune .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-jaune .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});
	$('#full-slide-vert .prev, #full-slide-vert .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-vert .banner').find('.active'),
				position = $('#full-slide-vert .banner').children().index(current),
				totalPics = $('#full-slide-vert .banner').children().length;

		if ($this.hasClass('next')){
			
			if (position < totalPics - 1){
				$('#full-slide-vert .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-vert .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-vert .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-vert .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});
	$('#full-slide-rouge .prev, #full-slide-rouge .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-rouge .banner').find('.active'),
				position = $('#full-slide-rouge .banner').children().index(current),
				totalPics = $('#full-slide-rouge .banner').children().length;

		if ($this.hasClass('next')){
			
			if (position < totalPics - 1){
				$('#full-slide-rouge .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-rouge.banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-rouge .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-rouge .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});
	$('#full-slide-autre .prev, #full-slide-autre .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-autre .banner').find('.active'),
				position = $('#full-slide-autre .banner').children().index(current),
				totalPics = $('#full-slide-autre .banner').children().length;

		if ($this.hasClass('next')){
			
			if (position < totalPics - 1){
				$('#full-slide-autre .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-autre .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-autre .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-autre .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});

	$('#full-slide-noirblanc .prev, #full-slide-noirblanc .next').click(function(){

		var $this = $(this),
				current = $('#full-slide-noirblanc .banner').find('.active'),
				position = $('#full-slide-noirblanc .banner').children().index(current),
				totalPics = $('#full-slide-noirblanc .banner').children().length;

		if ($this.hasClass('next')){
			
			if (position < totalPics - 1){
				$('#full-slide-noirblanc .active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('#full-slide-noirblanc .banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('#full-slide-noirblanc .banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('#full-slide-noirblanc .active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});


















}

function threeSlider(){
	
	$('#three-slide .prev, #three-slide .next').click(function(){
		
		var $this = $(this),
				curBack = $('.slider').find('.back'),
				posBack = $('.slider').children().index(curBack),
				curCurr = $('.slider').find('.current'),
				posCurr = $('.slider').children().index(curCurr),
				curFront = $('.slider').find('.front'),
				posFront = $('.slider').children().index(curFront),
				totalPics = $('.slider').children().length;
				
		$('.slider').addClass('swap');
				
		setTimeout(function(){
				
			if ($this.hasClass('next')){
				
				if (posFront < totalPics - 1 && posCurr < totalPics - 1 && posBack < totalPics - 1){
					$('.back').removeClass('back').next().addClass('back');
					$('.current').removeClass('current').next().addClass('current');
					$('.front').removeClass('front').next().addClass('front');
				}
				
				else {
					
					if (posFront === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.slider li').removeClass('front').first().addClass('front');
					}
					
					else if (posCurr === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.slider li').removeClass('current').first().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}
					
					else {
						$('.slider li').removeClass('back').first().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}
					
				}
				
			}
			
			else {
				
				if (posBack !== 0 && posCurr !== 0 && posFront !== 0){
					$('.back').removeClass('back').prev().addClass('back');
					$('.current').removeClass('current').prev().addClass('current');
					$('.front').removeClass('front').prev().addClass('front');
				}
				
				else {
					
					if (posBack === 0){
						$('.slider li').removeClass('back').last().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}
					
					else if (posCurr === 0){
						$('.back').removeClass('back').prev().addClass('back');
						$('.slider li').removeClass('current').last().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}
					
					else {
						$('.back').removeClass('back').prev().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.slider li').removeClass('front').last().addClass('front');
					}
					
				}
				
			}
			
			$('.slider').removeClass('swap');
			
		}, 300);
		
	});
	
}

nav();

smoothScroll();

fullSlider();

threeSlider();

});
