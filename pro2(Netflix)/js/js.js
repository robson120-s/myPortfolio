
$(document).ready(function(){
  $('.one').click(function(){
    $('.jq1').toggle(600);
    $('.jq2, .jq3, .jq4, .jq5, .jq6').fadeOut(60);
  });
});


$(document).ready(function(){
  $('.two').click(function(){
    $(".jq2").toggle(600);
    $('.jq1, .jq3, .jq4, .jq5, .jq6').fadeOut(60);
  });
});


$(document).ready(function(){
  $('.three').click(function(){
    $('.jq3').toggle(1000);
    $('.jq1, .jq2, .jq4, .jq5, .jq6').fadeOut(60);
  });
});


$(document).ready(function(){
  $('.four').click(function(){
    $('.jq4').toggle(1000);
    $('.jq1, .jq2, .jq3, .jq5, .jq6').fadeOut(60);
  });
});

$(document).ready(function(){
  $('.five').click(function(){
    $('.jq5').toggle(1000);
    $('.jq1, .jq2, .jq3, .jq4, .jq6').fadeOut(60);
  });
});


$(document).ready(function(){
  $('.six').click(function(){
    $('.jq6').toggle(1000);
    $('.jq1, .jq2, .jq3, .jq4, .jq5').fadeOut(60);
  });
});