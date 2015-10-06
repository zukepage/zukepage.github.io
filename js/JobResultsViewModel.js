
var initialUrl = window.location.href;
window.onunload = function () { };
$(document).ajaxStart(function () {
    $('.modal-backdrop').show();
});

$(document).ready(function () {
    if (typeof _isShowJobAlert != 'undefined' && _isShowJobAlert) {
        if ($('#email-jobs').length > 0) {
            var jobAlertModel = $(document).find('#email-jobs');

            //initialize Validations for model
            jobAlertModel.validate({
                onclick: function (element, event) {
                    $(element).valid();
                },
                onfocusout: function (element, event) {
                    $(element).valid();
                },
            });
        }
    }
    if (typeof _JobDetailsId != 'undefined' && _JobDetailsId.trim() != '') {
        if (_buckets.get('recentlyViewJobs') != undefined) {

            var jobviewedIdList = [];
            var notduplicate = true;

            $.each(_buckets.get('recentlyViewJobs'), function () {
                if (this == _JobDetailsId) {
                    notduplicate = false;
                }
                jobviewedIdList.push(this);
            });

            if (notduplicate) {
                if (jobviewedIdList.length == 5)
                    delete jobviewedIdList[0];

                jobviewedIdList.push(_JobDetailsId);
            }
            else if (jobviewedIdList.toString().indexOf(_JobDetailsId) > -1) {
                for (var z = 0; z < jobviewedIdList.length; z++) {
                    if (jobviewedIdList[z].toString() == _JobDetailsId) {
                        jobviewedIdList.splice(z, 1);
                        jobviewedIdList.push(_JobDetailsId);
                    }
                }
            }

            _buckets.deleteKey('recentlyViewJobs');
            _buckets.set('recentlyViewJobs', jobviewedIdList, { TTL: 31536000000 });

        } else {
            var newjobid = [];
            newjobid.push(_JobDetailsId);
            _buckets.set('recentlyViewJobs', newjobid, { TTL: 31536000000 });
        }
    }
});
$(document).ajaxStop(function () {
    $('.modal-backdrop').hide();
});
window.onpopstate = function (event) {
    if (typeof _ItemName != 'undefined') {
        viewModel.runJobSearch(window.location.href);
    }
};

//Global Viewmodel to send thorugh all viewmodels
function globalViewModel() {
    var self = this;
}

function viewModelRecentSearchResults(self, key) {


    self.getRecentSearch = ko.observableArray(_buckets.get(key) != undefined ? _buckets.get(key) : null);
    self.manageRecentSearches = function (data) {
        if (data != null)
            if (data.RecentSearchesValue != null && parseInt(_maxRecentSearches) > 0) {
                if (_buckets.get(key) == undefined || _buckets.get(key).length < 1) {
                    var newlist = [];
                    newlist.push(data.RecentSearchesValue);
                    _buckets.set(key, newlist, { TTL: 31536000000 });
                } else {
                    var list = [];
                    $.each(_buckets.get(key), function () {
                        if (!(JSON.stringify(this) === JSON.stringify(data.RecentSearchesValue)))
                            list.push(this);
                    });

                    list.push(data.RecentSearchesValue);
                    if (parseInt(list.length) > parseInt(_maxRecentSearches)) {
                        list.splice(0, 1);
                    }
                    _buckets.deleteKey(key);
                    _buckets.set(key, list, { TTL: 31536000000 });
                }
                self.getRecentSearch(_buckets.get(key));
            }
    }

    self.deleterecentSearch = function () {
        _buckets.deleteKey(key);
        self.getRecentSearch(null);
    }
}

