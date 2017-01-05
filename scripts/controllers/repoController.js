(function(module) {
  var repoController = {};

  repoController.reveal = function(){
    $('.tab-content').hide();
    $('#gitrepos').fadeIn();
  };

  module.repoController = repoController;

})(window);
