/* create article objects and get them ready for population */
/* create the array of articles to read the data file */
Article.articleArray = [];

//not sure about this
localStorage.setItem('getStatus', 'false');
/*receive the object and associate to the key fields of the article */
/* save the properties of the incoming object */

function Article(opts) {
  for (keys in opts) {
    this[keys] = opts[keys];
  };
};

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
