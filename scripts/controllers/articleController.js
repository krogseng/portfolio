(function(module) {
  var articleController = {};

  articleController.reveal = function(){
    $('.tab-content').hide();
    console.log('tab content in articleController ', $('.tab-content'));
    $('#articles').fadeIn();
  };

  module.articleController = articleController;

})(window);
