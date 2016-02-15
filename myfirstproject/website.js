$(document).ready(function() {
	binding();
})
function binding(){

	$("navbar-brand a").click(function(e){
		e.preventDefault();
		var sectionid = e.currentTarget.id+"section" ;
		$("html body").animate({

			scrollTop: $("#"+ sectionid).offset().top},1000)

}