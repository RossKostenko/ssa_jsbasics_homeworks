// Task 1

$("a[href^='https://']").attr('target', '_blank');

// Task 2

let $elem = $(".head")

$elem.css("backgroundColor", "green");

$elem.find(".inner").css("fontsize", "35px");

// Task 3

$("h3").foreach(function(i, le) {
	let $elem = $("h3").next();
	$("h3").next().remove();
	$("h3").prepend($elem);
})

// Task 4

const $checkbox = $(':checkbox');
$checkboxes.on('click', function(){
	if ($(':checkbox:checked).length) === 3 {
		$checkboxes.attr('disabled', true);    
	}
});