function viewModelJobSearchResponse(self) {

    self.jobResponse = ko.observable();

    self.jobAlertFrequency = ko.observableArray();

    self.commuteTimeViewModel = ko.observable(new CommuteTimeViewModel());

    self.itemsPerPageValue = ko.observable(getUrlVars()['display'] != undefined ? getUrlVars()['display'] : null);
    self.minValue = ko.observable('');
    self.maxValue = ko.observable('');
    self.AddressAutoSuggest = ko.observableArray();
    self.CommuteSearchPerformed = ko.observable(false);
    /*HTML Encode/Decode **********************************************************************************************************
    ******************************************************************************************************************************/

    self.updateSearch = function ()
    {
        var url = "";
        var commuteTime = self.commuteTimeViewModel().getDTO()[0];
        var TimeToStation = commuteTime.TimeToStation ? commuteTime.TimeToStation : 0;
        var maxCommuteTime = commuteTime.DesiredCommuteTime ? commuteTime.DesiredCommuteTime : 0;
        var WaysideStation = commuteTime.WaysideStation ? commuteTime.WaysideStation : '';
        var station = commuteTime.Station ? commuteTime.Station : '';
        
        if ((TimeToStation != null && maxCommuteTime != null) && ((parseInt(TimeToStation) > parseInt(maxCommuteTime)) || (parseInt(TimeToStation) ==    parseInt(maxCommuteTime)))) {
            {
                $("#errorCommuteTime").show().fadeOut(2500);
                return false;
            }
        }
         var encodedParam1 = encodeURIComponent(maxCommuteTime);
         var updatedUrl = UpdateQueryString('DesiredCommuteTime', encodedParam1.toLowerCase(), window.location.href);

         var encodedParam2 = encodeURIComponent(TimeToStation);
         var updatedUrl = UpdateQueryString('TimeToStation', encodedParam2, updatedUrl);

         var encodedParam4 = encodeURIComponent(station);
         var updatedUrl = UpdateQueryString('station', encodedParam4, updatedUrl);

         var encodedParam5 = encodeURIComponent(WaysideStation + '|');
         var updatedUrl = UpdateQueryString('WaysideStation', encodedParam5, updatedUrl);

        updatedUrl = UpdateQueryString('pageNum', "1", updatedUrl);

        self.runJobSearch(updatedUrl);
        self.CommuteSearchPerformed(true);
        return true;

    };

    self.htmlEncode = function (value) {
        //create a in-memory div, set it's inner text(which jQuery automatically encodes)
        //then grab the encoded contents back out.  The div never exists on the page.
        return $('<div/>').text(value).html();
    }

    self.htmlDecode = function (value) {
        return $('<div/>').html(value).text();
    }

    self.runJobSearch = function (url) {
        $('.modal-backdrop').show();
        var str = url.substring(url.indexOf("?"));
        if (_FilterCriteria == '' && (window.location.href != url)) {
            history.pushState({ "state": 1, "message": "rtegetrt" }, "title", str);
        }
        var jobAsyncRequest = {
            filterUrl: url,
            facetSettingId: _ItemName,
            currentLanguage: _CurrentLanguage,
            clientId: _ClientId,
            clientName: _ClientName,
            branchId: _BranchId
        };

        $.ajax({
            type: "POST",
            url: "/AdeccoGroup.Global/api/Job/AsynchronousJobSearch/",
            data: JSON.stringify(jobAsyncRequest),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                self.jobResponse(data);
                if (_isShowFacet) {
                    setSlider();
                    setStartDateSlider();
                    setJobDurationSlider();
                }

                if (typeof (self.manageRecentSearches) != 'undefined') {
                    self.manageRecentSearches(data);
                }
                self.manageSalary(data);

                $('html, body').animate({
                    scrollTop: '0px'
                }, 1000);
                //Temp Fix. The SetCookie Method in SSP is getting Overriden. 
                document.cookie = 'SearchResultPage' + "=" + url + "; path=/";
                self.ManageRadiusSlider();
                self.ManageJobDurationSlider();
                $('.modal-backdrop').hide();
            }
        });
    }

    self.manageSalary = function (data) {
        if (getUrlVars()['salary'] != null && getUrlVars()['salary'] != '') {
            var salValue = unescape(getUrlVars()["salary"]).replace(/\|$/, '').split(',');
            if (null != salValue) {
                self.minValue(salValue[0]);
                self.maxValue(salValue[1]);
            }
        }
        else {
            self.minValue('');
            self.maxValue('');
        }
    }

    self.ManageRadiusSlider = function () {
        if (($.trim(getUrlVars()['l']) != '') & (($.trim(getUrlVars()['countryfacet']) == '') && ($.trim(getUrlVars()['countrysubdivisionfacet']) == '') && ($.trim(getUrlVars()['cityfacet']) == ''))) {
            $("#divRadiusControl").show();
        } else {
            $("#divRadiusControl").hide();
        }
        return true;
    }

    self.ManageJobDurationSlider = function () {
        if (getUrlVars()['jobtype'] != undefined & ($.trim(getUrlVars()['jobtype']) != '') & ($.trim(getUrlVars()['jobtype']) == 'PERM%7c')) {
            $("#divJobDurationControl").hide();
            if (getUrlVars()["jd"] != '' && getUrlVars()["jd"] != undefined)
            {
                var newUrl = removeURLParameter(window.location.href, 'jd');
                self.runJobSearch(newUrl);
            }
        } else {
            $("#divJobDurationControl").show();
        }
        return true;
    }

    self.removeAll = function (data, event) {
        self.minValue('');
        self.maxValue('');
        var display = '';
        if ((typeof getUrlVars()['display'] == 'undefined')) {
            display = 5;
        } else {
            display = getUrlVars()['display'];
        }
        var updatedUrl = window.location.href;
        updatedUrl = updatedUrl.substring(0, updatedUrl.indexOf("?"));
        var str = "?k=&l=&pageNum=1&display=" + display;
        self.runJobSearch(updatedUrl + str);
        self.commuteTimeViewModel().clearControlData();
        return true;
    }

    function minutesToStr(minutes) {
        var sign = '';
        if (minutes < 0) {
            sign = '-';
        }

        var hours = Math.floor(Math.abs(minutes) / 60)
        var minutes = (Math.abs(minutes) % 60);

        return sign + hours + 'hrs ' + minutes + 'min';

    }

    function leftPad(number) {
        return ((number < 10 && number >= 0) ? '0' : '') + number;
    }

    self.displayCommuteTime = function(data)
    {
        if (data.DesiredCommuteTime != undefined && data.DesiredCommuteTime != null)
            return minutesToStr(data.DesiredCommuteTime);
        else
            return "";
    }

    self.onPageNoChange = function (data, event) {
        var currentPageNo = getUrlVars()['display'] != undefined ? getUrlVars()['display'] : getUrlVarFromString(_FilterCriteria)["display"];
        if (event != undefined && currentPageNo != self.itemsPerPageValue()) {
            if (_FilterCriteria != '') {
                var url = UpdateQueryString('display', self.itemsPerPageValue(), _FilterCriteria);
                url = UpdateQueryString('pagenum', '1', url);
                _FilterCriteria = url;

            } else {
                var url = UpdateQueryString('pagenum', '1', window.location.href);
                url = UpdateQueryString('display', self.itemsPerPageValue(), url);
            }
            self.runJobSearch(url);
        }
        return true;
    }

    self.GetParentName = function (data, element) {

        if (data != null) {

            if (data.FacetValueCode.toLowerCase() == 'cityfacet') {
                if (getUrlVars()["countrysubdivisionfacet"] != undefined) {
                    $('<span> > </span>').insertBefore(element);
                    return decodeURI(getUrlVars()["countrysubdivisionfacet"]).replace('|', '').replace('+', ' ');
                }
            }
            if (data.FacetValueCode.toLowerCase() == 'countrysubdivisionfacet') {
                if (getUrlVars()["countryfacet"] != undefined) {
                    $('<span> > </span>').insertBefore(element);
                    return decodeURI(getUrlVars()["countryfacet"]).replace('|', '').replace('+', ' ');
                }
            }

            return '';
        }

    }

    self.GetDefault = function () {
        var _default = 'default';
        var displayValue = '';
        $.each(self.jobResponse().SalaryDisplayOptions, function () {
            if (this.valueName == _default) {
                displayValue = this.keyName;
            }
        });
        return (($.trim(displayValue).length > 0) ? displayValue : 'Yearly');
    }

    self.testJobSearch = function () {
        $.ajax({
            type: "GET",
            url: "/AdeccoGroup.Global/api/Job/TestSearch/",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
            }
        });
    }

    self.paginateClick = function (data, event) {
        if (data.valueName.indexOf('salary') < 0) {
            self.minValue('');
            self.maxValue('');
        }
        var url = $(event.target).data('url');

        var domainName;

        if (typeof (window.location.origin) != 'undefined') {
            domainName = window.location.origin;
        } else {
            //Fix for IE, which does not support window.location.origin
            domainName = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }

        if (_FilterCriteria != '') {
            domainName = "http://" + window.location.host;
            _FilterCriteria = domainName + url;
        }
        self.runJobSearch(domainName + url);
        $('#ulpagination li a').each(function () {
            $(this).removeClass('active');
        });
        $(event.target).addClass('active');
        return false;
    }

    self.facetClick = function (data, event) {
        if ($(event.target).data('facettype') == 'salary') {
            self.minValue('');
            self.maxValue('');
        }
        var url = "";

         // If selected facet is a hyperlink
        if ($(event.target).is("a")) {
            url = $(event.target).attr("linkUrl");
        } else {
            if ($(event.target).prop('checked')) {
                url = $(event.target).data('checked');
            } else {
                url = $(event.target).data('unchecked');
            }
        }

        var windowOrigin;

        if (typeof (window.location.origin) != 'undefined') {
            windowOrigin = window.location.origin;
        } else {
            //Fix for IE, which does not support window.location.origin
            windowOrigin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }

        self.runJobSearch(windowOrigin + url);
        return true;
    }

    self.ChangeSalaryFrequency = function (data, event) {
        self.minValue('');
        self.maxValue('');
        var frequencyValue = data.valueName;
        var newUrl = removeURLParameter(window.location.href, 'salary');
        newUrl = UpdateQueryString('frequency', frequencyValue, newUrl);
        self.runJobSearch(newUrl);
        return true;
    }


    self.resetCommuteTeimeFilter = function () {
        var url = window.location.href;
        url = removeURLParameter(url, 'desiredcommutetime');
        url = removeURLParameter(url, 'timetostation');
        url = removeURLParameter(url, 'timetostationspecified');
        url = removeURLParameter(url, 'waysidestation');
        url = removeURLParameter(url, 'station');
        self.commuteTimeViewModel().clearControlData();
        self.CommuteSearchPerformed(false);
        self.runJobSearch(url);
    }

    //self.manageCommuteTimeReset = function () {
    //        return (getUrlVars()["DesiredCommuteTime"] != undefined);
    //}


    self.resetFacet = function (data, event) {
        var url = window.location.href;
        if (data.FacetValueCode.toLowerCase() == 'cityfacet') {
            url = removeURLParameter(url, 'countrysubdivisionfacet');
            url = removeURLParameter(url, 'countryfacet');
        }
        else if (data.FacetValueCode.toLowerCase() == 'countrysubdivisionfacet') {
            url = removeURLParameter(url, 'countryfacet');
        }

        self.runJobSearch(removeURLParameter(url, data.FacetValueCode.toLowerCase()));
    }

    self.manageReset = function (data, event) {
        if (data != undefined) {
            return (getUrlVars()[data.FacetValueCode] != undefined);
        }
    }

    self.rssUrl = function () {

        
        window.open(UpdateQueryString('rss', '1', window.location.href), '_blank', 'toolbar=no,location=no,menubar=no,resizable=yes,scrollbars=yes');
    }

    self.orderByAlphabetical = function (data) {
        sortingbyAlphabetical(data, 'ValueName');
        return data;
    }

    self.orderByCountDesc = function (data) {
        sortingbyCountDesc(data, 'ValueCount');
        return data;
    }

    self.displaySalary = function (data) {
        if (null != data && data != undefined && null != data.FacetValueCode && data.FacetValueCode != undefined) {
            if (data.FacetValueCode == 'salary') {
                return (getUrlVars()['salary'] == undefined);
            }
        }

        return true;
    }

    self.GetJobAlertFrequency = function () {

        $.ajax({
            type: "GET",
            url: "/AdeccoGroup.Global/api/Job/Frequency/",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                self.jobAlertFrequency(data);
            }
        });
    }

    self.GetMaxCount = function (data, maxFacet) {
        var maxCount = maxFacet;
        if (data != undefined && null != data) {
            jQuery.each(data, function (index, value) {
                if ($(this)[0].ValueChecked == '' && index > maxFacet) {
                    maxCount = index;
                } if ($(this)[0].SubCategories.length > 0 && $(this)[0].SubCategories[0].ValueChecked == '' && index > maxFacet) {
                    jQuery.each($(this)[0].SubCategories, function (sindex, svalue) {
                        if (svalue.ValueChecked == '' && index > maxFacet) {                          
                            maxCount = index + 1;
                        }
                    });
                }
            });
        }
        return maxCount;
    }

   

    self.dynamicSalary = function (data, event) {
        var url = "";

        var minVal = $('.minVal').val();
        var maxVal = $('.maxVal').val();

        if (parseInt(minVal) < parseInt(maxVal)) {
            var encodedParam = encodeURIComponent(minVal + ',' + maxVal + '|');
            var updatedUrl = UpdateQueryString('salary', encodedParam.toLowerCase(), window.location.href);
            updatedUrl = UpdateQueryString('pageNum', "1", updatedUrl);
        } else {
            $('.modal-backdrop').hide();
            $(".maxerrmsg").show().fadeOut(2500);
        }

        var str = updatedUrl.substring(updatedUrl.indexOf("?"));
        self.runJobSearch(updatedUrl);
        return true;
    }

    function change(state) {
        if (state === null) { // initial page
            $("div").text("Original");
        } else { // page added with pushState
            $("div").text(state.url);
        }
    }

    (function (original) { // overwrite history.pushState so that it also calls
        // the change function when called
        history.pushState = function (state) {
            change(state);
            return original.apply(this, arguments);
        };
    })(history.pushState);

    function sortingbyAlphabetical(json_object, key_to_sort_by, asc) {
        function sortByKey(a, b) {
            var x = a[key_to_sort_by].toLowerCase();
            var y = b[key_to_sort_by].toLowerCase();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        json_object.sort(sortByKey);
    }

    function sortingbyCountDesc(json_object, key_to_sort_by, asc) {
        function sortByKey(a, b) {
            var y = a[key_to_sort_by].toLowerCase();
            var x = b[key_to_sort_by].toLowerCase();
            return ((parseInt(x) < parseInt(y)) ? -1 : ((parseInt(x) > parseInt(y)) ? 1 : 0));
        }

        json_object.sort(sortByKey);
    }

    function sortingbyCheckedDesc(json_object, key_to_sort_by1, key_to_sort_by2, asc) {
        function sortByKey(a, b) {
            var x = a[key_to_sort_by].toLowerCase();
            var y = b[key_to_sort_by].toLowerCase();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        function mysortfunction(a, b) {

            var o1 = a[key_to_sort_by1].toLowerCase();
            var o2 = b[key_to_sort_by1].toLowerCase();

            var p1 = a[key_to_sort_by2].toLowerCase();
            var p2 = b[key_to_sort_by2].toLowerCase();

            if (p1 < p2) return -1;
            if (p1 > p2) return 1;
            return 0;

            if (parseInt(o1) != parseInt(o2)) {
                if (parseInt(o1) < parseInt(o2)) return 1;
                if (parseInt(o1) > parseInt(o2)) return -1;
                return 0;
            }
        }

        json_object.sort(mysortfunction);
    }

    Array.prototype.deepSortAlpha = function () {
        var itm, L = arguments.length, order = arguments;

        var alphaSort = function (a, b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a == b) return 0;
            return a > b ? 1 : -1;
        }
        if (!L) return this.sort(alphaSort);

        this.sort(function (a, b) {
            var tem = 0, indx = 0;
            while (tem == 0 && indx < L) {
                itm = order[indx];
                tem = alphaSort(a[itm], b[itm]);
                indx += 1;
            }
            return tem;
        });
        return this;
    }

    self.afterLoading = function (event, data) {
        if (data.FacetDisplayName == "Date") {
        }
    }


    self.createJobAlert = function (url) {
        $('.modal-backdrop').show();

        $.ajax({
            type: "GET",
            url: "/AdeccoGroup.Global/api/Job/CreateJobAlertModal/",
            data: { filterUrl: url, facetSettingId: _ItemName, currentLanguage: _CurrentLanguage },
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            cache: false,
            success: function (data) {
                self.jobResponse(data);
                $('.modal-backdrop').hide();
            }
        });
    }

    self.addTag = function (tag, Job, event) {

        if (tag == 'GOOD' && Job.IsGoodMatch == 'true')
            self.deleteTag(tag, Job, event);
        else if (tag == 'BAD' && Job.IsBadMatch == 'true')
            self.deleteTag(tag, Job, event);
        else {
            self.createTagtoJob(tag, Job, event);
        }
    }

    self.createTagtoJob = function (tag, Job, event) {
        var job = {
            JobId: Job.JobId,
            TagName: tag
        };
        $.ajax({
            type: "POST",
            url: "/AdeccoGroup.Global/api/Job/AddTagToJob/",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(job),
            success: function (data) {

                if (tag == 'SAVED') {
                    Job.IsSaved = 'true';
                    $(event.target).parent('a').siblings().show();
                    $(event.target).parent('a').hide();
                }
                if (tag == 'GOOD') {
                    Job.IsGoodMatch = 'true';
                    Job.IsBadMatch = 'false';
                    $(event.target).parent('a').addClass('active');
                    $(event.target).parents('ul').find('li a.vote-down').removeClass('active');
                }
                if (tag == 'BAD') {
                    Job.IsGoodMatch = 'false';
                    Job.IsBadMatch = 'true';
                    $(event.target).parent('a').addClass('active');
                    $(event.target).parents('ul').find('li a.vote-up').removeClass('active');
                }

            }
        });
    }

    self.deleteTag = function (tag, Job, event) {
        var job = {
            JobId: Job.JobId,
            TagName: tag
        };
        $.ajax({
            type: "POST",
            url: "/AdeccoGroup.Global/api/Job/DeleteTagFromJob/",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(job),
            success: function (data) {
                if (tag == 'GOOD')
                    Job.IsGoodMatch = 'false';
                if (tag == 'BAD')
                    Job.IsBadMatch = 'false';
                $(event.target).parent('a').removeClass('active');
            }
        });

    }

    self.isSSpEnabled = function () {
        var isEnabled = false;
        if (self.jobResponse() != null && (self.jobResponse().Items.length > 0) && self.jobResponse().Items[0].isSSPEnabled == 'true') {
            isEnabled = true;
        }
        return isEnabled;
    }

    self.getJobApplicationstatusMessage = function (data, element) {
        var strClass = "label-";
        switch (data.JobApplicationStatusId) {
            case "RECEIVED":
                strClass += "primary";
                break;
            case "REVIEW":
                strClass += "default";
                break;
            case "INTERVIEW":
                strClass += "warning";
                break;
            case "REJECT":
                strClass += "danger";
                break;
            case "PLACEMENT":
                strClass += "success";
                break;
            case "SUBMITTAL":
                strClass += "info ";
                break;
            default:
                strClass += "info";
                break; // currently shouldn't fall thru here per Ganesh 20140609
        }
        $(element).addClass(strClass);
        return data.JobApplicationStatusTitle;
    }

    //**** code for Job Alert Model Start here..Proceed with Caution:: ****//

    self.sendJobalert = function () {
        $('#email-jobs').find('input').each(function () { $(this).valid(); });
        if ($('#email-jobs').find('input').valid()) {
            var AlertData = {
                AlertName: $('#jobAlertNameInput').val(),
                JobAlertFrequencyId: $('#ddlFrequency').val(),
                FirstName: $('#jobAlertUserNameInput').val(),
                LastName: $('#jobAlertLastNameInput').val(),
                EmailAddress: $('#jobAlertUserEmailInput').val()
            };
            var url = window.location.href;
            var jobAlertDto = {
                filterUrl: url,
                facetSettingId: _ItemName,
                currentLanguage: _CurrentLanguage,
                AlertData: AlertData
            };

            $('#email-jobs').modal('hide');
            $.ajax({
                type: "POST",
                url: "/AdeccoGroup.Global/api/Job/SaveJobAlert/",
                data: JSON.stringify(jobAlertDto),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                cache: false,
                success: function (data) {
                    $('#jobAlertTerms').prop('checked', false);
                    
                }
            });
        }
    }

    self.paginationAfterRender = function (elemets, data) {
        var dataKeyName;
        if (_FilterCriteria == '') {
            dataKeyName = getUrlVars()['pagenum'];
        } else {
            dataKeyName = getUrlVarFromString(_FilterCriteria)['pagenum'];
        }
        if (data.keyName == dataKeyName) {
            $('#pagination' + data.keyName).addClass('active');
        }
    }
    $(document).on('hidden.bs.modal', '#email-jobs', function () {
        $('#email-jobs').find('input.alertElement').each(function () {
            $(this).val('').removeClass('error');
            $("span.error[for='" + this.id + "']").remove();
            $("span.error[for='" + this.name + "']").remove();
        });
    });

    $(document).on('blur', '.alertElement', function () {
        $(this).valid();
    });

    self.onFacetAccordionClick = function (accordionLink) {
        if (document.getElementById(accordionLink) != undefined) {
            alert(document.getElementById(accordionLink).id);
            document.getElementById(accordionLink).style.visibility = "visible";
        }
    }

}

