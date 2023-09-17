/*
	WEB 303 Assignment 1 - jQuery
	Rudri Pota
	#0817379
*/

$(document).ready(function()
	{
		$('#yearly-salary').on('keyup', function(){
			$salary = $('#yearly-salary').val();

		$('#percent').on('keyup', function(){
			$percent = $('#percent').val();
			
		$expense = ($salary * $percent)/100;

		$amt = $expense.toFixed(2);

		$('#amount').text('$' + $amt);

		});

	});

});
