console.log(document.getElementsByClassName('wrapper'));
var newCount =document.getElementsByClassName('wrapper').length;
document.getElementById('count').textContent = newCount;
//Supprimes les row et mettre a jour le count
for(var i=0; i<document.getElementsByClassName('trash').length; i++) {
   document.getElementsByClassName('wrapper')[i].addEventListener("click",
     function (){
       this.remove();
       var newCount =document.getElementsByClassName('wrapper').length;
       document.getElementById('count').textContent = newCount;
     }
    );
  }
