// view object to hold functions for dynamic updates and article related event handlers
var articleView = {};


articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /*hide all the articles and then show the articles by selected author */
      $('article').hide();
      $('article[data-author = "' + $(this).val() + '"]').fadeIn();
    } else {
/* Otherwise, we should:
  Show all the articles except the template */
      $('article').fadeIn();
      $('artcle.template').hide();
    };
/*clear the other filter */
    $('#category-filter').val('');
  });
};


articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      /*hide all the articles and then show the articles by selected author */
      $('article').hide();
      $('article[data-category = "' + $(this).val() + '"]').fadeIn();
    } else {
/* Otherwise, we should:
  Show all the articles except the template */
      $('article').fadeIn();
      $('article-template').hide();
    }
/*clear the other filter */
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = (function() {
  $('.main-nav').on('click', '.tab', function(event) {
    //  event.preventDefault();
    $('.tab-content').hide();
    //who called
    $('#' + $(this).data('content')).fadeIn();
  });
  $('main-nav .tab:first').click();
});


//for now, reveal the rest of the article.
//later, set a toggle to hide all but first paragraph
articleView.setTeasers = function() {

  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', '.read-on',function(event) {
    event.preventDefault();
    if ($(this).text() === 'Read on') {
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    };
  });
};

//call the funtions that make it all come together
//refactoring to to be called from the getJson block
articleView.renderIndexPage=function() {
  Article.articleArray.forEach(function(a) {
    $('#articles').append(a.toHtml('#article-template'));
    if ($('#category-filter option:contains("' + a.category + '")').length === 0) {
      $('#category-filter').append(a.toHtml('#category-filter-template'));
    };
    if ($('#author-filter option:contains("' + a.author + '")').length === 0) {
      $('#author-filter').append(a.toHtml('#author-filter-template'));
    };
  });

  articleView.handleAuthorFilter();
  articleView.handleCategoryFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};

var retrievedFile = localStorage.getItem('getStatus');

$.getJSON('/data/blogArticles.json').done( function(data) {
  Article.articleSort(data);
  articleView.renderIndexPage();
}).fail( function() {
  console.log('ooops');
});
