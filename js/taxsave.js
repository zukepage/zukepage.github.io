
function separaterwindow(strdata)

{

   var url_tax = "test.htm";

   CL_windd = window.open(url_tax,'ash1','scrollbars=yes,toolbar=no,menubar=no,resizable=yes,height=600,width=700','replace');


   CL_windd.focus();

   

}



function calculate_taxsave()

{

var tesss="ttttt";

 CL_win_taxsave=window.open("",'ash1','scrollbars=yes,toolbar=no,menubar=no,resizable=yes,height=600,width=700','replace');

	 CL_win_taxsave.document.open();
	 CL_win_taxsave.document.write('<input type="button" name="B1" onClick="window.print();" value="Print">');

	 CL_win_taxsave.focus();

	 

var amount;

var yr

var mon;

var roi;

var tenure;

var reset;

var tax;

tenure=parseFloat(document.getElementById("TaxSaving1_txt_tenure").value,10)*12;

amount=parseFloat(document.getElementById("TaxSaving1_txt_amount").value,10);

yr=parseFloat(document.getElementById("yr").options[document.getElementById("yr").selectedIndex].value,10);

mon=parseFloat(document.getElementById("mon").options[document.getElementById("mon").selectedIndex].value,10);

roi=parseFloat(document.getElementById("TaxSaving1_txt_roi").value,10)/1200;

reset=parseFloat(document.getElementById("sel3").options[document.getElementById("sel3").selectedIndex].value,10);

tax=parseFloat(document.getElementById("sel4").options[document.getElementById("sel4").selectedIndex].value,10)/100;

var emi=(amount*12*roi*(Math.pow( (roi*reset+1),tenure/reset))) /((Math.pow((1+roi*reset),tenure/reset) - 1)*12);

var k=(1+roi*reset);

var n=0;



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

CL_win_taxsave.document.write('<body bgcolor=#ffffff' + bgc + '>')

CL_win_taxsave.document.write('<P><TABLE border=1 cellPadding=1 cellSpacing=0 width=100%><TR><TD align=center><font face=verdana size=2><b>Year</b></font></TD><TD><font face=verdana size=2><b>Principal Paid</b></font></TD><TD><font face=verdana size=2><b>Interest Paid</b></font></TD><TD><font face=verdana size=2><b>Tax saved on Principal</b></font></TD><TD><font face=verdana size=2><b>Tax saved on Interest</b></font></TD><TD><font face=verdana size=2><b>Total Tax Saved</b></font></TD></TR>')



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

CL_win_taxsave.document.write('<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(plast-p) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>')



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

CL_win_taxsave.document.write('<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(plast-p) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>')



plast=p;

cinterest+=interest;

cprincipal+=principal;

interest=0;

principal=0;

cyr+=1;

intr=0;

} while(p>1)

CL_win_taxsave.document.write('</table>')

}



else

{

var plast=amount;

n=12;

var p=amount*Math.pow(k,n/reset)-(emi*reset)*(Math.pow(k,n/reset)-1)/(k-1);

var pemi=0;

if((plast-p)!=0) 

{

pemi=(plast-p)/12;

}



var iemi=emi-pemi

var prin=0;



for(i=mon;i<13;i++)

{

		if (interest<100000) interest+=iemi;

		intr+=iemi;

		if (principal<20000) principal+=pemi;

		prin+=pemi;

}



interest=Math.min(interest,100000);

principal=Math.min(principal,20000);

CL_win_taxsave.document.write('<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(prin) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>')



cinterest+=interest;

cprincipal+=principal;

interest=0;

principal=0;

cyr+=1;

intr=0;

prin=0;



do

{

	for(i=1;i<mon;i++)

	{

	if (interest<100000) interest+=iemi;

	intr+=iemi;

	if (principal<20000) principal+=pemi;

	prin+=pemi;

	if(p<1) i=13



	}

interest=Math.min(interest,100000);

principal=Math.min(principal,20000);

plast=p

n+=12;

p=amount*Math.pow(k,n/reset)-(emi*reset)*(Math.pow(k,n/reset)-1)/(k-1);

pemi=(plast-p)/12

iemi=emi-pemi



	if(plast>10)

	{



		for(i=mon;i<13;i++)

		{

		if (interest<100000) interest+=iemi;

		intr+=iemi;

		if (principal<20000) principal+=pemi;

		prin+=pemi;

		}

	}

interest=Math.min(interest,100000);

principal=Math.min(principal,20000);

CL_win_taxsave.document.write('<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(prin) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>')



cinterest+=interest;

cprincipal+=principal;

interest=0;

principal=0;

cyr+=1;

intr=0;

prin=0;

} while(p>1)



if(mon>1)

{

for(i=1;i<mon;i++)

	{

	if (interest<100000) interest+=iemi;

	intr+=iemi;

	if (principal<20000) principal+=pemi;

	prin+=pemi;

	}

interest=Math.min(interest,100000);

principal=Math.min(principal,20000);

cinterest+=interest;

cprincipal+=principal;

CL_win_taxsave.document.write('<TR><TD align=center><font face=verdana size=2>'+ cyr + '-' + Math.round(cyr+1) + '</font></TD><TD ><font face=verdana size=2>' + Math.round(prin) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(intr) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2) + '</font></TD><TD ><font face=verdana size=2>' +Math.round(interest*tax) + '</font></TD><TD ><font face=verdana size=2>'+ Math.round(principal*0.2 +interest*tax)+ '</font></TD></TR>')



}

CL_win_taxsave.document.write('</table>')

CL_win_taxsave.document.write('<table><tr><td><font face=verdana size=2><b>Total Tax Saving: Rs. '+Math.round(cprincipal*0.2+cinterest*tax)+'<b></td></tr></table>')

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

	if(!document.getElementById("TaxSaving1_txt_amount").value || parseFloat(document.getElementById("TaxSaving1_txt_amount").value)<=0)

	{

		alert('Loan amount should be greater than 0');

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

	if(!document.getElementById("TaxSaving1_txt_roi").value || parseFloat(document.getElementById("TaxSaving1_txt_roi").value)<0||parseFloat(document.getElementById("TaxSaving1_txt_roi").value)>36)

	{

		alert('Tax Rate of interest should be between 0 and 35');

		document.getElementById("TaxSaving1_txt_roi").focus();

		return false;

	}

	return true;

}