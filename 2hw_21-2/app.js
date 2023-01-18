const block = document.querySelector(".circle__absolute");

function animation( elem) { 
    var $ = {
      radius  :     180, 
      speed   :     20 
    }
    var f = 0;
    var s = 2 * Math.PI / 180; 
    setInterval(function() { 
      f += s; 
        elem.style.left =  235 + $.radius * Math.sin(f)  + 'px'; 
        elem.style.top =   235 + $.radius * Math.cos(f) + 'px';
    }, $.speed)
  }
  
animation( block)



var i = 0;

var id = setInterval(
    function(){
    i++;
    console.log("Прошло " + i + " сек.");
    if(i == 60){
    clearInterval(id);
    }
    },1000)
    