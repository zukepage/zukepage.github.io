//findJobsSearchBar.js
//
//Key Codes
//40 : DownArrow
//13 : Enter

//Flag that will determine if the Enter key can submit the search criteria.
var enterSubmitsForm = true;

//The intent of this function is to stop the user from submitting a pre-mature search when they are making an auto-suggest selection.
jQuery(function ($) {
    $(".keywordHelper").keyup(function (event) { //Listen for Key Up events in the Keyword field	
        if (event.keyCode == 40) { //Check if down arrow is being pressed.
            enterSubmitsForm = false; //Set value to false so the Enter key can select an auto-suggest value.
        } else if (event.keyCode == 13) { //Check if Enter key is being pressed
            if (enterSubmitsForm) { //When true, we allow the Enter key to submit a search.							
                $('#' + $(this).attr("buttonID")).click();
            } else { //Set the enterSubmitsForm is true.
                enterSubmitsForm = true; //The Enter key can now be used to submit a form.
            }
        }
    });
});


//The intent of this function is to stop the user from submitting a pre-mature search when they are making an auto-suggest selection.
jQuery(function ($) {
    $(".locationHelper").keyup(function (event) {  //Listen for Key Up events in the Location field

        if (event.keyCode == 40) {  //Check if down arrow is being pressed.
            enterSubmitsForm = false;  //Set value to false so the Enter key can select an auto-suggest value.
        }
        if ((event.keyCode >= 65) && (event.keyCode <= 90)) {       //Check for A-Z button press

            $('#coordinates').val('');  //Coordinate value set to null
        }


        else if (event.keyCode == 13) {  //Check if Enter key is being pressed.
            if (enterSubmitsForm) {  //When true, we allow the Enter key to submit a search.                        
                $('#' + $(this).attr("buttonID")).click();
            }
            else { //Set the enterSubmitsForm is true.
                enterSubmitsForm = true; //The Enter key can now be used to submit a form.
            }
        }
    });
});

//This function will build a URL for the job results page.
function searchButton(obj, url) {

    //Resetting the Cookie Value on Click of Find jobs 
    setCookie('CurrentPage', '1');
    //0 is the Index of the dropdown
    setCookie('PageList', '0');
    setCookie('SortOrder', '0');

    //Obtain the value in the keyword field				
    var keyword = pVal(obj, '#txtkeyword');
    //$('#'+ obj.attributes.id.value).closest(".job-search-container").find('#txtkeyword').val().toLowerCase().trim();

    //Obtain the value in the location field
    var location = pVal(obj, '#txtlocation');

    //$('#'+ obj.attributes.id.value).closest(".job-search-container").find('#txtlocation').val().toLowerCase().trim();

    //Build URL based on values
    var stringArray = [keyword, location];

    var jobSearchURL = url;

    for (var i = 0; i < stringArray.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = stringArray[i];
        var newKeyword = div.textContent || div.innerText || "";

        // Removing RegEx filter until full list of characters to exclude is provided
        //stringArray[i] = newKeyword.replace(/[^a-zA-Z0-9äöüÄÖÜ\,\'\_\-\/\s+]/g, "");
    }

    //Build URL based on values
    var coordinates = '';
    if (($("#coordinates").val() != '') && (location != '')) {
        coordinates = '&xy=' + encodeURIComponent($("#coordinates").val());
    }
    //Build URL based on values
    var keywordString = stringArray[0].toLowerCase();

    //// Capitalize "IT" if it is a separate word
    var itWithSpaces = " it ", itWithTrailingSpace = "it ", itWithLeadingSpace = " it";

    if (keywordString.indexOf(itWithSpaces) >= 0 || keywordString.indexOf(itWithTrailingSpace) == 0 || (keywordString.indexOf(itWithLeadingSpace) >= 0 && keywordString.indexOf(itWithLeadingSpace) + itWithLeadingSpace.length == keywordString.length)) {
        keywordString = keywordString.replace("it", "IT");
    } else {
        keywordString = keywordString.toLowerCase();
    }

    jobSearchURL = jobSearchURL + "?k=" + encodeURIComponent(keywordString).replace(/%20/g, "+") + "&l=" + encodeURIComponent(stringArray[1]).toLowerCase().replace(/%20/g, "+") + coordinates + "&pageNum=1&display=5";

    //Take the user to the constructed URL
    window.location.href = jobSearchURL;
}


