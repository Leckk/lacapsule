// console.log(document.getElementsByTagName('div').length);
// for(var i=0; i<document.getElementsByTagName('div').length; i++) {
//     console.log(document.getElementsByTagName('div')[i]);
// }
// console.log(document.getElementById('btn').firstChild)
// document.getElementById('btn').addEventListener("click",
//     function(){
//       alert("click détécté !");
//     }
// );
// for(var i=0; i<document.getElementsByTagName('div').length; i++) {
//   document.getElementsByTagName('div').addEventListener("click",
//       function(){
//         alert("click détécté !");
//       }
//   )
// };
//
// for(var i=0; i<document.getElementsByTagName('div').length; i++) {
//    document.getElementsByTagName('div')[i].addEventListener("click",
//      function(){
//        console.log("click sur un paragraphe détécté !");
//      }
//    );
// }
var test = 0;
function nbClick() {
  test += 1;
  document.getElementById("test").innerHTML = "Etes vous sure de vouloir supprimer ?"
};
// var trash = 0;
// function nbClick() {
//   trash += 1;
//   document.getElementsByClassName(".trash").innerHTML = trash
// };
