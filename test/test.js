// this needs to be global for access by multiple modules
var testArticle =  new Article ({
  category: 'Literature',
  author: 'Robert Frost',
  authorUrl: 'http://www.poets.org/poet/robert-frost',
  title: 'Stopping by Woods on a Snowy Evening',
  publishedOn: '1923-10-14',
  body:'<p>Whose woods these are, I think I know. His house is in the village though; he will not see me stopping here to watch his woods fill up with snow.</p>My little horse must think it queer to stop without a farmhouse near. Between the woods and frozen lake, the darkest evening of the year.</p><p>He gives his harness bells a shake to ask if there is some mistake.</p><p>The only other sound\'s the sweep of easy wind and downy flake.</p><p>The woods are lovely, dark and deep, but I have promises to keep, and miles to go before I sleep. And miles to go before I sleep.</p>'
});

QUnit.module('Article Constructor', function() {
  QUnit.test('Article should create a new Arcticle', function(assert) {

    assert.equal(testArticle.category, 'Literature');
    assert.equal(testArticle.publishedOn, '1923-10-14');
  });

  QUnit.test('Article instance should have a method toHtml', function(assert) {
    assert.equal(typeof(testArticle.toHtml),'function');
  });

});

QUnit.module('Article Class', function() {
  //use this data for this module
  var t1Test =
    [{
      title: 'Marco',
      author: 'Polo'
    },
    {
      title: 'China',
      author: 'test 2'
    },
    {
      title: 'Dupe Author',
      author: 'Polo'
    }
    ];

  QUnit.test('Article.articleArray should be an array', function(assert) {
    assert.equal((Array.isArray(Article.articleArray)), true);
  });

  QUnit.test('Article.loadAll should set an array of Article instances', function(assert) {
    Article.loadAll(t1Test);
    assert.equal(Article.articleArray.length, 3);
  });
  QUnit.test('Article.allAuthors should get a unique name of authors', function(assert) {
    Article.loadAll(t1Test);
    assert.equal(Article.allAuthors().length, 2);
  });
});
