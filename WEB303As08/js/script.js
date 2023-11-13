// add a table to the page
let $table = $('<table/>');

$('body').append($table);

$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('tbl');

let $headingRow = $('<tr/>').addClass('headingRow');

$('thead').append($headingRow);
$headingRow.append($('<td/>').text('First Name'));
$headingRow.append($('<td/>').text('Last Name'));
$headingRow.append($('<td/>').text('Gender'));
$headingRow.append($('<td/>').text('Occupation'));
$headingRow.append($('<td/>').text('Power'));  

$('h1').after('<label/>')
$('label').text('Enter the first name of your favourite character: ');
$('label').after('<input/>');
$('input').attr('id', 'search');

$('body').append('<button id="btnA-M">A-M(4)</button><button id="btnN-Z">N-Z(3)</button>');

$.ajax({
    type: "get",
    url: "onepiece.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
        $.each(response, function(index, value){
            let $row = $('<tr/>').addClass('row');
            $row.append($('<td id="fname"></td>').text(value.firstName));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td> </td>').text(value.gender));
            $row.append($('<td></td>').text(value.occupation));
            $row.append($('<td></td>').text(value.power));

            $('tbody').append($row);
        });

        let $fnames = $('tbody #fname');
        let $search = $('#search');
        let char = [];

        $fnames.each(function(){
            char.push({
                element: this,
                text: this.textContent.trim().toLowerCase()
            });
        });
        console.log(char);
        function searchFname(){
            let query = this.value.trim().toLowerCase();
            char.forEach(function(fname){
                let index=0;
                if(query){
                    index = fname.text.indexOf(query);
                }
                fname.element.style.background = index === -1 ? 'lightblue' : 'darkgreen';
                fname.element.style.color = index === -1 ? 'black' : 'white';
                if($($search).val() == ""){
                    fname.element.style.color = 'black';
                    fname.element.style.background = 'lightblue';
                }
            });
        }
        if('oninput' in $search[0]){
            $search.on('input', searchFname);
        }else{
            $search.on('input', searchFname);
        }

        $('#btnA-M').on('click', function(){
            $('tbody tr').find(('td:nth-child(2)')).filter(function(){

                if($(this).text().charAt(0) >= 'A' && $(this).text().charAt(0) <= 'M'){
                    $(this).parent().show();
                } else {
                    $(this).parent().hide();
                }
            })
        })

        $('#btnN-Z').on('click', function(){
            $('tbody tr').find(('td:nth-child(2)')).filter(function(){

                if($(this).text().charAt(0) >= 'N' && $(this).text().charAt(0) <= 'Z'){
                    $(this).parent().show();
                } else {
                    $(this).parent().hide();
                }
            })
        })

        

    }
})