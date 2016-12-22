// view object to hold functions for dynamic updates and article related event handlers
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('template').each(function() {
    var authorName = $(this).find('address a').text();
    var category = $(this).attr('data-category');
    var context = {
      author: authorName,
      cat: category
    };
    /*populate author filter */
    var source = $('#author-template').html();
    var template = Handlebars.compile(source);

    var html = template(context);
    if (!$('#author-filter option[value="' + authorName + '"]').length) {
      $('#author-filter').append(html);
    }

    /*populate category filter */
    source = $('#category-template').html();
    template = Handlebars.compile(source);
    html = template(context);
    if (!$('#category-filter option[value="' + category + '"]').length) {
      $('#category-filter').append(html);
    };
  });
};

articleView.populateFilters();

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {

    if ($(this).val()) {
      /*hide all the articles and then show the articles by selected author */
      $('article').hide();
      var authorName = $(this).val();
      $('[data-author = "' + authorName + '"]').fadeIn();
    } else {
/* Otherwise, we should:
  Show all the articles except the template */
      $('#articles').not('.template').show();
    }
/*clear the other filter */
    $('#category-filter').val('');
  });
};


articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      /*hide all the articles and then show the articles by selected author */
      $('article').hide();
      var category = $(this).val();
      $('[data-category = "' + category + '"]').fadeIn();
    } else {
/* Otherwise, we should:
  Show all the articles except the template */
      $('#articles').not('.template').show();
    }
/*clear the other filter */
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = (function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.main-nav').click(function(event) {
      event.preventDefault();
      $('.tab-content').hide();
    //who called
      var navItem = $(this).attr('data-content');
      console.log('navitem ' + $(this));
      $('#' + navItem).fadeIn();
    });
    $('main-nav .tab:first').click();
  });
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

articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();
