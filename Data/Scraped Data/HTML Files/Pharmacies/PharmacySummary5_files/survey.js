function exitDocFind(search_cat, plan)
{	
	
	if(search_cat == "bhp"||search_cat == "mh_facility"||search_cat == "sa_facility")
	{
		//takeBHSurvey();
	}		
	
	else if(plan == "RMPPO")
	{
		//takeBHSurvey();
	}
	
	else
	{
		//takeDocFindSurvey();
	} 
	
	
}

function takeBHSurvey()
{
	var BHCount = readCookie("BHCount");
	
	if(BHCount != null)
	{	
		if (BHCount < 3)
		{		
			BHCount++;
			popSurvey("/docfind/survey/takeBHSurvey.html");
			createCookie("BHCount", BHCount, 30);
		}
	}
	else
	{
		createCookie("BHCount", 1, 30);
		popSurvey("/docfind/survey/takeBHSurvey.html");
	}
}

function takeDocFindSurvey()
{
	var DFCount = readCookie("DFCount");
	
	if(DFCount != null)
	{
		if (DFCount < 3)
		{
			popSurvey("/docfind/survey/takeDocFindSurvey.html");
			
			DFCount++;
			createCookie("DFCount", DFCount, 10);
		}
	}
	else
	{
		createCookie("DFCount", 1, 10);
		popSurvey("/docfind/survey/takeDocFindSurvey.html");
	}
}

function popSurvey(URL)
{
	var winOpts = "width=350,height=180,scrollbars=no,resizable=no";
	window.name = "MAINWINDOW";
	aWindow = window.open(URL,"survey",winOpts);
}

function goSurvey(URL)
{
	var winOpts = 'width=650,height=500,scrollbars=yes,resizable=yes';
	window.name='MAINWINDOW';
	aWindow=window.open(URL,'survey',winOpts);			
}
	
function createCookie(name, value, days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else
	{
		var expires = "";
	}
	
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
	var results = document.cookie.match (name + '=(.*?)(;|$)');

 	if (results)
		return (unescape (results[1]));
	else
		return null;
}

function eraseCookie(name)
{
	createCookie(name, "", -1);
}