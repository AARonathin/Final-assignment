document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.getElementsByClassName("accordion");
  
    for (var i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
  });
      //https://unsplash.com/photos/brown-and-gray-concrete-building-during-daytime-qqxC2OfdW9Y//
  

  