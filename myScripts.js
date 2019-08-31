
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
/*
	if($(this).scrollTop() > 50)
	{
		$('.caption h1').hide();
	}
	else
		$('.caption h1').show();

	if($(this).scrollTop() > 100)
	{
		$('.caption h3').hide();
	}
	else
		$('.caption h3').show();

	if($(this).scrollTop() > 150)
	{
		$('.caption h4').hide();
	}
	else
		$('.caption h4').show();


	if($(this).scrollTop() > 200)
	{
		$('.caption a').hide();
	}
	else
		$('.caption a').show();
	*/
})