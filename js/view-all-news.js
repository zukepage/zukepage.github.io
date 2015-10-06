// create dynamically the filters based on the news list
var filterYear = [];
var filterYearHTML = "";
var attrYear = "year";
var wrapperDate = ".wrap-filter-date";
var filterTag = [];
var filterTagHTML = "";
var attrTag = "tags";
var wrapperTag = ".wrap-filter-tag";
var filterCat = [];
var filterCatHTML = "";
var attrCat = "categories";
var wrapperCat = ".wrap-filter-cat";
var divider = "|";

function ArrayUnique(arrayToProcess) {
    var a = [];
    var l = arrayToProcess.length;
    for (var i = 0; i < l; i++) {
        for (var j = i + 1; j < l; j++) {
            // If this[i] is found later in the array
            if (arrayToProcess[i] === arrayToProcess[j]) j = ++i;
        }
        a.push(arrayToProcess[i]);
    }
    return a;
};

// generate the markup for a simple filter list (used for categories and tags)
function createSimpleFilterList(filterArray, filterAttr) {
    var output = "";
    if (filterArray.length > 0) {
        output = "<ul data-filter='" + filterAttr + "'>";
        for (var value in filterArray) {
            output += "<li><a class='news-filter' href='javascript:void();'>" + filterArray[value] + "</a></li>";
        };
        output += "</ul>";
    }
    return output;
}

// add the filter list to the relevant container, or hide the container if the list is empty
function displayFilter(filterList, container) {
    if (filterList.length > 0) {
        $(container).append(filterList);
    } else {
        $(container).hide();
    }
}

$(document).ready(function () {
    $(".media-list > li").each(function () {
        var itemYear = ($(this).attr("data-year").length > 0) ? $(this).attr("data-year") : "";
        var itemMonth = ($(this).attr("data-month").length > 0) ? $(this).attr("data-month") : "";
        var itemTag = ($(this).attr("data-tags").length > 0) ? $(this).attr("data-tags").split(divider) : "";
        var itemCat = ($(this).attr("data-categories").length > 0) ? $(this).attr("data-categories").split(divider) : "";

        // if data-year attribute is filled, include it conditionally to list of filters
        if (typeof itemYear != 'undefined' && itemYear.length > 0) {
            filterYear.push(itemYear);
        }
        // if data-tags attribute is filled, include it conditionally to list of filters
        if (typeof itemTag != 'undefined' && itemTag.length > 0) {
            filterTag.push.apply(filterTag, itemTag);
        }
        // if data-categories attribute is filled, include it conditionally to list of filters
        if (typeof itemCat != 'undefined' && itemCat.length > 0) {
            filterCat.push.apply(filterCat, itemCat);
        }
    });

    filterYear = ArrayUnique(filterYear);
    filterYear.sort();
    filterTag = ArrayUnique(filterTag);
    filterTag.sort();
    filterCat = ArrayUnique(filterCat);
    filterCat.sort();

    // generate the filters lists
    filterYearHTML = createSimpleFilterList(filterYear, attrYear);
    filterTagHTML = createSimpleFilterList(filterTag, attrTag);
    filterCatHTML = createSimpleFilterList(filterCat, attrCat);

    // add the list at the correct place or hide the filter if nothing
    displayFilter(filterYearHTML, wrapperDate);
    displayFilter(filterTagHTML, wrapperTag);
    displayFilter(filterCatHTML, wrapperCat);

    // on click of filter, show only the news with the selected filter
    $('.news-filter').click(function () {
        // get values of filters to apply
        var filter = $(this).text();
        var filterType = $(this).closest("ul").attr("data-filter");

        // hide all news
        $(".wrap-news-list .media-list > li").fadeOut('slow');

        $(".wrap-news-list .media-list > li").promise().done(function () {
            // display news with filter matching when all elements have been faded out (using promise)
            $(".wrap-news-list .media-list li[data-" + filterType + "*='" + filter + "']").fadeIn('slow');
        });
    });


});

