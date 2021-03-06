
//populate the admin page with article stats
articleView.initAdminPage = function() {
  var template = Handlebars.compile($('#author-template').html());

  Article.numWordsByAuthor().forEach(function(stat){
    $('.author-stats').append(template(stat));
  });
  $('#blog-stats .articles').text(Article.articleArray.length);
  $('#blog-stats .words').text(Article.numWordsAll());
};

Article.fetchAll(articleView.initAdminPage);
