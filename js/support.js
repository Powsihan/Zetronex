// tap page script
function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


//   chat box 
function openform() {
    document.getElementById("chatbox").style.display ="block";
}
function closeform() {
    document.getElementById("chatbox").style.display ="none";
}
//   payment box 
function openpay() {
    document.getElementById("paymentpopup").style.display ="block";
}
function closepay() {
    document.getElementById("paymentpopup").style.display ="none";
}

//   success box 
function opensuccess() {
  document.getElementById("success").style.display ="block";
  document.getElementById("paymentpopup").style.display ="none";
}
function closesuccess() {
  document.getElementById("success").style.display ="none";
}


