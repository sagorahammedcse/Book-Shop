// FAQ
$(document).ready(function() {
  $('.faq-item').click(function() {
      $('.answer').not($(this).find('.answer')).slideUp();
      $(this).find('.answer').slideToggle();
  });
});