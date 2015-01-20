$(document).on('ready', function() {

	

	$(".editable").on("click",function(){
		var input = $("<input type='text'>");
		var clicked = $(this);
		// hide the textblock
		clicked.hide();


		// Set input as same width as text block 
		input.width(clicked.width());
		input.height(clicked.height());
		input.val(clicked.text());

		// Insert after text block
		clicked.after(input);

		// Focus
		input.focus();

		input.blur(function(){
			console.log("Blurred");

			clicked.text(input.val());
			input.hide();
			
			console.log($(this).parent());
			
			clicked.show();
		})
	})



});