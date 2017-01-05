(function(module) {

  var repoView = {};

  var repoCompiler = function(currentValue) {
    var source = $('#repo-template').html();
    var template = Handlebars.compile(source);
    var html = template(currentValue);
    console.log('html ', html);
    return html;
  };

  repoView.renderRepos = function() {
    $('#gitrepos ul').empty();
    $('#gitrepos ul').append(reposObj.withTheAttribute('name').map(repoCompiler));
  };
  reposObj.requestRepos(repoView.renderRepos);
  module.repoView = repoView;
})(window);
