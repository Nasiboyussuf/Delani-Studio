$(".clickable1").click(function(){
    $(".hide1").slideToggle(1200);
    $(".show1").slideToggle(1500);
  });
 
  $(".clickable2").click(function(){
    $(".hide2").slideToggle(1200);
    $(".show2").slideToggle(1500);
  });
 
  $(".clickable3").click(function(){
    $(".hide3").slideToggle(1200);
    $(".show3").slideToggle(1500);
  });
  $("button").click(function( event){
    event.preventDefault();
    var user = document.getElementById('input1').value;
    alert(user + "we have received your message.Thanks for communicating.");
  });