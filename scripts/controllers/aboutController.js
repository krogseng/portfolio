(function (module) {

  var aboutController = {};

  aboutController.reveal = function() {
    console.log('tab content in aboutController ', $('.tab-content'));
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;

})(window);
