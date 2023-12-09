//nav bar
tabcontent = document.getElementsByClassName("sub_tabcontent");
tabcontent[0].style.display = "flex";
for (i = 1; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}
document.getElementsByClassName("c_side")[0]+= " active";
function openTab(evt, tab_id) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("sub_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("c_side");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab_id).style.display = "flex";
    evt.currentTarget.className += " active";
    console.log(tab_id);
} 