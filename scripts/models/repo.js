(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

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

  //I'm going with what worked for repos...I think I need to revisit this
  // REDO because, this isn't actually called because I don't know what callback
  // to use
  reposObj.requestFollowers = function(callback) {
    $.ajax('https://api.github.com/user/followers', {
      method: 'GET', // usually default
      //headers: {Authorization: 'token ' + githubToken}, // this or parameters version
      data: {access_token: githubToken}, // parameters version, developer.github.com/v3/
      success: function(response) {
        reposObj.followers = response;
        callback();
      },
      error: function(response) {
      }
    });
    console.log('leaving requestFollowers');
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  //reposObj.requestRepos();
  module.reposObj = reposObj;
})(window);
