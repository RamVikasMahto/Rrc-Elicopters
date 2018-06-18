$(".addcompareBox h3").click(function(){
    $(".item").slideToggle();
	  $(".addcompareBox h3").toggleClass("active");	
	   $(".toon a").toggleClass("active");	
});
$(".toon a").click(function(){
	   $(".toon a").toggleClass("active");	
});
	
	
	$(document).ready(function() {
  $("#basketinfo").fancybox();
  $("#basket, #basket1, #preOrder").click(function(){
    $("#basketinfo").trigger('click');
    $(".bars").addClass("close"); 
  });
});
	

	$(document).ready(function() {
  $(".bars").click(function(){
	  $(".bars").toggleClass("cloose");
	  $(".menuBox").slideToggle();
  });
});
	
	
	

	

$(document).ready(function() {
   var $box = $('#mainCntr'), width = $box.width();
   if (width <=	 767) {
      	
$(document).ready(function(){
				$('.aaccordion').magicAccordion({
					headingTag 	: 'h3',
					bodyClass 	: 'body',
					headClass 	: 'head',
					activeClass : 'active',
					speed 		: 200,
					easing 		: 'swing'
				}).on( 'opened.magic', function(e){
					console.log(e.head);
				}).on( 'closed.magic', function(e){
					console.log(e.body);
				});

				var app = $('.aaccordion').data( 'magic-accordion' );
				$('.unbind').click( function(e) {
					e.preventDefault();
					app.unbind();
				});
				$('.rebind').click( function(e) {
					e.preventDefault();
					app.rebind();
				});
			});

		
	
   }
   
});
$(document).ready(function(){
				$('.toon .drop').magicAccordion({
					headingTag 	: 'p',
					bodyClass 	: 'body',
					headClass 	: 'head',
					activeClass : 'active',
					speed 		: 200,
					easing 		: 'swing'
				}).on( 'opened.magic', function(e){
					console.log(e.head);
				}).on( 'closed.magic', function(e){
					console.log(e.body);
				});

				var app = $('.toon .drop').data( 'magic-accordion' );
				$('.unbind').click( function(e) {
					e.preventDefault();
					app.unbind();
				});
				$('.rebind').click( function(e) {
					e.preventDefault();
					app.rebind();
				});
			});


 $('.toon .in, .toon #out, .over-white').click(function() {
        $( ".toon .filter" ).toggle( "slide");
        });
		
		 $('.over-white, .toon #out').click(function() {
        $( ".over-white" ).fadeOut( "slow");
        });
		
		 $('.over-white, .toon #out').click(function() {
        $( ".loading" ).fadeOut( "slow");
        });
		
$('.toon .in').click(function() {
        $( ".over-white" ).fadeIn( "slow");
        });
		
$('.toon .in').click(function() {
        $( ".loading" ).fadeIn( "slow");
        });
		
		
$('.loading').click(function() {
        $( ".toon .filter, .loading" ).fadeIn( "slow");
        });
		


	$('.fancybox').fancybox();



$(document).ready(function() {
   var $box = $('#mainCntr'), width = $box.width();
   if (width <=	 991) {
      	
		$(".body .button").click(function() {
		 $(".body .sidebar-box").addClass("size");
});
		
   }
   
});


$(document).ready(function(){
				$('.filterBox .collapsefilter').magicAccordion({
					headingTag 	: 'p',
					bodyClass 	: 'body',
					headClass 	: 'head',
					activeClass : 'active',
					speed 		: 200,
					easing 		: 'swing'
				}).on( 'opened.magic', function(e){
					console.log(e.head);
				}).on( 'closed.magic', function(e){
					console.log(e.body);
				});

				var app = $('.toon .drop').data( 'magic-accordion' );
				$('.unbind').click( function(e) {
					e.preventDefault();
					app.unbind();
				});
				$('.rebind').click( function(e) {
					e.preventDefault();
					app.rebind();
				});
			});
