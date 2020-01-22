var el = document.getElementById("btn");
var list = ["org", "bottom", "left", "right","top"];

el.addEventListener("mouseover", function(e){
  var c = el.classList[1];
  var styles = list.filter(function(item) {
    return item !== c;
   });
  var rand = styles[Math.floor(Math.random() * styles.length)];
  el.classList.remove(c);
  el.classList.add(rand);
});

el.addEventListener("click", function(){
  
  window.alert("you win");
});
