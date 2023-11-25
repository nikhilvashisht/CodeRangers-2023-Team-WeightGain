"use strict";

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});

/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

/* function for handling preference form */
var formIndex = 1;

function changeIndex(n) {
  showForm((formIndex += n));
}

function showForm(n) {
  var i;
  let forms = document.getElementsByClassName("forms");
  console.log(forms[0]);
  if (n < 1) formIndex = 1;
  if (n > 3) formIndex = 3;
  for (i = 0; i < forms.length; i++) {
    forms[i].style.display = "none";
  }
  forms[formIndex - 1].style.display = "block";
  if (formIndex == 3) {
    var buttons = document.getElementsByClassName("form-btn-right");
    for(var j = 0; j < buttons.length; j++){
      buttons[j].style.display="none";
    }
  }
  if (formIndex == 2) {
    var buttons = document.getElementsByClassName("form-btn-right");
    for(var j = 0; j < buttons.length; j++){
      buttons[j].innerHTML = "Submit";
    }
  }
}

async function submitsurvey(){
  /* TODO: send data to blockchain db */
  var surveylist = document.getElementsByClassName("surveys");
  surveylist[0].style.display="none";
  surveylist[1].style.display="inline";
}