/****** Adecco File upload Settings ***********
***************************************/

$(document).ready(function() {
// validation on file upload
     $('.pnlCustomFileUpload input[type=file]').change(function() {
    var breakOut = false;
          $('.pnlCustomFileUpload input[type=file]').each(function() {
     var filename = $(this).val().split('\\').pop();
     if(filename!=''){
      if(/.*\.(doc)|(docx)|(rtf)|(pdf)$/.test(filename.toLowerCase())) {
      
      }else {
      breakOut = true;
     }
     } 
  
     if(breakOut){
     alert('Please upload pdf or word file');
     $('.pnlCustomFileUpload input[type=file]').val('');
     return false;
     }
      });
   
   var f = this.files[0]

        //here I CHECK if the FILE SIZE is bigger than 3 MB (numbers below are in bytes)
        if ( f!=undefined && ( f.size > 3145728 || f.fileSize > 3145728))
        
  {
           //show an alert to the user
           alert("File exceeds size limit and cannot be submitted.Files must be 3 MB or less.")

           //reset file upload control
           this.value = null;
        }
     
     });
     $('.conventional-upload input[type=file]').after("<span style='clear:both; display:block; padding-top:10px; font-style:normal;'>Your documents must be less than 3 MB and in <strong>.doc, .docx, .pdf</strong> formats.</span>")
});

