/*JavaScript for dropdowns*/

  $(document).ready(function() {
    $('.transparent-btn').on('click', function() {
      $(this).next('.dropdown-menu').toggleClass('show');
    });

    $(document).on('click', function(e) {
      if (!$(e.target).closest('.dropdown').length) {
        $('.dropdown-menu').removeClass('show');
      }
    });
  });

  
/*JavaScript for Calendar*/

  $(document).ready(function() {
    $('#departure').datepicker({
      format: 'mm/dd/yyyy',
      autoclose: true
    });

    $('#calendar-icon').click(function() {
      $('#departure').datepicker('show');
    });
  });

  /*Javascript for footer*/

  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    
    searchButton.style.display = "none"; 
    
    searchInput.addEventListener("focus", function() {
      searchButton.style.display = "block"; 
    });
  });

  /*Script for navbar*/
  
  $(document).ready(function(){
    $(".nav-link").on("click", function(){
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  });

  
  /*Progress Bar*/
 
       function opentab(event, tabname) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active-link"); 
        }
        event.currentTarget.classList.add("active-link"); 
        document.getElementById(tabname).style.display = "block"; 
      }
    
      function hideTabLine(element) {
        element.classList.remove("active-link"); 
      }