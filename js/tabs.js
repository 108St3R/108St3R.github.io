function openPage(e, landingNumber) {

   var component = document.getElementsByClassName("landing__component");
   for (var i = 0; i < component.length; i++) {
      component[i].style.display = "none";
   }
   var tabs = document.getElementsByClassName("tabs");
   for (var i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
   }
   document.getElementById(landingNumber).style.display = "block";
   e.target.className += " active";
}


