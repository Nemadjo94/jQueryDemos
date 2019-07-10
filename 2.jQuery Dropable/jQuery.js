//jQuery
$(function(){

	$('.box').draggable({ revert: "invalid" });

$('#droppable').droppable({
	accept: '#box1',
	drop: function() {
		$(this).find('span').html("when a box got a attitude, drop it like it's hot!")
	}
});

});
