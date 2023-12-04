var A,B;
A = document.getElementsByClassName("tabcontent");
for (i = 0; i < A.length; i++) {
    A[i].style.display = "none";
}
A[0].style.display = "initial";

MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementsByClassName("output")[0]]);
function Open_tab(evt, opened_tab) {
  console.log(opened_tab);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.getElementsByClassName("button_bar");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(opened_tab).style.display = "initial";
  evt.currentTarget.className += " active";
}
