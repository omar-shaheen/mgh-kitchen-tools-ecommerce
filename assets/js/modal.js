(function ($) {
  "use strict";

  $('.modal').on('shown.bs.modal', function () {
    $('body, html').trigger('focus')
  });

  
  $(window).on('load', function () {
    $('#exampleModal').modal('show');
  });

  function openSearch() {
    document.getElementById("search-overlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("search-overlay").style.display = "none";
  }

})(jQuery);

function dismiss() {
  document.getElementById('dismiss').style.display = 'none';
};