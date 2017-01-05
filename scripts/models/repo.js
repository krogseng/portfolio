(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.requestRepos = function(callback) {
    $.ajax('https://api.github.com/user/repos', {
      method: 'GET', // usually default
      //headers: {Authorization: 'token ' + githubToken}, // this or parameters version
      data: {access_token: githubToken}, // parameters version, developer.github.com/v3/
      success: function(response) {
        reposObj.allRepos = response;
        callback();
      },
      error: function(response) {
      }
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  //reposObj.requestRepos();
  module.reposObj = reposObj;
})(window);
