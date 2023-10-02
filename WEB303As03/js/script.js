// Assignment 3
// Name: Rudri Pota

$(document).ready(function(){
    //displayJSON();
    displayAJAX();
});


function displayJSON(){
    
        $.getJSON("team.json",function(data){
            $.each(data.members,function(index,obj){
                $("#team").append("<h2>"+ obj.name + "</h2> <h5>" + obj.position + "</h5> <p>"+obj.bio+"</p>");
            });
        });
}

function displayAJAX() {
    $.ajax({
            type:"GET",
            url:"team.json",
            dataType : "Json",
            beforeSend : function(){
                $("#team").append("<h3>Loading...</h3>");
            },
            success : function(data){
                setTimeout(function (){
                    $("#team").empty();
                    $.each(data.members,function(index,obj){
                        $("#team").append("<h2>"+ obj.name + "</h2> <h5>" + obj.position + "</h5> <p>"+obj.bio+"</p>");
                    });
                }, 3000);
            },

            error : function(){
                setTimeout(function (){
                    $("#team").empty();
                    $("#team").append("<h3>An unexpected error has occured...</h3>");
                }, 3000);
            }
        });
}