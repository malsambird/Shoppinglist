$(document).ready(function(){

$("#write_item").focus();
  

// function for adding new item
function additem(){
  var item=$("#write_item").val();
  //if add item area is blank, no item will be added
  if (item === "" || item === " "){
    return(false);
  }
  else {
  var newitem=document.createElement("li");
  newitem.innerHTML="<input type='checkbox'>"+item+"</input>";
  $("ul").prepend(newitem);
  $("#write_item").val("");
  $("#write_item").focus();
}
}

//Clicking to add new item to the list
  $("#add").click(function(){
    additem();
   
  });

//Pressing enter to add new item
$("#write_item").keydown(function(e) {
  if (e.keyCode == 13) {
    additem();
    e.preventDefault();
    }
  });
//Select All button
$("#Select_All").click(function(){
  $("input:checkbox").prop("checked", true);
  if($("input:checkbox").is(":checked")) {
        $("input:checkbox").parent("li").addClass("strike");
    } else {
        $("input:checkbox").parent("li").removeClass("strike");
    }
});


// If checked, strikethrough
$('input:checkbox').change(function(){
   if($(this).is(":checked")){
        $(this).parent("li").addClass("strike");
    }else{
        $(this).parent("li").removeClass("strike");
    }

});



//delete buttton
$("#delete").click(function(){
  $(":checked").parent("li").remove();

  });
});