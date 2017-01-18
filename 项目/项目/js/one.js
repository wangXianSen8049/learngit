$(document).ready(function(){
	a();
	function a(){
		
		$(".banner_in").delay(2000)
		.animate({"left":"-1423px"},1000,"swing").delay(2000)
		.animate({"left":"-2846px"},1000,"swing").delay(2000)
		.animate({"left":"-4269px"},1000,"swing").delay(2000)
		.animate({"left":"-5692px"},1000,"swing").delay(2000)
		.animate({"left":"-7115px"},1000,"swing")
		.animate({"left":"0px"},-100,function(){a();});
		
	}
});



