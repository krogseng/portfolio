(function(module) {

  var repoView = {};
// borrowed code...
  var repoCompiler = Handlebars.compile($('#repo-template').text());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#gitrepos ul').empty();
    $('#gitrepos ul').append(reposObj.withTheAttribute('name').map(repoCompiler));

    $('#gitrepos .followers').empty().append(
      reposObj.withTheAttribute('followers_url').map(followersCompiler)
    );

  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
