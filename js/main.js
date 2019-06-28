console.log("This is JavaScript");

$(document).ready(function() {

	/*--- Top Button ---*/
	$(window).scroll(function(){
		if($(this).scrollTop() > 40) {
			$('#topBtn').fadeIn();
		} else {
			$('#topBtn').fadeOut();
		}
	})

	$("#topBtn").click(function(){
		$('html, body').animate({scrollTop : 0}, 800)
	})

	/*--- Hide & Show ---*/
	$(document).ready(function(){
		$("#hide").click(function(){
			$("p").hide();
		});
		$("#show").click(function(){
			$("p").show();
		});
	});

	/*--- Time ---*/

	var noActivity;

	function setActivity() {
		noActivity = setTimeout(function() {
			alert("Where are you?");
		}, 30 * 1000)
	}

	function resetActivity() {
		clearTimeout(noActivity);
		setActivity();
	}

	$(document).mouseover(resetActivity)


	/*--- Comment ---*/

	$("#form").submit(function(e) {
        e.preventDefault();

        let name = $("#name").val();
        var comment = $("#comment")[0].value;

        var passed = true;

        if (passed === true && name.length < 5) passed = 'Nama minimal 5 karakter';
        if (passed === true && comment.length < 6) passed = 'Komentar minimal 6 karakter';
  

        if (passed === true) {
            var d = new Date();
            var o = {year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'};

            var e = d.toLocaleDateString('en-US', o);

            $(".comment-list").append('<div class="comment-item"><div class="comment-box"><div class="comment-content"><div class="comment-author"><span style="font-weight: bold;">'+name+'</span><div class="time"><span class="text">'+e+'</span></div></div><div class="comment-body"><p>'+comment+'</p></div></div></div>');
            
            $("#name").val('');
            $("#comment").val('');
        } else {
            alert(passed); return false;
        }
    })

});