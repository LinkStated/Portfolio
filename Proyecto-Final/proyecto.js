


 function changeColor(element) {
    element.style.background = "lightblue";
  }
  
  function originalColor(element) {
    element.style.background = "";
  }

  function changeColor(element) {
    setTimeout(function() {
      element.style.background = "lightblue";
    }, );
  }

  function originalColor(element) {
    setTimeout(function() {
      element.style.background = "";
    }, );
  } 

 document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("menu");
    var items = menu.getElementsByClassName("li");
    for (var i = 0; i < items.length; i++) {
      items[i].onmouseover = function() {
        changeColor(this);
      }
      items[i].onmouseout = function() {
        originalColor(this);
      }
    }
  });


  document.getElementById("li1").addEventListener("click", function() {
    document.getElementById("box-1").scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById("li2").addEventListener("click", function() {
    document.getElementById("box-2").scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById("li3").addEventListener("click", function() {
    document.getElementById("box-3").scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById("li4").addEventListener("click", function() {
    document.getElementById("box-4").scrollIntoView({
      behavior: 'smooth'
    });
  });

