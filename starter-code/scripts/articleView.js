'use strict';

// this will contain our view-related methods

// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.

var articleView = {};

articleView.populateFilters = function () {
  $('article').not('.template').each(function() { // got thru all but template, then loop through one by one.
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text(); // find the anchor tag with the author's name and grab the text value.
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>'; //create an option tag for that author.
    $('#author-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('category-filter option[value="' + category + '"]').length === 0) { // testing the length of a value to see if there's a match
      $('category-filter').append(optionTag);

    }
  });
};

articleView.handleAuthorFilter = function () {
  $('#author-filter').on('change', function() {
    if($(this.val())) {
      /* TODO: If the select box changes to an option that has a value, we should:
       1. hide ALL articles
       2. fade in only the articles that match that selection based on the author-filter
          that was selected. Use an 'attribute selector' to find those articles that
          match the value, and fade them in for the reader.*/
    } else {
      /* TODO: otherwise we should:
        1. Show all the articles.
        2. Except the one article that we are using as a template */
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