function viewModelShortlistJobs(self) {

    self.shortlistedJobs = ko.observableArray();
    self.shortListItemsLength = ko.observable(_buckets.get('shortListJob') != undefined ? _buckets.get('shortListJob').length : 0);
    self.serviceCheck = ko.observable(self.shortListItemsLength() == 0 ? false : true);
    self.expiredJobsText = ko.observable(0);
    self.addshortlist = function (data, event) {
        var list = [];
        if (self.shortlistedJobs().length < MaxShortlistCount && self.shortListItemsLength() < MaxShortlistCount) {
            if (_buckets.get('shortListJob') != undefined) {
                $.each(_buckets.get('shortListJob'), function () {
                    list.push(this);
                });
                list.push(data);
                _buckets.deleteKey('shortListJob');
                if (_buckets.set('shortListJob', list, { TTL: '31536000000' })) {
                    self.shortlistedJobs.push(data);
                    self.shortListItemsLength(self.shortListItemsLength() + 1);
                    $(event.target).addClass('hide');
                    $(event.target).siblings('span.shortlisted').removeClass('hide');
                }
            } else {
                list.push(data);
                if (_buckets.set('shortListJob', list, { TTL: '31536000000' })) {
                    self.shortlistedJobs(list);
                    self.shortListItemsLength(self.shortListItemsLength() + 1);
                    $(event.target).addClass('hide');
                    $(event.target).siblings('span.shortlisted').removeClass('hide');
                }
            }
        } else {
            $('#ShortlistModal').modal('show');
            var shortlisted = '#' + this.JobId + ' span.shortlisted';
            var shortlist = '#' + this.JobId + ' a.sortlist-link';
            $('#lnkRemoveAdd').unbind('click').click(function () {
                if (self.shortlistedJobs().length != 0) {
                    $('#' + self.shortlistedJobs()[0].JobId + ' span.shortlisted').addClass('hide');
                    $('#' + self.shortlistedJobs()[0].JobId + ' a.sortlist-link').removeClass('hide');
                    self.shortlistedJobs.remove(self.shortlistedJobs()[0]);
                    self.shortlistedJobs.push(data);
                    _buckets.deleteKey('shortListJob');
                    _buckets.set('shortListJob', self.shortlistedJobs(), { TTL: 31536000000 });
                    $(shortlist).addClass('hide');
                    $(shortlisted).removeClass('hide');
                } else {
                    var jobid;
                    var newlist = _buckets.get('shortListJob').filter(function (val, key) {
                        if (key != 0) {
                            jobid = val.JobId;
                            return val;
                        }
                    });
                    $('#' + jobid + ' span.shortlisted').addClass('hide');
                    $('#' + jobid + ' a.sortlist-link').removeClass('hide');
                    $('#' + data.JobId + ' span.shortlisted').removeClass('hide');
                    $('#' + data.JobId + ' a.sortlist-link').addClass('hide');
                    newlist.push(data);
                    _buckets.deleteKey('shortListJob');
                    _buckets.set('shortListJob', newlist, { TTL: 31536000000 });
                }
                $('#ShortlistModal').modal('hide');
            });

        }
    }

    self.showorhideList = function () {
        if ($('#sort_listed').hasClass('hide')) {
            if (self.serviceCheck()) {
                self.getShortListedJobs();
                self.serviceCheck(false);
            } else {
                $('#sort_listed').removeClass('hide');
            }

        }
        else
            $('#sort_listed').addClass('hide');
    }

    self.removeShortListJob = function (shortListJob, event) {
        self.shortlistedJobs.remove(shortListJob);
        $('#' + shortListJob.JobId + ' span.shortlisted').addClass('hide');
        $('#' + shortListJob.JobId + ' a.sortlist-link').removeClass('hide');
        viewModel.shortListItemsLength(viewModel.shortListItemsLength() - 1);
        _buckets.deleteKey('shortListJob');
        if (self.shortlistedJobs().length > 0)
            _buckets.set('shortListJob', self.shortlistedJobs(), { TTL: 31536000000 }); // One Year

    }

    self.removeAllShortListJobs = function () {
        $.each(self.shortlistedJobs(), function () {
            $('#' + this.JobId + ' span.shortlisted').addClass('hide');
            $('#' + this.JobId + ' a.sortlist-link').removeClass('hide');
        });
        self.shortlistedJobs.removeAll();

        self.shortListItemsLength(0);
        _buckets.deleteKey('shortListJob');
    }

    self.getShortListedJobs = function () {
        var JobIdsList = [];

        if (_buckets.get('shortListJob') != undefined) {
            $.each(_buckets.get('shortListJob'), function () {
                JobIdsList.push(this.JobId);
            });
            $.ajax({
                type: "POST",
                url: "/AdeccoGroup.Global/api/Job/GetShortListedJobs/",
                data: JSON.stringify(JobIdsList),
                cache: false,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var sortedData = data.filter(function (value, key) {
                        if (value.JobStatusId.toLowerCase() == 'open') {
                            return value;
                        } else {
                            self.expiredJobsText(self.expiredJobsText() + 1);
                            self.shortListItemsLength(self.shortListItemsLength() - 1);
                        }
                    });

                    _buckets.deleteKey('shortListJob');
                    self.shortlistedJobs(sortedData);
                    _buckets.set('shortListJob', sortedData, { TTL: 31536000000 });
                    $('#sort_listed').removeClass('hide');
                }
            });
        }
    }

    self.afterjobLoad = function (elements, job) {
        if (job.isSSPEnabled == 'false') {
            if (_buckets.get('shortListJob') != undefined) {
                $.each(_buckets.get('shortListJob'), function () {
                    if (this.JobId == job.JobId) {
                        $('#' + job.JobId + ' a.sortlist-link').addClass('hide');
                        $('#' + job.JobId + ' span.shortlisted').removeClass('hide');
                    }
                });
            }
        }
    }
}

function isCatSelected(container) {

    //alert($("#" + container).attr('id') + " ===== " + $("#" + container).parent().find("input:checkbox").prop("checked"));

    //if (container != null) {
    //    if ($("#" + container).parent().find("input:checkbox") &&
    //        $("#" + container).parent().find("input:checkbox").hasClass("facetCheckbox") &&
    //        $("#" + container).parent().find("input:checkbox").prop("checked")
    //    )
    //        return true;
    //    else
    //        return false;
    //}
    return true;
}

function showMe(container) {
    if (container != null) {
        //$("#" + container).show();
        //alert(container);
        //alert(container.prop("id"));
        $("#" + container.prop("id").replace('facetAccordion', 'facetAccordionHeader')).show();
        //'facetAccordionFooter' + facet.FacetValueCode       
    }
}

firstBy = (function () { function e(f) { f.thenBy = t; return f } function t(y, x) { x = this; return e(function (a, b) { return x(a, b) || y(a, b) }) } return e })();