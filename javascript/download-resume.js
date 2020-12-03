//download resume
document.querySelector("#downloadlink").onclick = function () {
  window.open("./documents/Bo_Grandadam_CV.pdf", "_blank");
};

//include all project carousels
includeHTML();
jQuery(window).load(function () {
  //Stop carousel
  $(".carousel").carousel("pause");
});


