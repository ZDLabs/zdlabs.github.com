$(document).ready(function(){
// Directory and Basics(Getting Started) Tabs:
	var switchToPublic = function(){
		$('#publics').show();
		$('#classics, #privates').hide();		
	},
	switchToPrivate = function(){
		$('#privates').show();
		$('#classics, #publics').hide();		
	},
	switchToClassic = function(){
		$('#classics').show();
		$('#publics, #privates').hide();		
	};

	$('#publics, #classics').hide();
	$('#clickpublic').click(function(){
		document.location.href = document.location.pathname+"#public";
		switchToPublic();
	});
	$('#clickprivate').click(function(){
		document.location.href = document.location.pathname+"#private";
		switchToPrivate();
	});
	$('#clickclassic').click(function(){
		document.location.href = document.location.pathname+"#classic";
		switchToClassic();
	});

	switch(window.location.hash){
		case "#public":
		switchToPublic();
		break;
		case "#private":
		switchToPrivate();
		break;
		case "#classic":
		switchToClassic();
		break;
	};
});

for (var i = Things.length - 1; i >= 0; i--) {
	Things[i]
};