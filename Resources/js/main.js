$(document).ready(function(){

  // MIX IT UP (PORTFOLIO SECTION)
  var mixer = mixitup('.container');

  // STICKY menu
  $(".js--services-section").waypoint(function(direction){
    if (direction=="down") {
      $("nav").addClass("sticky");
    }
    else {
      $("nav").removeClass("sticky");
    }
  });

  // ACTIVE LINK
  $("nav ul li").click(function(){
    $("nav ul li").removeClass("active");
    $(this).addClass("active");
  });

  $("nav a img.logo").click(function(){
    $("nav ul li ").removeClass("active");
    $("nav ul li:first-child").addClass("active");
  });

});

  // Hamburger Menu
  function openNav(){
    document.getElementById("myNav").style.width="100%";
  }
  function closeNav(){
    document.getElementById("myNav").style.width="0%";
  }
  
