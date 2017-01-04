(function(module) {

  var repoView = {};

  var repoCompiler = funtion(currentValue){
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    var html = template(currentValue);
    return html;

  repoView.renderRepos = function() {
    $('#gitrepos ul').empty().append(reposObj.withTheAttribute('language')
    .map(repoCompiler)
  );
  };
reposObj.requestRepos(repoView,renderRepos);
module.repoView = repoView;
})(window);
