		var hostNameString = location.href;
		var brandingScript = document.createElement('link');
		

		if(hostNameString.indexOf("site_id=innovationhealthmdcr") > -1){
				brandingScript.setAttribute('href','/dsepublicContent/assets/images/favicon/faviconInnova.png');
          		document.title = "Innovation Health";
		}
		else if(hostNameString.indexOf("site_id=texashealthaetna") > -1){
				brandingScript.setAttribute('href','/dsepublicContent/assets/images/favicon/THRFavicon.png');
          		document.title = "Aetna";
		}
		else if(hostNameString.indexOf("site_id=banneraetna") > -1){
				brandingScript.setAttribute('href','/dsepublicContent/assets/images/favicon/banner_favicon.png');
          		document.title = "Aetna";
		}
		else if(hostNameString.indexOf("site_id=allinahealthaetnamdcr") > -1){
				brandingScript.setAttribute('href','/dsepublicContent/assets/images/favicon/faviconAllina.png');
          		document.title = "Allina Health";
		}
		else if(hostNameString.indexOf("site_id=sutterhealthaetna") > -1){
				brandingScript.setAttribute('href','/dsepublicContent/assets/images/favicon/faviconSutter.png');
          		document.title = "Aetna";
		}
		else{
			brandingScript.setAttribute('href','images/faviconAetna.png');
          	document.title = "Aetna";
		}
		brandingScript.setAttribute('rel','icon');
		document.head.appendChild(brandingScript);