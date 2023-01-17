/* 
   Poe Distillery
   Filename: script.js

   Author:   Steven Warren
   Date:     11/24/2018
  
 */

var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}

/* create variables */
var fromValue = document.querySelector(".feedback-from");
var feedbackValue = document.querySelector(".feedback-content");
var nameField = document.querySelector("#nameinput");
var feedbackField = document.querySelector("#written");
var fromEmailField = document.querySelector("#emailinput");
var fromEmailValue = document.querySelector(".feedback-email");
var form = document.querySelector("#form");
var feedbackPreview = document.querySelector(".feedback-preview");
var submitButton = document.querySelector(".submitbutton");


/* add text to preview section */
function completePreview() {
	fromValue.textContent = nameField.value;
	feedbackValue.textContent = feedbackField.value;
	fromEmailValue.textContent = fromEmailField.value;
	feedbackPreview.className = "feedback-preview show";
	if (nameField.value !== "") {
		if (fromEmailField.value !== "") {
		submitButton.className = "submit show";
		}
	}
	
}

/* create event listener for changes to form */
form.addEventListener("change", completePreview, false);

