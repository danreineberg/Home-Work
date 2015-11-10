	// DESKTOP NAV

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.menu').addClass('scroll_menu').fadeIn();
    } else {
         $('.menu').removeClass('scroll_menu');
    }

});


$(document).ready(function(){



	// MOBILE MENU

	// On click of #hamburger toggle the .menu to have class of mobile_menu

	$("#hamburger").click(function(){
		$(".menu").toggleClass("mobile_menu");

	});

	// On hover of the #hamburger change the image to images/burger.png
	
   $('#hamburger').hover(function () {
        this.src = 'images/burger.png';
    }, function () {
        this.src = 'images/hamburger_menu.png';
    });



   $(".shown_on_hover").addClass("hide");

	$(".work_container").hover(function(){
		$(this).find(".shown_on_hover").removeClass("hide");
		console.log("hover showing");
		console.log($(this).find(".shown_on_hover"));
	}, 
	function() {
    	$(this).find(".shown_on_hover").addClass("hide");
  	});


	$("form").on("submit", function(e){
		e.preventDefault();
		var name = $("input[name='entry.1109128263']").val();
		var email = $("input[name='entry.1316940748']").val();
		var selection = $("select[name='entry.1381381822']").val();
		var message = $("textarea[name='entry.1159379272']").val();
		
		var contact = {
			"entry.1109128263": name,
			"entry.1316940748": email,
			"entry.1381381822": selection,
			"entry.1159379272": message,
		};
			console.log(contact);
		$.ajax({
	        url: "https://docs.google.com/forms/d/18tHKftW_1qi56TUMK0XIJfpus77UlWo6ayXZZWBg7NY/formResponse",
	        data: contact,
	        type: "POST",
	        dataType: "xml",
	        statusCode: {
                    0: function () {
                       alert("Thanks")
                      	$("input[name='entry.1109128263']").val("");
	 					$("input[name='entry.1316940748']").val("");
						$("select[name='entry.1381381822']").val("default");
                       	$("textarea[name='entry.1159379272']").val("");

                    },
                    200: function () {
                        alert("Thanks 2")
                    }
                }
        });

	});



	$("form").validate({
			rules:{
				name: "required",
				email: {
					required: true,
					email: true,
				},
				purpose: "required",
			},
			messages:{
				name: "Please specify your name",
				email: {
				required: "Please input your email",
				email: "This does not seem to be an email",
			},
		},	
	});

	$('#twitter').hover(function () {
        this.src = 'images/sm_twitter_hover.png';
    }, function () {
        this.src = 'images/sm_twitter.png';
    });

    $('#instagram').hover(function () {
        this.src = 'images/sm_instagram_hover.png';
    }, function () {
        this.src = 'images/sm_instagram.png';
    });

    $('#linkedin').hover(function () {
        this.src = 'images/sm_linkedin_hover.png';
    }, function () {
        this.src = 'images/sm_linkedin.png';
    });

    $('#paw').hover(function () {
        this.src = 'images/sm_dog_hover.png';
    }, function () {
        this.src = 'images/sm_paw.png';
    });
	


});

	