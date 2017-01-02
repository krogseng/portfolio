/* create article objects and get them ready for population */
/* create the array of articles to read the data file */

(function(module){

  /*receive the object and associate to the key fields of the article */
  /* save the properties of the incoming object */
  function Article(opts) {
    for (key in opts) {
      this[key] = opts[key];
    }
  }

  Article.articleArray = [];

  /*create the instances of information from the Article object */
  Article.prototype.toHtml = function(scriptTemplateId) {
    var template = Handlebars.compile($(scriptTemplateId).text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    //what is this
    this.body = marked(this.body);
    return template(this);
  };

  Article.articleSort = function(theLocalData) {
    theLocalData.sort(function(a,b) {
      /* sort based on publication date, using Date function to get millions of seconds */
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
  /* this is going to get the source file and build array for articles */
    theLocalData.forEach(function(ele) {
      Article.articleArray.push(new Article(ele));
    });
  };

  //lmk - review
  Article.loadAll = function(dataWePassIn) {
      /* NOTE: the original forEach code should be refactored
         using `.map()` -  since what we are trying to accomplish is the
         transformation of one collection into another. */
    Article.articleArray = dataWePassIn.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    }).map(function(ele) {
      return new Article(ele);
    });
  };

  Article.numWordsAll = function() {
    return Article.articleArray.map(function(article) {
      return article.body.match(/\w+/g).length;
    })
    .reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
  };

  Article.allAuthors = function() {
    return Article.articleArray.map(function(article) {
      return article.author;
    })
    .reduce(function(acc, curr){
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);
  };


  Article.numWordsByAuthor = function(){
    return Article.allAuthors().map(function(author) {
      return {
        name: author,
        numWords: Article.articleArray.filter(function(curArticle) {
          if (curArticle.author === author) {
            return true;
          } else {
            return false;
          }
        })
          .map(function(authorArticles) {
            return authorArticles.body.match(/\w+/g).length;
          })
          .reduce(function(acc, cur) {
            return acc + cur;
          }, 0)
      };
    });
  };

  Article.fetchAll = function(nextFunction) {
    if (localStorage.blogArticles) {
      $.ajax({
        type: 'HEAD',
        url: '/data/blogArticles.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            Article.getAll(nextFunction); // DONE: pass 'nextFunction' into Article.getAll();
          } else {
            Article.loadAll(JSON.parse(localStorage.blogArticles));
            // DONE: Replace the following line with 'nextFunction' and invoke it!
            nextFunction();
          }
        }
      });
    } else {
      Article.getAll(nextFunction); // DONE: pass 'nextFunction' into getAll();
    }
  };

  Article.getAll = function(nextFunction) {
    $.getJSON('/data/blogArticles.json', function(responseData) {
      Article.loadAll(responseData);
      localStorage.blogArticles = JSON.stringify(responseData);
      // DONE: invoke nextFunction!
      nextFunction();
    });
  };

  module.Article = Article;
  Article.fetchAll(articleView.renderIndexPage);
})(window);
