var CONTEXT_ROOT = "/docfind/";

var hostNameString = location.hostname;
		var brandingScript = document.createElement('link');
		if(hostNameString.indexOf("aetna.com") > -1){
				brandingScript.setAttribute('href','/dse/cms/codeAssets/images/faviconAetna.png');
		}
		else if(hostNameString.indexOf("myplanportal.com") > -1){
				brandingScript.setAttribute('href','#');
		}		
		brandingScript.setAttribute('rel','icon');
		document.head.appendChild(brandingScript);

/* link to mapquest translated url prior to sending which broke special chars.  added var to create and hold encoded value */	
var mapURL="";
var viewPlansURL="";
var dropdowns = new Array();
function sessionEnd()
{
	if(window.screenTop > 9000)
	{		
		window.document.frmendsession.submit();
		var d = new Date();
		
		while(1) 
		{
			var mill = new Date();

			if(mill - d > 500)
				break;
		}
	}
}

function chosePop(ddId)
{
	var to_DD = opener.document.getElementById(ddId);
	var from_DD = document.getElementById("dropdown");
	
	to_DD.value = from_DD.value;
	to_DD.name = from_DD.name;
	to_DD.fireEvent("onchange");
	window.close();
}

function additional_search_results()
{
	var windowName='cancel';
	var url='/docfind/additional_geo2.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}


function popUp(URL)
{
	var windowName='popup';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes,overflow=scroll';
	window.name='INDEX';	
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
}

function NetworkTransition(URL)
{
	if(window.location.protocol == "http:"){
		var windowName='popup';
		var winOpts = 'width=545,height=265,scrollbars=no,resizable=no,toolbar=yes';
		window.name='INDEX';
		aWindow=window.open(URL,windowName,winOpts);
		aWindow.focus();
	}
}

function NavigatorURL(URL)
{
	var myDomain = document.domain;	
	var NavDomain = "member.aetna.com";
	
	if (myDomain.substr(0,3) == "dev")
	{
		//adds dev# to NavDomain...
		NavDomain = myDomain.substr(0,4) + NavDomain;
	}
	else if(myDomain.substr(0,2) == "qa") 
	{
		//adds qa# to NavDomain...
		NavDomain = myDomain.substr(0,3) + NavDomain;
	}
	else if(myDomain == "localhost") 
	{
		//localhost - simulates qa - adds qa# to NavDomain...
		NavDomain = "qa2" + NavDomain;
	}
		
	parent.location.href = "https://" + NavDomain + URL;
}

function geoHelper()
{

	var myGeo1;
	window.name='INDEX';
	var windowName='popup';
	var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=no';
	/* Start 8390 :Find a city on search setting. Add in URL geoSrchRD.  Defect DEF0200578061 FIX*/
	var geoSrchRD = document.getElementById("geoSearchRD");		
	/* End 8390 */ 

	var URL = CONTEXT_ROOT + "rd/geoHelperMiddle.jsp?site_id=" + site_id + "&langpref=" + langpref + "&geoSearchRD=true";

 	if ( site_id === 'docfind' )
    	{
    		//site_id = 'docfindpublic';
		URL = CONTEXT_ROOT + "rd/geoHelperMiddle.jsp?site_id=docfindpublic&langpref=" + langpref + "&geoSearchRD=true";
    	}

	
//	var URL = CONTEXT_ROOT + "geoHelper.do?site_id=" + site_id + "&langpref=" + langpref;

	var tempObj = document.getElementById("advanced_search");
	
	for(var i=0; i < tempObj.geo1.length; i++)
	{
		if(tempObj.geo1[i].checked)
			myGeo1 = tempObj.geo1[i].value;
	}
	
	if(myGeo1 == "zip")
	{
		URL += "&state=";
	}
	else if (myGeo1 == "county")
	{
		var stateDD = document.getElementById("state");
		URL += "&type=county&state=" + stateDD.value;
	}
	else if (myGeo1 == "city")
	{
		var stateDD = document.getElementById("state");
		URL += "&type=city&state=" + stateDD.value;
	}

	var geoHelperMiddle = window.open(URL, windowName, winOpts);
	geoHelperMiddle.focus();
}

function zipType(obj)
{
	if(obj.value == "zipcity")
		show("gh_city_div","gh_inputs");
	else if(obj.value == "zipcounty")
		show("gh_county_div","gh_inputs");
	else
		hide("gh_inputs");
	
	return;
}

function geoGo()
{

	var type = document.getElementById("type");
	zipType(type);
	
	if(type.value == "city" || type.value == "county")
	{
		var state = document.getElementById("state");
		
		if(state.value != "")
		{
			var form = document.getElementById("geoHelperForm");
			form.submit();
		}
	}
	// 7111 changes for find a zip <start>
	var hctstates = document.getElementById("hctstates");
	if(type.value != null && type.value == "hctzip"  && hctstates.value != null){
		var state = document.getElementById("state");
		if(state.value != "")
		{
			var form = document.getElementById("geoHelperForm");
			form.submit();
		}
	}
	// 7111 changes for find a zip <start>

 //DEF0200250475 changes Start:13/03/2008
	populateState();
//DEF0200250475 changes end:13/03/2008		
}

function typeOfService(URL)
{
	var windowName='popup';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
	window.name='INDEX';
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
	
}

function datacorrection()
{
	var domRegistration = document.domain;
	var domDemographics = "";
	if (domRegistration.substr(0,3)=="dev")
	{
		domDemographics = "dev3www.aetna.com";
	}
	else if(domRegistration.substr(0,2)=="qa") 
	{
		domDemographics = "qa3www.aetna.com";
	}
	else if(domRegistration.substr(0,3)=="str")
	{
		domDemographics = "str2wwwr5.aetna.com";
	}
	else 
	{
		domDemographics = "www.aetna.com";
	}
	
	var windowName='popup';
	/*--- START CHANGES P23695 Medicare Spanish Translation - n596307 ---*/
	var url ;
	if(checkIfSpanishVersionRunning()){
		url = CONTEXT_ROOT + "/dse/cms/codeAssets/html/es/data_correction.html";
	}
	else{
		url = CONTEXT_ROOT + "data_correction.html";
	}
	/*--- END CHANGES P23695 Medicare Spanish Translation - n596307 ---*/
	var winOpts = 'width=700,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
	window.name='INDEX';
	aWindow=window.open(url,windowName,winOpts);
}

function contact_us()
{
	//var url= CONTEXT_ROOT + 'docfind_contact_us.html';
	var url='/dsepublicContent/assets/html/en/contact_us/contact-us.html';
	if(window.name == "popup")
	{
		location.href = url;
	}
	else
	{
		var windowName = "popup";
		var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
		
		aWindow = window.open(url, windowName, winOpts);
		aWindow.focus();
	}
}

/*--- START CHANGES P23695 Medicare Spanish Translation - n596307 ---*/
function contact_us_sp()
{
	var domRegistration = document.domain;
	var domDemographics = "";
	if (domRegistration.substr(0,4)=="dev2")
	{
		domDemographics = "dev2www.aetna.com";
	}
	else if (domRegistration.substr(0,4)=="dev3")
	{
		domDemographics = "dev3www.aetna.com";
	}
	else if (domRegistration.substr(0,3)=="dev")
	{
		domDemographics = "devwww.aetna.com";
	}
	else if(domRegistration.substr(0,3)=="qa2") 
	{
		domDemographics = "qa2www.aetna.com";
	}
	else if(domRegistration.substr(0,3)=="qa3") 
	{
		domDemographics = "qa3www.aetna.com";
	}
	else if(domRegistration.substr(0,2)=="qa") 
	{
		domDemographics = "qawww.aetna.com";
	}
	else if(domRegistration.substr(0,3)=="str")
	{
		domDemographics = "str2wwwr5.aetna.com";
	}
	else 
	{
		domDemographics = "www.aetna.com";
	}
	
	var url= 'http://' + domDemographics + '/dse/cms/codeAssets/html/es/docfind_contact_us.html';
	if(window.name == "popup")
	{
		location.href = url;
	}
	else
	{
		var windowName = "popup";
		var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
		
		aWindow = window.open(url, windowName, winOpts);
		aWindow.focus();
	}
}
/*--- End CHANGES P23695 Medicare Spanish Translation - n596307 ---*/

function help()
{
	var url= CONTEXT_ROOT + 'docfind_additional_information.html';

	if(window.name == "popup")
	{
		location.href = url;
	}
	else
	{
		var windowName = "popup";
		var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
		
		aWindow = window.open(url, windowName, winOpts);
		aWindow.focus();
	}
}

function goSpanish(myURL)
{
	var temp;
	var url;
	
	if((temp = myURL.indexOf(".htm")) != -1)
	{
		var filename = myURL.substring(myURL.lastIndexOf('/')+1);
		
		url = CONTEXT_ROOT + "custom/sp/" + filename;
	}
	else if((temp = myURL.indexOf("langpref")) != -1)
	{
		var tempEnd = myURL.indexOf("&", temp);
		if(tempEnd != -1)
		{
			//url = myURL.substring(0, temp) + "langpref=sp" + myURL.substring(tempEnd);
			url = myURL.replaceAll("langpref=en","langpref=sp");
		}
		else
		{
			url = myURL.substring(0, temp) + "langpref=sp";
		}
	}
	else if((temp = myURL.indexOf("?")) != -1)
	{
		url = myURL.substring(0, temp+1) + "langpref=sp&&" + myURL.substring(temp+1);
	}
	else
	{
		url = myURL + "?langpref=sp";
	}
	
	location.href = url;
}

function goEnglish(myURL)
{
	var temp;
	var url;
	
	if((temp = myURL.indexOf(".htm")) != -1)
	{
		var filename = myURL.substring(myURL.lastIndexOf('/')+1);
		
		url = CONTEXT_ROOT + filename;
	}
	else if((temp = myURL.indexOf("langpref")) != -1)
	{
		var tempEnd = myURL.indexOf("&", temp);
		
		if(tempEnd != -1)
		{
			//url = myURL.substring(0, temp) + "langpref=en" + myURL.substring(tempEnd);
			url = myURL.replaceAll("langpref=sp","langpref=en");
		}
		else
		{
			url = myURL.substring(0, temp) + "langpref=en";
		}
	}
	else if((temp = myURL.indexOf(".do?")) != -1)
	{
		url = myURL.substring(0, temp) + "langpref=en" + myURL.substring(temp + 11);
	}
	else
	{
		url = myURL + "?langpref=en";
	}
	
	location.href = url;
}

function hide_details(obj, num)
{
	var details = document.getElementById("details_" + num);
	details.style.display = 'none';
	obj.src = CONTEXT_ROOT + 'assets/images/plus.gif';
}

function show_details(obj, num)
{
	var details = document.getElementById("details_" + num);
	details.style.display = '';
	obj.src = CONTEXT_ROOT + 'assets/images/minus.gif';
}

function hct_hide_details(obj, num)
{
	var details = document.getElementById("details_" + num);
	details.style.display = 'none';
	obj.src = CONTEXT_ROOT + 'assets/images/plus.gif';
	
	var total = document.getElementById("total_" + num);
	total.style.display = 'block';
}

function hct_show_details(obj, num)
{
	var details = document.getElementById("details_" + num);
	details.style.display = '';
	obj.src = CONTEXT_ROOT + 'assets/images/minus.gif';
	
	var total = document.getElementById("total_" + num);
	total.style.display = 'none';
}

function clicked(obj, num)
{
	var temp = obj.src;
	var slash = temp.lastIndexOf("/");
	var img = temp.slice(slash+1);
	
	if(img == "minus.gif")
		hide_details(obj, num);
	else
		show_details(obj, num);
}

function HCTclicked(obj, num)
{
	var temp = obj.src;
	var slash = temp.lastIndexOf("/");
	var img = temp.slice(slash+1);
	
	if(img == "minus.gif")
		hct_hide_details(obj, num);
	else
		hct_show_details(obj, num);
}

function clickedAll(obj, start, end)
{
	var temp = obj.src;
	var slash = temp.lastIndexOf("/");
	var img = temp.slice(slash+1);
	
	var num;
	var details_img; 
		
	if(img == "minus.gif")
	{
		for(num = start; num <= end; num++)
		{
			details_img = document.getElementById("i" + num.toString());
			hide_details(details_img, num);
		}
	
		obj.src = CONTEXT_ROOT + 'assets/images/plus.gif';
	}
	else
	{
		for(num = start; num <= end; num++)
		{
			details_img = document.getElementById("i" + num.toString());
			show_details(details_img, num);
		}
	
		obj.src = CONTEXT_ROOT + 'assets/images/minus.gif';
	}
}

function HCTclickedAll(obj, start, end)
{
	var temp = obj.src;
	var slash = temp.lastIndexOf("/");
	var img = temp.slice(slash+1);
	
	var num;
	var details_img; 
		
	if(img == "minus.gif")
	{
		for(num = start; num <= end; num++)
		{
			details_img = document.getElementById("i" + num.toString());
			hct_hide_details(details_img, num);
		}
	
		obj.src = CONTEXT_ROOT + 'assets/images/plus.gif';
	}
	else
	{
		for(num = start; num <= end; num++)
		{
			details_img = document.getElementById("i" + num.toString());
			hct_show_details(details_img, num);
		}
	
		obj.src = CONTEXT_ROOT + 'assets/images/minus.gif';
	}
}

function selectSCDD(option, dropdown)
{	
	for(var i=0; i < dropdown.options.length; i++)
	{
		if(dropdown.options[i].value == option)
			dropdown.options[i].selected = true;
	}
}

function selectSCIN(option, input_field)
{	
	
	if( (option.indexOf("bean:write") > -1) )
	{
		input_field.value = "";
	}
	else 
	{
		input_field.value = option;
	}
}

function selectSCCB(value, checkbox)
{
	if(value == "Y")
	{
		checkbox.checked = true;
	}
}

function select_search_criteria(value, obj)
{
	var crit = document.getElementById(obj);

	if(crit.tagName == "SELECT")
	{
		selectSCDD(value, crit);
	}
	else if(crit.type == "text")
	{
		selectSCIN(value, crit);
	}
	else if(crit.type == "checkbox")
	{
		selectSCCB(value, crit);
	}
}

function hide(name)
{
	var node = document.getElementById(name);
	var divs = node.getElementsByTagName("div");
	
	for (var i = 0; i < divs.length; i++)
		divs[i].style.display = 'none';
}

function show(id, name)
{
	var node = document.getElementById(name);
	var divs = node.getElementsByTagName("div");
	
	for (var i = 0; i < divs.length; i++)
	{
		if (divs[i].id == id)
			divs[i].style.display = 'block';
		else
			divs[i].style.display = 'none';
	}
}

function showWithId(id)
{

	var node = document.getElementById(id);
	node.style.display = 'block';
}

function hideWithId(id)
{
	var node = document.getElementById(id);
	node.style.display = 'none';
}

function pickedZip(str)
{
	var obj = opener.document.getElementById("zipcode");
	obj.value = str;
	opener.checkAdditional();
	window.close();
}

function pickedCity(city, state)
{
	var cityObj = opener.document.getElementById("city");
	cityObj.value = city;
	opener.checkAdditional();
	
	var stateObj = opener.document.getElementById("state");
	selectSCDD(state, stateObj);
	opener.checkAdditional();
	
	window.close();
}

function pickedCounty(county, state)
{
	var countyObj = opener.document.getElementById("county");
	countyObj.value = county;
	opener.checkAdditional();
	
	var stateObj = opener.document.getElementById("state");
	selectSCDD(state, stateObj);
	opener.checkAdditional();
	
	window.close();
}

function copyright()
{
	var fulldate = new Date();
	var fullyear = fulldate.getFullYear();
	document.write("Copyright &copy; 2001-" + fullyear + "&nbsp;Aetna Inc.");
}

function footer()
{
	copyright();
	document.write("<br /><a class='footer_links' href='http://www.aetna.com/aboutaetna/aboutaetna.htm'>Company Information</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/privacy.html'>Web Privacy Statement</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/disclmr.html'>Legal Statement</a> &nbsp; | &nbsp;  <a class='footer_links' href='http://www.aetna.com/about/information_practices.html'>Privacy Notices</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/individuals-families-health-insurance/member-guidelines/member_disclosure.html'>Member Disclosure</a>");
}

function footer_sp()
{
	copyright();
	document.write("<br /><a class='footer_links' href='http://www.aetna.com/aboutaetna/aboutaetna.htm'>Información sobre la compañía</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/privacy.html'>Declaración de privacidad del sitio en Internet</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/disclmr.html'>Declaración legal</a> &nbsp; | &nbsp;  <a class='footer_links' href='http://www.aetna.com/about/information_practices.html'>Aviso de privacidad</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/individuals-families-health-insurance/member-guidelines/member_disclosure.html'>Divulgación de información para miembros</a>");

}

function footer_NDN()
{
	copyright();
	document.write("<br /><a class='footer_links' href='http://www.aetna.com/aboutaetna/aboutaetna.htm'>Company Information</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/privacy.html'>Web Privacy Statement</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/disclmr.html'>Legal Statement</a> &nbsp; | &nbsp;  <a class='footer_links' href='http://www.aetna.com/about/information_practices.html'>Privacy Notices</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/individuals-families-health-insurance/member-guidelines/member_disclosure.html'>Member Disclosure</a> &nbsp; | &nbsp; <a class='footer_links' href='https://www.aetna.com/legal-notices/nondiscrimination-notice.html'>Nondiscrimination Notice</a>");
}

function footer_NDNSpanish()
{
	copyright();
	document.write("<br /><a class='footer_links' href='http://www.aetna.com/aboutaetna/aboutaetna.htm'>Información sobre la compañía</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/privacy.html'>Declaración de privacidad del sitio en Internet</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/about/disclmr.html'>Declaración legal</a> &nbsp; | &nbsp;  <a class='footer_links' href='http://www.aetna.com/about/information_practices.html'>Aviso de privacidad</a> &nbsp; | &nbsp; <a class='footer_links' href='http://www.aetna.com/individuals-families-health-insurance/member-guidelines/member_disclosure.html'>Divulgación de información para miembros</a> &nbsp; | &nbsp; <a class='footer_links' href='https://www.aetna.com/legal-notices/nondiscrimination-notice-spanish.html'>Aviso de no discriminaci&#243;n</a>");

}

var urlProtocol = window.location.protocol;
if(urlProtocol != "https:"){
	function langAssistance(){
		
		document.write("<br /><div id='docfindLanguageAssistanceLinks' style='white-space: nowrap' > " +
				"<ul style='overflow-x:hidden; white-space:nowrap; height: 40px; width: 100%; overflow-y:hidden; padding-left: 00px;'>"+
				"<img src='/dse/cms/codeAssets/images/globe.png' alt=' ' /> " +
				"<li style='display:inline;'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Language Assistance: &nbsp;</a></li>" +
				"<li style='display:inline;' lang='es'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Espa&ntilde;ol</a></li> | " +
				"<li style='display:inline;' lang=' zh-Hant'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#20013;&#25991;</a></li> | " +
				"<li style='display:inline;' lang='vi'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Ti&#7871;ng Vi&#7879;t</a></li> | " +
				"<li style='display:inline;' lang='ko'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#54620;&#44397;&#50612;</a></li> | " +
				"<li style='display:inline;' lang='tl'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Tagalog</a></li> | " +
				"<li style='display:inline;' lang='ru'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;</a></li> | " +
				"<li style='display:inline;' lang='ar'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;</a></li> | " +
				"<li style='display:inline;' lang='ht'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Krey&ograve;l</a></li> | " +
				"<li style='display:inline;' lang='fr'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Fran&ccedil;ais</a></li> | " +
				"<li style='display:inline;' lang='pl'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Polski</a></li> | " +
				"<li style='display:inline;' lang='pt'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Portugu&ecirc;s</a></li> | " +
				"<li style='display:inline;' lang='it'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Italiano</a></li> | </br>" +
				"<li style='display:inline;' lang='de'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Deutsch</a></li> | " +
				"<li style='display:inline;' lang='ja'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#26085;&#26412;&#35486;</a></li> | " +
				"<li style='display:inline;' lang='fa'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#1601;&#1575;&#1585;&#1587;&#1740;</a></li> | " +
				"<nobr>Other Languages&hellip;</nobr></ul>" +
				"</div>");
	}
}
else{
	
	function langAssistance(){
		
		document.write("<br /><div id='docfindLanguageAssistanceLinks'> " +
				"<img src='/dse/cms/codeAssets/images/globe.png' alt=' ' /> " +
				"<a href='https://www.aetna.com/individuals-families/contact-aetna/member-information-in-other-languages.html'> " +
				"<span>Language Assistance: &nbsp;</span><span lang='es'>Espa&ntilde;ol</span> | " +
				"<span lang=' zh-Hant'>&#20013;&#25991;</span> | <span lang='vi'>Ti&#7871;ng Vi&#7879;t</span> | " +
				"<span lang='ko'>&#54620;&#44397;&#50612;</span> | <span lang='tl'>Tagalog</span> | " +
				"<span lang='ru'>&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;</span> | " +
				"<span lang='ar'>&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;</span> | <span lang='ht'>Krey&ograve;l</span> | " +
				"<span lang='fr'>Fran&ccedil;ais</span> | <span lang='pl'>Polski</span> | <span lang='pt'>Portugu&ecirc;s</span> | " +
				"<span lang='it'>Italiano</span> | <span lang='de'>Deutsch</span> | <span lang='ja'>&#26085;&#26412;&#35486;</span> | " +
				"<span lang='fa'>&#1601;&#1575;&#1585;&#1587;&#1740;</span> | <nobr>Other Languages&hellip;</nobr></a></div>");
	}
}


/*function langAssistance_sp(){
	
	document.write("<br /><div id='docfindLanguageAssistanceLinks'> " +
			"<img src='/dse/cms/codeAssets/images/globe.png' alt='Language Assistance' /> " +
			"<a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'> " +
			"<span>Language Assistance: &nbsp;</span><span lang='es'>Espa&ntilde;ol</span> | " +
			"<span lang=' zh-Hant'>&#20013;&#25991;</span> | <span lang='vi'>Ti&#7871;ng Vi&#7879;t</span> | " +
			"<span lang='ko'>&#54620;&#44397;&#50612;</span> | <span lang='tl'>Tagalog</span> | " +
			"<span lang='ru'>&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;</span> | " +
			"<span lang='ar'>&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;</span> | <span lang='ht'>Krey&ograve;l</span> | " +
			"<span lang='fr'>Fran&ccedil;ais</span> | <span lang='pl'>Polski</span> | <span lang='pt'>Portugu&ecirc;s</span> | " +
			"<span lang='it'>Italiano</span> | <span lang='de'>Deutsch</span> | <span lang='ja'>&#26085;&#26412;&#35486;</span> | " +
			"<span lang='fa'>&#1601;&#1575;&#1585;&#1587;&#1740;</span> | <nobr>Other Languages&hellip;</nobr></a></div>");
}*/

/* This is Take Survey message   */ 
function surveyMessage()
{
	var windowName='popup';
	var url='/docfind/surveyMessage.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
	window.name='INDEX';
	aWindow=window.open(url,windowName,winOpts);
}

/* This is  alert timer   */
function alertTime2(){
var windowName='popup';
var hash = getUrlVars();
var version = hash['langpref'];

if (version == "sp"){
			
			var url='/docfind/custom/sp/timer.html';
	
	}
	else{
					var url='timer.html';

		}

var winOpts = 'width=300,height=300,scrollbars=yes,resizable=no';
window.name='INDEX';
aWindow=window.open(url,windowName,winOpts);
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{    
	var vars = [], hash; 
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	    {       
	     hash = hashes[i].split('='); 
	      vars.push(hash[0]);
	      vars[hash[0]] = hash[1]; 
	     } 
	      return vars;
}

var myBrowser = navigator.appName;
function alertTime()
	{
		if(myBrowser == "Netscape")
		{
			alertTime2()
		}
		else if(document.docform.print_top.disabled == false || document.docform.print_bottom.disabled == false)
		{
			alertTime2()
		}
	}
	
function viewplans(URL)
{
	var windowName='popup';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
	window.name='INDEX';
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
}
/* This is Aexcel notes */ 
function learn_more_aexcel(){
var windowName='cancel';
var url='/docfind/docfind_additional_information_aexcel.html';
var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
window.name='MAINWINDOW';
aWindow=window.open(url,windowName,winOpts);
}

/* This is Nap Message  */ 
function napMessage(){
var windowName='cancel';
var url='/docfind/napMessage.html';
var winOpts = 'width=600,height=325,resizable=yes,scrollbars=no';
window.name='MAINWINDOW';
aWindow=window.open(url,windowName,winOpts);
}
/* This is Epay  */ 
function epay()
{
	var windowName='cancel';
	var url='/docfind/epay.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

/* This is Mass notes */ 
function mass1()
{
	var windowName='cancel';
	var url='/docfind/mass_1.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

function mass2()
{
	var windowName='cancel';
	var url='/docfind/mass_2.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

function mass3()
{
	var windowName='cancel';
	var url='/docfind/mass_3.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

function mass4()
{
	var windowName='cancel';
	var url='/docfind/mass_4.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

function mass5()
{
	var windowName='cancel';
	var url='/docfind/mass_5.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

// GeoHelper Function for Find A City link in quick search 
function geoHelperQuick()
{
	var myGeo1;
	window.name='INDEX';
	var windowName='popup';
	var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=no';
	
	var URL = CONTEXT_ROOT + "rd/geoHelperMiddle.jsp?site_id=" + site_id + "&langpref=" + langpref + "&product=ALL"+"&flag=Q"+"&ctype=quickcity";
	var tempObj = document.getElementById("advanced_search_quick");

/* DEF0200207083 Defect Fix <start> */
	var stateDD = document.getElementById("stateQuick");
	URL += "&type=city&state=" + stateDD.value;

/* DEF0200207083 Defect Fix <end> */

	var geoHelperMiddle = window.open(URL, windowName, winOpts);
	geoHelperMiddle.focus();
}

function pickedCityQuick(city, state)
{
	var cityObj = opener.document.getElementById("cityQuick");
	cityObj.value = city;
	
	var stateObj = opener.document.getElementById("stateQuick");
	selectSCDD(state, stateObj);
	
	window.close();
}
// End changes for 7361b

//Start Changes for 7111
function geoHelperProc()
{	
	window.name='INDEX';
	var windowName='popup';
	var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=no';

	var stateDD = document.getElementById("state");
	
	var URL = CONTEXT_ROOT + "rd/geoHelperMiddle.jsp?site_id=" + site_id + "&langpref=" + langpref;
	URL += "&state=" + stateDD.value;
	URL += "&hctstates=Y&first=Y";
	var geoHelperMiddle = window.open(URL, windowName, winOpts);
	geoHelperMiddle.focus();
}

function hctUrlAppend(){
	document.forms[1].action="HCTHome.do?site_id=navigator&navZipcode="+navZipcode;
	document.forms[1].submit();
}

function showFPT(){
	document.forms[1].action="FPTHome.do?site_id=navigator&navZipcode="+navZipcode+"&hctProductCode="+hctProductCode+"&svcLocationId="+svcLocationId+"&inOutPatientInd="+inOutPatientInd+"&navNetworkId="+navNetworkId+"&keyProcType="+keyProcType+"&selectedfac="+selectedfac+"&product="+product;
	document.forms[1].submit();
}
function procHelper(){
	window.name='INDEX';
	var windowName='popup';
	var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=no';
	var URL = "ProcHelper.do?site_id=" + site_id + "&langpref=" + langpref + "&selectedproc=" + selectedproc;
	var procHelper = window.open(URL, windowName, winOpts);
	procHelper.focus();
}

function additional_info(){
var windowName='cancel';
var url='/docfind/custom/navigator/additionalInfo.html';
var winOpts = 'width=650,height=525,scrollbars=yes,resizable=yes';
window.name='MAINWINDOW';
aWindow=window.open(url,windowName,winOpts);
}

function costOfCareFPT(){ 
	location.href = 'https://member.aetna.com/member/MemberWeb?serviceName=tmpl&pg=takeActionHealthCostofCare';
}

function selectedProcName(str){
	var currentValue = document.forms[0].selectedproc.options[document.forms[0].selectedproc.selectedIndex].text;
	var index=currentValue.indexOf("Inpatient");
	if(index!=-1);
	else
	index=currentValue.indexOf("Outpatient");

	var procname=currentValue.substring(0,index);
	//var formObj = document.getElementById("selectedprocname");
	//alert(formObj.value);
	document.forms[0].selectedprocname.value=procname;
	//formObj.value = procname;
}


//End Changes for 7111
// start changes for defect: DEF0200208879

function OpenNavigator(){

	window.close();
	var url= 'https://member.aetna.com/MbrLanding/login.fcc';
	var windowName = "AetnaNavigator";
	var winOpts = 'width=850,height=525,scrollbars=yes,resizable=yes,toolbar=yes,location=yes,menubar=yes,status=yes';
	
	aWindow = window.open(url, windowName, winOpts);	
	aWindow.focus();
}
// End changes for defect: DEF0200208879

// Start changes for defect: DEF0200212620
function NavigatorURLQuickSearch(URL)
{
	var myDomain = document.domain;	
	var NavDomain = "www.aetna.com";
	
	if (myDomain.substr(0,3) == "dev")
	{
		//adds dev# to NavDomain...
		NavDomain = myDomain.substr(0,4) + NavDomain;
	}
	else if(myDomain.substr(0,2) == "qa") 
	{
		//adds qa# to NavDomain...
		NavDomain = myDomain.substr(0,3) + NavDomain;
	}
	else if(myDomain == "localhost") 
	{
		//localhost - simulates qa - adds qa# to NavDomain...
		NavDomain = "qa2" + NavDomain;
	}
		
	location.href = "http://" + NavDomain + URL;
}
// End changes for defect: DEF0200212620

//	Start change for DEF0200223646
function additional_error_message(){
var windowName='cancel';
var url='/docfind/additional_error_message.html';
var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
window.name='MAINWINDOW';
aWindow=window.open(url,windowName,winOpts);
}
//	End change for DEF0200223646

//	Start change for DEF0200222853
function siteIDForward(langpref)
{
	//var URL = "/docfind/home.do?langpref="+langpref;
	
	var URL = document.URL;
	var siteID = document.getElementById("site_id");
	
	//Fix for DEF0200401497 starts
		
	/*if(siteID != null && siteID != "")
	{
		URL = URL + "&site_id=" + siteID.value;
	}*/
	if (langpref == 'en'){
		URL = URL.replace("langpref=sp", "langpref=en");
	}
	else{
		URL = URL.replace("langpref=en", "langpref=sp");
	}
	//Fix for DEF0200401497 ends
	
	location.href = URL;
}
//	End change for DEF0200222853

function checkMiles(loadInd)
{
	if(document.getElementById('scdd_miles').value > 0)
	{
		showWithId("sortByLabel_div");
		showWithId("sortBy_div");
		if(loadInd!=null && loadInd!="load")
		{
			document.getElementById("scdd_sortBy").value = "dist";
		}
	}
	else
	{
		hideWithId("sortByLabel_div");
		hideWithId("sortBy_div");
		if(loadInd!=null && loadInd!="load")
		{
			document.getElementById("scdd_sortBy").value = "name";
		}
	}
}
//DEF0200250475 changes Start:13/03/2008
function populateState()
{
	
	var stateObj = document.getElementById("state");
	if(state != null)
		selectSCDD(state, stateObj);
	
	var cityObj = document.getElementById("city");
	
	if(city != null)
		{
		  selectSCIN(city, cityObj);
	}
	
	 var countyObj = document.getElementById("county");
    	  if (county !=null){    	  
          	  selectSCIN(county, countyObj);	  	
   }
}
//DEF0200250475 changes end:13/03/2008
function additional_pin_search(){
	var windowName='cancel';
	var url='/docfind/docfind_additional_pin_search.html';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(url,windowName,winOpts);
}

/* This is Preferred Lab  */ 
function preferredLab(){
var windowName='cancel';
var url='/docfind/preferredLab.html';
var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
window.name='MAINWINDOW';
aWindow=window.open(url,windowName,winOpts);
}

/* This is Nap Message 2  */ 
function napMessage2(){
var windowName='cancel';
var url='/docfind/napMessage2.html';
var winOpts = 'width=600,height=325,resizable=yes,scrollbars=no';
window.name='MAINWINDOW';
aWindow=window.open(url,windowName,winOpts);
}

function buildSite_ID(url){
var obj = document.getElementById('site_id');
var objLang = document.getElementById('langpref');
var urlTemp = CONTEXT_ROOT + "pinHome.do?";
var URL = urlTemp + "site_id="+ obj.value + "&langpref="+ objLang.value +"&pinSearchInd=Y";
var windowName='popup';
var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=yes,status=yes,menubar=yes,location=yes';
aWindow = window.open(URL, windowName, winOpts);
aWindow.focus();

}

function smallPopUp(URL)
{
	var windowName='Smallpopup';
	var winOpts = 'width=500,height=425,scrollbars=yes,resizable=yes,toolbar=yes';
	window.name='INDEX';
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
}
function replaceSpecialCharacter(TS_Q9_Text){
var replaceCharacter = TS_Q9_Text;
var replacedCharacter = replaceCharacter.replace(/;/g," ");
replacedCharacter = replacedCharacter.replace(/,/g," ");
document.getElementById("TS_Q9_Text").value = replacedCharacter;
return;
}

function focusCodes(URL)
{
	var windowName='popup';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes';
	window.name='INDEX';
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
	
}

/* Start P8390a Changes */
function populateSummaryDropdowns(geoType,geoStr,state,miles,search_cat,product)
{
	createIndexSummary("",search_cat,"",product);
	/* Language Dropdown */
	if(search_cat != "walkin" && search_cat != "pharmacy" && search_cat != "eyewear" && search_cat != "urgent" && search_cat != "ipacal" && search_cat != "ntp" && search_cat != "labs" && search_cat != "dialysislocal" && search_cat != "opp" && search_cat != "hospitals")
		fillDropdownSumm(search_cat, "language", "summary_language_div", product);
	
	/* Prog and Recog Dropdown */
	if(search_cat == "pcp")
		fillDropdownSumm(search_cat, "provflag", "summary_progRecog_div",product);
	else if(search_cat == "spec")
		fillDropdownSumm(search_cat, "provflag", "summary_progRecog_div",product);
	else if(search_cat == "phys_bhp")
		fillDropdownSumm(search_cat, "provflag", "summary_progRecog_div",product);
	else if(search_cat == "opp")
		fillDropdownSumm("opp", "hospflag", "summary_progRecog_div",product);
	else if(search_cat == "urgent")
		fillDropdownSumm(search_cat, "hospflag", "summary_progRecog_div",product);
	else if(search_cat == "walkin")
		fillDropdownSumm(search_cat, "hospflag", "summary_progRecog_div",product);
	else if(search_cat == "labs")
		fillDropdownSumm(search_cat, "hospflag", "summary_progRecog_div",product);		
	else if(search_cat == "dialysis" || search_cat == "dialysislocal")
		fillDropdownSumm(search_cat, "hospflag", "summary_progRecog_div",product);		
	else if(search_cat == "hospitals")
		{
		fillDropdownSumm(search_cat, "hospflag", "summary_progRecog_div",product);
		}	
	else if(search_cat == "ac" || search_cat == "ar" || search_cat == "da" || search_cat == "dmeloc" || search_cat == "ha" || search_cat == "hs" || search_cat == "mri" || search_cat == "pt" || search_cat == "rc" || search_cat == "sk" || search_cat == "hstp" || search_cat == "sd")
		fillDropdownSumm("facilities", "hospflag", "summary_progRecog_div",product);
	
	/* Hospital Affiliation dropdown */
	if(search_cat != "dental" && search_cat != "pharmacy" && search_cat != "eyewear" && search_cat != "walkin" && search_cat != "ipacal" && search_cat != "urgent" && search_cat != "ntp" && search_cat != "labs" && search_cat != "dialysislocal" && search_cat != "opp" && search_cat != "hospitals")
		fillHospitalAffiliationSumm("summary_hospitalAff_div",geoType,geoStr,state,miles,search_cat,product);
}

function fillHospitalAffiliationSumm(section,geoType,geoStr,state,miles,search_cat,product)
{
	getHospitalAffiliationSumm("summary_hospitalAff_div",geoType,geoStr,state,miles,search_cat,product);
}

function getHospitalAffiliationSumm(section,geoType,geoStr,state,miles,search_cat,product)
{
	var dddiv = document.getElementById(section);
	xmlHttp=GetXmlHttpObjectSumm();
	if(xmlHttp==null)
		return;
	var site_id = "docfind";
	var langpref = "en";
	var myURL = createURLFromInputSumm(geoType,geoStr,state,miles,search_cat,product);
	var url = "/docfind/HospitalAffiliation.do?" + myURL + "&site_id=" + site_id + "&langpref=" + langpref + "&servReq=HOSPDD";
	xmlHttp.onreadystatechange = function()
	{
		if (xmlHttp.readyState == 4)
		{
			dddiv.innerHTML = xmlHttp.responseText;
		}
	}

	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function GetXmlHttpObjectSumm()
{
	var xmlHttp=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

/*function createURLFromInputSumm(geoType,geoStr,state,miles,search_cat,product)
{
	var tempObj ;
	var geo1 = geoType;
	var URL = "";
	URL +=( "&geo1=" + geo1);
	
	if(geo1 == "zip")
	{
		URL += ("&zipcode=" + geoStr);
		URL += ("&miles=" + miles);

	}
	else if(geo1 == "city")
	{
		URL += ("&city=" + geoStr);
		URL += ("&state=" + state);
	}
	else if(geo1 == "county")
	{
		URL += ("&county=" + geoStr);
		URL += ("&state=" + state);
	}
	
	URL += ("&search_cat=" + search_cat);
	URL += ("&product=" + product);
	return URL;

}*/

/*function createGeoSummary(str)    
{		
	if(str == "zip")
	{
		show("text_zip_div", "geo_type_label_section");
		show("input_zip_div", "geo_type_input_section");
		show("text_distance_div", "geo_attr_label_section");
		show("input_distance_div", "geo_attr_input_section");
	}
	else if(str == "city") 
	{
		show("text_city_div", "geo_type_label_section");
		show("input_city_div", "geo_type_input_section");
		show("text_state_div", "geo_attr_label_section");
		show("input_state_div", "geo_attr_input_section");
	}
	else if(str == "county")
	{
		show("text_county_div", "geo_type_label_section");
		show("input_county_div", "geo_type_input_section");
		show("text_state_div", "geo_attr_label_section");
		show("input_state_div", "geo_attr_input_section");
	}
	checkAdditionalSummary(str);
}*/

/*function fillDropdownSumm(search_cat, dropdown, section, product)
{
	var dddiv = document.getElementById(section);
	var stored_dropdown = getStoredDropdownName(product, search_cat, dropdown);
	getDropdownSumm(product, search_cat, dropdown, stored_dropdown);
	var last = dropdowns.length - 1;
	dddiv.innerHTML = createDropdownSumm(search_cat, dropdown, dropdowns[last]);
}*/

/*function getDropdownSumm(product_code, search_cat, dropdown, stored_dropdown)
{
	var site_id = "docfind";
	xmlHttp=GetXmlHttpObjectSumm();
	if(xmlHttp==null)
		return;
	var url = "/docfind/rd/dropdowns.jsp?site_id=" + site_id + "&search_cat=" + search_cat + "&dropdown=" + dropdown + "&product_code=" + product_code;
	xmlHttp.open("GET", url, false);
	xmlHttp.onreadystatechange = function()
	{
		if (xmlHttp.readyState == 4)
		{
			handleDropdownSumm(stored_dropdown, xmlHttp.responseText);
		}
	}
	xmlHttp.send(null);
	//Firefox - handles synchronous data when onreadystatechange is bypassed
	if(window.XMLHttpRequest)
	{
		handleDropdownSumm(stored_dropdown, xmlHttp.responseText);
	}
}

function createDropdownSumm(search_cat, dropdown, dropdown_options)
{
	var temp = "";
	var dropdown_str = search_cat + "." + dropdown;
	if(( (search_cat == "facilities") || (search_cat == "urgent") || (search_cat == "walkin") || (search_cat == "labs") || (search_cat == "dialysis")) && dropdown == "hospflag")
	{
		temp += "<select class=\"form_dropdown\" id=\"facilities_hospflag\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
		return temp;
	}
	if(dropdown == "provflag")
	{
		temp += "<select class=\"form_dropdown\" id=\"" + getAdditionalSection(search_cat) + "_provflag\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown == "hospflag")
	{
		temp += "<select class=\"form_dropdown\" id=\"" + getAdditionalSection(search_cat) + "_hospflag\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown == "language")
	{
		temp += "<select class=\"form_dropdown\" id=\"" + getAdditionalSection(search_cat) + "_language\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "pcp.pcp_prctc_cd")
	{
		temp += "<select class=\"form_dropdown_rd\" id=\"medical_pcp_prctc_cd\" onchange=\"makeDirty(this)\")>" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "spec.spec_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"medical_spec_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "phys_bhp.pcp_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"phys_bhp_pcp_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "phys_bhp.spec_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"phys_bhp_spec_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "bhp.spec_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"bhp_spec_prctc_cd\" onchange=\"limitSpecialties(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "dpcp.pcp_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"dental_pcp_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "dspec.spec_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"dental_spec_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "dall.pcp_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"dall_pcp_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "dall.spec_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"dall_spec_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "opp.spec_prctc_cd")
	{
		temp += "<select class=\"form_dropdown\" id=\"opp_spec_prctc_cd\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "mh_facility.level_care" || dropdown_str == "sa_facility.level_care" || dropdown_str == "rtf_facility.level_care")
	{
		temp += "<select class=\"form_dropdown\" id=\"bhh_level_care\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "mh_facility.age_range" || dropdown_str == "sa_facility.age_range" || dropdown_str == "rtf_facility.age_range")
	{
		temp += "<select class=\"form_dropdown\" id=\"bhh_age_range\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	else if(dropdown_str == "mh_facility.type_service" || dropdown_str == "sa_facility.type_service" || dropdown_str == "rtf_facility.type_service")
	{
		temp += "<select class=\"form_dropdown\" id=\"bhh_type_service\" onchange=\"makeDirty(this)\">" + dropdown_options + "</select>";
	}
	return temp;
}

function handleDropdownSumm(stored_dropdown, responseText)
{
	names.push(stored_dropdown);
	dropdowns.push(responseText);
}*/

function geoHelperSummary(myGeo1)
{
	var site_id = "docfindpublic";
	var langpref = "en";
	//var myGeo1;
	window.name='INDEX';
	var windowName='popup';
	var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=no';
	/* Start 8390 :Find a city on search setting. Add in URL geoSrchRD.  Defect DEF0200578061 FIX*/
	var URL = CONTEXT_ROOT + "rd/geoHelperMiddle.jsp?site_id=" + site_id + "&langpref=" + langpref+"&geoSearchRD=false";
	/* end 83990*/
//	var URL = CONTEXT_ROOT + "geoHelper.do?site_id=" + site_id + "&langpref=" + langpref;
	var tempObj = document.getElementById("summary_search_results");
	/*for(var i=0; i < tempObj.geo1.length; i++)
	{
		if(tempObj.geo1[i].checked)
			myGeo1 = tempObj.geo1[i].value;
	}*/
	if(myGeo1 == "zip")
	{
		URL += "&state=";
	}
	else if (myGeo1 == "county")
	{
		var stateDD = document.getElementById("state1");
		URL += "&type=county&state=" + stateDD.value;
	}
	else if (myGeo1 == "city")
	{
		var stateDD = document.getElementById("state1");
		URL += "&type=city&state=" + stateDD.value;
	}

	var geoHelperMiddle = window.open(URL, windowName, winOpts);
	geoHelperMiddle.focus();
}

function pickedZipSummary(str)
{
	var obj1 = opener.document.getElementById("zipcode1");
	obj1.value = str;
	opener.checkAdditionalZipSummary();
	window.close();
}

function pickedCitySummary(city, state)
{
	var cityObj = opener.document.getElementById("city1");
	cityObj.value = city;
	opener.checkAdditionalSummary();
	
	var stateObj = opener.document.getElementById("state1");
	selectSCDD(state, stateObj);
	opener.checkAdditionalSummary();
	
	window.close();
}

function pickedCountySummary(county, state)
{
	var countyObj = opener.document.getElementById("county1");
	countyObj.value = county;
	opener.checkAdditionalSummary();
	
	var stateObj = opener.document.getElementById("state1");
	selectSCDD(state, stateObj);
	opener.checkAdditionalSummary();
	window.close();
}

/* Start changes done for pin search P08-8390a */
function buildSite_IDNewUI(siteid1, langpref1){
//var obj = document.getElementById('site_id');
//var objLang = document.getElementById('langpref');
var urlTemp = CONTEXT_ROOT + "pinHome.do?";
//var URL = urlTemp + "site_id=docfind&langpref=en&pinSearchInd=Y"; 
var URL = urlTemp + "site_id="+ siteid1 + "&langpref="+ langpref1 +"&tabKey=pinsearchtab&pinSearchInd=Y";
var windowName='popup';
var winOpts = 'width=600,height=350,scrollbars=yes,resizable=yes,toolbar=yes,status=yes,menubar=yes,location=yes';
aWindow = window.open(URL, windowName, winOpts);
aWindow.focus();
}

/* End changes done for pin search P08-8390a */

/* End P8390a Changes */


/*Start changes for SR 1282 May 2012
 * 
#Resource_Type_Infosys_Offshore
#Resource_ID_N302708
*/
/* PDF printing Popup window */


function pdfPopUp()
{
	var  getButtonStatus = "";
	if(myBrowser == "Netscape")
	{
		getButtonStatus = pdfPopUp2();
	}
	else if(document.docform.print_top.disabled == false || document.docform.print_bottom.disabled == false)
	{
		getButtonStatus = pdfPopUp2();
	}
	
	
}

function pdfPopUp2(){
	var windowName='popup';
	var hash = getUrlVars();
	var version = hash['langpref'];

	if (version == "sp"){
				
				var url='/docfind/custom/sp/PDFPopUP.html';
		
		}
		else{
						var url='PDFPopUP.html';

			}

	var winOpts = 'width=300,height=300,scrollbars=yes,resizable=no';
	window.name='INDEX';
	aWindow = window.open(url,windowName,winOpts);
	aWindow.focus();
	
	
}
/* End changes for SR 1282 May 2012 */
/*Start SR1326 Aug13 changes*/
function popUpLeapFrog(URL)
{
	var windowName='popup';
	var winOpts = 'width=800,height=600,scrollbars=yes,resizable=yes,toolbar=yes,overflow=scroll';
	window.name='INDEX';	
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
}

function popUpLeapFrogHtml(URL)
{
	var windowName='popup';
	var winOpts = 'width=600,height=310,scrollbars=yes,resizable=yes,toolbar=yes,overflow=scroll';
	window.name='INDEX';	
	aWindow=window.open(URL,windowName,winOpts);
	aWindow.focus();
}
/*End SR1326 Aug13 changes*/