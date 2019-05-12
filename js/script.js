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
  $("#myForm").submit(function( event){
    event.preventDefault();
    var user = $('#input1').val();
    alert(`${user} we have received your message.Thanks for communicating.`);
  });
  $("#trial").on('mouseover',function(){
    $("#trial").addClass("opacity");
    $("#trialp").show();
  });
  $("#trial").on('mouseout',function(){
    $("#trial").removeClass("opacity");
    $("#trialp").hide();
  });

  $("#trial1").on('mouseover',function(){
    $("#trial1").addClass("opacity");
    $("#trialp").show();
  });
  $("#trial1").on('mouseout',function(){
    $("#trial1").removeClass("opacity");
    $("#trialp").hide();
  });
  $("#trial2").on('mouseover',function(){
    $("#trial2").addClass("opacity");
    $("#trialp").show();
  });
  $("#trial2").on('mouseout',function(){
    $("#trial2").removeClass("opacity");
    $("#trialp").hide();
  });
  $("#trial3").on('mouseover',function(){
    $("#trial3").addClass("opacity");
    $("#trialp").show();
  });
  $("#trial3").on('mouseout',function(){
    $("#trial3").removeClass("opacity");
    $("#trialp").hide();
  });