
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var inputText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + inputText + "</li>")
    } 
});

//chack off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "li span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
