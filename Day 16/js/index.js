$(document).ready(function(){

	$("form").on("submit", function(e){
		e.preventDefault();
		var name = $("input[name='name']").val();
		var email = $("input[name='email']").val();
		var purpose = $("select[name='purpose']").val();
		var message = $("input[name='message']").val();
		
		var contact = {
			name,
			email,
			purpose,
			message,
		};

	});

	$("form").validate({
			rules:{
				name: "required",
				email: {
					required: true,
					email: true,
				},
				purpose: "required",
				// $(form).submit();
			},
			messages:{
				name: "Please specify your name",
				email: {
				required: "Please input your email",
				email: "This does not seem to be an email",
			},
		},	
	});

	console.log(contact)

});