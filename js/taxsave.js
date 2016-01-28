
function separaterwindow(strdata)

{

   var url_tax = "test.htm";

   CL_windd = window.open(url_tax,'ash1','scrollbars=yes,toolbar=no,menubar=no,resizable=yes,height=600,width=700','replace');


   CL_windd.focus();

   

}

function inrFormat(nStr) { // nStr is the input string
     nStr += '';
     x = nStr.split('.');
     x1 = x[0];
     x2 = x.length > 1 ? '.' + x[1] : '';
     var rgx = /(\d+)(\d{3})/;
     var z = 0;
     var len = String(x1).length;
     var num = parseInt((len/2)-1);
 
      while (rgx.test(x1))
      {
        if(z > 0)
        {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        else
        {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
          rgx = /(\d+)(\d{2})/;
        }
        z++;
        num--;
        if(num == 0)
        {
          break;
        }
      }
     return x1 + x2;
 }


function calculate_taxsave()

{

var tesss="ttttt";

 /**CL_win_taxsave=window.open("",'ash1','scrollbars=yes,toolbar=no,menubar=no,resizable=yes,height=600,width=700','replace');

	 CL_win_taxsave.document.open();**/
	// CL_win_taxsave.document.write('<input type="button" name="B1" onClick="window.print();" value="Print">');

//	 CL_win_taxsave.focus();
var chart=document.getElementById("income")
chart.innerHTML="";
mychart.clear();
mychart.destroy();
document.getElementById("info").style.display="block";	
document.getElementById("tb1").innerHTML="";
document.getElementById("tb1").style.display="none";
document.getElementById("sg").disabled = false;
document.getElementById("st").disabled = false;
var html = '<table>';
	 

var amount;

var yr

var mon;

var roi;

var tenure;

var reset;

var tax;

var yrinc;

var tottaxinc;

tenure=parseFloat(document.getElementById("TaxSaving1_txt_tenure").value,10)*12;

amount=parseFloat(document.getElementById("TaxSaving1_txt_amount").value,10);

yr=parseFloat(document.getElementById("yr").options[document.getElementById("yr").selectedIndex].value,10);

mon=parseFloat(document.getElementById("mon").options[document.getElementById("mon").selectedIndex].value,10);

roi=parseFloat(document.getElementById("TaxSaving1_txt_roi").value,10)/1200;

reset=1;

yrinc=parseFloat(document.getElementById("tai").value,10);

var emi=(amount*12*roi*(Math.pow( (roi*reset+1),tenure/reset))) /((Math.pow((1+roi*reset),tenure/reset) - 1)*12);

var k=(1+roi*reset);

var n=0;



//Bar graph calculation

var totintpay = 0;

var tottaxpay = 0;

var taxwithoutloan = 0; 

var taxwithloan = 0;

if (yrinc>0 && yrinc<250000){
	alert("Sorry, You are not eligible for Home loan tax deduction. Have a nice day!");
	return 0;
}
else if(yrinc>250000 && yrinc<500000){
	tax = 11/100;
	tottaxinc = yrinc*tenure;
	taxwithoutloan = ((yrinc-250000)*0.1)*(tenure/12);
}
else if(yrinc>500000 && yrinc<1000000){
	tax = 21/100;
	tottaxinc = yrinc*tenure;
	taxwithoutloan = (25000+((yrinc-500000)*0.2))*(tenure/12);
}
else{
	tax = 31/100;
	tottaxinc = yrinc*tenure;
	taxwithoutloan = (125000+((yrinc-1000000)*0.3))*(tenure/12);
}


if( reset==12)

{



}

else

{

n=12- mon + 1

var p=amount;



}



var cyr=parseFloat(document.getElementById("yr").options[document.getElementById("yr").selectedIndex].text,10);

if(mon>9)

{

cyr-=1;

}

var interest=0;

var principal=0;

var cprincipal=0;

var cinterest=0;

var intr=0;

plast=p;

var bgc='';

//CL_win_taxsave.document.write('<body bgcolor=#ffffff' + bgc + '>')

//CL_win_taxsave.document.write('<P><TABLE border=1 cellPadding=1 cellSpacing=0 width=100%><TR><TD align=center><font face=verdana size=2><b>Year</b></font></TD><TD><font face=verdana size=2><b>Principal Paid</b></font></TD><TD><font face=verdana size=2><b>Interest Paid</b></font></TD><TD><font face=verdana size=2><b>Tax saved on Principal</b></font></TD><TD><font face=verdana size=2><b>Tax saved on Interest</b></font></TD><TD><font face=verdana size=2><b>Total Tax Saved</b></font></TD></TR>')

html +='<body bgcolor=#ffffff' + bgc + '>';

html +='<P><TABLE border=1 cellPadding=1 cellSpacing=0 width=100%><TR><TD align=center><font face=verdana size=2><b>Year</b></font></TD><TD><font face=verdana size=2><b>Principal Paid</b></font></TD><TD><font face=verdana size=2><b>Interest Paid</b></font></TD><TD><font face=verdana size=2><b>Tax saved on Principal</b></font></TD><TD><font face=verdana size=2><b>Tax saved on Interest</b></font></TD><TD><font face=verdana size=2><b>Total Tax Saved</b></font></TD></TR>';


if(reset==1)

{

for(i=mon;i<13;i++)

{



if (interest<100000) interest+=p*(roi);

intr+=p*roi;

if (principal<20000) principal+=(emi-p*(roi));

p=p-(emi-p*(roi))

if(p<1) i=13



}

interest=Math.min(interest,100000);

principal=Math.min(principal,20000);

html +='<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(plast-p) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>';

totintpay += Math.round(intr);
tottaxpay += Math.round(principal*0.2 +interest*tax);

plast=p;

cinterest+=interest;

cprincipal+=principal;

interest=0;

principal=0;

cyr+=1;

intr=0;

do

{

for(i=1;i<13;i++)

{



if (interest<100000) interest+=p*(roi);

intr+=p*roi;

if (principal<20000) principal+=(emi-p*(roi));

p=p-(emi-p*(roi))

if(p<1) i=13



}

interest=Math.min(interest,100000);

principal=Math.min(principal,20000);

html +='<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(plast-p) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>';

totintpay += Math.round(intr);
tottaxpay += Math.round(principal*0.2 +interest*tax);

plast=p;

cinterest+=interest;

cprincipal+=principal;

interest=0;

principal=0;

cyr+=1;

intr=0;

} while(p>1)

html +='</table>';
html +='<table><tr><td><font face=verdana size=2><b>Total Tax Saving: Rs. '+Math.round(cprincipal*0.2+cinterest*tax)+'<b></td></tr></table>';
//alert(totintpay+amount);  //total loan repayment ammount
//alert(totintpay); //total intesrest payable
//alert(tottaxpay); //total tax saved payable
$("#tb1").append(html);
taxwithloan = taxwithoutloan-tottaxpay; //tax paid with home loan
graph(taxwithoutloan,taxwithloan);
document.getElementById("twthl").innerHTML=inrFormat(taxwithoutloan);
document.getElementById("twhl").innerHTML=inrFormat(taxwithloan);
document.getElementById("tts").innerHTML=inrFormat(tottaxpay);
                   


}


}




var viewHide;

if (document.layers) {

visible = 'show';



hidden = 'hide';



} else if (document.all) {



visible = 'visible';



hidden = 'hidden';



}




function check_taxsave(fld,typ)

{

if(typ=="int")

{

	if(isNaN(fld.value))

	{

	alert('Please enter a Number in the given field');

	fld.focus();

	}

}

}



function display_taxsave(viewShow) {



if (document.layers) {



content = document.layers[viewShow];



} else if (document.all) {



}



}



function validate_taxsave()

{

	if(!document.getElementById("TaxSaving1_txt_amount").value || parseFloat(document.getElementById("TaxSaving1_txt_amount").value)<1000000)

	{

		alert('Loan amount should be between 999999 & 20000000');


		document.getElementById("TaxSaving1_txt_amount").focus();

		return false;

	}

	if(!document.getElementById("TaxSaving1_txt_tenure").value || parseFloat(document.getElementById("TaxSaving1_txt_tenure").value)<=0)

	{

		alert('Tenure should be greater than 0');

		document.getElementById("TaxSaving1_txt_tenure").focus();

		return false;

	}

	if(!document.getElementById("TaxSaving1_txt_roi").value || parseFloat(document.getElementById("TaxSaving1_txt_roi").value)<=0)

	{

		alert('Rate of interest should be greater than 0');

		document.getElementById("TaxSaving1_txt_roi").focus();

		return false;

	}

	if(!document.getElementById("tai").value || parseFloat(document.getElementById("tai").value)<50000)

	{

		alert('Tax Rate of interest should be between 50000 and 50000000');

		document.getElementById("tai").focus();

		return false;

	}

	return true;

}

function graph(arg1,arg2){
	    // bar chart data
	    document.getElementById("income").innerHTML=" ";
	    var randomColorGenerator = function () { 
                            return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
                                };
	    var taxwithoutloan=arg1;
	    var taxwithloan=arg2;
            var barData = {
                labels : ["Tax Without Loan","Tax With Home Loan"],
                datasets : [
                    {
                        //fillColor : "#48A497",
                        strokeColor : randomColorGenerator(),
                        pointColor : randomColorGenerator(),
                        pointStrokeColor : randomColorGenerator(),
                        barValueSpacing : 10,
                        highlightFill: randomColorGenerator(),
                        highlightStroke: randomColorGenerator(),
                        barStrokeWidth : 5,
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        barValueSpacing : 10,
                        data : [taxwithoutloan,taxwithloan]
                    }
                    
                ]
            }

            var step  = 500000;
			var max   = taxwithloan+500000
			var start = 100000;
            // get bar chart canvas
            var income = document.getElementById("income").getContext("2d");
            // draw bar chart
            mychart=new Chart(income).Bar(barData,  {
			scaleOverride: true,
			scaleSteps: Math.ceil((max-start)/step),
			scaleStepWidth: step,
			scaleStartValue: start
			});
			mychart.datasets[0].bars[0].fillColor = "#1285C2";
            mychart.datasets[0].bars[1].fillColor = "#EF701F";
            mychart.update();

}