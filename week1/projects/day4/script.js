document.getElementById("count").textContent = document.getElementsByTagName("p").length;

for(var i=0; i<document.getElementsByClassName("trash").length; i++){
  document.getElementsByClassName("trash")[i].addEventListener("click",
    function(){
      this.parentNode.remove();
      document.getElementById("count").textContent = document.getElementsByTagName("p").length;
    }
  )
}
  // document.getElementById("enter").addEventListener("click",
  //   function(){
  //     var newDiv = document.createElement("div");
  //     newDiv.className = 'row';
  //     var currentDiv = document.getElementById("row"); 

  //     var imgNew = document.createElement('img');// créer la balise img
  //     imgNew.className = 'avatar'; // donner le nom de la class dans le html
  //     imgNew.src = 'avatar-1.jpg'; // trouver la src
  //     newDiv.appendChild(imgNew); // ajouter dans l'entité

  //     var rows = document.getElementById("inpute").value;
  //     var newMessage = document.createTextNode(rows);
  //     newMessage.className = 'title';
  //     newDiv.appendChild(newMessage)
  //     document.body.insertBefore(newDiv, currentDiv, imgNew);

  //     var msgNew = document.createElement('p');// créer la balise img
  //     msgNew.tagName = 'p'; // donner le nom de la class dans le html
  //     newDiv.appendChild(msgNew); // ajouter dans l'entité
  //       }
  //     )
    

// Récup value 


document.getElementById("enter").addEventListener("click",
    function(){
    //création row
    var newRow = document.createElement("div");
    newRow.className = 'row';
    document.body.appendChild(newRow);
    //créa img
    var img1 = document.createElement("img");
    img1.className = 'avatar';
    imgNew.src = 'avatar-1.jpg';
    newRow.appendChild(img1);
    //créa content
    var newContent = document.createElement("div");
    newContent.className = 'content';
    newRow.appendChild(newContent);
    //créa title
    var h6 = document.createElement('h6');
    h6.textContent = "Michel";
    newContent.appendChild(h6);
    //créa sub div
    var p = document.createElement('p');
    p.textContent = document.getElementById('enter').value;
    newContent.appendChild(p);
    //créa trash
    var trash = document.createElement("img");
    trash.className = 'trash';
    imgNew.src = 'trash.png';
    newRow.appendChild(trash);
    //reinitiliser le input
    document.getElementById('inpute').value ="";
  }
)