$(document).ready(function(){

  $("#write_item").focus();
  

// function for adding new item
  function additem(){
    var item=$("#write_item").val();
    //if blank, no item will be added
   if (item === "" || item === " "){
    return(false);
   }
   else {
   var newitem=document.createElement("li");
   newitem.innerHTML="<input type='checkbox'>"+item+"";
   $("ul").prepend(newitem);
   $("#write_item").val("").focus();
  }
}

//Clicking to add new item
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

//Select All checkbox
$("#all:checkbox").change(function(){
  if($(this).is(":checked")) {
    $("li").find("input:checkbox").prop("checked", true);
    $("input:checkbox").parent("li").addClass("strike");
  
  } else {
    $("li").find("input:checkbox").prop("checked", false);
    $("input:checkbox").parent("li").removeClass("strike");
  }
  });

<<<<<<< HEAD
// If checked, strikethrough
$('input:checkbox').change(function(){
   if($(this).is(":checked")){
=======
// If checked, add strikethrough
$("input:checkbox").change(function(){
   if($(this).is(":checked")) {
>>>>>>> master
        $(this).parent("li").addClass("strike");
    }else{
        $(this).parent("li").removeClass("strike");
    }

});

//delete buttton (for checked items)
$("#delete").click(function(){
  $(":checked").parent("li").remove();
  //uncheck "select all" button
  $("#all:checkbox").prop("checked", false);

  });
});