
$(document).ready(function(){
	// This function toggles the navigation toggle button to make menu appear and disappear
	$('.navbar-toggle').click(function(event) {
		$('.navbar-collapse.collapse').toggle('swing');
	});

	// Below IF condition specifies what happens above 300px size
	// Here, menu appears and toggle button is not shown
	if($(window).width()>=300)
	{
		$('.navbar-right').css('float','right');
		$('.navbar-collapse.collapse').css('display','block');
		$('.navbar-collapse.collapse').css('height','auto');
		$('.navbar-collapse.collapse').css('overflow','visible');
		$('.navbar-collapse.collapse').css('border','none');
		$('.navbar-collapse.collapse').css('margin-right','15px');
		$('.navbar-nav>li').css('float','left');
		$('.navbar-nav>li').css('margin','5px 0');
		$('.navbar-header').css('float','left');
		$('.navbar-toggle').css('display','none');
	}
	// ELSE condition is for size below 300px. Here, button is shown. 
	// Menu is shown only when button is clicked
	else{
		$('.navbar-toggle').css('display','block');
		$('.navbar-collapse.collapse').css('display','none');
	}

	// Code below executes on resizing the window.
	// The conditions specified are same as above.
	$(window).on('resize',function(){
		if($(window).width()>=300)
		{
			$('.navbar-right').css('float','right');
			$('.navbar-collapse.collapse').css('display','block');
			$('.navbar-collapse.collapse').css('height','auto');
			$('.navbar-collapse.collapse').css('overflow','visible');
			$('.navbar-collapse.collapse').css('border','none');
			$('.navbar-collapse.collapse').css('margin-right','15px');
			$('.navbar-nav>li').css('float','left');
			$('.navbar-nav>li').css('margin','5px 0');
			$('.navbar-header').css('float','left');
			$('.navbar-toggle').css('display','none');
		}
		else{
			$('.navbar-toggle').css('display','block');
			$('.navbar-collapse.collapse').css('display','none');
		}
	});
});