var limit = 60;
var start = 120;    
var moveBy = 1;    
var timer1 = setInterval(function() {  
    $('#num').text(start);
    $('.home-image').css('background-position',start+'px 0') ;
    start--;
    if(start<0) {
       alert("done"); 
       clearTimeout(timer1);
    }    
},50) 