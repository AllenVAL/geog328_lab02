
(function () {
  var icon = document.getElementsByClassName("icon")[0];
  if (!icon) return;

  icon.addEventListener("click", function () {
    var nav = document.getElementById("myTopnav");
    if (!nav) return;

    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  });

  var links = document.querySelectorAll("#myTopnav a:not(.icon)");
  links.forEach(function (a) {
    a.addEventListener("click", function () {
      var nav = document.getElementById("myTopnav");
      if (!nav) return;
      if (window.innerWidth <= 768 && nav.className.indexOf("responsive") !== -1) {
        nav.className = "topnav";
      }
    });
  });
})();
