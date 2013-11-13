$(document).ready(function(){
    var counter=0;
    var itemsArray = [];
    addAnItem = function(theItem){
        counter+=1;
        $("#theList").append("<li class='itemList' id='listItems"+counter+"' onclick=crossOff(this.id)>"+theItem+"</li>");
        $('#addField').val('');
    };
    crossOff = function(listItemID){
        $('#'+listItemID).css("text-decoration","line-through");
    };
    enterPress = function(e){
        if(e.keyCode === 13){
            e.preventDefault();
        };
    };
    
});
