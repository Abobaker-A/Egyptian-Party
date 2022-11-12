$(document).ready(function(){
	function makeTimer() {

			var endTime = new Date("17 December 2022 00:00:00 GMT+01:00");			
				endTime = (Date.parse(endTime) / 1000);
				var now = new Date();
				now = (Date.parse(now) / 1000);
				var timeLeft = endTime - now;
				var days = Math.floor(timeLeft / 86400); 
				var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
				var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
				var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
				if (hours < "10") { hours = "0" + hours; }
				if (minutes < "10") { minutes = "0" + minutes; }
				if (seconds < "10") { seconds = "0" + seconds; }
				$("#days").html(days + "<span> D</span>");
				$("#hours").html(hours + "<span> H</span>");
				$("#minutes").html(minutes + "<span> M</span>");
				$("#seconds").html(seconds + "<span> S</span>");		
		}
		setInterval(function() { makeTimer(); }, 1000);
let linksBarWidth = $('.linksBar').outerWidth(true)
$('.linksBar').css('left',-linksBarWidth)

console.log(linksBarWidth);
	$('.openLink').click(function(){
		if($(document.body).css('padding-left')=='0px'){
			$('.linksBar').animate({'left':"0"},500)
			$(document.body).animate({'padding-left':linksBarWidth},500)
		}
		else{
			$('.linksBar').animate({'left':-linksBarWidth},500)
			$(document.body).animate({'padding-left':"0px"},500)

		}
	})
	$('.fa-xmark').click(function(){
		$('.linksBar').animate({'left':-linksBarWidth},500)
			$('.openLink').animate({'left':'0px'},500)
			$(document.body).animate({'padding-left':"0px"},500)

	})

	let maxCharacters = 100;
	$('#description').keyup(function(){
		$('#characters-counter').html(maxCharacters - $(this).val().length)
	})

	$('.Title').click(function(){
		$(this).next().slideToggle(500)
		$(this).parent().siblings( ).find('.Desc').slideUp(500)
	})
})
