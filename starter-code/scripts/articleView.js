'use strict';

// this will contain our view-related methods

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.

var articleView = {};

articleView.populateFilters = function () {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('category-filter option[value="' + category + '"]').length === 0) {
      $('category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function () {
  $('#author-filter').on('change', function() {
    if($(this.val())) {
      var $author = $(this.val());
      $('article').hide();
      $('article').each(function() {
        if ($(this).attr('author') === $author) {
          $(this).fadeIn();
        }
      });
    } else {
      $('article').not('.template').fadeIn();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function () {
  /* TODO: complete this filter just like we do for the #author-filter above,
    we should also handle change events on the #category-filter element. Be sure
    to reset the #author-filter while you're at it. */
};

articleView.handleMainNav = function () {
  /* TODO: Complete the delegated event handler below to help power the tabs feature.
     Clicking any .tab element should:
     1. hide all the .tab-content sections.
     2. fade in the single .tab-content section that is associated with the clicked
        .tab element's data-content attribute. This should match the id of the section
        that we want to handle. Dynamically building this out (with concatination)
        be necessary... */

  $('main-nav').on(/* CODE GOES HERE */);

  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function () {
  /* Hide any elements after the first two (<p> tags in this case) in any
     article body. */
  $('.article-body *:nth-of-type(n+2)').hide();

  /* TODO: Add a delegated event handler to reveal the entire article
     (the remaining paragraphs). When a .read-on link is clicked, we can:
     1. Prevent the default action of a link.
     2. Reveal everything in that *particular* article now.
     3. Hide that read-on link.
     4. Stretch Goal: Change the "Read On" link to display "Show Less" */
};

//TODO: Invoke all of the above functions (methods):
//articleView.handleAuthorFilter();
