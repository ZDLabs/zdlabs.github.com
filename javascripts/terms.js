$(document).ready(function(){
	function myPop() { 
		//Create the overlay:
        this.overdiv = document.createElement("div");
        this.overdiv.className = "overdiv";
        this.square = document.createElement("div");
        this.square.className = "square";
        document.body.appendChild(this.overdiv);
        document.body.appendChild(this.square);  
        
        //Dress it up:
        $('<div>', {'class': 'msg', 'text': 'Please Agree to the Terms and Conditions:'}).appendTo($('.square'));
        $('<iframe>', {src: 'file://localhost/Users/ktrujillo/Projects/zdlabs.github.com/terms.html',
		   id:  'termframe',
		   frameborder: 0,
		   scrolling: 'yes'
		   }).appendTo('.square');
        $('<a>', {'class': 'dl_button getCode', text: 'Agree'}).appendTo('.square');
        $('<span>', {onclick: 'this.parentNode.Code.popIn();',text: 'Cancel','class': 'dl_button'}).appendTo('.square');
	    
        //Show it:
	    this.popOut = function(dlUrl) {
	        this.square.Code = this;
	        $('.getCode').attr('href', dlUrl);
	        $('.overdiv').fadeIn();
	        $('.square').fadeIn();

	    }
	    //Hide it:
	    this.popIn = function() {
	        if ($('.square:visible')) {
	            $('.square').fadeOut();
	        }
	        if ($('.overdiv:visible')) {
	        $('.overdiv').fadeOut();
	        }

	    }
	};
	var pop = new myPop();
	$('.dl').click(function(){
		pop.popOut($(this).attr('data-ref'));
	});
	$('.overdiv').click(function(){
		pop.popIn();
	});
	$('.getCode').click(function(){
		pop.popIn();
	})
});