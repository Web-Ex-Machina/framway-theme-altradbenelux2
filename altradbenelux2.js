$(function(){
	// slider/carousel management
	$('.sliderFW.coverflow').each(function(index,item){
		setTimeout(function(){
			var slider = $(item).sliderFW('get');
			slider.$el.find('.sliderFW__arrow').appendTo(slider.$el);

			slider.content.items.on('click',function(e){
				if(!$(this).hasClass('active')){
					var index = $(this).index();
					if($(this).index() < slider.content.items.filter('.active').index())
						slider.goToPrev();
					else
						slider.goToNext();
				}
			});
			slider.onResize();
		},1);
	});

});

document.querySelector('#footer').classList.add('v2');

document.querySelectorAll('.heroFW__title').forEach((el)=>{
	el.innerHTML = el.innerText.replace(/\s(\w+)$/,'&nbsp;$1');
})