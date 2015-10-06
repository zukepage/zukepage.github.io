function viewModelRecentlyViewedJobs(self , key) {
    self.recentlyViewJobids = ko.observableArray(_buckets.get(key) != undefined ? _buckets.get(key) : null);
    self.recentlyViewJobs = ko.observable();

    var jobIdsList = [];

    if (_buckets.get(key) != undefined) {
        $.each(_buckets.get(key), function () {
            jobIdsList.push(this);
        });
        if (parseInt(jobIdsList.length) > parseInt(_maxRecentViewedJobs)) {
            var i = parseInt(jobIdsList.length) - parseInt(_maxRecentViewedJobs);
            jobIdsList = jobIdsList.filter(function(val, key) {
                if (key + 1 > i) {
                    return val;
                }
            });
            //jobIdsList.splice(0, (parseInt(jobIdsList.length) - parseInt(_maxRecentViewedJobs)));
        }

        _buckets.deleteKey(key);
        _buckets.set(key, jobIdsList, { TTL: 31536000000 });

        if (jobIdsList.length > 0) {
            $.ajax({
                type: "POST",
                url: "/AdeccoGroup.Global/api/Job/GetRecentViewedJobs/",
                data: JSON.stringify(jobIdsList),
                cache: false,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    self.recentlyViewJobs({ 'Items': data });
                }
            });
        }
    }
}

