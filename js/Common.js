//Common functions

function pad(input, length, padding) {
    while ((input = input.toString()).length + (padding = padding.toString()).length < length) {
        padding += padding;
    }
    return padding.substr(0, length - input.length) + input;
}

function OnLogout(redirectURL) {
    clearTimer();
    $.ajax({
        type: "POST",
        url: "/GlobalUtilService.asmx/Logout",
        data: null,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
            deleteCookie("AuthId");
            window.location.href = redirectURL;
        }
    });
}

function fnChangeNoOfPages(ddlPageList) {
    $('.modal-backdrop').show();
    var url = UpdateQueryString("display", ddlPageList.value, window.location.href);
    window.location.href = UpdateQueryString("pageNum", "1", url);
}


function funcLogout() {
    clearTimeout(sessionWarningTimer);
    var logoutUrl = $("#hfLogoutLink").val();
    OnLogout(logoutUrl);
}

function fnCalculateDynamicSalary(elementButton) {
    $('.modal-backdrop').show();

    var minVal = $('#' + elementButton.id).siblings(".minVal").val();
    var maxVal = $('#' + elementButton.id).siblings(".maxVal").val();

    if (parseInt(minVal) < parseInt(maxVal)) {
        var encodedParam = encodeURIComponent(minVal + ',' + maxVal + '|');
        var updatedUrl = UpdateQueryString('salary', encodedParam.toLowerCase(), window.location.href);
        window.location.href = updatedUrl;
    } else {
        $('.modal-backdrop').hide();
        $(".maxerrmsg").show().fadeOut(5000);
    }
}

jQuery('.sub-toggle').on('click', function (event) {
    event.preventDefault();
    $(this).closest('li').find('.sub-category').collapse('toggle');
    if ($(this).hasClass('icon-chevron-sign-up')) {
        $(this).removeClass('icon-chevron-sign-up');
        $(this).addClass('icon-chevron-sign-down');
    } else {
        $(this).removeClass('icon-chevron-sign-down');
        $(this).addClass('icon-chevron-sign-up');
    }
});

jQuery('.additional-toggle').on('click', function (event) {
    event.preventDefault();
    var icon = $(this).find('i');
    var label = $(this).find('span');
    var addList = $(this).closest('div').find('ul.collapse');
    // move <li> items to additional ul which does the collapse / expand if not done yet
    if (addList.children().length == 0) {
        $(this).closest('div').find(".additional").parent().appendTo(addList);
        $(this).closest('div').find(".additional").removeClass("hide");
    }

    // toggle the collapse / expand on the additional ul
    addList.collapse('toggle');

    if (icon.hasClass('icon-chevron-up')) {
        icon.removeClass('icon-chevron-up').addClass('icon-chevron-down');
        label.text(label.attr('data-collapsed'));
    } else {
        icon.removeClass('icon-chevron-down').addClass('icon-chevron-up');
        label.text(label.attr('data-expanded'));
    }
});


