$(window).load(function() {
	
	var InfiniteRotator = {
	
		init: function() {
			var initialFadeIn = 1000;
			
			var itemInterval = 5000;
			
			var fadeTime = 2500;
			
			var numberOfItems = $('.rollingpic').length;
			
			var currentItem = 0;
			
			$('.rollingpic').eq(currentItem).fadeIn(initialFadeIn);
			
			var infiniteLoop = setInterval(function(){
				$('.rollingpic').eq(currentItem).fadeOut(fadeTime);
				
				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}
				else {
					currentItem++;
				}
				$('.rollingpic').eq(currentItem).fadeIn(fadeTime);			
			}, itemInterval);
		}
	};
	
	InfiniteRotator.init();
	
});