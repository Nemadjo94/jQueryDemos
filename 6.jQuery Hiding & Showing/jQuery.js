//jQuery

// $('h1').hide();
//$('div.hidden').show();

//$('p').fadeOut();
//$('div.hidden').fadeIn(8000).fadeOut(8000);

$('#box1').click(function(){
  $(this).fadeTo(2000, 0.25, function(){
         // animation is complete
         $(this).slideUp()
  });
});

$('div.hidden').slideDown();

$('button').click(function(){
   $('#container').slideToggle(2000);
});