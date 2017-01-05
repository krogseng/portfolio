(function(module) {
  var repoController = {};
  console.log('tab content in repoController ', $('#gitrepos'));
  repoController.reveal = function(){
    $('.tab-content').hide();
    $('#gitrepos').fadeIn();
  };

  module.repoController = repoController;

})(window);
