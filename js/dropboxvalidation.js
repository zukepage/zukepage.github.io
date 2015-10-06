//Dropbox scripts - START

options = {

    // Required. Called when a user selects an item in the Chooser.
    success: function (files) {

        // INC3025877 Issue File upload Validation For Modis
        if (typeof getCookie("modis.us#lang") != "undefined") {
            if (files[0].bytes > 3145728) {
                alert("File exceeds size limit and cannot be submitted.Files must be 3 MB or less.");
                //reset file upload control
                return false;
            }
        }
        //End Validation
        document.getElementById("hdnDownloadink").value = files[0].link;

        document.getElementById("hdnFilename").value = files[0].name;

        //display selected filename on front
        document.getElementById("lblFilename").innerHTML = document.getElementById("hdnFilename").value;
        document.getElementsByClassName('scfCustomFileUploadBox')[0].value = document.getElementById("hdnFilename").value;
        
        //cleaning up fupConventionalFileUpload (file upload) value
        document.getElementById(document.getElementById("hdnFupConventionalFileUploadId").value).value = null;

        //cleaning up LinkedIn value
        if (document.getElementById("lnkDownload") != null) {
            document.getElementById("lnkDownload").baseURI = null;
            document.getElementById("lnkDownload").innerText = null;
            document.getElementById("lnkDownload").innerHTML = null;
        }
    },

    // Optional. Called when the user closes the dialog without selecting a file
    // and does not include any parameters.
    cancel: function () {

    },

    // Optional. "preview" (default) is a preview link to the document for sharing,
    // "direct" is an expiring link to download the contents of the file. For more
    // information about link types, see Link types below.
    linkType: "direct", // or "direct"

    // Optional. A value of false (default) limits selection to a single file, while
    // true enables multiple file selection.
    multiselect: false, // or true

    // Optional. This is a list of file extensions. If specified, the user will
    // only be able to select files with these extensions. You may also specify
    // file types, such as "video" or "images" in the list. For more information,
    // see File types below. By default, all extensions are allowed.
    extensions: ['.DOC', '.DOCX', '.RTF', '.PDF', '.TXT', '.HTML', '.ODT', '.WPD'],
};

//Dropbox scripts - END
