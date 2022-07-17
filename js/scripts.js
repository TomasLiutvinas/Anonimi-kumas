$(document).ready(function(){
	var onClickHandler = function(event){
    	let that = event.currentTarget;

    	if(!$(that).hasClass('disabled')){
    		$('.menu li').off('click');
			$(articles).hide();

	        thisId = 'div.article#' + that.id + '_article';
	        $(thisId).first().fadeIn();
	        $(thisId).first().fadeIn("slow");
	        $(thisId).first().fadeIn(3000);

	        setTimeout(
	        	function() {
	        		$('.menu li').click({that: that}, onClickHandler);
	        	},500);
    	}
	};

	var articles = $('.article');

    $('.menu li').click({that: this}, onClickHandler);

    $('li#apie').trigger("click");
});