function pVal(obj, divId) {

    var inputValue = $('#' + obj.attributes.id.value).closest(".job-search-container").find(divId).val().toLowerCase().trim();
    var placholderValue = $('#' + obj.attributes.id.value).closest(".job-search-container").find(divId).attr('placeholder').toLowerCase().trim();

    if (inputValue == placholderValue)
        return '';
    else {

        //// Capitalize "IT" if it is a separate word
        var itWithSpaces = " it ", itWithTrailingSpace = "it ", itWithLeadingSpace = " it";

        if (inputValue.indexOf(itWithSpaces) >= 0 || inputValue.indexOf(itWithTrailingSpace) == 0 || (inputValue.indexOf(itWithLeadingSpace) >= 0 && inputValue.indexOf(itWithLeadingSpace) + itWithLeadingSpace.length == inputValue.length)) {
            inputValue = inputValue.replace("it", "IT")
        }

        return inputValue;
}
}


// IE Placeholder//
//(function ($) {
//    $.fn.ie_placeholder = function (options) {
//        var defaults = {
//            hintClass: 'ie-placeholder',
//            hintName: 'ie-placeholder_input'
//        };

//        var settings = $.extend(defaults, options);

//        return this.each(function (i) {
//            if ($(this).parent().is('.job-search-keyword-input') || $(this).parent().is('.job-search-location-input')) {
//                var id = settings.hintName + '_' + i;
//                var hint;
//                var dummy_input;
//                if ($(this).hasClass('select2-focusser') || $(this).hasClass('select2-input')) {
//                    return true; //skips to the next iteration for select2 inputs
//                }

//                // grab the input's placeholder attribute
//                text = $(this).attr('placeholder');

//                // create a dummy input and place it before the input
//                $('<input type="text" id="' + id + '" value="" />')
//                    .insertBefore($(this));

//                //set the dummy input's attributes
//                hint = $(this).prev('input:first');
//                hint.attr('class', $(this).attr('class'));
//                hint.attr('size', $(this).attr('size'));
//                hint.attr('autocomplete', 'on');
//                hint.attr('placeholder');
//                hint.attr('tabIndex', $(this).attr('tabIndex'));
//                hint.addClass(settings.hintClass);
//                hint.css("color", "#999");
//                hint.val(text);
//                //hide the input
//                $(this).hide();
//                // don't allow autocomplete (sorry, no remember password)
//                $(this).attr('autocomplete', 'off');
//                //bind focus event on the dummy input to swap with the real input
//                //hint.focus(function () {
//                $(document).on('focus', '#' + hint.attr('id'), function () {
//                    dummy_input = $(this);
//                    $(this).next('input:first').show();
//                    $(this).next('input:first').focus();
//                    $(this).next('input:first').unbind('blur').blur(function () {
//                        if ($(this).val() == '') {
//                            $(this).hide();
//                            dummy_input.show();
//                            dummy_input.removeClass('success');
//                            if ($(this).hasClass("error")) {
//                                dummy_input.addClass("error");
//                            }
//                        }
//                    });
//                    $(this).hide();
//                });
//            }
//        });
//    };
//})(jQuery);

//$(document).ready(function () {
//    $("input[type=text]").ie_placeholder();
//    $("input[type=password]").ie_placeholder();
//});


self.AddressAutoSuggest = ko.observableArray();

    $(".new_location").typeahead({
        minLength: _SearchApiSettings.minLength,
        items: _SearchApiSettings.MaxResults,
        source: function (request, response) {
            $.ajax({
                url: _SearchApiSettings.ApiUrl,
                dataType: "jsonp",
                global:false,
                data: {
                    key: _SearchApiSettings.ApiKey,
                    locality: this.$element.val(),
                    countryRegion: _SearchApiSettings.countryCode,
                    maxResults: _SearchApiSettings.MaxResults,
                    c: getCookie("Locale")
                },
                jsonp: "jsonp",
                success: function (data) {
                    var result = data.resourceSets[0];
                    if (result) {
                        if (result.estimatedTotal > 0) {
                            var loc = [];
                            $.each(result.resources, function (key, val) {
                                loc.push(val.name);
                                self.AddressAutoSuggest.push({ data: val, key: val.name });
                            });
                            response(loc);
                        }
                    }
                }
            });
        },
        matcher: function (item) {
            return true;
        },
        updater: function (item) {
            $.each(self.AddressAutoSuggest(), function (num, val) {
                if (item == val.key) {
                    $('#coordinates').val(parseFloat(val.data.point.coordinates[0]).toFixed(4) + ',' + parseFloat(val.data.point.coordinates[1]).toFixed(4));
                }


            });

            return item;
        }
        //***
    });