// Equal Height function
equalheight = function (container) {

    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

$(window).resize(function () {
    equalheight('.js--equal-height');
})


/*For Session Timeout Warning ************************************************************************************************
******************************************************************************************************************************/
var sessionTimeoutWarning = appSettings.SessionWarning;
var sessionTimeout = appSettings.Timeout;
var timeOnPageLoad = new Date();
var sessionWarningTimer = null;
var redirectToWelcomePageTimer = null;
var setTimer = ((parseInt(sessionTimeout) - parseInt(sessionTimeoutWarning)) * 60);
var countdown = null;

//start timeout only if user is logged in
if (typeof getCookie("AuthId") != "undefined" && getCookie("AuthId") != "00") {
    sessionWarningTimer = setTimeout(function () { SessionWarning() }, parseInt(sessionTimeoutWarning) * 60 * 1000);
}
else {
    clearTimer();
}

//not in use
function confirmContinueAction() {
    $("#sessionTimeoutModalCMS").modal('hide');
    clearTimer();
    var img = new Image(1, 1);
    img.src = '/ResetSession.aspx?date=' + escape(new Date());
    //clearTimeout(sessionWarningTimer);
    //sessionWarningTimer = setTimeout(function () { SessionWarning() }, parseInt(sessionTimeoutWarning) * 60 * 1000);
}

function clearTimer() {

    var timerId = window.setTimeout(function () { }, 0);

    //while (timerId--) {
    //    window.clearTimeout(timerId); // will do nothing if no timeout with id is present
    //}
    if ($("#sessionTimeoutModalCMS").is(":visible")) {
        $("#sessionTimeoutModalCMS").modal('hide');
    }
    clearInterval(countdown);
    countdown = null;
    sessionWarningTimer = null;
    clearTimeout(sessionWarningTimer);
    //reset the time on page load
    timeOnPageLoad = new Date();

    //start timeout only if user is logged in
    if (typeof getCookie("AuthId") != "undefined" && getCookie("AuthId") != "00") {
        sessionWarningTimer = setTimeout(function () { SessionWarning() }, parseInt(sessionTimeoutWarning) * 60 * 1000);
    }

    //Clear the RedirectToWelcomePage method
    if (redirectToWelcomePageTimer != null) {
        clearTimeout(redirectToWelcomePageTimer);
    }
}

$.fn.countdown = function (callback, duration, message) {
    // If no message is provided, we use an empty string
    message = message || "";
    // Get reference to container, and set initial content
    var minutes = Math.floor(duration / 60);
    var seconds = pad(duration % 60, 2, 0);
    var container = $(this[0]).html(minutes + ":" + seconds + message);
    // Get reference to the interval doing the countdown
    if (countdown != null) {
        clearInterval(countdown);
        countdown = null;
    }
    countdown = setInterval(function () {
        // If seconds remain
        if (--duration) {
            // Update our container's message
            minutes = Math.floor(duration / 60);
            seconds = pad(duration % 60, 2, 0);
            container.html(minutes + ":" + seconds + message);
            // Otherwise
        } else {
            // Clear the countdown interval
            clearInterval(countdown);
            countdown = null;
            // And fire the callback passing our container as `this`
            callback.call(container);
        }
        // Run interval every 1000ms (1 second)
    }, 1000);
};

//Session Warning
function SessionWarning() {
    if (!$("#sessionTimeoutModalCMS").is(":visible")) {
        //minutes left for expiry
        var minutesForExpiry = (parseInt(sessionTimeout) - parseInt(sessionTimeoutWarning));
        var message = "Your session will expire in another " + minutesForExpiry + " minutes. Do you want to extend the session?";
        $("#sessionTimeoutModalCMS").modal({ backdrop: 'static', keyboard: false }, 'show');
        $(".countdown").countdown(RedirectToLoginPage, setTimer, " ");
    }
}

//Session timeout redirect
function RedirectToLoginPage() {
    $("#sessionTimeoutModalCMS").modal('hide');
    funcLogout();
}

var viewModel = null;

$(document).ready(function () {

    $(document).ajaxStart(function () {
        $('.modal-backdrop').show();
    });

    $(document).ajaxStop(function () {
        $('.modal-backdrop').hide();
    });

    // Initialize Equal Heights
    if ($(".js--equal-height").length > 0) {
        equalheight('.js--equal-height');
    }

    // Initialize iFrame Resizer for SSO Login
    iFrameResize();

    //Setting a cookie to note down whether the user came from job page, expiredpage, thankyou page
    //If yes set the cookie value to 1
    //So that in job results page we will keep pagination values cookie or else reset the cookie.
    if (document.URL.toLowerCase().indexOf("/job") > 0 || document.URL.toLowerCase().indexOf("/expiredjob") > 0 || document.URL.toLowerCase().indexOf("/job-application-thank-you") > 0) {
        document.cookie = "IsJobPage = " + 1 + "; path=/";
    } else {
        document.cookie = "IsJobPage = " + 0 + "; path=/";
    }

    $(".salary-frequency").click(function (e) {
        $('.modal-backdrop').show();
        var frequency = $(this).data('val');
        var refinedUrl = removeURLParameter(window.location.href, 'salary');
        window.location.href = UpdateQueryString('frequency', frequency, refinedUrl);
    });

    //called when key is pressed in textbox
    $(document).on('keypress', '.minVal, .maxVal', function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $(".errmsg").show().fadeOut(2500);
            return false;
        }
    });

    $(document).on('keypress', '#txtminutesToStation', function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            $("#errorTimeToStationNumeric").show().fadeOut(2500);
            return false;
        }
    });


    $(".facet-loadspinner").change(function (e) {

        $('.modal-backdrop').show();
        var selectedCat = $(this).attr('data-cat');
        var selectedValue = $(this).attr('data-val');
        var currentValue;
        var redirectURL = '';

        if ($(this).find('input').is(':checked')) {
            window.location.href = $(this).attr('data-checked');
            e.preventDefault();
        } else {
            window.location.href = $(this).attr('data-unChecked');
            e.preventDefault();
        }
    });

    if (document.all && !window.atob) {
        history.pushState = null;
    }
    
    if (typeof _ItemName != 'undefined') {

        if (history.pushState == null && _FilterCriteria.trim() == '') {
            if (typeof getUrlVars()['pagenum'] == 'undefined' || typeof getUrlVars()['display'] == 'undefined') {
                if (typeof getUrlVars()['pagenum'] == 'undefined') {
                    initialUrl = UpdateQueryString('pageNum', '1', initialUrl);
                }
                if (typeof getUrlVars()['display'] == 'undefined') {
                    initialUrl = UpdateQueryString('display', '5', initialUrl);
                }
                window.location.href = initialUrl;
                throw new Error("IE9 detected!");
            }
            _FilterCriteria = window.location.href;
        }
        $('.modal-backdrop').show();

        viewModel = new globalViewModel();
        viewModelShortlistJobs(viewModel);
        viewModelJobSearchResponse(viewModel);

        if (_FilterCriteria.trim() == '') {
            var isPushRequired = false;
            if (typeof getUrlVars()['pagenum'] == 'undefined') {
                initialUrl = UpdateQueryString('pageNum', '1', initialUrl);
                isPushRequired = true;
            }
            if (typeof getUrlVars()['display'] == 'undefined') {
                initialUrl = UpdateQueryString('display', '5', initialUrl);
                isPushRequired = true;
            }

            if (!(document.all && !window.atob) && isPushRequired) {
                history.pushState({ "state": 1, "message": "updated" }, "title", initialUrl);
            }

            viewModel.runJobSearch(initialUrl);
        } else {

            viewModel.runJobSearch(_FilterCriteria);

        }
        viewModel.GetJobAlertFrequency();

    }

    // For Recent Search jobs
    if (typeof _isRecentSearch != "undefined" && _isRecentSearch)
        {
        if ($('#recentSearch').length > 0) {
            if(viewModel == null)
                viewModel = new globalViewModel();
            viewModelRecentSearchResults(viewModel,'recentSearches');
        }
    }
    // For Recent Viewed Jobs
    if (typeof _isRecentViewedJobs != "undefined" && _isRecentViewedJobs) {
        if(viewModel == null)
            viewModel = new globalViewModel();
        viewModelRecentlyViewedJobs(viewModel, 'recentlyViewJobs');
    }
    if (viewModel != null) {
        ko.applyBindings(viewModel);
    }

});

/*Query String*****************************************************************************************************************
******************************************************************************************************************************/
function getUrlVars() {
    return getUrlVarFromString(window.location.href);
}

function getUrlVarFromString(url) {
    var vars = [], hash;
    var queryString = url.split('#')[0];
    queryString = queryString;
    var hashes = queryString.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0].toLowerCase());
        vars[hash[0].toLowerCase()]= hash[1];
    }
    return vars;
}

function UpdateQueryString(key, value, url) {
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi");

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
        else {
            var hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?',
                hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
                url += '#' + hash[1];
            return url;
        }
        else
            return url;
    }
}

function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

        var prefix = encodeURIComponent(parameter) + '=';
        var pars = urlparts[1].split(/[&;]/g);

        //reverse iteration as may be destructive
        for (var i = pars.length; i-- > 0;) {
            //idiom for string.startsWith
            if (pars[i].toLowerCase().lastIndexOf(prefix, 0) !== -1) {
                pars.splice(i, 1);
            }
        }

        url = urlparts[0] + '?' + pars.join('&');
        return url;
    } else {
        return url;
    }
}

/*Get Cookie*******************************************************************************************************************
******************************************************************************************************************************/
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}
