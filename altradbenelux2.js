document.documentElement.style.setProperty('--scrollbar-width', (window.innerWidth - document.documentElement.clientWidth) + "px");
app.labels.errors.inputs.empty.nl     = 'Vul het veld "%s" in';
app.labels.errors.inputs.incorrect.nl = 'De waarde die is ingevoerd in het veld "%s" is onjuist';
app.labels.buttons.next.nl            = 'Volgende';
app.labels.buttons.prev.nl            = 'Vorige';
app.labels.buttons.send.nl            = 'Versturen';
app.labels.miscs.seeMore.nl           = 'Meer informatie';

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