$(function() {

  // you can't just run
  $("body").on('focusin','input', function() {
    $(".date").mask("99/99/9999");
    $(".ssn").mask("999-99-9999");
  });

  // sweet function for conditional form elements
  function checkValues() {
    var thisId = '#' + $(this).attr('id');
    var dependentDetailsId = thisId + "Details";
    var dependentContentId = dependentDetailsId + "Content";

    // set the default of this to false. We'll change it later if it's actually true
    var dependentIsChecked = false;

    // check to see if this item is checked
    if ( $(this).is(':checked') ) {
      dependentIsChecked = true;
    }

    // grab the contents of the dependent content
    var detailContentData = $(dependentContentId).html();

    // grab the data attribute from the selected <option>
    var showDependentContent = $('option:selected', this).data("show-dependent-relative");

    // if the <option> is telling us to find dependent content by ID, store it.
    var showDependentContentById = $('option:selected', this).data("show-dependent-by-id");

    // if the <option> is telling us to find multiple dependents' content by ID, store them.
    var showDependentsContentById = $('option:selected', this).data("show-dependents-by-id");
    if (showDependentsContentById) {
      //console.log(showDependentsContentById);
      showDependentsContentById = showDependentsContentById.replace(/ /g, "");
      //console.log(showDependentsContentById);
      showDependentsContentById = showDependentsContentById.split(',');
      //console.log(showDependentsContentById);
    }

    // use the stored content by ID to grab the dependent content store it
    var dependentContentById = $(showDependentContentById).html();

    // if the page loads with default values, catch them and populate if desired
    if (showDependentContent) {
      $(dependentDetailsId).html(detailContentData);
    } else if (showDependentsContentById) {
      var multipleDependentsToShow = "";

      for (var i = 0; i < showDependentsContentById.length; i++) {
        multipleDependentsToShow = multipleDependentsToShow + $(showDependentsContentById[i]).html();
        //console.log( $(showDependentsContentById[i]).html() );
        console.log(showDependentsContentById[i] + " -- " + multipleDependentsToShow);
      }

      $(dependentDetailsId).html(multipleDependentsToShow);
    } else if (showDependentContentById) {
      $(dependentDetailsId).html(dependentContentById);
    } else if (dependentIsChecked) {
      $(dependentDetailsId).html(detailContentData);
    } else {
      // if not, make sure it is empty
      $(dependentDetailsId).html('');
    }
  }

  $('body').on('ready', '.isDependent', checkValues);
  $('body').on('change', '.isDependent', checkValues);

});
