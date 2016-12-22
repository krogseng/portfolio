/* create article objects and get them ready for population */
/* create the array of articles to read the data file */
var articles = [];

/*receive the object and associate to the key fields of the article */
function Article(opts) {
  /* save the properties of the incoming object */
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

/*create the instances of information from the Article object */
Article.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  var html = template(this);

  return html;

};

/* sort based on publication date, using Date function to get millions of seconds */
theLocalData.sort(function(curElem, nextElem) {
  return (new Date(nextElem.publishedOn)) - (new Date(curElem.publishedOn));
});

/* this is going to get the source file and build array for articles */
theLocalData.forEach(function(ele) {
  articles.push(new Article(ele));
});

/* this will take the article array elements and populate html */
articles.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
