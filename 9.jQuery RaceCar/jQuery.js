//jQuery

//Click the GO button!
$('#go').click(function() {

  //build a function that checks to see if a car has won the race
  function checkIfComplete(){
  	if( isComplete == false) {
  		isComplete = true;
  	}else{
  		place = 'second';
  	}
  }

  // get the width of the cars
  var carWidth = $('#car1').width();

  //Get the width if the racetrack //Oduzimamo duzinu kola od duzine prozora da ne bi auto otisao van ekrana
  var raceTrackWidth= $(window).width() - carWidth;

  //Generate a random number 1 and 5000 milisesc
  var raceTime1 = Math.floor( (Math.random()*5000) +1 );
  var raceTime2 = Math.floor( (Math.random()*5000) +1 );
  
  //Set a flag variable fo FALSE by default
  var isComplete = false;

  // set a flag variable to FIRST by default
  var place = 'first';

  //animate car 1
  $('#car1').animate({

  	//Move the car width of the racetrack
  	left: raceTrackWidth
  }, raceTime1, function() {

  	//animation is complete

  	// run a function

  	checkIfComplete();

  	//Give some text feedback
  	$('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' miliseconds!');

  });

//animate car 2
  $('#car2').animate({

  	//Move the car width of the racetrack
  	left: raceTrackWidth
  }, raceTime2, function() {

  	//animation is complete

  	// run a function

  	checkIfComplete();

  	//Give some text feedback
  	$('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + raceTime2 + ' miliseconds!');

  });

  });

//Reset button
$('#reset').click(function(){

	$('.car').css('left','0');
	$('.raceInfo span').text('');

});
