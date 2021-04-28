var add = true;

var show_additional = null;

var ptID = null;

var productID = null;

var dirty = new Array();

var show_specialty = null;

var specID = null;

var pin = null;

var npi = null;

var pinSearchType = null;

var provType = null;

// Arrays that store information for dropdowns

var names = new Array();

var dropdowns = new Array();

var urlProtocol = window.location.protocol;

/* PCR C-13227 - EAP/BH changes March 2012 Start */

$('document')
		.ready(
				function() {
					jQuery('body')
							.prepend(
									"<div id='forFirstFocus' tabindex='-1' style='position: absolute; left: -1000px;'><a id='toHoldFocus'>To hold focus</a></div>"
											+ "<div  id='skipToMainContent'  name='skipToMainContent'><a href='javascript:;' tabindex='0' id='anchorForSkip'>Skip to main content</a></div>");
					$('#skipToMainContent')
							.click(
									function() {
										if (window.location.href
												.indexOf("home.do?") > -1) {
											var tabKey = $.getUrlVar('tabKey');
											if (tabKey != null
													&& tabKey == 'tab2') {
												$('#provider_category').focus();
											} else {
												$('#provider_type_section')
														.focus();
											}
											$('body,html').clearQueue();
										} else if (window.location.href
												.indexOf("provSummarySearch.do?") > -1) {
											$('#arrowImage').focus();
											$('body,html').clearQueue();

										} else if (window.location.href
												.indexOf("provDetailSearch.do?") > -1) {
											$('#forFocusDetails').focus();
											$('body,html').clearQueue();
										}

									});

					populateUrlParameters();
					var site_id = $.getUrlVar('site_id');
					var langpref = $.getUrlVar('langpref');
					if (site_id == "advplans") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							document.getElementById("index_image_rd").innerHTML = "";
						} else {
							document.getElementById("index_image_rd").innerHTML = "<img alt='AARP Logo' src='/docfind/custom/advplans/images/aarp_essential_ph_logo.jpg' class='header_images'>";
						}
					}
					if (site_id == "mymeritain") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=mymeritain";
						}
					}

					if (site_id == "meritus") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=meritus";
						}
					}

					if (site_id == "innovationhealth") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=innovationhealth";
						}
					}

					if (site_id == "chooseandsave") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=chooseandsave";
						}
					}

					if (site_id == "ivlplans") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=ivl";
						}
					}

					if (site_id == "pasadenaisd") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=pasadenaisd";
						}
					}

					if (site_id == "cityofsanangelo") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=cityofsanangelo";
						}
					}

					if (site_id == "trscare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=trscare";
						}
					}

					if (site_id == "TRS_ActiveCare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=trsactivecare";
						}
					}

					if (site_id == "TRS_ActiveCare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=trsactivecare";
						}
					}

					if (site_id == "Nordstrom") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=nordstrom";
						}
					}

					if (site_id == "Nordstrom") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=nordstrom";
						}
					}


					if (site_id == "nyl") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "http://www.nylbenefits.com";
						}
					}

					if (site_id == "nyl") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "http://www.nylbenefits.com";
						}
					}
					if (site_id == "erika") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=erika";
						}
					}

					if (site_id == "fox") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=foxcorporation";
						}
					}

					if (site_id == "fox") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=foxcorporation";
						}
					}

					if (site_id == "thedowchemicalcompany") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=thedowchemicalcompany";
						}
					}

					if ((site_id == "AetnaInc") && langpref != "sp") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=aetnainc";
						}

						var y = urlIvlplans.indexOf("/home.do");
						if (y != -1) {
							location.href = "/dse/search?site_id=aetnainc";
						}
					}
					if (site_id == "provider") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=provider";
						}
					}
					if (site_id == "awca") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=awca";
						}
					}
					if (site_id == "chop") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=chop";
						}
					}

					if (site_id == "united") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=united";
						}
					}
					if (site_id == "spe") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/docfind/custom/sony";
						}

						var y = urlIvlplans.indexOf("/home.do");
						if (y != -1) {
							location.href = "/docfind/custom/sony";
						}
					}
					if (site_id == "freescale") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/docfind/custom/nxp";
						}

						var y = urlIvlplans.indexOf("/home.do");
						if (y != -1) {
							location.href = "/docfind/custom/nxp";
						}
					}

					if (site_id == "passport") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=passport";
						}
					}

					if (site_id == "sony") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=sony";
						}
					}

					if (site_id == "avp") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=avp";
						}
					}

					if (site_id == "bn") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=bn";
						}
					}

					if (site_id == "aahc") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						var y = urlIvlplans.indexOf("/home.do")
						if ( x != -1 || y != -1 ) {
							location.href = "/dse/search?site_id=avp";
						}
					}

					if (site_id == "passportapn") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=passportapn";
						}
					}

					if (site_id == "sw") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=sw";
						}
					}

					if (site_id == "hca") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=hca";
						}
					}

					if (site_id == "bombardier") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=bombardier";
						}
					}

					if (site_id == "alaskacare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=alaskacare";
						}
					}

					if (site_id == "amex") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=amex";
						}
					}

					if (site_id == "bshsi") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=bshsi";
						}
					}

					if (site_id == "allstate") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=allstate";
						}
					}

					if (site_id == "ioeioq") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=dse";
						}
					}

					if (site_id == "qhpd") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=QualifiedHealthPlanDoctors";
						}
					}

					if (site_id == "nxp") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=nxp";
						}
					}

					if (site_id == "fehbp") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=fehbp";
						}
					}

					if (site_id == "vanguard") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=vanguard";
						}
					}

					if (site_id == "vitalsavingsbyaetna") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=DirectLinkDental&externalPlanCode=DAPPO|Aetna_Dental_Access_Vital_Savings_by_Aetna_Network";
						}
					}

					if (site_id == "dell") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "https://www.aetnaresource.com/n/dell-microsite";
						}
					}

					if (site_id == "dell") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "https://www.aetnaresource.com/n/dell-microsite";
						}
					}

					if (site_id == "vitalsavings") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=DirectLinkDental&externalPlanCode=DAPPO|Aetna_Dental_Access_Vital_Savings_by_Aetna_Network";
						}
					}

					if (site_id == "mtb") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "https://www.aetnaresource.com/14883/mtb";
						}
					}

					if (site_id == "mtb") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "https://www.aetnaresource.com/14883/mtb";
						}
					}

					if (site_id == "hcrmanorcare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "http://www.aetnaresource.com/14784/hcr-manorcare";
						}
					}

					if (site_id == "hcrmanorcare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "http://www.aetnaresource.com/14784/hcr-manorcare";
						}
					}

					if (site_id == "ascenaretailgroup") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=DirectLink&externalPlanCode=ACPMC|Aetna_Choice_POS_II_Open_Access";
						}
					}
					if (site_id == "ascenaretailgroup") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=DirectLink&externalPlanCode=ACPMC|Aetna_Choice_POS_II_Open_Access";
						}
					}

					if (site_id == "rhagroup") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=rhagroup";
						}
					}

					if (site_id == "rhagroup") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=rhagroup";
						}
					}
					if (site_id == "advplans") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=advplans";
						}
					}
					if (site_id == "inova") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=inova";
						}
					}
					if (site_id == "fairfaxcountyps") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=fairfaxcountyps";
						}
					}
					if (site_id == "uva") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=uva";
						}
					}
					if (site_id == "covahealthaware") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=covahealthaware";
						}
					}
					/*if (site_id == "arhs") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=arhs";
						}
					}
					if (site_id == "arhs") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=arhs";
						}
					}*/
					if (site_id == "soundhealth") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=soundhealth";
						}
					}
					if (site_id == "soundhealth") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=soundhealth";
						}
					}
					if (site_id == "walmart") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "https://www.aetnadocfind.com/walmart/";
						}
					}
					if (site_id == "walmart") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "https://www.aetnadocfind.com/walmart/";
						}
					}
					if (site_id == "exelon") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "https://www.aetnadocfind.com/exelon/";
						}
					}
					if (site_id == "exelon") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "https://www.aetnadocfind.com/exelon/";
						}
					}
					if (site_id == "hermanmiller") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "http://www.aetnaresource.com/18282/herman-miller";
						}
					}
					if (site_id == "hermanmiller") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "http://www.aetnaresource.com/18282/herman-miller";
						}
					}
					if (site_id == "studenthealth") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=studenthealth";
						}
					}
					if (site_id == "studenthealth") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=studenthealth";
						}
					}
					if (site_id == "trinity") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=trinity";
						}
					}
					if (site_id == "trinity") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=trinity";
						}
					}
					if (site_id == "aetnadentalaccess") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=aetnadentalaccess";
						}
					}
					if (site_id == "aetnadentalaccess") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=aetnadentalaccess";
						}
					}
					if (site_id == "jnj") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=jnj";
						}
					}
					if (site_id == "jnj") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=jnj";
						}
					}
					if (site_id == "nmhc") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=nmhc";
						}
					}
					if (site_id == "nmhc") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=nmhc";
						}
					}
					if (site_id == "sjhs") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=sjhs";
						}
					}
					if (site_id == "sjhs") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=sjhs";
						}
					}
					if (site_id == "ahs") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=ahs";
						}
					}
					if (site_id == "ahs") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=ahs";
						}
					}
					if (site_id == "brodart") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=brodart";
						}
					}
					if (site_id == "brodart") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=brodart";
						}
					}
					if (site_id == "emory") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=emory";
						}
					}
					if (site_id == "emory") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=emory";
						}
					}
					if (site_id == "emorycore") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=emorycore";
						}
					}
					if (site_id == "emorycore") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=emorycore";
						}
					}
					if (site_id == "hartfordhealthcare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/home.do");
						if (x != -1) {
							location.href = "/dse/search?site_id=hartfordhealthcare";
						}
					}
					if (site_id == "hartfordhealthcare") {
						var urlIvlplans = window.location.href;
						var x = urlIvlplans.indexOf("/rdIndex.jsp");
						if (x != -1) {
							location.href = "/dse/search?site_id=hartfordhealthcare";
						}
					}
					/*
					 * if(site_id == "progressive"){ var urlIvlplans =
					 * window.location.href; var x =
					 * urlIvlplans.indexOf("/rdIndex.jsp"); if(x != -1){
					 * location.href="/dse/search?site_id=progressive"; } }
					 * 
					 */

					/* E-Fix 02/13/2015 - Start */
					/*
					 * if(site_id == "asa"){ var urlIvlplans =
					 * window.location.href; var x =
					 * urlIvlplans.indexOf("/home.do"); if(x != -1){
					 * location.href="/dse/search?site_id=asa"; } }
					 * 
					 * if(site_id == "asaapn"){ var urlIvlplans =
					 * window.location.href; var x =
					 * urlIvlplans.indexOf("/home.do"); if(x != -1){
					 * location.href="/dse/search?site_id=asaapn"; } }
					 */
					/* E-Fix 02/13/2015 - End */

					var multiSelectText = document
							.getElementById("bhp_specialty_text");
					if (multiSelectText != null) {

						multiSelectText.style.display = 'none';

					}

					$('#medical_plans').mouseover(function() {

						$('#medical_plans').css("width", "100%");

					});

					$('#hospitals_plans').mouseover(function() {

						$('#hospitals_plans').css("width", "100%");

					});

					$('#dental_plans').mouseover(function() {

						$('#dental_plans').css("width", "auto");

					});

					$('#pharmacy_plans').mouseover(function() {

						$('#pharmacy_plans').css("width", "100%");

					});

					$('#ipacal_plans').mouseover(function() {

						$('#ipacal_plans').css("width", "auto");
					});
					/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
					/*
					 * $('#ioe_spec_prctc_cd').mouseover(function () {
					 * $('#ioe_spec_prctc_cd').css("width","auto"); });
					 */
					$('#ioq_spec_prctc_cd').mouseover(function() {
						$('#ioq_spec_prctc_cd').css("width", "auto");
					});
					/* P08-8459b - IOE and IOQ changes Feb 2013 End */

					if (urlProtocol == 'https:') {
						$('head')
								.append(
										'<link media="print" type="text/css" rel="stylesheet" href="https://'
												+ getMemberSecureDomainName()
												+ '/appConfig/memberSecure/includes/css/navPrint.css">'
												+ '<link media="print" type="text/css" rel="stylesheet" href="https://'
												+ getMemberSecureDomainName()
												+ '/appConfig/memberSecure/includes/css/MegaMenu.css">');

						$('head')
								.append(
										'<style>'
												+ '@media print {'
												+ '#left_side_rd{ padding-left: 5px;'
												+ '			   vertical-align: top;'
												+ '			   width: 183px;'
												+ '}'
												+ '#details_content_rd { font-family: Arial,Helvetica,Verdana,sans-serif;'
												+ '					  font-size: 12px;'
												+ '					  padding-left: 20px;'
												+ '					  padding-right: 5px;'
												+ '					  vertical-align: top;'
												+ '					  width: 100%;'
												+ '}'
												+ 'body{'
												+ '	zoom:0.95\0/;'
												+ '}'
												+ 'div#container-main{'
												+ '	zoom:0.95\0/;'
												+ '}}'
												+ '@media screen,print {'
												+ 'div#footer{ float:left;}'
												+ '#footerCopyRight{display:none;} </style>');

						if ($('#footerCopyRightDiv').length < 1) {
							$('body')
									.append(
											'<div id="footerCopyRightDiv" style="color: #666666;clear: both;line-height: 2;margin: 0 auto;padding: 0 5px;position: relative;text-align: left;width: 970px;z-index: 1;">'
													+ copyrightDocfindSecure()
													+ '</div>');
						}
					}
					/* Start changes for Walmart content item 3964 */
					if ($(" #storeErrorField ").html() != null
							&& $(" #storeErrorField ").html() != '') {
						// $( "#storeIdTd" ).prepend( $(" #storeErrorField
						// ").html() );
						location.href = "javascript:popUp('/docfind/cms/html/IncorrectStoreIdMessage.html')";
					}
					/* End changes for Walmart content item 3964 */

					$('#summary_submit').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#summary_submit').trigger('click');
								}
							});

					$('#advanced_submit').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#advanced_submit').trigger('click');
								}
							});
					$('#startANewSearchButton').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#startANewSearchButton')
											.trigger('click');
								}
							});
					$('#docfindLogoDiv').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#docfindLogoDiv').trigger('click');
								}
							});
					$('#aetnaLogoDiv').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									location.href = "http://www.aetna.com";
								}
							});
					$('#arrowImage').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#arrowImage').trigger('click');
								}
							});

					$('#arrowImageName').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#arrowImageName').trigger('click');
								}
							});

					$('#arrowImageQuality').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#arrowImageQuality').trigger('click');
								}
							});

					$('#startnewsearch').keydown(
							function(event) {
								var keyCode = (event.keyCode ? event.keyCode
										: event.which);
								if (keyCode == 13) {
									$('#startnewsearch').trigger('click');
								}
							});

					var tabKey = $.getUrlVar('tabKey');
					/*
					 * if(tabKey != null && tabKey == 'tab2'){ if
					 * ($('#provider_category').length > 0) {
					 * $('#provider_category').focus();
					 * setFocus('#provider_category');
					 * $('#hospfac_name').focus(); setFocus('#hospfac_name');
					 * setFocus('#pharmacy_pharmacy_name');
					 * setFocus('#info_individual_first');
					 * setFocus('#info_individual');
					 * setFocus('#info_group_ipa');
					 * setFocus('#dental_individual_first');
					 * setFocus('#dental_individual');
					 * setFocus('#dental_group_ipa'); }
					 * 
					 * }else if($('#provider_type_section').length > 0){
					 * $('#provider_type_section').focus();
					 * setFocus('#provider_category'); }
					 */
					if (site_id == "MDCRRX") {
						if (tabKey != null && tabKey == 'tab2') {
							document.getElementById("offScreenSearchByName").innerHTML = " Currently Search by Name is active ";
						} else if (tabKey != null && tabKey == 'tab3') {
							document
									.getElementById("offScreenSearchByLocation").innerHTML = " Currently Search by Location is active ";
						}
					}

					$("#advanced_submit").click(function() {
						$("#pinSearchProvider").focus();
						setFocus('#pinSearchProvider');
					});

					setFocus('#hospitals_hospital_name');
					setFocus('#medical_individual_first');
					setFocus('#medical_individual');
					setFocus('#medical_group_ipa');
					setFocus('#provider_type_section');
					setFocus('#default_specialty_div');
					setFocus('#default_plans');
					setFocus('#medical_name');
					setFocus('#UpdateResults');
					setFocus('#medical_language');
					setFocus('#medical_gender');
					setFocus('#medical_hspafl_hspprvdr_id');
					setFocusOnRequiredFieldsAfterSubmittingForm();

				});

/* PCR C-13227 - EAP/BH changes March 2012 End */

function getMemberSecureDomainName() {
	var domainName = document.domain;
	var retDomainName = "";
	if (domainName.substr(0, 4) == "dev") {
		retDomainName = "devmember.aetna.com";
	} else if (domainName.substr(0, 4) == "dev2") {
		retDomainName = "dev2member.aetna.com";
	} else if (domainName.substr(0, 4) == "dev3") {
		retDomainName = "dev3member.aetna.com";
	} else if (domainName.substr(0, 3) == "qa3") {
		retDomainName = "qamember.aetna.com";
	} else if (domainName.substr(0, 3) == "qa2") {
		retDomainName = "qa3member.aetna.com";
	} else if (domainName.substr(0, 2) == "qa") {
		retDomainName = "qamember.aetna.com";
	} else if (domainName.substr(0, 3) == "str") {
		retDomainName = "str2wwwr5.aetna.com";
	} else {
		retDomainName = "member.aetna.com";
	}
	return retDomainName;
}

function copyrightDocfindSecure() {
	year = (new Date()).getFullYear();
	var copRightInfo = "Copyright &copy; 2001-"
			+ year
			+ "&nbsp;Aetna Inc."
			+ "</div><br /><div id='docfindLanguageAssistanceLinks'> "
			+ "<img src='/dse/cms/codeAssets/images/globe.png' alt=' ' /> "
			+ "<a href='https://www.aetna.com/individuals-families/contact-aetna/member-information-in-other-languages.html'> "
			+ "<span>Language Assistance: &nbsp;</span><span lang='es'>Espa&ntilde;ol</span> | "
			+ "<span lang=' zh-Hant'>&#20013;&#25991;</span> | <span lang='vi'>Ti&#7871;ng Vi&#7879;t</span> | "
			+ "<span lang='ko'>&#54620;&#44397;&#50612;</span> | <span lang='tl'>Tagalog</span> | "
			+ "<span lang='ru'>&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;</span> | "
			+ "<span lang='ar'>&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;</span> | <span lang='ht'>Krey&ograve;l</span> | "
			+ "<span lang='fr'>Fran&ccedil;ais</span> | <span lang='pl'>Polski</span> | <span lang='pt'>Portugu&ecirc;s</span> | "
			+ "<span lang='it'>Italiano</span> | <span lang='de'>Deutsch</span> | <span lang='ja'>&#26085;&#26412;&#35486;</span> | "
			+ "<span lang='fa'>&#1601;&#1575;&#1585;&#1587;&#1740;</span> | <nobr>Other Languages&hellip;</nobr></a>";
	return copRightInfo;
}

function array_isElement(str)

{

	for (var i = 0; i < this.length; i++)

	{

		if (this[i] == str)

			return i;

	}

	return -1;

}

Array.prototype.isElement = array_isElement;

function predetermined()

{
	var tabVal = document.getElementById("tabKey");

	if (tabVal != null && tabVal.value != "tab4")

	{

		preStandard();

		checkAdditional();

		preQuick();

		zipDecoder();
	}

}

function preStandard()
{
	var tabKeyVal = document.getElementById("tabKey");
	// Start to hide hospital_affiliation dropdown
	var flagRD = document.getElementById("flagAdvance");
	if (flagRD != null && flagRD.value == "true")
	{
		var fj = document.getElementById("div1");
		fj.style.display = 'none';
	}
	// End
	
	if (geo1 != null)
	{
		var formObj = document.getElementById("advanced_search");
		for (var i = 0; i < formObj.geo1.length; i++) {
			if (formObj.geo1[i].value == geo1) {
				formObj.geo1[i].checked = true;
				createGeo(geo1);
			}
		}
		if (geo1 == "zip") {
			if (zipcode != null) {
				var formObj = document.getElementById("zipcode");
				formObj.value = zipcode;
			}
			if (miles != null)
				selectDD(miles, "miles");
		} else if (geo1 == "city") {
			if (city != null) {
				var formObj = document.getElementById("city");
				formObj.value = city;
			}
			if (state != null)
				selectDD(state, "state");
		} else if (geo1 == "county") {
			if (county != null) {
				var formObj = document.getElementById("county");
				formObj.value = county;
			}
			if (state != null)
				selectDD(state, "state");
		}
	} else {
		var formObj = document.getElementById("advanced_search");
		for (var i = 0; i < formObj.geo1.length; i++) {
			if (formObj.geo1[i].checked)
				createGeo(formObj.geo1[i].value);
		}
	}
	
	if (tabKeyVal != null
			&& (tabKeyVal.value == "tab1" || tabKeyVal.value == "tab3" || tabKeyVal.value == "tab5")) {
		if (provider_category != null) {
			if (search_cat != null) {
				selectDD(search_cat, "provider_type_section");
				// Start 8390 Advance search tab
				if (flagRD != null && flagRD.value == "true") {
					createIndexAdvance(search_cat);
				}
				// End 8390 Advance search tab
				else {
					rdCreateIndex(search_cat);
				}
			} else {
				var prov_cat = document.getElementById("provider_type_section");
				// Start 8390 Advance search tab
				if (flagRD != null && flagRD.value == "true") {
					createIndexAdvance(prov_cat.value);
				}
				// End 8390 Advance search tab
				else {
					rdCreateIndex(prov_cat.value);
				}
			}
			if (product != null) {
				if (urlProtocol == "https:"
						&& (site_id == "docfind" || site_id == "navigator")) {
					rdDisplayPlan(provider_category);
				}
				var prodObj = document.getElementById(productID);
				if (prodObj != null)
					selectDD(product, prodObj.id);
			}
		} else

		{

			var prov_cat = document.getElementById("provider_type_section");

			// Start 8390 Advance search tab

			if (flagRD != null && flagRD.value == "true")

			{

				createIndexAdvance(prov_cat.value);
			}

			// End 8390 Advance search tab

			else {

				rdCreateIndex(prov_cat.value);

			}

		}
	}
	
	if (tabKeyVal != null && (tabKeyVal.value == "tab2"))

	{

		if (provider_category != null)

		{

			selectDD(provider_category, "provider_category");

			// selectDD(individual_first,"info_ndividual_first")

			// selectDD(individual,"info_ndividual_first")

			searchByNameCreateIndex(provider_category);

			// showProviderTypelink(str);

			if (product != null)

			{

				var prodObj = document.getElementById(productID);

				if (prodObj != null)

					selectDD(product, prodObj.id);

			}

		} else {

			document.getElementById("name_padding_rd").style.paddingBottom = '15px';
			searchByNameCreateIndex(provider_category);

		}

	}
	
}

function preQuick()

{

	if (cityQuick != null)

	{

		var formObj = document.getElementById("cityQuick");

		formObj.value = cityQuick;

	}

	if (stateQuick != null)

		selectDD(stateQuick, "stateQuick");

	if (provider_category_quick != null)

		selectDD(provider_category_quick, "provider_category_Quick");

	if (search_criteria_quick == null || search_criteria_quick == '')

	{

		var formObj = document.getElementById("quick_search");

		if (formObj != null)

		{

			formObj.medical_name_quick[0].checked = false;

			formObj.medical_name_quick[1].checked = false;

			formObj.medical_name_quick[2].checked = false;

		}

		lastName_quick = null;

		firstName_quick = null;

		grpName_quick = null;

		grpCaName_quick = null;

	}

	if (search_criteria_quick != null)

	{

		var formObj = document.getElementById("quick_search");

		if (search_criteria_quick == "medical_prov")

			formObj.medical_name_quick[0].checked = true;

		if (search_criteria_quick == "medical_grp")

			formObj.medical_name_quick[1].checked = true;

		// Start of SR1201

		if (search_criteria_quick == "medical_grpca") {

			formObj.medical_name_quick[2].checked = true;

			// show("medical_group_input_div_quickca","medical_name_search_section_quick");

		}

		// End of SR1201

	}

	if (search_criteria_quick != null
			&& (search_criteria_quick.value == "medical_prov" || search_criteria_quick == "medical_prov"))

	{

		show("medical_name_input_div_quick",
				"medical_name_search_section_quick");

		if (lastName_quick != null)

		{

			var formObj = document.getElementById("medical_individual_Quick");

			formObj.value = lastName_quick;

		}

		if (firstName_quick != null)

		{

			var formObj = document
					.getElementById("medical_individual_first_Quick");

			formObj.value = firstName_quick;

		}

	}

	else if (search_criteria_quick != null
			&& (search_criteria_quick.value == "medical_grp" || search_criteria_quick == "medical_grp"))

	{

		show("medical_group_input_div_quick",
				"medical_name_search_section_quick");

		if (grpName_quick != null)

		{

			var formObj = document.getElementById("medical_group_ipa_Quick");

			formObj.value = grpName_quick;

		}

	}

	// Start of SR1201

	else if (search_criteria_quick != null
			&& (search_criteria_quick.value == "medical_grpca" || search_criteria_quick == "medical_grpca"))

	{

		show("medical_group_input_div_quickca",
				"medical_name_search_section_quick");

		if (grpCaName_quick != null)

		{

			var formObj = document.getElementById("medical_group_ipaca_Quick");

			formObj.value = grpCaName_quick;

		}

	}

	// End of SR1201

	checkQuick();

}

function checkDefaultPlan()

{

	var tempObj;

	if (productID != null)

	{

		tempObj = document.getElementById(productID);

		if (tempObj.value != "")

		{

			// checkAdditional();

		}

	}

}

function createGeo(str)

{

	if (str == "zip")

	{

		show("text_zip_div", "geo_type_label_section");

		show("input_zip_div", "geo_type_input_section");

		show("text_distance_div", "geo_attr_label_section");

		/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
		var tabVal = document.getElementById("tabKey");
		if (tabVal != null && tabVal.value == "tab3") {
			var providerType = document.getElementById("provider_type_section");
			var provType = providerType.value;
			// default to 100 miles for ioe/ioq
			if ((provType != null && provType != "" && (provType == "ioe" || provType == "ioq"))) {
				var milesIOQ = $.getUrlVar('miles');
				show("input_ioeioq_distance_div", "geo_attr_input_section");
				if (milesIOQ != null || milesIOQ != '') {
					$('#input_ioeioq_distance_div').children('#miles').val(
							milesIOQ);
				}
			} else {
				/* P08-8459b - IOE and IOQ changes Feb 2013 End */
				show("input_distance_div", "geo_attr_input_section");
			}
		} else
			show("input_distance_div", "geo_attr_input_section");
	}

	else if (str == "city")

	{

		show("text_city_div", "geo_type_label_section");

		show("input_city_div", "geo_type_input_section");

		show("text_state_div", "geo_attr_label_section");

		show("input_state_div", "geo_attr_input_section");

	}

	else if (str == "county")

	{

		show("text_county_div", "geo_type_label_section");

		show("input_county_div", "geo_type_input_section");

		show("text_state_div", "geo_attr_label_section");

		show("input_state_div", "geo_attr_input_section");

	}

	checkAdditional();

}

function chooseProvVisionType()

{

	var prov_cat = document.getElementById("provider_category");

	var provCategory = prov_cat.value;

	var providerType = document.getElementById("provider_type_section");

	var provType = providerType.value;

	if ((provType != null || provType != "" || provType == "vision")
			&& provCategory == "") {

		show("input_default_div", "provider_type_section");

		show("input_default_plans", "plans_section");

		resetDD("pharmacy_plans");

	}

}

function rdCreateIndex(str)

{

	resetIndex();
	// chooseProvVisionType();
	var tabKey = document.getElementById("tabKey");

	var formObj = document.getElementById("advanced_search");

	if (urlProtocol == "https:") {
		if (tabKey != null && tabKey.value != "tab3") {

			document.getElementById("sign_in_text").style.display = 'none';

			document.getElementById("sign_rd").style.display = 'none';
		}
	}
	if (str == "")

	{
		// show start button
		show("rd_btn_start_search", "rd_search");
		document.getElementById("rd_search").style.display = "";
		document.getElementById("rd_search1").style.display = "";
		document.getElementById("rd_search2").style.display = "";
		// hide go button
		hide("rd_btn_go");
		var rdGo = document.getElementById("rd_go");
		var rdGo1 = document.getElementById("go1_rd");
		if (rdGo != null) {
			document.getElementById("rd_go").style.display = 'none';
		}
		if (rdGo1 != null) {
			document.getElementById("go1_rd").style.display = 'none';

		}

		var submit = document.getElementById("advanced_submit");

		// show plan
		var pl = document.getElementById("plans_label");
		pl.style.display = "";
		show("input_default_plans", "plans_section");
		document.getElementById("plans_section").style.display = "";

		if (tabKey != null && tabKey.value != "tab3") {
			if (urlProtocol != "https:") {
				document.getElementById("sign_in_text").style.display = "";
				document.getElementById("sign_rd").style.display = "";
			}
		}

		// show default type of search

		document.getElementById("geo_label").style.display = "";
		document.getElementById("geo_attr").style.display = "";
		document.getElementById("geo_type_label_section").style.display = "";
		document.getElementById("geo_attr_label_section").style.display = "";
		document.getElementById("geo_type_input_section").style.display = "";
		document.getElementById("geo_attr_input_section").style.display = "";

		// show default specialty label and dropdown

		show("default_additional_div", "additional_section");
		document.getElementById("additional_section").style.display = "";
		document.getElementById("type_label").style.display = "";

		document.getElementById("axcel_section").style.display = 'none';

		document.getElementById("prov_country_label_section").style.display = "";
		document.getElementById("prov_country_input_section").style.display = "";

		document.getElementById("hide1_rd").style.display = "";
		document.getElementById("hide2_rd").style.display = "";
		document.getElementById("hide3_rd").style.display = "";
		document.getElementById("hide4_rd").style.display = "";
		document.getElementById("hide5_rd").style.display = "";

		if (tabKey != null && tabKey.value == "tab3") {
			document.getElementById("additional_section_advance").style.display = 'none';
			document.getElementById("additional_section_advance").style.borderBottom = 'none';
			document.getElementById("hide6_rd").style.display = "";
		}
		show("geo_attr_div", "geo_attr");

		formObj.geo1[0].checked = true;
		hide("geo_attr_pharmacy_div");
		productID = null;
		ptID = "provider_type_section";
		return;
	}

	if (str == "pharmacy" || str == "hearing") {
		show("geo_attr_pharmacy_div", "geo_attr");
		hide("geo_attr_div");

		var geoVal = "";

		if (formObj.geo1[0].checked == true) {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[4].checked = true;

			geoVal = formObj.geo1[4].value;
		}else if (formObj.geo1[4].checked == true) {
			formObj.geo1[4].checked = true;
			geoVal = formObj.geo1[4].value;
		} else {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		}

		createGeo(geoVal);
	} else {
		show("geo_attr_div", "geo_attr");
		hide("geo_attr_pharmacy_div");

		if (formObj.geo1[3].checked == true) {
			formObj.geo1[0].checked = true;
			geoVal = formObj.geo1[0].value;
		}

		else if (formObj.geo1[4].checked == true) {
			formObj.geo1[1].checked = true;
			geoVal = formObj.geo1[1].value;
		}

		else if (formObj.geo1[2].checked == true) {

			formObj.geo1[2].checked = true;

			geoVal = formObj.geo1[2].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[1].checked = true;
			geoVal = formObj.geo1[1].value;
		} else {
			formObj.geo1[0].checked = true;
			geoVal = formObj.geo1[0].value;
		}
		createGeo(geoVal);
	}

	if (str == "eyewear" || str == "ntp" || str == "flushot"
			|| str == "hearing") {
		// show go button
		// document.getElementById("rd_go").style.display = "";
		var rdGo = document.getElementById("rd_go");
		var rdGo1 = document.getElementById("go1_rd");
		if (rdGo != null) {

			document.getElementById("rd_go").style.display = "";
		}
		if (str == "flushot" && site_id == "TRS_ActiveCare") {
			location.href = "javascript:popUp('/docfind/cms/html/TRS_ActiveCare_flu_shot.html')";
		}
		if (rdGo1 != null) {

			document.getElementById("go1_rd").style.display = "";
		}

		show("rd_btn_go", "rd_go");

		// hide start button

		document.getElementById("rd_search1").style.display = 'none';

		document.getElementById("rd_search2").style.display = 'none';

		document.getElementById("rd_search").style.display = 'none';

		hide("rd_btn_start_search");

		// hide plans
		var pl = document.getElementById("plans_label");
		pl.style.display = 'none';
		hide("plans_label");
		hide("plans_section");
		document.getElementById("plans_section").style.display = 'none';

		if (tabKey != null && tabKey.value != "tab3") {
			if (urlProtocol != "https:") {
				document.getElementById("sign_rd").style.display = 'none';
				document.getElementById("sign_in_text").style.display = 'none';
			}
		}

		// hide radio buttons

		document.getElementById("geo_label").style.display = 'none';
		document.getElementById("geo_attr").style.display = 'none';
		document.getElementById("geo_type_label_section").style.display = 'none';

		document.getElementById("geo_attr_label_section").style.display = 'none';

		document.getElementById("geo_type_input_section").style.display = 'none';

		document.getElementById("geo_attr_input_section").style.display = 'none';
		if (tabKey != null && tabKey.value == "tab3") {
			hide("additional_section_advance");
			document.getElementById("additional_section_advance").style.display = 'none';
			document.getElementById("additional_section_advance").style.borderBottom = 'none';

			document.getElementById("hide6_rd").style.display = 'none';
		}

		// hide specialty
		document.getElementById("type_label").style.display = 'none';
		document.getElementById("additional_section").style.display = 'none';

		document.getElementById("prov_country_label_section").style.display = 'none';

		document.getElementById("prov_country_input_section").style.display = 'none';

		document.getElementById("hide1_rd").style.display = 'none';
		document.getElementById("hide2_rd").style.display = 'none';
		document.getElementById("hide3_rd").style.display = 'none';
		document.getElementById("hide4_rd").style.display = 'none';

		document.getElementById("hide5_rd").style.display = 'none';

	} else {
		// show start button
		document.getElementById("rd_search").style.display = "";
		document.getElementById("rd_search1").style.display = "";
		document.getElementById("rd_search2").style.display = "";
		show("rd_btn_start_search", "rd_search");

		// hide go button

		// document.getElementById("rd_go").style.display = 'none';
		var rdGo = document.getElementById("rd_go");
		var rdGo1 = document.getElementById("go1_rd");
		if (rdGo != null) {
			document.getElementById("rd_go").style.display = 'none';
		}
		if (rdGo1 != null) {
			document.getElementById("go1_rd").style.display = 'none';
		}

		hide("rd_btn_go");

		// show plans
		var pl = document.getElementById("plans_label");
		pl.style.display = "";
		show("input_default_plans", "plans_section");
		document.getElementById("plans_section").style.display = "";
		if (tabKey != null && tabKey.value != "tab3") {
			if (urlProtocol != "https:") {
				document.getElementById("sign_in_text").style.display = "";
				document.getElementById("sign_rd").style.display = "";
			}
		}
		// show default type of search
		document.getElementById("geo_label").style.display = "";
		document.getElementById("geo_attr").style.display = "";
		document.getElementById("geo_type_label_section").style.display = "";
		document.getElementById("geo_attr_label_section").style.display = "";
		// hide("geo_type_label_section");
		// hide("geo_attr_label_section");
		document.getElementById("geo_type_input_section").style.display = "";
		document.getElementById("geo_attr_input_section").style.display = "";
		document.getElementById("additional_section").style.display = "";
		document.getElementById("type_label").style.display = "";

		document.getElementById("hide1_rd").style.display = "";
		document.getElementById("hide2_rd").style.display = "";
		document.getElementById("hide3_rd").style.display = "";
		document.getElementById("hide4_rd").style.display = "";
		document.getElementById("hide5_rd").style.display = "";

		document.getElementById("prov_country_label_section").style.display = "";
		document.getElementById("prov_country_input_section").style.display = "";
		if (tabKey != null && tabKey.value == "tab3") {
			document.getElementById("additional_section_advance").style.display = "";
			document.getElementById("additional_section_advance").style.borderBottom = '1px solid #D1D1D1';
			document.getElementById("hide6_rd").style.display = "";
		}
	}

	// Set provider category
	rdSetProviderCategory(str);

	ptID = "provider_type_section";

	// Display plan
	rdDisplayPlan(str);

	rdDisplaySpecialty(str);
	// End 8390

}

function rdDisplaySpecialty(str) {
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	var multiSelectText = document.getElementById("bhp_specialty_text");
	if (multiSelectText != null) {
		multiSelectText.style.display = 'none';
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	if (str != null) {
		show_specialty = getAdditionalSection(str);
		show_additional = show_specialty;

	} else {
		show_specialty = "default";
	}
	var myStr = show_specialty + "_additional_div";
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	var langpref = $.getUrlVar('langpref');
	if (langpref != null && langpref == "sp") {
		document.getElementById("type_label").innerHTML = "<label for='default_specialty_div'><span class='required'>*</span>Tipo:</label>";
	}
	else if(site_id== "MDCRRX")
	{
		document.getElementById("type_label").innerHTML = "<label for='pharmacy_spec_prctc_cd'><span class='required'>*</span>Type:</label>";
	}
	else{
		document.getElementById("type_label").innerHTML = "<label for='default_specialty_div'><span class='required'>*</span>Type:</label>";
	}

	if (str == "urgent" || str == "walkin" || str == "ntp"
			|| str == "dialysislocal" || str == "eyewear" || str == "flushot"
			|| str == "hearing" || str == "ipacal" || str == "mh_facility"
			|| str == "sa_facility" || str == "rtf_facility") {/*
	 * PCR C-13227 -
	 * EAP/BH
	 * changes March
	 * 2012 End
	 */
		document.getElementById("type_label").style.display = 'none';
		document.getElementById("axcel_section").style.display = 'none';

		document.getElementById("search_for_rd").style.paddingBottom = '15px';
		document.getElementById("additional_section").style.display = 'none';
		// document.getElementById("hide_error_rd").style.display = 'none';

		hide("type_label");
		hide("additional_section");
	} else if (str == "pharmacy") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		show(myStr, "additional_section");
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
	} else if (str == "opp") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_facilities_div", "additional_section");
	} else if (str == "phys_bhp") {
		document.getElementById("type_label").style.display = "";
		if (site_id != null && site_id == "alaskacare") {
			document.getElementById("type_label").innerHTML = "Type:";
		}
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_phys_bhp_div", "additional_section");
		if (site_id != null
				&& (site_id == "walmart" || site_id == "walmart1" || site_id == "walmart2")) {
			var mPcpObj = document.getElementById("medical_pcp_prctc_cd");
			if (mPcpObj != null) {
				mPcpObj.value = "";
			}
		}
	} else if (str == "spec") {
		document.getElementById("type_label").style.display = "";

		document.getElementById("axcel_section").style.display = "";

		show("input_spec_div", "additional_section");

		document.getElementById("additional_section").style.paddingBottom = '0';

		document.getElementById("axcel_section").style.paddingBottom = '15px';

		document.getElementById("search_for_rd").style.paddingBottom = '5px';

		var mPcpObj = document.getElementById("medical_pcp_prctc_cd");

		if (mPcpObj != null) {

			mPcpObj.value = "";
		}
		if (site_id != null
				&& (site_id == "walmart" || site_id == "walmart1" || site_id == "walmart2")) {
			var physBhpObj = document.getElementById("phys_bhp_spec_prctc_cd");
			if (physBhpObj != null) {
				physBhpObj.value = "";
			}
		}
		// populateDropdowns();
		// show(myStr, "additional_section");
	} else if (str == "bhp") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		fillDropdown("bhp", "spec_prctc_cd", "bhp_specialty_div");
		show("bhp_specialty_div", "additional_section");
		var multiSelectText = document.getElementById("bhp_specialty_text");
		if (multiSelectText != null) {
			multiSelectText.style.display = "";
		}

	} else if (str == "eap") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';

		fillDropdown("eap", "spec_prctc_cd", "bhp_specialty_div");
		show("bhp_specialty_div", "additional_section");
		var multiSelectText = document.getElementById("bhp_specialty_text");
		if (multiSelectText != null) {
			multiSelectText.style.display = "";
		}
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (str == "labs") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_labs_div", "additional_section");
	} else if (str == "dpcp") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_dpcp_div", "additional_section");

		var dspecObj = document.getElementById("dental_spec_prctc_cd");
		if (dspecObj != null) {
			dspecObj.value = "";
		}
	} else if (str == "dspec") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_dspec_div", "additional_section");

		var dspecObj = document.getElementById("dental_pcp_prctc_cd");
		if (dspecObj != null) {
			dspecObj.value = "";
		}
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */

	else if (str == "ioe") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("ioe_additional_div", "additional_section");
	} else if (str == "ioq") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("ioq_additional_div", "additional_section");
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */
	else {
		document.getElementById("type_label").style.display = "";
		document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.paddingBottom = '15px';
		document.getElementById("search_for_rd").style.paddingBottom = '5px';

		rdPopulateSpecialtyDropdowns();

		show(myStr, "additional_section");
		if (site_id != null
				&& (site_id == "walmart" || site_id == "walmart1"
						|| site_id == "walmart2" || site_id == "ioeioq")) {
			if (str == "pcp") {
				show("medical_pcp_additional_div", "additional_section");
				var specObj = document.getElementById("medical_spec_prctc_cd");
				if (specObj != null) {
					specObj.value = "";
				}
			}
		}

		if (str == "dspec") {

			var dpcpObj = document.getElementById("dental_pcp_prctc_cd");

			if (dpcpObj != null) {

				dpcpObj.value = "";
			}
		}
	}
}

// Start 8390 Advance search tab

function createIndexAdvance(str)

{

	rdCreateIndex(str);

	populateDropdowns();

	if (str == "" || str == "eyewear" || str == "ntp" || str == "flushot"
			|| str == "hearing") {
		hide("additional_section_advance");
		document.getElementById("additional_section_advance").style.borderBottom = 'none';
	} else {
		if (str == "opp"
				&& (site_id != "docfind" && site_id != "navigator" && site_id != "ioeioq")) {
			fillDropdown("opp", "hospflag", "opp_hospflag_div");
		}
		show_additional = getAdditionalSection(str);
		s1 = show_additional + "_additional";
		show(s1, "additional_section_advance");
		document.getElementById("additional_section_advance").style.borderBottom = '1px solid #D1D1D1';

		showAdditional();

	}

	// For Programs and recognition dropdown

	$('#medical_provflag').mouseover(function() {

		$('#medical_provflag').css("width", "auto");

	});

	$('#phys_bhp_provflag').mouseover(function() {

		$('#phys_bhp_provflag').css("width", "auto");

	});

	$('#facilities_hospflag').mouseover(function() {

		$('#facilities_hospflag').css("width", "auto");

	});

	$('#opp_hospflag').mouseover(function() {

		$('#opp_hospflag').css("width", "auto");

	});

	$('#hospitals_hospflag').mouseover(function() {

		$('#hospitals_hospflag').css("width", "auto");

	});

	// For Hospital Affiliation dropdown

	$('#medical_hospaffil_div').mouseover(function() {

		$('#medical_hspafl_hspprvdr_id').css("width", "auto");

	});

	$('#phys_bhp_hospaffil_div').mouseover(function() {

		$('#phys_bhp_hspafl_hspprvdr_id').css("width", "auto");

	});

	$('#bhp_hospaffil_div').mouseover(function() {

		$('#bhp_hspafl_hspprvdr_id').css("width", "auto");
	});

}

// End 8390 Advance search tab

function provForward(strUrl)

{

	var siteID = document.getElementById("site_id").value;

	if (siteID == "navigator")

	{

		location.replace(strUrl);

	}

	else

	{

		location.href = strUrl;

	}

}

function getAdditionalSection(str)

{

	if (str == "pcp" || str == "spec")

		return "medical";

	else if (str == "phys_bhp")

		return "phys_bhp";

	else if (str == "dpcp" || str == "dspec")

		return "dental";

	else if (str == "dall")

		return "dall";

	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	else if (str == "bhp" || str == "eap")

		return "bhp";
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	else if (str == "pharmacy")

		return "pharmacy";

	// START CHANGES SR1263 - AUG 2010

	else if (str == "ac" || str == "dmeloc" || str == "urgent"
			|| str == "walkin" || str == "eyewear" || str == "dialysislocal"

			|| str == "ar" || str == "da" || str == "ha" || str == "hs"
			|| str == "mri" || str == "pt" || str == "rc"

			|| str == "sk" || str == "sd")

		return "facilities";

	// END CHANGES SR1263 - AUG 2010

	else if (str == "labs")

		return "labs";

	else if (str == "opp" || str == "facilities")

		return "opp";

	else if (str == "hospitals")

		return "hospitals";

	else if (str == "mh_facility" || str == "sa_facility"
			|| str == "rtf_facility")

		return "bhh";

	// START CHANGES SR1274 - FEB 2011

	else if (str == "ipacal")

		return "ipacal";

	// END CHANGES SR1274 - FEB 2011
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	else if (str == "ioe")

		return "ioe";

	else if (str == "ioq")

		return "ioq";
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */
}

function checkQuick()

{

	var quick = document.getElementById("quick_submit");

	var formObj = document.getElementById("quick_search");

	if (quick == null || formObj == null)

		return;

	var geo_prov = false;

	var name = false;

	var city = document.getElementById("cityQuick");

	var state = document.getElementById("stateQuick");

	var prov = document.getElementById("provider_category_Quick");

	// Start of SR1201

	if (state != undefined && state.value == "CA") {

		show("medical_name_quick_groupca", "medical_section_quick");

	} else {

		var divs = document.getElementsByTagName("div");

		for (var i = 0; i < divs.length; i++)

		{

			if (divs[i].id == "medical_name_quick_groupca")

				divs[i].style.display = 'none';

		}

		var divs = document.getElementsByTagName("div");

		for (var i = 0; i < divs.length; i++)

		{

			if (divs[i].id == "medical_group_input_div_quickca")

				divs[i].style.display = 'none';

		}

	}

	var medicalGroupIPA = document.getElementById("medical_group_ipaca_Quick");

	if (medicalGroupIPA != undefined && medicalGroupIPA.value != "") {

		name = true;

	}

	// End of SR1201

	if (city != null && state != null && prov != null && city.value != ""
			&& state.value != "" && prov.value != "")

		geo_prov = true;

	for (var i = 0; i < formObj.medical_name_quick.length; i++)

	{

		if (formObj.medical_name_quick[i].checked)

		{

			if (formObj.medical_name_quick[i].value == "medical_prov")

			{

				var indiv = document.getElementById("medical_individual_Quick");

				if (indiv.value != "")

					name = true;

			}

			else if (formObj.medical_name_quick[i].value == "medical_grp")

			{

				var group = document.getElementById("medical_group_ipa_Quick");

				if (group.value != "")

					name = true;

			}

		}

	}

	if (geo_prov == true && name == true && quick.style.display != "none")

	{

		quick.style.display = "";

		quick.disabled = false;

	}

	else

	{

		quick.style.display = "";

		quick.disabled = true;

	}

}

function checkAdditional()

{

	// var additional = document.getElementById("additional");

	var submit = document.getElementById("advanced_submit");

	var geo1_filled = false;

	var search_cat_filled = false;

	var product_filled = false;

	var hearing = false;

	var formObj = document.getElementById("advanced_search");

	for (var i = 0; i < formObj.geo1.length; i++)

	{
		if (formObj.geo1[i].checked)

		{
			if (formObj.geo1[i].value == "zip")

			{

				var zipcode = document.getElementById("zipcode");
				/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
				var miles = '';
				miles = getMiles();
				/* P08-8459b - IOE and IOQ changes Feb 2013 End */

				if (zipcode.value != "" && miles != "")

					geo1_filled = true;

			}

			else if (formObj.geo1[i].value == "city")

			{

				var city = document.getElementById("city");

				var state = document.getElementById("state");

				if (city.value != "" && state.value != "")

					geo1_filled = true;

			}

			else if (formObj.geo1[i].value == "county")

			{

				var county = document.getElementById("county");

				var state = document.getElementById("state");

				if (county.value != "" && state.value != "")

					geo1_filled = true;

			}

		}

	}

	if (ptID != null)

	{

		var tempObj = document.getElementById(ptID);

		if (tempObj.value != "")

		{

			search_cat_filled = true;

			if (tempObj.value == "hearing")

				hearing = true;

		}

		/* START CHANGES P 8065 - AUG 2010 */

		if (tempObj.value == "eyewear")

		{

			product_filled = false;

		}

		/* END CHANGES P 8065 - AUG 2010 */

	}

	if (productID != null && product_filled == false)

	{

		tempObj = document.getElementById(productID);

		if (tempObj != null && tempObj.value != "") {

			product_filled = true;

			var x = tempObj.value
					.indexOf("VPHMO|Vitalidad Plus California con Aetna");

			// var y = tempObj.value.indexOf("Mexico");

			if (x != -1) {

				showProvCountry("O");

			}

			else {

				showProvCountry("N");

			}

		}

	}

	if (productID != null)

	{

		var prov_cat = document.getElementById("provider_category");

		var provCategory = prov_cat.value;

		if (((site_id == "docfind") || (site_id == "navigator"))
				&& (provCategory == "urgent" || provCategory == "walkin"
						|| provCategory == "medical" || provCategory == "bh"
						|| provCategory == "hospitals"
						|| provCategory == "institute"
						|| provCategory == "dialysis" ||

						provCategory == "labs" || provCategory == "facilities"))

		{

			var plan1 = document.getElementById("medical_plans");

			var plan = plan1.value;

			if (plan == "EAP|Employee Assistance Program")

			{

				show("text_eap_plan", "prov_country_label_section");

				document.getElementById("prov_country_label_section").style.paddingBottom = '15px';

				document.getElementById("plans_section").style.paddingBottom = '5px';

			}

		}

	}

	if (geo1_filled == true && search_cat_filled == true
			&& product_filled == true)

	{

		/*
		 * if(!hearing && additional.style.display != "none")
		 *  {
		 * 
		 * if(langpref=="sp")
		 * 
		 * additional.value = "Más Opciones";
		 * 
		 * else
		 * 
		 * additional.value = "More Options";
		 * 
		 * 
		 * 
		 * additional.style.display = "";
		 * 
		 * additional.disabled = false;
		 *  }
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * //changes for SR1238
		 * 
		 * 
		 * 
		 * else if(!hearing && productID != null)
		 *  {
		 * 
		 * if(langpref=="sp")
		 * 
		 * additional.value = "Más Opciones";
		 * 
		 * else
		 * 
		 * additional.value = "More Options";
		 * 
		 * 
		 * 
		 * additional.style.display = "";
		 * 
		 * additional.disabled = false;
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * add = true;
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 *  }
		 */

		// end of changes for SR1238
		// submit.style.display = "";
		// submit.disabled = false;
	}

	else if (bypassStartSearchEdits())

	{
		// submit.style.display = "";

		// submit.disabled = false;

	}

	else

	{

		add = true;

		/*
		 * if(langpref=="sp")
		 * 
		 * 
		 * 
		 * additional.value = "Sobre Completa";
		 * 
		 * 
		 * 
		 * else
		 * 
		 * 
		 * 
		 * 
		 * 
		 * additional.value = "Complete Above";
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * 
		 * additional.style.display = "";
		 * 
		 * 
		 * 
		 * additional.disabled = true;
		 */

		// submit.style.display = "";
		// submit.disabled = true;
	}

	/* START CHANGES P 8065 - AUG 2010 */

	var prov_cat = document.getElementById("provider_category");

	var provCategory = prov_cat.value;

	if (provCategory == "vision")

	{

		// additional.disabled = true;

		// submit.disabled = true;

	}

	/* END CHANGES P 8065 - AUG 2010 */

	// Start 8390 Advance search tab
	var flagRD = document.getElementById("flagAdvance");

	if (show_additional != null && flagRD != null && flagRD.value == "true")

	{

		showAdditional();
	}
	var prov_cat = document.getElementById("provider_category");
	var provCategory = prov_cat.value;

	var plan1 = document.getElementById("dental_plans");

	var plan = plan1.value;

	if (provCategory == "dental" && plan == "DINDE|Aetna Dental Indemnity Plan")

	{

		document.getElementById("advanced_submit").disabled = true;
	} else {

		document.getElementById("advanced_submit").disabled = false;

	}

	// End 8390 Advance search tab

}

function showAdditional()

{
	// Start 8390 Advance search tab
	var flagRD = document.getElementById("flagAdvance");

	if (flagRD != null)

	{

		if (show_additional == null && flagRD != null && flagRD.value == "true")

		{

			hide("additional_section_advance");

			document.getElementById("additional_section_advance").style.borderBottom = 'none';

			return;

		}

		else

		{

			var myStr = show_additional + "_additional";
			/* PCR C-13227 - EAP/BH changes March 2012 Start */
			if (show_additional == "medical" || show_additional == "phys_bhp"
					|| show_additional == "bhp" || show_additional == "eap") {/*
			 * PCR
			 * C-13227 -
			 * EAP/BH
			 * changes
			 * March
			 * 2012
			 * End
			 */

				resetDD(show_additional + "_name");

				populateHospitalAffiliations();

				show(myStr, "additional_section_advance");

				document.getElementById("additional_section_advance").style.borderBottom = '1px solid #D1D1D1';
			}

			if (show_additional == "medical")

				resetDD("medical_gender");

			if (show_additional == "phys_bhp")

				resetDD("phys_bhp_gender");

			/* PCR C-13227 - EAP/BH changes March 2012 Start */

			if (show_additional == "bhp" || show_additional == "eap")

				resetDD("bhp_gender");

			/* PCR C-13227 - EAP/BH changes March 2012 End */

			// End 8390 Advance search tab
			// populateDropdowns();
			// Start of SR1201
			/* PCR C-13227 - EAP/BH changes March 2012 Start */
			if (show_additional == "medical" || show_additional == "phys_bhp"
					|| show_additional == "bhp" || show_additional == "eap") {/*
			 * PCR
			 * C-13227 -
			 * EAP/BH
			 * changes
			 * March
			 * 2012
			 * End
			 */

				var state = document.getElementById("state");

				var caldivId = show_additional + "_name_california_input_div";

				var normaldivId = show_additional + "_name_normal_input_div";

				var sectionId = show_additional + "_namelabel_search_section";

				var stateValueObj = document.getElementById("stateval");

				if (state != undefined && state.value == 'CA' && geo1 != "zip") {
					resetDD(show_additional + "_name_ca");
					show(caldivId, sectionId);
				}

				else if (stateValueObj != undefined && stateValueObj != null
						&& stateValueObj.value == 'CA' && geo1 == "zip") {
					resetDD(show_additional + "_name_ca");
					show(caldivId, sectionId);
				}

				else {

					show(normaldivId, sectionId);
				}
			}

		}
	}

}

function showAdditionalCA(state)

{
	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	if (show_additional == "medical" || show_additional == "phys_bhp"
			|| show_additional == "bhp" || show_additional == "eap") {

		/* PCR C-13227 - EAP/BH changes March 2012 End */

		// resetDD(show_additional + "_name_ca");
		var caldivId = show_additional + "_name_california_input_div";

		var normaldivId = show_additional + "_name_normal_input_div";

		var sectionId = show_additional + "_namelabel_search_section";

		if (state != undefined && state.value == 'CA') {

			resetDD(show_additional + "_name_ca");

			show(caldivId, sectionId);

		} else {

			show(normaldivId, sectionId);

		}

	}

}

// End of SR1201

function nameSearch(obj)

{

	var summForm = document.getElementById("summary_search_results");

	var searchForm = document.getElementById("advanced_search");

	// Use the results page form in case of Search Settings box

	if (obj.value == "medical_prov")

		show("medical_name_input_div", "medical_name_search_section");

	else if (obj.value == "medical_grp")

		show("medical_group_input_div", "medical_name_search_section");

	// Start of SR1201

	else if (obj.value == "medical_grpca") {

		show("medical_groupca_input_div", "medical_name_search_section");

		if (summForm != null && searchForm == null)

			fillGroupIPASumm("medical_organization_group_ipa");

		else

			fillGroupIPA("medical_organization_group_ipa");

	}

	// End of SR1201

	else if (obj.value == "bhp_prov") {

		show("bhp_name_input_div", "bhp_name_search_section");

	}

	else if (obj.value == "bhp_grp")

		show("bhp_group_input_div", "bhp_name_search_section");

	// Start of SR1201

	else if (obj.value == "bhp_grpca") {

		show("bhp_groupca_input_div", "bhp_name_search_section");

		if (summForm != null && searchForm == null)

			fillGroupIPASumm("bhp_organization_group_ipa");

		else

			fillGroupIPA("bhp_organization_group_ipa");

	}

	// End of SR1201

	else if (obj.value == "phys_bhp_prov")

		show("phys_bhp_name_input_div", "phys_bhp_name_search_section");

	else if (obj.value == "phys_bhp_grp")

		show("phys_bhp_group_input_div", "phys_bhp_name_search_section");

	// Start of SR1201

	else if (obj.value == "phys_bhp_grpca") {

		show("phys_bhp_groupca_input_div", "phys_bhp_name_search_section");

		if (summForm != null && searchForm == null)

			fillGroupIPASumm("phys_bhp_organization_group_ipa");

		else

			fillGroupIPA("phys_bhp_organization_group_ipa");

	}

	// End of SR1201

	else if (obj.value == "")

		hide(obj.id + "_search_section");

}

function selectDD(option, dropdown)

{

	var dd = document.getElementById(dropdown);
	for (var i = 0; i < dd.options.length; i++) {

		if (dd.options[i].value == option)

		{

			dd.options[i].selected = true;
		}
	}

}

function resetDD(dropdown)

{

	var dd = document.getElementById(dropdown);

	if (dd == null)

		return;

	if (dd.selectedIndex == -1)

		return;

	else

		dd.selectedIndex = 0;

	return;

}

function resetDDs(section)

{

	var node = document.getElementById(section);

	var dds = node.getElementsByTagName("select");

	for (var i = 0; i < dds.length; i++)

		dds[i].selectedIndex = 0;

	return;

}

function resetIndex()

{

	show_additional = null;

	ptID = null;

	specID = null;

	var add = document.getElementById("additional");

	add = true;

	// showAdditional();

	resetDDs("provider_type_section");

	var pl = document.getElementById("plans_label");

	pl.style.display = "";

	return;

}

function makeDirty(obj)

{

	var x = dirty.isElement(obj.id);

	var provider_type = document.getElementById("provider_type_section");

	var site_id = $.getUrlVar('site_id');
	if (site_id == "walmart" || site_id == "walmart1" || site_id == "walmart2") {
		if (obj.value == "20101|OB-GYN (Obstetrics & Gynecology)") {
			location.href = "javascript:popUp('/docfind/cms/html/Obstetrics_and_Gynecology.html')";
		}
	}

	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	/*
	 * if(provider_type == "bhp")
	 *  {
	 * 
	 * 
	 * ptID = "bhp_spec_prctc_cd"; }
	 */
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	if (x != -1)

	{

		if (obj.value == "") {

			dirty[x] = "";
		}

		return;

	}

	else {

		dirty.push(obj.id);
	}

}

function makeNameDirty(obj)

{

	var search_cat = document.getElementById(ptID);

	if (search_cat.value == "eyewear")

	{

		obj.id = "facilities_eyewear_name";

	}

	else

	{

		if (search_cat.value == "labs")

			obj.id = "labs_individual";

		else if (search_cat.value == "opp")

			obj.id = "opp_individual";

		else

			obj.id = "facilities_individual";

	}

	makeDirty(obj);

}

function cleanUpGeo(geo_obj)

{

	if (geo_obj.value == "zip")

	{

		geo_if_1 = document.getElementById("zipcode");

		geo_if_1.name = "zipcode";

		/* P08-8459b - IOE and IOQ changes Feb 2013 Start */

		// geo_if_2 = document.getElementById("miles");
		// geo_if_2.name = "miles";
		if ($('#input_distance_div').is(":visible")) {
			miles = $('#input_distance_div').children('#miles').val();
			$('#input_distance_div').children('#miles').attr('name', 'miles');
		} else if ($('#input_transplant_distance_div').is(":visible")) {
			miles = $('#input_transplant_distance_div').children('#miles')
					.val();
			$('#input_transplant_distance_div').children('#miles').attr('name',
					'miles');
		} else if ($('#input_ioeioq_distance_div').is(":visible")) {
			miles = $('#input_ioeioq_distance_div').children('#miles').val();
			$('#input_ioeioq_distance_div').children('#miles').attr('name',
					'miles');
		}
		/* P08-8459b - IOE and IOQ changes Feb 2013 End */

		sortBy = document.getElementById("sortBy");

		// sortBy.value = "dist";

	}

	else if (geo_obj.value == "city")

	{

		geo_if_1 = document.getElementById("city");

		geo_if_1.name = "city";

		geo_if_2 = document.getElementById("state");

		geo_if_2.name = "state";

	}

	else if (geo_obj.value == "county")

	{

		geo_if_1 = document.getElementById("county");

		geo_if_1.name = "county";

		geo_if_2 = document.getElementById("state");

		geo_if_2.name = "state";

	}

	return;

}

function StandardCleanUp()

{

	if (checkForeign()) {

		return false;

	}

	var tempObj = document.getElementById("advanced_search");

	for (var i = 0; i < tempObj.geo1.length; i++)

	{

		if (tempObj.geo1[i].checked)

			cleanUpGeo(tempObj.geo1[i]);

	}

	if (ptID != null)

	{
		tempObj = document.getElementById(ptID);
		tempObj.name = "search_cat";

	}

	if (productID != null)

	{

		tempObj = document.getElementById(productID);
		tempObj.name = "product";
	}

	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	var provTypeAdvance = document.getElementById("provider_type_section");

	var keyTab = document.getElementById("tabKey");

	var pCat;

	if (provTypeAdvance != null && provTypeAdvance != "")

		var pCatType = provTypeAdvance.value;

	if (pCatType == "eap") {

		pCatType = "bhp";
	}

	pCat = getAdditionalSection(pCatType);

	if (keyTab.value == "tab3" && (pCatType == "bhp" || pCatType == "eap")) {
		var objTempProvCat = document.getElementById("provider_category");

		objTempProvCat.name = "provider_category";

		var langId = pCat + "_language";

		var objTempLang = document.getElementById(langId);

		if (objTempLang != null)

			objTempLang.name = "language";

		var hospAfflId = pCat + "_hspafl_hspprvdr_id";

		var objTempHospAfflId = document.getElementById(hospAfflId);

		if (objTempHospAfflId != null)

			objTempHospAfflId.name = "hspafl_hspprvdr_id";

		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		var genderId = pCat + "_gender";

		var objTempGender = document.getElementById(genderId);

		var bhpAgeId = pCat + "_bhp_age";

		var objBhpAge = document.getElementById(bhpAgeId);

		if (objBhpAge != null)

			objBhpAge.name = "bhp_age";

		var individual = pCat + "_individual";

		var objIndividual = document.getElementById(individual);

		if (objIndividual != null)

			objIndividual.name = "individual";

		var individualFirst = pCat + "_individual_first";

		var objIndividualFirst = document.getElementById(individualFirst);

		if (objIndividualFirst != null)

			objIndividualFirst.name = "individual_first";

		var groupIpa = pCat + "_group_ipa";

		var objgroupIpa = document.getElementById(groupIpa);

		if (objgroupIpa != null)

			objgroupIpa.name = "group_ipa";

		/* PCR C-13227 - EAP/BH changes March 2012 End */

		if (objTempGender != null)

			objTempGender.name = "gender";

		if (objTempProvCat != null && objTempProvCat.value == "hospitals")
			document.getElementById("flagHospFlow").value = "H";

		else
			document.getElementById("flagHospFlow").value = "M";
	}

	/* PCR C-13227 - EAP/BH changes March 2012 End */

	if (add == true)

	{

		for (var i = 0; i < dirty.length; i++)

		{

			var providerType = document.getElementById("provider_type_section");

			if (providerType != null && providerType.value == "spec")

			{

				if (dirty[i] != "spec_spec_prctc_cd") {
					show_additional = "medical";
				}

				else if (dirty[i] == "spec_spec_prctc_cd"
						&& dirty[i + 1] == "medical_spec_prctc_cd")

				{

					dirty[i] == "medical_spec_prctc_cd"
					show_additional = "medical";
				}

				else if (dirty[i] == "spec_spec_prctc_cd")

				{

					show_additional = "spec";

				}

			}

			if (providerType != null && providerType.value == "phys_bhp")

			{

				if (dirty[i] != "all_med_spec_prctc_cd") {
					show_additional = "phys_bhp";
				}

				else if (dirty[i] == "all_med_spec_prctc_cd"
						&& dirty[i + 1] == "phys_bhp_spec_prctc_cd")

				{

					dirty[i] == "phys_bhp_spec_prctc_cd"
					show_additional = "phys_bhp";
				}

				else if (dirty[i] == "all_med_spec_prctc_cd")

				{

					show_additional = "all_med";
				}
			}

			if (providerType != null && providerType.value == "opp")

			{

				if (dirty[i] != "facilities_spec_prctc_cd") {
					show_additional = "opp";
				}

				else if (dirty[i] == "facilities_spec_prctc_cd"
						&& dirty[i + 1] == "opp_spec_prctc_cd") {
					show_additional = "opp";
				}

				else if (dirty[i] == "facilities_spec_prctc_cd") {
					show_additional = "facilities";
				}
			}
			/* PCR C-13227 - EAP/BH changes March 2012 Start */

			if (providerType != null
					&& (providerType.value == "bhp" || providerType.value == "eap"))

			{

				// var providerType =
				// document.getElementById("bhp_spec_prctc_cd");

				/*
				 * if(dirty[i] == "bhp_spec_prctc_cd" && (providerType.value ==
				 * "mh_facility" || providerType.value == "sa_facility" ||
				 * providerType.value == "rtf_facility")) { show_additional =
				 * "bhp"; }
				 * 
				 * 
				 * 
				 * 
				 * else
				 */

				if ((dirty[i] == "bhp_spec_prctc_cd" || dirty[i] == "eap_spec_prctc_cd")
						&& (providerType.value == "bhp" || providerType.value == "eap")) {/*
				 * PCR
				 * C-13227 -
				 * EAP/BH
				 * changes
				 * March
				 * 2012
				 * End
				 */
					show_additional = "bhp";
				}

				else if (providerType.value != "bhp"
						|| providerType.value != "eap")

				{

					show_additional = "bhh";
				}
			}

			if (providerType != null && providerType.value == "labs")

			{

				if (dirty[i] == "facilities_hospflag") {
					show_additional = "facilities";
				} else {

					show_additional = "labs";
				}
			}
			var x = dirty[i].indexOf(show_additional);

			if (x != -1) {
				tempObj = document.getElementById(dirty[i]);

				if (tempObj != null)
					tempObj.name = dirty[i]
							.substring(show_additional.length + 1);
			}

		}

	}

	var objTempProvCat = document.getElementById("provider_category");

	if (objTempProvCat != null && objTempProvCat.value == "hospitals")

		document.getElementById("flagHospFlow").value = "H";

	else

		document.getElementById("flagHospFlow").value = "M";

	return true;

}

function QuickCleanUp()

{

	return true;

}

function limitSpecialties(select)

{

	var selected = 0;

	for (var i = 0; i < select.options.length; i++)

	{

		if (select.options[i].selected)

			selected++;

		if (selected > 2)

			select.options[i].selected = false;

	}

	makeDirty(select);

}

function populateDropdowns()

{

	// var search_cat = document.getElementById(ptID);
	var flagRD = document.getElementById("flagAdvance");
	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;
	if (provCategory == "pcp")

	{

		fillDropdown(prov_cat.value, "language", "medical_language_div");

		// SR 1267 Dropdown for Flags

		if (site_id != "ioeioq")
			fillDropdown(prov_cat.value, "provflag", "medical_provflag_div");

		// fillHospitalAffiliation("medical_hospaffil_div");

	}

	else if (provCategory == "spec")

	{

		// Start 8390 Advance search tab

		fillDropdown(prov_cat.value, "language", "medical_language_div");
		// SR 1267 Dropdown for Flags

		if (site_id != "ioeioq")

			fillDropdown(prov_cat.value, "provflag", "medical_provflag_div");
		// End 8390 Advance search tab

	}

	else if (provCategory == "phys_bhp")

	{

		fillDropdown(prov_cat.value, "language", "phys_bhp_language_div");

		// SR 1267 Dropdown for Flags

		if (site_id != "ioeioq")

			fillDropdown(prov_cat.value, "provflag", "phys_bhp_provflag_div");

	}

	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (provCategory == "bhp" || provCategory == "eap")
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	{

		fillDropdown(prov_cat.value, "language", "bhp_language_div");
	}

	else if (provCategory == "dpcp")

	{
		fillDropdown(prov_cat.value, "language", "dental_language_div");
	}

	else if (provCategory == "dspec")

	{
		fillDropdown(prov_cat.value, "language", "dental_language_div");
	}

	else if (provCategory == "opp" || provCategory == "facilities")

	{
		provCategory = "opp";
		// SR 1267 Dropdown for Flags
		if (site_id != "docfind" && site_id != "navigator"
				&& site_id != "ioeioq")
			fillDropdown("opp", "hospflag", "opp_hospflag_div");
	}

	else if (provCategory == "mh_facility" || provCategory == "sa_facility"
			|| provCategory == "rtf_facility")

	{

		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		fillDropdown(prov_cat.value, "level_care", "bhh_level_care_div");

		fillDropdown(prov_cat.value, "age_range", "bhh_age_range_div");

		fillDropdown(prov_cat.value, "type_service", "bhh_type_service_div");

		/* PCR C-13227 - EAP/BH changes March 2012 End */

	}

	// Start SR 1267 changes Dropdown for Flags
	// Start 8390 Advance search tab
	else if (prov_cat.value == "urgent")

	{

		fillDropdown(prov_cat.value, "hospflag", "facilities_hospflag_div");

	}

	else if (prov_cat.value == "walkin")

	{
		fillDropdown(prov_cat.value, "hospflag", "facilities_hospflag_div");
	}

	else if (prov_cat.value == "labs")

	{

		fillDropdown(prov_cat.value, "hospflag", "labs_hospflag_div");

	}

	else if (prov_cat.value == "dialysis" || prov_cat.value == "dialysislocal")

	{

		fillDropdown(prov_cat.value, "hospflag", "facilities_hospflag_div");

	}

	else if (prov_cat.value == "hospitals")

	{
		if (site_id != "docfind" && site_id != "navigator"
				&& site_id != "ioeioq") {
			show("hospflag", "hospitals_hospflag_div");
			document.getElementById("hospitals_hospflag_div").style.display = "block";
			fillDropdown(prov_cat.value, "hospflag", "hospitals_hospflag_div");
		}
	}

	else if (prov_cat.value == "ac" || prov_cat.value == "ar"
			|| prov_cat.value == "da" || prov_cat.value == "dmeloc"
			|| prov_cat.value == "ha" || prov_cat.value == "hs"
			|| prov_cat.value == "mri" || prov_cat.value == "pt"
			|| prov_cat.value == "rc" || prov_cat.value == "sk"
			|| prov_cat.value == "hstp" || prov_cat.value == "sd")

	{

		fillDropdown("facilities", "hospflag", "facilities_hospflag_div");

	}
	// Start 8390 Advance search tab

	// End SR 1267 changes Dropdown for Flags

}

function getProductCode(product)

{

	var product_code = "";

	var x = product.indexOf("|");

	if (x != -1)

	{

		product_code = product.substring(0, x);

	}

	return product_code.toUpperCase();

}

function getStoredDropdownName(product_code, search_cat, dropdown)

{

	if (dropdown == "language")

		return dropdown;

	else

		return product_code + "-" + search_cat + "." + dropdown;

}

function fillDropdown(search_cat, dropdown, section)

{

	var dddiv = document.getElementById(section);

	var productObj = document.getElementById(productID);
	var product_code = getProductCode(productObj.value);
	var stored_dropdown = getStoredDropdownName(product_code, search_cat,
			dropdown);
	var x = names.isElement(stored_dropdown);

	if (x != -1)

	{

		dddiv.innerHTML = createDropdown(search_cat, dropdown, dropdowns[x]);

	}

	else

	{

		getDropdown(product_code, search_cat, dropdown, stored_dropdown);

		var last = dropdowns.length - 1;

		dddiv.innerHTML = createDropdown(search_cat, dropdown, dropdowns[last]);

	}

}

function createDropdown(search_cat, dropdown, dropdown_options)

{

	var temp = "";
	var tabKey = document.getElementById("tabKey");

	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	/*
	 * if(tabKey != null && tabKey.value == "tab1" && search_cat == "bhp")
	 *  {
	 * 
	 * 
	 * var bhpSpecType = document.getElementById("bh_spec_prctc_cd");
	 * 
	 * if(bhpSpecType != null){
	 * 
	 * var bhpSpec = bhpSpecType.value;
	 * 
	 * if(bhpSpec == "mh_facility" || bhpSpec == "sa_facility")
	 *  {
	 * 
	 * 
	 * search_cat = bhpSpec; } } }
	 */
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	var dropdown_str = search_cat + "." + dropdown;
	// Start SR 1267 changes Dropdown for Flags

	if (((search_cat == "facilities") || (search_cat == "urgent")
			|| (search_cat == "walkin") || (search_cat == "labs") || (search_cat == "dialysis"))
			&& dropdown == "hospflag")

	{

		temp += "<select class=\"form_dropdown\" id=\"facilities_hospflag\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

		return temp;

	}

	// End SR 1267 changes Dropdown for Flags

	if (dropdown_str == "pcp.pcp_prctc_cd")

	{

		temp += "<label for=\"medical_pcp_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown_rd\" id=\"medical_pcp_prctc_cd\" onchange=\"makeDirty(this)\")>"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "spec.spec_prctc_cd")

	{

		temp += "<label for=\"medical_spec_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"medical_spec_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "phys_bhp.pcp_prctc_cd")

	{

		temp += "<label for=\"phys_bhp_pcp_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"phys_bhp_pcp_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "phys_bhp.spec_prctc_cd")

	{

		temp += "<label for=\"phys_bhp_spec_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"phys_bhp_spec_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "bhp.spec_prctc_cd"
			|| dropdown_str == "eap.spec_prctc_cd")

	{
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		temp += "<label for=\"bhp_spec_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"bhp_spec_prctc_cd\" size=\"5\" multiple onchange=\"limitSpecialties(this);rdChooseSpec(this);\">"
				+ dropdown_options + "</select>";

		/* PCR C-13227 - EAP/BH changes March 2012 End */

	}

	else if (dropdown_str == "dpcp.pcp_prctc_cd")

	{

		temp += "<select class=\"form_dropdown\" id=\"dental_pcp_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "dspec.spec_prctc_cd")

	{

		temp += "<select class=\"form_dropdown\" id=\"dental_spec_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "dall.pcp_prctc_cd")

	{

		temp += "<label for=\"dall_pcp_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"dall_pcp_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "dall.spec_prctc_cd")

	{

		temp += "<label for=\"dall_spec_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"dall_spec_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "opp.spec_prctc_cd")

	{

		temp += "<label for=\"opp_spec_prctc_cd\"><div class=\"hidden_div\">Type:</div></label><select class=\"form_dropdown\" id=\"opp_spec_prctc_cd\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "mh_facility.level_care"
			|| dropdown_str == "sa_facility.level_care"
			|| dropdown_str == "rtf_facility.level_care")

	{

		temp += "<select class=\"form_dropdown\" id=\"bhh_level_care\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "mh_facility.age_range"
			|| dropdown_str == "sa_facility.age_range"
			|| dropdown_str == "rtf_facility.age_range")

	{

		temp += "<select class=\"form_dropdown\" id=\"bhh_age_range\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown_str == "mh_facility.type_service"
			|| dropdown_str == "sa_facility.type_service"
			|| dropdown_str == "rtf_facility.type_service")

	{

		temp += "<select class=\"form_dropdown\" id=\"bhh_type_service\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown == "language")

	{

		temp += "<select class=\"form_dropdown\" id=\""
				+ getAdditionalSection(search_cat)
				+ "_language\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	// Start SR 1267 Changes Dropdown for Flags

	else if (dropdown == "provflag")

	{

		temp += "<select class=\"form_dropdown\" id=\""
				+ getAdditionalSection(search_cat)
				+ "_provflag\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	else if (dropdown == "hospflag")

	{

		temp += "<select class=\"form_dropdown\" id=\""
				+ getAdditionalSection(search_cat)
				+ "_hospflag\" onchange=\"makeDirty(this)\">"
				+ dropdown_options + "</select>";

	}

	// End SR 1267 Changes.

	return temp;

}

function getDropdown(product_code, search_cat, dropdown, stored_dropdown)

{

	xmlHttp = GetXmlHttpObject();

	if (xmlHttp == null)

		return;

	var url = "/docfind/rd/dropdowns.jsp?site_id=" + site_id + "&search_cat="
			+ search_cat + "&dropdown=" + dropdown + "&product_code="
			+ product_code;

	xmlHttp.open("GET", url, false);

	xmlHttp.onreadystatechange = function()

	{

		if (xmlHttp.readyState == 4)

		{

			handleDropdown(stored_dropdown, xmlHttp.responseText);

		}

	}

	xmlHttp.send(null);

	// Firefox - handles synchronous data when onreadystatechange is bypassed

	if (window.XMLHttpRequest)

	{

		handleDropdown(stored_dropdown, xmlHttp.responseText);

	}

}

function handleDropdown(stored_dropdown, responseText)

{

	names.push(stored_dropdown);

	dropdowns.push(responseText);

}

function fillHospitalAffiliation(section)

{

	var dddiv = document.getElementById(section);

	getHospitalAffiliation(dddiv);

}

// Start of SR1201

function fillGroupIPA(section)

{

	/*
	 * if($('#text_zip_div').is(":visible")
	 *  && ($("#state").val() == 'CA') && $("#zipcode").val()==''){
	 * showWithId("noPref"); hideWithId("medical_organization_group_ipa");
	 * }else{
	 * 
	 * 
	 * 
	 * 
	 * if($('#text_zip_div').is(":visible") && ($("#state").val() == 'CA') &&
	 * $("#zipcode").val()!=''){ hideWithId("noPref");
	 * showWithId("medical_organization_group_ipa"); }
	 */

	var dddiv = document.getElementById(section);

	var myURL = createURLFromInput();

	getGroupIPACA(dddiv, myURL);

	// }

}

function fillGroupIPAQuick(section)

{

	var dddiv = document.getElementById(section);

	var myURL = createURLFromInputQuick();

	getGroupIPACA(dddiv, myURL);

}

// End of SR1201

function createURLFromInput()

{

	var tempObj = document.getElementById("advanced_search");

	var geo1;

	var URL = "";

	for (var i = 0; i < tempObj.geo1.length; i++)

	{

		if (tempObj.geo1[i].checked)

		{

			geo1 = tempObj.geo1[i].value;

			URL += ("&geo1=" + geo1);

		}

	}

	if (geo1 == "zip")

	{

		tempObj = document.getElementById("zipcode");

		URL += ("&zipcode=" + tempObj.value);

		tempObj = document.getElementById("miles");
		/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
		var miles = '';
		miles = getMiles();
		URL += ("&miles=" + miles);
		/* P08-8459b - IOE and IOQ changes Feb 2013 End */

	}

	else if (geo1 == "city")

	{

		tempObj = document.getElementById("city");

		URL += ("&city=" + tempObj.value);

		tempObj = document.getElementById("state");

		URL += ("&state=" + tempObj.value);

	}

	else if (geo1 == "county")

	{

		tempObj = document.getElementById("county");

		URL += ("&county=" + tempObj.value);

		tempObj = document.getElementById("state");

		URL += ("&state=" + tempObj.value);

	}

	tempObj = document.getElementById(ptID);
	URL += ("&search_cat=" + tempObj.value);

	tempObj = document.getElementById(productID);

	URL += ("&product=" + tempObj.value);

	return URL;

}

function getHospitalAffiliation(dddiv)

{

	xmlHttp = GetXmlHttpObject();
	if (xmlHttp == null)

		return;

	var myURL = createURLFromInput();

	var url = "/docfind/HospitalAffiliation.do?" + myURL + "&site_id="
			+ site_id + "&langpref=" + langpref + "&servReq=HOSPDD";

	var first = getUrlVars()["zipcode"]; // To get the second parameter

	var second = getUrlVars()["miles"];

	var tempObj = document.getElementById("advanced_search");

	// Start 8390 Advance search tab
	for (var i = 0; i < tempObj.geo1.length; i++)

	{

		if (tempObj.geo1[i].checked)

		{

			geo1 = tempObj.geo1[i].value;
		}

	}

	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;

	var zipcode1 = document.getElementById("zipcode");

	var productObj = document.getElementById(productID);

	var city1 = document.getElementById("city");

	var state1 = document.getElementById("state");

	var county1 = document.getElementById("county");

	var previousInnerHTML = new String();

	previousInnerHTML = document.getElementById('div1').innerHTML;

	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) {
			if (geo1 == "zip" && prov_cat.value != "" && zipcode1.value != ""
					&& productObj.value != "") {
				dddiv.innerHTML = xmlHttp.responseText;
			}

			else if (geo1 == "city" && prov_cat.value != ""
					&& city1.value != "" && state1.value != "")

				dddiv.innerHTML = xmlHttp.responseText;

			else if (geo1 == "county" && prov_cat.value != ""
					&& county1.value != "" && state1.value != "")
				dddiv.innerHTML = xmlHttp.responseText;
			else
				dddiv.innerHTML = previousInnerHTML;
			// End 8390 Advance search tab
			// Start of SR1201
			var state = document.getElementById("stateval");
			if (state != undefined && state.value == "CA") {

				/* PCR C-13227 - EAP/BH changes March 2012 Start */
				if (provCategory != undefined
						&& (provCategory == "pcp" || provCategory == "spec"
								|| provCategory == "phys_bhp"
								|| provCategory == "bhp" || provCategory == "eap")) {/*
				 * PCR
				 * C-13227 -
				 * EAP/BH
				 * changes
				 * March
				 * 2012
				 * End
				 */
					if (geo1 != undefined && geo1 == "zip") {
						showAdditionalCA(state);

					}

				}

			}
			// End of SR1201
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

// Start of SR1201

function getGroupIPACA(dddiv, myURL)

{

	xmlHttp1 = GetXmlHttpObject();

	if (xmlHttp1 == null) {

		return;

	}

	var url = "/docfind/GroupIpaCA.do?" + myURL + "&site_id=" + site_id
			+ "&langpref=" + langpref + "&servReq=GROUPIPA";

	xmlHttp1.onreadystatechange = function()

	{

		if (xmlHttp1.readyState == 4)

		{

			dddiv.innerHTML = xmlHttp1.responseText;

		}

	}

	xmlHttp1.open("GET", url, true);

	xmlHttp1.send(null);

}

// End of SR1201

function GetXmlHttpObject()

{

	var xmlHttp = null;

	try

	{

		// Firefox, Opera 8.0+, Safari

		xmlHttp = new XMLHttpRequest();

	}

	catch (e)

	{

		// Internet Explorer

		try

		{

			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");

		}

		catch (e)

		{

			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

		}

	}

	return xmlHttp;

}

function nameSearchQuick(obj) {
	if (obj.value == "medical_prov") {

		show("medical_name_input_div_quick_public",
				"medical_name_search_section_quick");
	} else if (obj.value == "medical_grp") {

		show("medical_group_input_div_quick_public",
				"medical_name_search_section_quick");

	}

	// SR 1201 START

	/*
	 * else if(obj.value == "medical_grpca"){
	 * 
	 * 
	 * 
	 * show("medical_group_input_div_quickca","medical_name_search_section_quick");
	 * 
	 * 
	 *  }
	 */

	// SR 1201 END
	/*
	 * else if(obj.value == "")
	 * 
	 * 
	 * 
	 * hide("medical_name_search_section_quick");
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * checkQuick();
	 */

}

function hctpredetermined()

{

	if (zipcode != null)

	{

		var formObj = document.getElementById("zipcode");

		formObj.value = zipcode;

	}

	if (state != null)

	{

		selectDD(state, "state");

	}

	if (product != null)

	{

		selectDD(product, "scdd_medical_plan");

	}

	if (sortBy != null)

	{

		var formObj = document.getElementById("scdd_sortBy");

		formObj.value = sortBy;

	}

	if (selectedproc != null)

	{

		selectDD(selectedproc, "selectedproc");

		showHint(selectedproc);

	}

	if (miles != null)

	{

		selectDD(miles, "miles");

	}

	if (groups != null)

	{

		selectDD(groups, "groups");

	}

	if (errorretain != null)

	{

		document.forms[0].action = "HCTHome.do";

		document.forms[0].submit();

	}

}

function redirectindex()

{

	document.docform.action = "home.do";

	document.docform.submit();

}

function zipDecoder()

{

	if (zipDecoderFlag != null)

	{

		if (zipcode != null) {

			var formObj = document.getElementById("zipcode");

			formObj.value = zipcode;

		}

		if (state != null)

			selectDD(state, "state");

	}

}

function pinPredetermine()

{

	var formObj = document.getElementById("pinSearch");

	for (var i = 0; i < formObj.pinSearchType.length; i++)

	{

		if (formObj.pinSearchType[i].value == pinSearchType)

		{

			formObj.pinSearchType[i].checked = true;

			createPin(pinSearchType);

		}

	}

	if (provType != null)

	{

		selectDD(provType, "provType");

	}

}

function createPin(str)

{

	if (str == "pin")

	{

		show("text_pin_div", "pin_label_section");

		if (pin != null) {

			var formObj = document.getElementById("pin");

			formObj.value = pin;

		}

	}

	if (str == "npi")

	{

		show("text_npi_div", "pin_label_section");

		if (npi != null) {

			var formObj = document.getElementById("npi");

			formObj.value = npi;

		}

	}

}

// P08-7854a Hispanic Concentric Network - if the product selected is the
// Vitalidad product, show the country selection, else hide it

function showProvCountry(str)

{

	if (str == "O") {

		show("text_prov_country_div", "prov_country_label_section");

		show("input_prov_country_div", "prov_country_input_section");

		document.getElementById("prov_country_input_section").style.paddingBottom = '15px';

		document.getElementById("plans_section").style.paddingBottom = '5px';

	}

	else {

		hide("prov_country_label_section");

		hide("prov_country_input_section");

		document.getElementById("prov_country_label_section").style.paddingBottom = '0';

		document.getElementById("prov_country_input_section").style.paddingBottom = '0';

		var tabVal = document.getElementById("tabKey");

		if (tabVal != null && tabVal.value == "tab3")

		{

			document.getElementById("plans_section").style.paddingBottom = '15px';
		}
		var formObj = document.getElementById("advanced_search");

		if (formObj != null)

		{

			formObj.prov_country[0].checked = true;

		}

	}

}

// P08-7854a Hispanic Concentric Network - if the country selected is foreign
// (mexico in this case), jump to pdf. else perform normal docfind search

function checkForeign() {

	var tempObj = document.getElementById("advanced_search");

	if (tempObj != null)

	{

		for (var i = 0; i < tempObj.prov_country.length; i++) {

			if (tempObj.prov_country[i].checked
					&& tempObj.prov_country[i].value == "mexico") {

				if (langpref == "sp") {

					location.href = "/docfind/custom/sp/mexico_medical_providers.html";

				}

				else {

					location.href = "/docfind/cms/html/mexico_medical_providers.html";

				}

				return true;

			}

		}

	}

	return false;

}

function bypassStartSearchEdits() {

	var tempObj = document.getElementById("advanced_search");

	if (tempObj != null)

	{

		for (var i = 0; i < tempObj.prov_country.length; i++) {

			if (tempObj.prov_country[i].checked
					&& tempObj.prov_country[i].value == "mexico") {

				return true;

			}

		}

	}

	return false;

}

function choosePlan(obj)

{

	if (obj != null && obj.value != null)

	{

		var pl = obj.value;

		if (pl.indexOf("Mexico") != -1 && langpref == "en")

		{

			location.href = '/docfind/cms/html/mexico_medical_providers.html';

		}

		else if (pl.indexOf("Mexico") != -1 && langpref == "sp")

		{

			location.href = '/docfind/cms/html/mexico_medical_providers.html';

		}

	}

	// checkAdditional();

}

// Start of SR1201

function createURLFromInputQuick()

{

	var tempObj = document.getElementById("quick_search");

	var URL = "&geo1=city&search_cat=pcp&quickSearchType=true";

	var cityQuick = document.getElementById("cityQuick");

	if (cityQuick != undefined && cityQuick.value != "")

		URL += ("&city=" + cityQuick.value);

	var stateQuick = document.getElementById("stateQuick");

	if (stateQuick != undefined && stateQuick.value != "")

		URL += ("&geo1=&state=" + stateQuick.value);

	return URL;

}

// End of SR1201

function choosestate()

{

	var state = document.getElementById("State").value;

	location.href = "/docfind/cms/html/IOQ_Bariatric_list.html#" + state;

}

function choosestate_sp() {
	var state = document.getElementById("State").value;

	location.href = "/docfind/cms/html/sp/IOQ_Bariatric_list.html#" + state;

}

function chooseStateCardiac()

{

	var state = document.getElementById("State").value;

	location.href = "/docfind/cms/html/IOQ_cardiac_list.html#" + state;

}

function chooseStateOrthopedic_Spine()

{

	var state = document.getElementById("State_Spine").value;

	location.href = "/docfind/cms/html/IOQ_Ortho_Spine.html#" + state;

}

function chooseMedicalIntervention()

{

	var state = document.getElementById("State_CardMed").value;

	location.href = "/docfind/cms/html/IOQ_Cardiac_Intervention.html#" + state;

}

function chooseCardiacSurgery()

{

	var state = document.getElementById("State_CardSurg").value;

	location.href = "/docfind/cms/html/IOQ_Cardiac_Surgery.html#" + state;

}

function chooseCardiacRhythm()

{

	var state = document.getElementById("State_CardRhy").value;

	location.href = "/docfind/cms/html/IOQ_Cardiac_Rhythm.html#" + state;

}

function chooseStateOrthopedic_TJR()

{

	var state = document.getElementById("State_TJR").value;

	location.href = "/docfind/cms/html/IOQ_Ortho_TJR.html#" + state;

}

function chooseMedicalIntervention_sp() {
	var state = document.getElementById("State_CardMed").value;

	location.href = "/docfind/cms/html/sp/IOQ_Cardiac_Intervention.html#"
			+ state;

}

function chooseCardiacSurgery_sp() {
	var state = document.getElementById("State_CardSurg").value;

	location.href = "/docfind/cms/html/sp/IOQ_Cardiac_Surgery.html#" + state;

}

function chooseCardiacRhythm_sp() {
	var state = document.getElementById("State_CardRhy").value;

	location.href = "/docfind/cms/html/sp/IOQ_Cardiac_Rhythm.html#" + state;

}

function rdChooseSpec(obj) {

	var searchFor = document.getElementById("provider_type_section");
	var type = searchFor.value;
	var tabVal = document.getElementById("tabKey");
	var site_id = $.getUrlVar('site_id');

	if (tabVal != null && tabVal.value == "tab3") {
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		if (obj.value == "bhp" || obj.value == "eap")

		{

			if (obj.value == "eap") {

				type = "bhp";

			}

			/* PCR C-13227 - EAP/BH changes March 2012 End */

			show_additional = getAdditionalSection(type);
			s1 = show_additional + "_additional";
			show(s1, "additional_section_advance");

			document.getElementById("additional_section_advance").style.borderBottom = '1px solid #D1D1D1';

			showAdditional();

		}

		else if (obj.value == "rtf_facility" || obj.value == "sa_facility"
				|| obj.value == "mh_facility")

		{

			fillDropdown(obj.value, "level_care", "bhh_level_care_div");

			fillDropdown(obj.value, "age_range", "bhh_age_range_div");

			fillDropdown(obj.value, "type_service", "bhh_type_service_div");

			show_additional = getAdditionalSection(obj.value);
			s1 = show_additional + "_additional";
			show(s1, "additional_section_advance");
		}
	}

	// Redirect Pharmacy Specialty
	if (type == "pharmacy") {
		var pharmacySpecType = document
				.getElementById("pharmacy_spec_prctc_cd");
		var pharmacySpec = pharmacySpecType.value;

		if (pharmacySpec == "pharmacy" && langpref == "en") {
			if (site_id == "aetnapharmacy") {
				show("input_pharmacy_plans", "plans_section");
				productID = "pharmacy_plans";
			}
		} else if (pharmacySpec == "pspec" && langpref == "en") {
			if(site_id == "bannerpharmacy"){
				provForward("/docfind/cms/assets/pdf/Banner_Aetna_Specialty_Pharmacy_Network.pdf");
			} 
			else if (site_id == "allinapharmacy") {
				provForward("/docfind/cms/assets/pdf/Allina_Aetna_Specialty_Pharmacy.pdf");
			}
			
			else if (site_id == "sutterpharmacy") {
				provForward("/docfind/cms/assets/pdf/specialty_pharmacy.pdf");
			}
			else if (site_id == "texaspharmacy") {
				provForward("/docfind/cms/assets/pdf/specialty_pharmacy.pdf");
			}
			else if (site_id == "ihpharmacy") {
				provForward("/docfind/cms/assets/pdf/specialty_pharmacy.pdf");
			}
			else if (site_id != "aetnapharmacy") {
				provForward("/docfind/cms/assets/pdf/specialty_pharmacy.pdf");
			}
			else {
				show("input_ipacal_plans", "plans_section");
				productID = "ipacal_plans";
			}
		}

		// else if(pharmacySpec == "pspec" && langpref=="sp")
		//	
		// provForward("/docfind/custom/sp/specialty_pharmacy.html");

		else if (pharmacySpec == "pspec" && langpref == "sp")

			provForward("/docfind/cms/assets/pdf/specialty_pharmacy_spanish.pdf");

		else if (pharmacySpec == "psmail" && langpref == "en"){

			if(site_id == "MDCRRX"){
				window.open("https://www.aetnamedicare.com/en/prescription-drugs/mail-order-pharmacy.html" , "_blank");
			}
			else{
				window.open("https://www.aetna.com/individuals-families/pharmacy/rx-home-delivery.html" , "_blank");
			}
		}

		else if (pharmacySpec == "psmail" && langpref == "sp")
		{
			if(site_id == "MDCRRX"){
				window.open("https://es.aetnamedicare.com/en/prescription-drugs/mail-order-pharmacy.html" , "_blank");
			}
			else{
				window.open("https://www.aetna.com/individuals-families/pharmacy/rx-home-delivery.html" , "_blank");
			}
			
		}
		else if (pharmacySpec == "flushot")

			provForward("/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf");

		else if (pharmacySpec == "hearing")

			provForward("/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf");
	}
	// Redirect Labs Specialty
	else if (type == "labs") {
		var labsSpecType = document.getElementById("labs_spec_prctc_cd");
		var labsSpec = labsSpecType.value;
		if (labsSpec == "nll")
			provForward("/docfind/cms/html/National_Lab_Listing.html");
	}
	// Redirect Dental Specialty
	else if (type == "dpcp") {

		var dentalSpecType = document.getElementById("dental_pcp_prctc_cd");
		var dentalSpec = dentalSpecType.value;
		if (dentalSpec == "dpcpm" && langpref == "en")
			provForward("/docfind/cms/html/mexico_dental_network.html");
		else if (dentalSpec == "dpcpm" && langpref == "sp")
			provForward("/docfind/cms/html/sp/mexico_dental_network.html");
	} else if (type == "dspec") {

		var dentalSpecType = document.getElementById("dental_spec_prctc_cd");
		var dentalSpec = dentalSpecType.value;
		if (dentalSpec == "dspecm" && langpref == "en")
			provForward("/docfind/cms/html/mexico_dental_network.html");
		else if (dentalSpec == "dspecm" && langpref == "sp")
			provForward("/docfind/cms/html/sp/mexico_dental_network.html");
	}
	// show facility specialties
	else if (type == "opp") {
		var facilitySpecType = document
				.getElementById("facilities_spec_prctc_cd");
		var facilitySpec = facilitySpecType.value;
		if (facilitySpec == "opp") {
			show_specialty = getAdditionalSection(facilitySpec);
			show_additional = show_specialty;
			var myStr = show_specialty + "_additional_div";
			document.getElementById("type_label").style.display = "";

			document.getElementById("axcel_section").style.display = 'none';

			rdPopulateSpecialtyDropdowns();

			show(myStr, "additional_section");
		} else if (facilitySpec == "dmenat" && langpref == "en")
			provForward("/docfind/cms/html/national_dme_providers.html");
		else if (facilitySpec == "dmenat" && langpref == "sp")
			provForward("/docfind/cms/html/sp/national_dme_providers.html");
		else if (facilitySpec == "hstp")
			provForward("/docfind/cms/html/National_Home_Sleep_Testing.html");
		// content 1113
		else if (site_id != null
				&& (site_id == "provider" || site_id == "provider2")
				&& facilitySpec == "nip") {
			provForward("/docfind/cms/html/national_infusion_providers.html");
		}
	}
	// show spec specialties
	else if (type == "spec") {
		var medSpecType = document.getElementById("spec_spec_prctc_cd");
		var medSpec = medSpecType.value;

		if (medSpec == "spec") {
			show_specialty = getAdditionalSection(medSpec);
			show_additional = show_specialty;
			var myStr = show_specialty + "_additional_div";
			document.getElementById("type_label").style.display = "";
			rdPopulateSpecialtyDropdowns();
			show(myStr, "additional_section");
		}
	}

	// show phys_bhp specialties
	else if (type == "phys_bhp") {

		var medSpecType = document.getElementById("all_med_spec_prctc_cd");
		var medSpec = medSpecType.value;

		if (medSpec == "phys_bhp") {
			show_specialty = getAdditionalSection(medSpec);
			show_additional = show_specialty;
			var myStr = show_specialty + "_additional_div";
			document.getElementById("type_label").style.display = "";
			rdPopulateSpecialtyDropdowns();
			show(myStr, "additional_section");
		}
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */

	else if (type == "ioe") {
		var ioeSpec = "";
		if (document.getElementById("ioe_spec_prctc_cd") != null)
			ioeSpec = document.getElementById("ioe_spec_prctc_cd").value;
		if (ioeSpec != "" && ioeSpec == "Transplant") {
			rdHideSearchButton();
		} else {
			rdShowSearchButton();
			// show("input_ioeioq_distance_div", "geo_attr_input_section");
		}
	}
	/*
	 * else if(type == "ioq"){ var ioqSpec = "";
	 * if(document.getElementById("ioq_spec_prctc_cd") != null) ioqSpec =
	 * document.getElementById("ioq_spec_prctc_cd").value; if(ioqSpec != "" &&
	 * (ioqSpec == "IOQBARIATR|IOQ Bariatric"||ioqSpec == "CARDMEDINT|Cardiac
	 * Medical Intervention IOQ Cardiac"||ioqSpec == "CARDRHYTHM|Cardiac Rhythm
	 * IOQ Cardiac"||ioqSpec == "CARDSURG|Cardiac Surgery IOQ Cardiac"||ioqSpec ==
	 * "SPINE|Spine IOQ Ortho"||ioqSpec == "TJREPLACE|Total Joint Replacement
	 * IOQ Ortho")){ rdHideSearchButton(); } else{ rdShowSearchButton();
	 * //show("input_ioeioq_distance_div", "geo_attr_input_section"); } }
	 */
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */

	$('#medical_spec_prctc_cd').mouseover(function() {
		$('#medical_spec_prctc_cd').css("width", "auto");
	});

	$('#phys_bhp_spec_prctc_cd').mouseover(function() {
		$('#phys_bhp_spec_prctc_cd').css("width", "auto");
	});
}

/* Start Changes 8390a - Feb 12 release - */

/* function to display various arrows on summary table column header */

function changeArrowDirectionrd(columnId, summaryURL, pSortOrder, keyTab,
		oldSortBy, isTab1, lastProvRow, lastProvRowTab2)

{

	var sortBy;

	var sortOrder;

	/* P8390a - Sorting changes Start */

	var columnClick = "Y";
	/* P8390a - Sorting changes End */

	/* Click of Column Location */

	if (columnId == "columnLocation")

	{

		sortBy = "dist";
		if (sortBy != oldSortBy) {
			sortOrder = "ASC";
		} else {
			if (pSortOrder == "DESC") {
				sortOrder = "ASC";
			} else if (pSortOrder == "ASC") {
				sortOrder = "DESC";
			}
		}
	}

	/* Click of Column Name */

	else if (columnId == "columnName")

	{

		sortBy = "name";
		if (sortBy != oldSortBy) {
			sortOrder = "ASC";
		} else {
			if (pSortOrder == "DESC") {
				sortOrder = "ASC";
			} else if (pSortOrder == "ASC") {
				sortOrder = "DESC";
			}
		}
	}

	/* Click of Column Quality */

	else if (columnId == "columnQuality1" || columnId == "columnQuality2")

	{

		/* Sets Background Color */

		sortBy = "quality";
		if (sortBy != oldSortBy) {
			sortOrder = "ASC";
		} else {
			if (pSortOrder == "DESC") {
				sortOrder = "ASC";
			} else if (pSortOrder == "ASC") {
				sortOrder = "DESC";
			}
		}
	}
	/* P8390a - Sorting changes Start */

	doSummarySort(summaryURL, sortBy, sortOrder, keyTab, columnClick, isTab1,
			lastProvRow, lastProvRowTab2);
	/* P8390a - Sorting changes End */

}

/* function to form the new URL with sort parameteres */

/* P8390a - Sorting changes Start */

function doSummarySort(summaryURL, sortBy, sortOrder, keyTab, columnClick,
		isTab1, lastProvRow, lastProvRowTab2)

{

	var newSortURL = summaryURL;

	location.href = "/docfind/provSummarySearch.do?" + newSortURL
			+ "&lastProvRow=" + lastProvRow + "&lastProvRowTab2="
			+ lastProvRowTab2 + "&newSearchInd=Y&sortBy=" + sortBy
			+ "&sortOrder=" + sortOrder + "&tabKey=" + keyTab + "&columnClick="
			+ columnClick + "&isTab1=" + isTab1;

}

/* P8390a - Sorting changes End */

/* function to toggle other important information section */

function togglerd(showHideDiv, switchImgTag)

{

	var ele = document.getElementById(showHideDiv);

	var imageEle = document.getElementById(switchImgTag);

	if (ele.style.display == "block") {

		ele.style.display = "none";

		imageEle.innerHTML = '<img class="blockImageBorder" src="assets/images/buttons_open2.gif" alt="Open a list of health related popUps">';

	}

	else {

		ele.style.display = "block";

		imageEle.innerHTML = '<img class="blockImageBorder" src="assets/images/buttons_close2.gif" alt="Close a list of health related popUps">';
	}

}

var chkHosp = true;

function typeOfServiceDialogHosprd(urlHosp, queryParametersHosp, providerName) {

	$contentElement = $("#tosHospDialogBox");

	$contentElement.load(urlHosp + "  #tosPopup", queryParametersHosp,

	function($data) {

		$("#tosHospDialogBox").html($data);
		// $('#tosDialogBox').attr('title', providerName);
		// $('#tosDialogBox').attr('title', '<table><tr><td>Facility
		// Name<br/><span class="dialog-sub-title">Types of
		// Service</span></td></tr></table>');
		// $('#tosDialogBox').attr('text', '<table><tr><td>You can narrow your
		// search to a particular type of service using the Type pull-down on
		// the search screen.</td></tr></table>')
		// $('#tosDialogBox').doDialog({top:150, width: 360, modal:false,
		// draggable:true, closeOnEscape:true},
		// [{id:"btnClose",value:'CLOSE', url:"javascript:closeDialogrd();",
		// arrow:true}]);
		// $('#tosDialogBox').trigger('show');

		if (chkHosp) {

			buildHospAlertBox(providerName);

			$('#tosHospDialogBox').trigger('show');

			chkHosp = false;
		} else {
			var divTitle = document.getElementById("diaTitle");
			if (divTitle != null) {
				divTitle.innerHTML = providerName;
			}

			$('#tosHospDialogBox').trigger('show');
		}
	});
}

function buildHospAlertBox(provName) {

	$('#tosHospDialogBox').attr('title', provName);

	$('#tosHospDialogBox').attr('subtitle', 'Types of Service ');

	$('#tosHospDialogBox')
			.attr(
					'dialogText',
					'You can narrow your search to a particular type of service using the Type pull-down on the search screen.');

	$('#tosHospDialogBox').doDialog({
		width : 360,
		modal : true,
		draggable : true,
		closeOnEscape : true
	},

	[ {
		id : "btnClose3",
		value : 'CLOSE',
		url : "javascript:closeDialogrd();",
		arrow : true
	} ]);

	$("#btnClose3").click(function() {

		$('#tosHospDialogBox').trigger('hide');
	});

}

var chk = true;

function typeOfServiceDialogrd(url, queryParameters, providerName) {

	$contentElement = $("#tosDialogBox");

	$contentElement.load(url + "  #tosPopup", queryParameters,

	function($data) {

		$("#tosDialogBox").html($data);
		// $('#tosDialogBox').attr('title', providerName);
		// $('#tosDialogBox').attr('title', '<table><tr><td>Facility
		// Name<br/><span class="dialog-sub-title">Types of
		// Service</span></td></tr></table>');
		// $('#tosDialogBox').attr('text', '<table><tr><td>You can narrow your
		// search to a particular type of service using the Type pull-down on
		// the search screen.</td></tr></table>')
		// $('#tosDialogBox').doDialog({top:150, width: 360, modal:false,
		// draggable:true, closeOnEscape:true},
		// [{id:"btnClose",value:'CLOSE', url:"javascript:closeDialogrd();",
		// arrow:true}]);
		// $('#tosDialogBox').trigger('show');

		if (chk) {

			buildAlertBox(providerName);

			$('#tosDialogBox').trigger('show');

			chk = false;
		} else {
			var divTitle = document.getElementById("diaTitle");
			if (divTitle != null) {
				divTitle.innerHTML = providerName;
			}

			$('#tosDialogBox').trigger('show');
		}
	});
}

function buildAlertBox(provName) {

	$('#tosDialogBox').attr('title', provName);

	$('#tosDialogBox').attr('subtitle', 'Types of Service ');

	$('#tosDialogBox')
			.attr(
					'dialogText',
					'You can narrow your search to a particular type of service using the Type pull-down on the search screen.');

	$('#tosDialogBox').doDialog({
		width : 360,
		modal : true,
		draggable : true,
		closeOnEscape : true
	},

	[ {
		id : "btnClose",
		value : 'CLOSE',
		url : "javascript:closeDialogrd();",
		arrow : true
	} ]);

	$("#btnClose").click(function() {

		$('#tosDialogBox').trigger('hide');
	});

	var $subTitleTextSecure = $("div.dialog-subtitle");
	var $titleDivSecure = $('#tosDialogBox').prev();
	var $dialogButton = $("div.dialog-button-holder");

	if (!$subTitleTextSecure.length > 0 && (urlProtocol == 'https:')) {

		$titleDivSecure.html('');
		$titleDivSecure.html("<div id='diaTitle'>" + provName + "</div>");
		$titleDivSecure
				.append("<span style='font-family: Arial;font-size: 13px;color: #333333;font-weight: normal;'>Types of Service </span>");
		if ($dialogButton.length) {
			$dialogButton.html('');
			$dialogButton
					.html("<table><tbody><tr><td class='dialog-button-cell'><a href='javascript:closeDialogrd();' onclick='javascript:closeDialogrd();' class='GoldButtonLink' id='btnClose'><table cellspacing='0' cellpadding='0' style='position: relative; left: 2px'><tbody><tr><td class='gold_button_close'>&nbsp;</td></tr></tbody></table></a></td></tr></tbody></table>");
			$dialogButton
					.prepend("<div class='dialog-dialogText'>You can narrow your search to a particular type of service using the Type pull-down on the search screen.</div>");
		}
	}

	/*
	 * if($subTitleTextSecure.length > 0 && !$titleDivSecure.length > 0){
	 * alert("public"); $subTitleTextSecure.html(''); $subTitleTextSecure.html("<div
	 * id='diaTitle' class='dialog-title'>Bhure Megha</div>");
	 * $subTitleTextSecure.append("Types of Service"); alert("JS Docfind is
	 * picked"); }
	 * 
	 * if($dialogButton.length){ $dialogButton.html(''); $dialogButton.html("<table><tbody><tr><td class='dialog-button-cell'><a
	 * href='javascript:closeDialogrd();' onclick='undefined'
	 * class='GoldButtonLink' id='btnClose'><table cellspacing='0'
	 * cellpadding='0' style='position: relative; left: 2px'><tbody><tr><td class='gold_button_close'>&nbsp;</td></tr></tbody></table></a></td></tr></tbody></table>");
	 * $dialogButton.prepend("<div class='dialog-dialogText'>You can narrow
	 * your search to a particular type of service using the Type pull-down on
	 * the search screen.</div>"); alert("JS close button div");
	 *  }
	 */

}

var chkFlag = true;

function moreInfoFlagDialogrd(flagUrl, flagQueryParameters) {

	$contentElement = $("#flagDialogBox");

	$contentElement.load(flagUrl + "  #flagPopup", flagQueryParameters,

	function($data) {

		$("#flagDialogBox").html($data);

		if (chkFlag) {

			buildFlagAlertBox();

			$('#flagDialogBox').trigger('show');

			chkFlag = false;
		} else {
			$('#flagDialogBox').trigger('show');
		}

	});

}

function buildFlagAlertBox() {

	$('#flagDialogBox').attr('title', 'More Information <br/><br/>');

	$('#flagDialogBox').attr('subtitle', '');

	$('#flagDialogBox').attr('dialogText', '');

	$('#flagDialogBox').doDialog({
		width : 360,
		modal : true,
		draggable : true,
		closeOnEscape : true
	},

	[ {
		id : "btnClose2",
		value : 'CLOSE',
		url : "javascript:closeDialogrd();",
		arrow : true
	} ]);

	$("#btnClose2").click(function() {

		$('#flagDialogBox').trigger('hide');

	});

}

function closeDialogrd() {

	$('#tosDialogBox').trigger('hide');

	$('#flagDialogBox').trigger('hide');
	$('#planDialogBox').trigger('hide');

}

function datacorrectionrd()

{

	var domRegistration = document.domain;

	var domDemographics = "";

	if (domRegistration.substr(0, 3) == "dev")

	{

		domDemographics = "dev3www.aetna.com";

	}

	else if (domRegistration.substr(0, 2) == "qa")

	{

		domDemographics = "qa3www.aetna.com";

	}

	else if (domRegistration.substr(0, 3) == "str")

	{

		domDemographics = "str2wwwr5.aetna.com";
	} else {

		domDemographics = "www.aetna.com";
	}

	var windowName = 'popup';

	var url = CONTEXT_ROOT + "data_correction.html";

	var winOpts = 'width=700,height=525,scrollbars=yes,resizable=yes,toolbar=yes';

	window.name = 'INDEX';

	aWindow = window.open(url, windowName, winOpts);

}

function bhNewSearchRd() {

	var urlStr = location.href;

	var intIndexOfMatch = urlStr.indexOf("miles=");

	var milesObj = document.getElementById("miles1");

	if (milesObj != null) {

		var miles = document.getElementById("miles1").value;

		var replaceKey = "miles=" + miles + "&";

		var finalUrlStr = urlStr;

		var intIndexOfFirstElement = urlStr.indexOf("?");

		if (intIndexOfMatch != -1) {

			finalUrlStr = urlStr.replace(new RegExp("miles=[0-9]{0,}&", "gi"),
					replaceKey);

		} else if (intIndexOfFirstElement != -1) {

			finalUrlStr = urlStr + "&miles=" + miles;

		} else {

			finalUrlStr = urlStr + "?miles=" + miles;

		}

		location.href = finalUrlStr;

	} else {

		doSubmit('provSummarySearch');
	}

}

/* End Changes 8390a - Feb 12 release */

function rdSetProviderCategory(str) {
	if ((str != null)
			&& (str == "pcp" || str == "spec" || str == "ntp" || str == "phys_bhp")) {
		document.getElementById("provider_category").value = "medical";
	} else if ((str != null) && (str == "dpcp" || str == "dspec")) {
		document.getElementById("provider_category").value = "dental";
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	else if ((str != null)
			&& (str == "bhp" || str == "mh_facility" || str == "sa_facility"
					|| str == "rtf_facility"

			|| str == "eap")) {/* PCR C-13227 - EAP/BH changes March 2012 End */
		document.getElementById("provider_category").value = "bh";
	} else if ((str != null) && (str == "hospitals")) {
		document.getElementById("provider_category").value = "hospitals";
	} else if ((str != null) && (str == "dialysislocal")) {
		document.getElementById("provider_category").value = "dialysis";
	} else if ((str != null) && (str == "labs")) {
		document.getElementById("provider_category").value = "labs";
	} else if ((str != null) && (str == "opp")) {
		document.getElementById("provider_category").value = "facilities";
	} else if ((str != null) && (str == "urgent")) {
		document.getElementById("provider_category").value = "urgent";
	} else if ((str != null) && (str == "walkin")) {
		document.getElementById("provider_category").value = "walkin";
	} else if ((str != null) && (str == "hearing")) {
		document.getElementById("provider_category").value = "hearing";
	} else if ((str != null) && (str == "eyewear")) {
		document.getElementById("provider_category").value = "vision";
	} else if ((str != null) && (str == "pharmacy")) {

		document.getElementById("provider_category").value = "pharmacy";
	} else if ((str != null) && (str == "ipacal")) {

		document.getElementById("provider_category").value = "ipacal";
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	else if ((str != null) && (str == "ioq")) {
		document.getElementById("provider_category").value = "ioq";
	} else if ((str != null) && (str == "ioe")) {
		document.getElementById("provider_category").value = "ioe";
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */
}

function rdDisplayPlan(str) {
	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	if (str == "walkin" || str == "pcp" || str == "spec" || str == "urgent"
			|| str == "bhp" || str == "ntp" || str == "labs"
			|| str == "dialysislocal" || str == "opp" || str == "hospitals"
			|| str == "phys_bhp" || str == "medical" || str == "mh_facility"
			|| str == "sa_facility" || str == "rtf_facility" || str == "ioq"
			|| str == "ioe") {/* PCR C-13227 - EAP/BH changes March 2012 End */
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";
	}

	else if (str == "dpcp" || str == "dspec" || str == "dental") {
		show("input_dental_plans", "plans_section");
		productID = "dental_plans";
	}

	else if (str == "hearing") {
		show("input_hearing_plans", "plans_section");
		productID = "hearing_plans";
	} else if (str == "vision") {
		var pl = document.getElementById("plans_label");
		pl.style.display = 'none';
		hide("plans_section");
		hide("plans_label");

		productID = "hearing_plans";

		ptID = "vision_provider_type";
	} else if (str == "pharmacy") {
		show("input_pharmacy_plans", "plans_section");
		productID = "pharmacy_plans";
	} else if (str == "ipacal")

	{

		show("input_ipacal_plans", "plans_section");

		productID = "ipacal_plans";

		show_additional = getAdditionalSection("ipacal");

		// ptID = "ipacal_provider_type";

	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (str == "eap") {
		show("input_eap_plans", "plans_section");
		productID = "eap_plans";
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
}

function populateHospitalAffiliations() {
	// var search_cat = document.getElementById(ptID);

	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;
	if (provCategory == "pcp") {
		fillHospitalAffiliation("medical_hospaffil_div");
	}

	else if (provCategory == "spec")

	{
		fillHospitalAffiliation("medical_hospaffil_div");
	}

	else if (provCategory == "phys_bhp")

	{

		fillHospitalAffiliation("phys_bhp_hospaffil_div");

	}

	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (provCategory == "bhp" || provCategory == "eap")
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	{

		fillHospitalAffiliation("bhp_hospaffil_div");

	}

	else if (provCategory == "opp" || provCategory == "facilities")

	{
		provCategory = "opp";

		// SR 1267 Dropdown for Flags
		if (site_id != "docfind" && site_id != "navigator"
				&& site_id != "ioeioq")
			fillDropdown("opp", "hospflag", "opp_hospflag_div");
	}

}

function rdPopulateSpecialtyDropdowns() {
	// var search_cat = document.getElementById(ptID);
	var flagRD = document.getElementById("flagAdvance");
	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;
	if (provCategory == "pcp") {

		if (site_id != "walmart" && site_id != "walmart1"
				&& site_id != "walmart2" && site_id != "ioeioq") {
			fillDropdown(prov_cat.value, "pcp_prctc_cd",
					"medical_specialty_div");
		}
	} else if (provCategory == "spec") {

		if (site_id != null
				&& (site_id == "walmart" || site_id == "walmart1"
						|| site_id == "walmart2" || site_id == "ioeioq"))
			show("medical_additional_div", "additional_section");
		else
			fillDropdown(prov_cat.value, "spec_prctc_cd",
					"medical_specialty_div");
	} else if (provCategory == "phys_bhp") {

		if (site_id != null
				&& (site_id == "walmart" || site_id == "walmart1" || site_id == "walmart2"))
			show("phys_bhp_additional_div", "additional_section");
		else
			fillDropdown(provCategory, "spec_prctc_cd", "phys_bhp_spec_div");
	} else if (provCategory == "dpcp") {

		fillDropdown(prov_cat.value, "pcp_prctc_cd", "dental_specialty_div");
	} else if (provCategory == "dspec") {

		fillDropdown(prov_cat.value, "spec_prctc_cd", "dental_specialty_div");
	} else if (provCategory == "opp" || provCategory == "facilities") {
		provCategory = "opp";

		fillDropdown(provCategory, "spec_prctc_cd", "opp_specialty_div");
	} else if (provCategory == "ioe") {
		provCategory = "ioe";
		fillDropdown(provCategory, "ioe_spec_prctc_cd", "ioe_specialty_div");
	}

	else if (provCategory == "ioq") {
		provCategory = "ioq";

		fillDropdown(provCategory, "ioq_spec_prctc_cd", "ioq_specialty_div");
	}
}

/* Start Changes for p8390a */

function showProviderType(obj)

{

	if (obj.value == "medical_prov_new")

		show("medical_name_input_div_new_rd",
				"medical_name_search_section_new_rd");

	else if (obj.value == "medical_grp_new")

		show("medical_group_input_div_new_rd",
				"medical_name_search_section_new_rd");

	else if (obj.value == "")

		hide("medical_name_search_section_new_rd");

	if (obj.value == "dental_prov_new")

		show("dental_name_input_div_new_rd",
				"dental_name_search_section_new_rd");

	else if (obj.value == "dental_grp_new")

		show("dental_group_input_div_new_rd",
				"dental_name_search_section_new_rd");

	else if (obj.value == "")

		hide("dental_name_search_section_new_rd");

}

function showProviderTypelink(str)

{

	if (str == "medical_prov_new")

	{

		show("info_name_input_div_new_rd", "info_name_search_section_new_rd");
		document.getElementById("medical_name_rd").value = "medical_prov_new";
		document.getElementById("info_group_ipa").value = "";
	}

	else if (str == "medical_grp_new")

	{

		show("info_group_input_div_new_rd", "info_name_search_section_new_rd");

		document.getElementById("medical_name_rd").value = "medical_grp_new";
		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";

	}

	else if (str == "") {

		hide("info_name_search_section_new_rd");
	}

	if (str == "dental_prov_new")

	{

		show("dental_name_input_div_new_rd",
				"dental_name_search_section_new_rd");

		document.getElementById("medical_name_rd").value = "dental_prov_new";
		document.getElementById("dental_group_ipa").value = "";
	}

	else if (str == "dental_grp_new")

	{

		show("dental_group_input_div_new_rd",
				"dental_name_search_section_new_rd");

		document.getElementById("medical_name_rd").value = "dental_grp_new";
		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";

	} else if (str == "") {

		hide("dental_name_search_section_new_rd");
	}

	// change

	if (str == "bhp_prov_new")

	{

		show("bhp_name_input_div_new_rd", "bhp_name_search_section_new_rd");

		document.getElementById("medical_name_rd").value = "bhp_prov_new";

		document.getElementById("bhp_group_ipa").value = "";

	}

	else if (str == "bhp_grp_new")

	{

		show("bhp_group_input_div_new_rd", "bhp_name_search_section_new_rd");

		document.getElementById("medical_name_rd").value = "bhp_grp_new";

		document.getElementById("bhp_individual").value = "";

		document.getElementById("bhp_individual_first").value = "";
	} else if (str == "") {

		hide("bhp_name_search_section_new_rd");
	}

}

function searchByNameCreateIndex(str)

{

	// resetIndex();

	var formObj = document.getElementById("advanced_search");

	var pharmacy = document.getElementById("pharmacy");

	var medical = document.getElementById("medical_input_area");

	var med_name = document.getElementById("medical_name_rd");

	var tabKey = document.getElementById("tabKey");

	if (urlProtocol == "https:")

	{

		if (tabKey != null && tabKey.value != "tab3")

		{

			document.getElementById("sign_in_text").style.display = 'none';

			document.getElementById("sign_rd").style.display = 'none';
		}
	}
	if (str == "") {

		document.getElementById("name_padding_rd").style.paddingBottom = '15px';

		productID = null;

		hide("additional_info_byname");

		hide("pharmacy_additional_byname");

		hide("hospfac_additional_byname");

		hide("info_name_input_div_new_rd");
		show("geo_attr_pharmacy_div", "geo_attr");
		hide("geo_attr_div");
	}
	if (str == "pharmacy" || str == "hearing") {
		show("geo_attr_pharmacy_div", "geo_attr");
		hide("geo_attr_div");
		var geoVal = "";
		if (formObj.geo1[0].checked == true) {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[4].checked = true;
			geoVal = formObj.geo1[4].value;
		} else if (formObj.geo1[4].checked == true) {
			formObj.geo1[4].checked = true;
			geoVal = formObj.geo1[4].value;
		}
		else {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		}

		createGeobyname(geoVal);
	} else {
		show("geo_attr_div", "geo_attr");
		hide("geo_attr_pharmacy_div");
		if (formObj.geo1[3].checked == true) {
			formObj.geo1[0].checked = true;
			geoVal = formObj.geo1[0].value;
		} else if (formObj.geo1[4].checked == true) {
			formObj.geo1[1].checked = true;
			geoVal = formObj.geo1[1].value;
		} else if (formObj.geo1[2].checked == true) {
			formObj.geo1[2].checked = true;
			geoVal = formObj.geo1[2].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[1].checked = true;
			geoVal = formObj.geo1[1].value;
		} else {
			formObj.geo1[0].checked = true;
			geoVal = formObj.geo1[0].value;
		}
		createGeobyname(geoVal);
	}

	/* PCR March 2012 Changes Start */

	if (str == "medical" || str == "bh" || str == "eap") {
		/* PCR C-13227 - EAP/BH changes March 2012 End */
		// show("medical_additional_byname","additional_input_section");
		show("additional_info_byname", "additional_input_section");
		show("info_name_input_div_new_rd", "info_name_search_section_new_rd");
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";

		document.getElementById("medical_name_rd").value = "medical_prov_new";

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";

		document.getElementById("name_padding_rd").style.paddingBottom = '0px';

		var objFirstName = document.getElementById("info_individual_first");

		if (objFirstName != null) {
			objFirstName.name = "individual_first";
		}

		var objLastName = document.getElementById("info_individual");
		if (objLastName != null) {
			objLastName.name = "individual";
		}

		var objgrpipa = document.getElementById("info_group_ipa");
		if (objgrpipa != null) {
			objgrpipa.name = "group_ipa";
		}

	} else if (str == "dental")

	{
		// show("medical_additional_byname","additional_input_section");

		show("additional_dental_byname", "additional_input_section");
		show("dental_name_input_div_new_rd",
				"dental_name_search_section_new_rd");
		show("input_dental_plans", "plans_section");
		productID = "dental_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		document.getElementById("medical_name_rd").value = "dental_prov_new";

		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";
		document.getElementById("info_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";

		var objFirstName = document.getElementById("dental_individual_first");
		if (objFirstName != null) {
			objFirstName.name = "dental_individual_first";
		}

		var objLastName = document.getElementById("dental_individual");
		if (objLastName != null) {
			objLastName.name = "dental_individual";
		}

		var objgrpipa = document.getElementById("dental_group_ipa");
		if (objgrpipa != null) {
			objgrpipa.name = "dental_group_ipa";
		}
	}

	else if (str == "pharmacy") {
		show("pharmacy_additional_byname", "additional_input_section");
		show("input_pharmacy_plans", "plans_section");
		productID = "pharmacy_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '5px';

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";
		document.getElementById("info_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
	} else if (str == "hospfac") {
		show("hospfac_additional_byname", "additional_input_section");
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '5px';

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";
		document.getElementById("info_group_ipa").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";
	}
}

function createGeobyname(str)

{

	if (str == "zip")

	{

		show("text_zip_div", "geo_type_label_section");

		show("input_zip_div", "geo_type_input_section");

		show("text_distance_div", "geo_attr_label_section");

		show("input_distance_div", "geo_attr_input_section");

	}

	else if (str == "city")

	{

		show("text_city_div", "geo_type_label_section");

		show("input_city_div", "geo_type_input_section");

		show("text_state_div", "geo_attr_label_section");

		show("input_state_div", "geo_attr_input_section");

	}

	else if (str == "county")

	{

		show("text_county_div", "geo_type_label_section");

		show("input_county_div", "geo_type_input_section");

		show("text_state_div", "geo_attr_label_section");

		show("input_state_div", "geo_attr_input_section");

	}

}

/* end changes for p8390a */

var Lst;

function changeClassrd(obj)

{

	if (Lst) {

		Lst.className = '';

	}

	obj.className = 'selectedLink_rd';

	Lst = obj;

}

function rdCopyright()

{

	AetnaCom_fulldate = new Date();

	AetnaCom_autoupdateyear = AetnaCom_fulldate.getFullYear();

	document.write("<br /><div class='rdFooter'>Copyright &copy; 2001-");

	document.write(AetnaCom_autoupdateyear);

	document.write("&nbsp;Aetna Inc.</div>");

}

function rdFooter()

{

	populateUrlParameters();

	var langpref = $.getUrlVar('langpref');
	var site_id = $.getUrlVar('site_id');
	var urlProtocol = window.location.protocol;
	if (site_id == "innovationhealth") {
		document
				.write("<br /><div role='navigation' aria-label='footer'><a class='rdFooter' href='http://www.innovation-health.com/'>Home</a> &nbsp; | "
						+ "&nbsp; <a class='rdFooter' href='/docfind/cms/assets/pdf/innovationhealth/IH_Web_privacy_statement.pdf'>Privacy Information</a> &nbsp; |"
						+ "&nbsp; <a class='rdFooter' href='http://www.innovation-health.com/legal-notices-and-privacy-policies'>Legal Statement </a> &nbsp; | "
						+ "&nbsp; <a class='rdFooter' href=http://www.innovation-health.com/legal-notices-and-privacy-policies'>Product Legal Disclaimers</a> &nbsp; | "
						+ "&nbsp; <a class='rdFooter' href='http://www.innovation-health.com/individual-families/'>Member Disclosure</a>"
						+ "</div><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	}	
	else if (site_id == "bannerpharmacy") {
		document
				.write("<br /><a class='rdFooter' href='https://www.banneraetna.com/'>Home</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.banneraetna.com/en/legal-notices/privacy-center.html'>Privacy Information</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.banneraetna.com/en/legal-notices/legal-statement.html'>Legal Statement </a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.banneraetna.com/en/legal-notices/program-provisions.html'>Product Legal Disclaimers</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.banneraetna.com/en/legal-notices/plan-disclosures.html'>Plan Disclosures</a>  &nbsp; | &nbsp; <a class='rdFooter' href='https://www.banneraetna.com/en/legal-notices/nondiscrimination-notice.html'>Nondiscrimination Notice</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.banneraetna.com/en/accessibility-services.html'>Accessibility Services</a><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	}
	else if (site_id == "allinapharmacy") 
	{
		document
				.write("<br /><a class='rdFooter' href='https://www.allinahealthaetna.com'>Home</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.allinahealthaetna.com/en/legal-notices/privacy-center.html'>Privacy Information</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.allinahealthaetna.com/en/legal-notices.html'>Legal Statement </a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.allinahealthaetna.com/en/legal-notices/program-provisions.html'>Product Legal Disclaimers</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.allinahealthaetna.com/en/legal-notices/plan-disclosures.html'>Plan Disclosures</a>  &nbsp; | &nbsp; <a class='rdFooter' href='https://www.allinahealthaetna.com/en/legal-notices/nondiscrimination-notice.html'>Nondiscrimination Notice</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.allinahealthaetna.com/en/information-in-other-languages.html'>Accessibility Services</a><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	}
	else if (site_id == "ihpharmacy") 
	{
		document
				.write("<br /><a class='rdFooter' href='https://www.innovationhealth.com/'>Home</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.innovationhealth.com/en/privacy-center.html'>Privacy Information</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.innovationhealth.com/en/legal-notices.html'>Legal Statement </a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.innovationhealth.com/en/legal-notices-and-privacy-policies.html'>Product Legal Disclaimers</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.innovationhealth.com/en/plan-disclosures.html'>Plan Disclosures</a>  &nbsp; | &nbsp; <a class='rdFooter' href='https://www.innovationhealth.com/en/nondiscrimination-notice.html'>Nondiscrimination Notice</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.innovationhealth.com/en/accessibility-services.html'>Accessibility Services</a><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	}
	else if (site_id == "texaspharmacy") 
	{
		document
				.write("<br /><a class='rdFooter' href='https://www.texashealthaetna.com/'>Home</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.texashealthaetna.com/en/legal-notices/privacy-center.html'>Privacy Information</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.texashealthaetna.com/en/legal-notices/legal-statement.html'>Legal Statement </a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.texashealthaetna.com/en/legal-notices/program-provisions.html'>Program Provisions</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.texashealthaetna.com/en/legal-notices/plan-disclosures.html'>Plan Disclosures</a>  &nbsp; | &nbsp; <a class='rdFooter' href='https://www.texashealthaetna.com/en/legal-notices/nondiscrimination-notice.html'>Nondiscrimination Notice</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.texashealthaetna.com/en/accessibility-services.html'>Accessibility Services</a><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	}
	else if (site_id == "sutterpharmacy") 
	{
		document
				.write("<br /><a class='rdFooter' href='https://www.sutterhealthaetna.com/'>Home</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.sutterhealthaetna.com/en/legal-notices.html'>Privacy Information</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.sutterhealthaetna.com/en/legal-notices/legal-statement.html'>Legal Statement </a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.sutterhealthaetna.com/en/legal-notices/program-provisions.html'>Program Provisions</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.sutterhealthaetna.com/en/legal-notices/plan-disclosures.html'>Plan Disclosures</a>  &nbsp; | &nbsp; <a class='rdFooter' href='https://www.sutterhealthaetna.com/en/legal-notices/nondiscrimination-notice.html'>Nondiscrimination Notice</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.sutterhealthaetna.com/en/accessibility-services.html'>Accessibility Services</a><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	}
	else if (langpref == "sp") {
		var pageLastModifiedText = $('#pageLastModified').html();
		if (pageLastModifiedText != null && pageLastModifiedText != '') {
			document.write(pageLastModifiedText);
		}
		document
				.write("<br /><div role='navigation' aria-label='footer'><a class='rdFooter' href='http://www.aetna.com'>P&aacute;gina principal</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/legal-notices/privacy/information_practices.html'>Informaci&oacute;n sobre privacidad</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/about/disclmr.html'>Declaraci&oacute;n legal</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/about/program_provisions.html'>Limitaci&oacute;n de responsabilidad legal sobre productos</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/products/member_disclosure.html'>Divulgaci&oacute;n &nbsp;de informaci&oacute;n para miembros</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/about/aetna_company_names.html'>Compa&ntilde;&iacute;as de Aetna: Directorio por estado</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.aetna.com/legal-notices/nondiscrimination-notice-spanish.html'>Aviso de no discriminaci&#243;n</a></div> <br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");
	} else {
		var pageLastModifiedText = $('#pageLastModified').html();
		if (pageLastModifiedText != null && pageLastModifiedText != '') {
			document.write(pageLastModifiedText);

		}

		document
				.write("<br /><div role='navigation' aria-label='footer'><a class='rdFooter' href='http://www.aetna.com'>Home</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/legal-notices/privacy/information_practices.html'>Privacy Information</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/about/disclmr.html'>Legal Statement </a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/about/program_provisions.html'>Product Legal Disclaimers</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/products/member_disclosure.html'>Member Disclosure</a> &nbsp; | &nbsp; <a class='rdFooter' href='http://www.aetna.com/about/aetna_company_names.html'>Aetna Companies: State Directory</a> &nbsp; | &nbsp; <a class='rdFooter' href='https://www.aetna.com/legal-notices/nondiscrimination-notice.html'>Nondiscrimination Notice</a> &nbsp; | &nbsp;  <a class='rdFooter' href='http://www.aetna.com/dse/cms/codeAssets/html/accessiblity_services.html'>Accessibility Services</a></div><br/><br/><hr width='100%' size='1' noshade='noshade' color='#cccccc'>");

	}

	rdCopyright();
	if (langpref == "sp") {
		document.getElementById("docfindLanguageAssistanceLinks").style.display = 'none';
	} else {
		document
				.write("<br /><div id='docfindLanguageAssistanceLinks' style='white-space: nowrap' > "
						+ "<ul style='overflow-x:hidden; white-space:nowrap; height: 40px; width: 100%; overflow-y:hidden; padding-left: 00px;'>"
						+ "<img src='/dse/cms/codeAssets/images/globe.png' alt=' ' /> "
						+ "<li style='display:inline;'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Language Assistance: &nbsp;</a></li>"
						+ "<li style='display:inline;' lang='es'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Espa&ntilde;ol</a></li> | "
						+ "<li style='display:inline;' lang=' zh-Hant'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#20013;&#25991;</a></li> | "
						+ "<li style='display:inline;' lang='vi'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Ti&#7871;ng Vi&#7879;t</a></li> | "
						+ "<li style='display:inline;' lang='ko'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#54620;&#44397;&#50612;</a></li> | "
						+ "<li style='display:inline;' lang='tl'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Tagalog</a></li> | "
						+ "<li style='display:inline;' lang='ru'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;</a></li> | "
						+ "<li style='display:inline;' lang='ar'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577;</a></li> | "
						+ "<li style='display:inline;' lang='ht'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Krey&ograve;l</a></li> | "
						+ "<li style='display:inline;' lang='fr'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Fran&ccedil;ais</a></li> | "
						+ "<li style='display:inline;' lang='pl'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Polski</a></li> | "
						+ "<li style='display:inline;' lang='pt'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Portugu&ecirc;s</a></li> | "
						+ "<li style='display:inline;' lang='it'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Italiano</a></li> | </br>"
						+ "<li style='display:inline;' lang='de'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>Deutsch</a></li> | "
						+ "<li style='display:inline;' lang='ja'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#26085;&#26412;&#35486;</a></li> | "
						+ "<li style='display:inline;' lang='fa'><a href='https://www.aetna.com/individuals-families/contact-aetna/information-in-other-languages.html'>&#1601;&#1575;&#1585;&#1587;&#1740;</a></li> | "
						+ "<nobr>Other Languages&hellip;</nobr></ul>"
						+ "</div>");
	}

}

function showModal()

{

	buildSecureAlertBox();

	$('#planDialogBox').trigger('show');

}

function buildSecureAlertBox() {
	$('#planDialogBox').attr('title',
			'<span class="rddialogPlantitle">Select a Plan</span><br />');
	$('#planDialogBox').attr('subtitle', '');

	$('#planDialogBox').attr('dialogText', '');

	$('#planDialogBox').doDialog({
		width : 300,
		modal : true,
		draggable : true,
		closeOnEscape : true
	},

	[ {
		id : 'btnCancel2',
		value : 'CANCEL',
		"url" : "javascript:goNavHome();"
	}, {
		id : 'btnContinue2',
		value : 'CONTINUE',
		"url" : "javascript:selectedPlan();"
	} ]

	);

	$("#btnCancel2").click(function() {
		$('#planDialogBox').trigger('hide');
	});

	$("#btnContinue2").click(function() {

		selectedPlan();
	});

}

function goNavHome() {

	history.back();
	return false;

}

function closePlanDialogrd() {
	$('#planDialogBox').trigger('hide');

}

/*
 * 
 * var chkSecureModal = true;
 * 
 * function showModal(){
 * 
 * $(function($data) {
 * 
 * if(chkSecureModal){
 * 
 * buildSecureAlertBox();
 * 
 * $('#planDialogBox').trigger('show');
 * 
 * 
 * chkSecureModal = false;
 * 
 * }else{ $('#planDialogBox').trigger('show'); } }); }
 * 
 * 
 * function buildSecureAlertBox(){ $('#planDialogBox').attr('title', '<span
 * class="rddialogPlantitle">Select a Plan</span><br />');
 * $('#planDialogBox').attr('subtitle', '');
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * $('#planDialogBox').attr('dialogText', '');
 * 
 * 
 * 
 * 
 * $('#planDialogBox').doDialog({width: 360, modal:true, draggable:true,
 * closeOnEscape:true},
 * 
 * [{id:"btnClose3",value:'CLOSE', url:"javascript:closeDialogrd();",
 * arrow:true},
 * 
 * {id:"btnContinue2",value:'CONTINUE', url:"javascript:closeDialogrd();",
 * onClick:"javascript:closeDialogrd();", arrow:true}]);
 * 
 * $("#btnClose3").click(function(){ $('#planDialogBox').trigger('hide'); }); }
 * 
 * 
 * 
 * 
 * 
 * 
 */

function rdRedirect(extUrlVal) {
	var prov_cat = document.getElementById("provider_type_section");

	var eUrl = "javascript:popUp('/docfind/external_link1.html')";

	if (urlProtocol == "https:" && extUrlVal != "")

	{

		if (prov_cat.value == "eyewear" || prov_cat.value == "vision") {
			location.href = eUrl;
		} else if (prov_cat.value == "ntp" && langpref == "en")
			location.href = "javascript:popUp('/docfind/cms/html/natural_therapy.html')";
		else if (prov_cat.value == "ntp" && langpref == "sp")
			location.href = "javascript:popUp('/docfind/cms/html/sp/natural_therapy.html')";
		else if (prov_cat.value == "flushot")
			location.href = "javascript:popUp('/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf')";
		else if (prov_cat.value == "hearing")
			location.href = "javascript:popUp('/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf')";
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
		else if (prov_cat.value == "ioe") {
			var ioeSpec = "";
			if (document.getElementById("ioe_spec_prctc_cd") != null)
				ioeSpec = document.getElementById("ioe_spec_prctc_cd").value;
			if (ioeSpec != "" && ioeSpec == "Transplant") {
				location.href = "javascript:popUp('/docfind/cms/html/institutes_of_excellence.html')";
			}
			/*
			 * else if(ioeSpec != "" && ioeSpec == "IOEIVF|IOE Infertility"){
			 * location.href="javascript:popUp('/docfind/cms/html/institutes_of_excellence_infertility.html')"; }
			 */
		}
		/*
		 * else if(prov_cat.value == "ioq"){ var ioqSpec = "";
		 * if(document.getElementById("ioq_spec_prctc_cd") != null ) ioqSpec =
		 * document.getElementById("ioq_spec_prctc_cd").value; if(ioqSpec != "" &&
		 * ioqSpec == "IOQBARIATR|IOQ Bariatric"){
		 * location.href="javascript:popUp('/docfind/cms/html/bariatric_facilities.html')"; }
		 * else if(ioqSpec != "" && (ioqSpec == "CARDMEDINT|Cardiac Medical
		 * Intervention IOQ Cardiac"||ioqSpec == "CARDRHYTHM|Cardiac Rhythm IOQ
		 * Cardiac" ||ioqSpec == "CARDSURG|Cardiac Surgery IOQ Cardiac")){
		 * location.href="javascript:popUp('/docfind/cms/html/institutes_of_quality_cardiac.html')"; }
		 * else if(ioqSpec != "" && (ioqSpec == "SPINE|Spine IOQ Ortho"||ioqSpec ==
		 * "TJREPLACE|Total Joint Replacement IOQ Ortho")){
		 * location.href="javascript:popUp('/docfind/cms/html/orthopedic_facilities.html')"; } }
		 */
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */

	} else {

		if (prov_cat.value == "eyewear" && langpref == "en")

			location.href = "javascript:popUp('/docfind/external_link1.html')";

		else if (prov_cat.value == "eyewear" && langpref == "sp")

			location.href = "javascript:popUp('/docfind/custom/sp/external_link1_sp.html')";
		else if (prov_cat.value == "ntp" && langpref == "en")
			location.href = "javascript:popUp('/docfind/cms/html/natural_therapy.html')";
		else if (prov_cat.value == "ntp" && langpref == "sp")
			location.href = "javascript:popUp('/docfind/cms/html/sp/natural_therapy.html')";
		else if (prov_cat.value == "flushot")
			location.href = "javascript:popUp('/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf')";
		else if (prov_cat.value == "hearing")
			location.href = "javascript:popUp('/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf')";
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
		else if (prov_cat.value == "ioe") {
			var ioeSpec = "";
			if (document.getElementById("ioe_spec_prctc_cd") != null)
				ioeSpec = document.getElementById("ioe_spec_prctc_cd").value;
			if (ioeSpec != "" && ioeSpec == "Transplant") {
				location.href = "javascript:popUp('/docfind/cms/html/institutes_of_excellence.html')";
			}
			/*
			 * else if(ioeSpec != "" && ioeSpec == "IOEIVF|IOE Infertility"){
			 * location.href="javascript:popUp('/docfind/cms/html/institutes_of_excellence_infertility.html')"; }
			 */
		}
		/*
		 * else if(prov_cat.value == "ioq"){ var ioqSpec = "";
		 * if(document.getElementById("ioq_spec_prctc_cd") != null ) ioqSpec =
		 * document.getElementById("ioq_spec_prctc_cd").value; if(ioqSpec != "" &&
		 * ioqSpec == "IOQBARIATR|IOQ Bariatric"){
		 * location.href="javascript:popUp('/docfind/cms/html/bariatric_facilities.html')"; }
		 * else if(ioqSpec != "" && (ioqSpec == "CARDMEDINT|Cardiac Medical
		 * Intervention IOQ Cardiac"||ioqSpec == "CARDRHYTHM|Cardiac Rhythm IOQ
		 * Cardiac" ||ioqSpec == "CARDSURG|Cardiac Surgery IOQ Cardiac")){
		 * location.href="javascript:popUp('/docfind/cms/html/institutes_of_quality_cardiac.html')"; }
		 * else if(ioqSpec != "" && (ioqSpec == "SPINE|Spine IOQ Ortho"||ioqSpec ==
		 * "TJREPLACE|Total Joint Replacement IOQ Ortho")){
		 * location.href="javascript:popUp('/docfind/cms/html/orthopedic_facilities.html')"; } }
		 */
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */
	}
}

function rdRedirectSecure(extUrl)

{
	var prov_cat = document.getElementById("provider_type_section");
	var eUrl = "";
	if (prov_cat.value == "ntp" && langpref == "en")
		eUrl = "javascript:popUp('/docfind/cms/html/natural_therapy.html')";
	else if (prov_cat.value == "ntp" && langpref == "sp")
		eUrl = "javascript:popUp('/docfind/cms/html/sp/natural_therapy.html')";
	else if (prov_cat.value == "flushot")
		eUrl = "javascript:popUp('/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf')";
	else if (prov_cat.value == "hearing")
		eUrl = "javascript:popUp('/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf')";
	/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
	else if (prov_cat.value == "ioe") {
		var ioeSpec = "";
		if (document.getElementById("ioe_spec_prctc_cd") != null)
			ioeSpec = document.getElementById("ioe_spec_prctc_cd").value;
		if (ioeSpec != "" && ioeSpec == "Transplant") {
			location.href = "javascript:popUp('/docfind/cms/html/institutes_of_excellence.html')";
		}
		/*
		 * else if(ioeSpec != "" && ioeSpec == "IOEIVF|IOE Infertility"){
		 * location.href="javascript:popUp('/docfind/cms/html/institutes_of_excellence_infertility.html')"; }
		 */
	}
	/*
	 * else if(prov_cat.value == "ioq"){ var ioqSpec = "";
	 * if(document.getElementById("ioq_spec_prctc_cd") != null ) ioqSpec =
	 * document.getElementById("ioq_spec_prctc_cd").value; if(ioqSpec != "" &&
	 * ioqSpec == "IOQBARIATR|IOQ Bariatric"){
	 * location.href="javascript:popUp('/docfind/cms/html/bariatric_facilities.html')"; }
	 * else if(ioqSpec != "" && (ioqSpec == "CARDMEDINT|Cardiac Medical
	 * Intervention IOQ Cardiac"||ioqSpec == "CARDRHYTHM|Cardiac Rhythm IOQ
	 * Cardiac" ||ioqSpec == "CARDSURG|Cardiac Surgery IOQ Cardiac")){
	 * location.href="javascript:popUp('/docfind/cms/html/institutes_of_quality_cardiac.html')"; }
	 * else if(ioqSpec != "" && (ioqSpec == "SPINE|Spine IOQ Ortho"||ioqSpec ==
	 * "TJREPLACE|Total Joint Replacement IOQ Ortho")){
	 * location.href="javascript:popUp('/docfind/cms/html/orthopedic_facilities.html')"; } }
	 */
	/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */
	else
		eUrl = "javascript:popUp('/docfind/external_link1.html')";

	location.href = eUrl;

}

function rdRedirectSummary(prov_cat, langpref, extUrl) {

	var eUrl = "/docfind/external_link1.jsp?extUrl=" + extUrl;

	if (urlProtocol == "https:" && extUrl != "")

	{

		if (prov_cat == "eyewear" || prov_cat == "vision") {

			location.href = "/docfind/external_link1.html";
		} else if (prov_cat == "ntp" && langpref == "en")
			location.href = "/docfind/cms/html/natural_therapy.html";
		else if (prov_cat == "ntp" && langpref == "sp")
			location.href = "/docfind/cms/html/sp/natural_therapy.html";
		else if (prov_cat == "flushot")
			location.href = "/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf";
		else if (prov_cat == "hearing")
			location.href = "/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf";
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
		else if (prov_cat == "ioe") {
			var ioeSpec = "";
			if (document.getElementById("ieSpec_spec_prctc_cd") != null) {
				ioeSpec = document.getElementById("ieSpec_spec_prctc_cd").value;
			}
			if (ioeSpec != "" && ioeSpec == "Transplant") {
				document.getElementById("ieSpec_spec_prctc_cd").value = "";
				location.href = "/docfind/cms/html/institutes_of_excellence.html";
			}
			/*
			 * else if(ioeSpec != "" && ioeSpec == "IOEIVF|IOE Infertility"){
			 * document.getElementById("ieSpec_spec_prctc_cd").value = "";
			 * location.href="/docfind/cms/html/institutes_of_excellence_infertility.html"; }
			 */
		}
		/*
		 * else if(prov_cat == "ioq"){ var ioqSpec = "";
		 * if(document.getElementById("iqSpec_spec_prctc_cd") != null ) ioqSpec =
		 * document.getElementById("iqSpec_spec_prctc_cd").value; if(ioqSpec != "" &&
		 * ioqSpec == "IOQBARIATR|IOQ Bariatric"){
		 * document.getElementById("iqSpec_spec_prctc_cd").value = "";
		 * location.href="/docfind/cms/html/bariatric_facilities.html"; } else
		 * if(ioqSpec != "" && (ioqSpec == "CARDMEDINT|Cardiac Medical
		 * Intervention IOQ Cardiac"||ioqSpec == "CARDRHYTHM|Cardiac Rhythm IOQ
		 * Cardiac" ||ioqSpec == "CARDSURG|Cardiac Surgery IOQ Cardiac")){
		 * document.getElementById("iqSpec_spec_prctc_cd").value = "";
		 * location.href="/docfind/cms/html/institutes_of_quality_cardiac.html"; }
		 * else if(ioqSpec != "" && (ioqSpec == "SPINE|Spine IOQ Ortho"||ioqSpec ==
		 * "TJREPLACE|Total Joint Replacement IOQ Ortho")){
		 * document.getElementById("iqSpec_spec_prctc_cd").value = "";
		 * location.href="/docfind/cms/html/orthopedic_facilities.html"; } }
		 */
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */
	} else {

		if (prov_cat == "eyewear" && langpref == "en")

			location.href = "/docfind/external_link1.html";

		else if (prov_cat == "eyewear" && langpref == "sp")

			location.href = "/docfind/custom/sp/external_link1_sp.html";
		else if (prov_cat == "ntp" && langpref == "en")
			location.href = "/docfind/cms/html/natural_therapy.html";
		else if (prov_cat == "ntp" && langpref == "sp")
			location.href = "/docfind/cms/html/sp/natural_therapy.html";
		else if (prov_cat == "flushot")
			location.href = "/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf";
		else if (prov_cat == "hearing")
			location.href = "/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf";
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
		else if (prov_cat == "ioe") {
			var ioeSpec = "";
			if (document.getElementById("ieSpec_spec_prctc_cd") != null) {
				ioeSpec = document.getElementById("ieSpec_spec_prctc_cd").value;
			}
			if (ioeSpec != "" && ioeSpec == "Transplant") {
				document.getElementById("ieSpec_spec_prctc_cd").value = "";
				location.href = "/docfind/cms/html/institutes_of_excellence.html";
			}
			/*
			 * else if(ioeSpec != "" && ioeSpec == "IOEIVF|IOE Infertility"){
			 * document.getElementById("ieSpec_spec_prctc_cd").value = "";
			 * location.href="/docfind/cms/html/institutes_of_excellence_infertility.html"; }
			 */
		}
		/*
		 * else if(prov_cat == "ioq"){ var ioqSpec = "";
		 * if(document.getElementById("iqSpec_spec_prctc_cd") != null ) ioqSpec =
		 * document.getElementById("iqSpec_spec_prctc_cd").value; if(ioqSpec != "" &&
		 * ioqSpec == "IOQBARIATR|IOQ Bariatric"){
		 * document.getElementById("iqSpec_spec_prctc_cd").value = "";
		 * location.href="/docfind/cms/html/bariatric_facilities.html"; } else
		 * if(ioqSpec != "" && (ioqSpec == "CARDMEDINT|Cardiac Medical
		 * Intervention IOQ Cardiac"||ioqSpec == "CARDRHYTHM|Cardiac Rhythm IOQ
		 * Cardiac" ||ioqSpec == "CARDSURG|Cardiac Surgery IOQ Cardiac")){
		 * document.getElementById("iqSpec_spec_prctc_cd").value = "";
		 * location.href="/docfind/cms/html/institutes_of_quality_cardiac.html"; }
		 * else if(ioqSpec != "" && (ioqSpec == "SPINE|Spine IOQ Ortho"||ioqSpec ==
		 * "TJREPLACE|Total Joint Replacement IOQ Ortho")){
		 * document.getElementById("iqSpec_spec_prctc_cd").value = "";
		 * location.href="/docfind/cms/html/orthopedic_facilities.html"; } }
		 */
		/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */
	}
}

/* Changes start */

function StandardCleanUpSummary(searchCat, keyTab)

{
	if (checkForeign()) {
		return false;
	}

	var pCat;

	var changedSearchCat;

	var tempObj2 = document.getElementById("summary_search_results");

	var changeSpecCount = 0;

	for (var i = 0; i < tempObj2.geo1.length; i++)

	{

		if (tempObj2.geo1[i].checked)

		{

			if (tempObj2.geo1[i].value == "zip") {
				var zipcode = document.getElementById("zipcode1");

				zipcode.name = "zipcode";
				var miles = document.getElementById("miles1");
				miles.name = "miles";
			}

			else if (tempObj2.geo1[i].value == "city") {
				var city = document.getElementById("city1");
				city.name = "city";
				var state = document.getElementById("state1");
				state.name = "state";
			}

			else if (tempObj2.geo1[i].value == "county") {
				var county = document.getElementById("county1");

				county.name = "county";
				var state = document.getElementById("state1");
				state.name = "state";
			}
		}
	}
	if (ptID != null) {

		cleanUpSearchCat();
		tempObj = document.getElementById(ptID);
		tempObj.name = "search_cat";

		if (tempObj != null) {

			changedSearchCat = tempObj.value;
		}
	}
	if (productID != null) {

		cleanUpProd();
		tempObj = document.getElementById(productID);
		tempObj.name = "product";
	}

	if (changedSearchCat != null && changedSearchCat != ""
			&& changedSearchCat != searchCat) {

		cleanUpSpecialty(searchCat);

	} else {

		populateSpecialityInUrl(searchCat);

		changeSpecCount = changeSpecCount + 1;

	}

	if (changeSpecCount < 1) {

		/*
		 * When a change in selection is made in the type dropdown then populate
		 * the same in the url
		 */

		var currentSearchCat = document.getElementById("provider_type_section").value;

		populateSpecialityInUrl(currentSearchCat);
	}

	/*
	 * Clean hospital name when there is a search for the category
	 * 
	 * for which hospital affiliation dropdown is not available
	 */

	cleanUpHospAffl(searchCat);
	/* start 1382 Dec2014 change */
	cleanUpHospName(searchCat);
	/* end 1382 Dec2014 change */
	if (changedSearchCat != null && changedSearchCat != ""
			&& (changedSearchCat == "ioe" || changedSearchCat == "ioq"))
		cleanUpAdditional(searchCat);

	/* Start SR 1335 Changes */
	/* DEF0200672768 defect fix start */
	cleanUpProgRecog(searchCat);
	/* DEF0200672768 defect fix end */
	/* End SR 1335 Changes */
	if (searchCat != null)

	{

		pCat = getAdditionalSection(searchCat);

	}

	if (keyTab != 'tab2') {

		cleanUpProvCat();

	}

	if (keyTab == 'tab2') {

		cleanUpMedName();

	}

	if (keyTab != null && keyTab != "tab2") {
		var objTempProvCat = document.getElementById("provider_category");
		objTempProvCat.name = "provider_category";

		if (pCat != "bhh") {
			var langId = pCat + "_language";
			var objTempLang = document.getElementById(langId);

			if (objTempLang != null && objTempLang != "") {

				objTempLang.name = "language";
			}

			var nameId = pCat + "_hospital_name";
			var objTempName = document.getElementById(nameId);
			if (objTempName != null) {

				objTempName.name = "hospital_name";
			}

			var hospAfflId = pCat + "_hspafl_hspprvdr_id";
			var objTempHospAfflId = document.getElementById(hospAfflId);

			if (objTempHospAfflId != null)

				objTempHospAfflId.name = "hspafl_hspprvdr_id";

			var genderId = pCat + "_gender";

			var objTempGender = document.getElementById(genderId);

			if (objTempGender != null)

				objTempGender.name = "gender";
		}

		if (pCat != "bhp") {

			var provFlagId = pCat + "_provflag";

			var objTempProvFlag = document.getElementById(provFlagId);

			if (objTempProvFlag != null)

				objTempProvFlag.name = "provflag";
		}

		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		if (pCat == "bhh") {

			var ageRange = pCat + "_age_range";

			var objTempAge = document.getElementById(ageRange);

			if (objTempAge != null)

				objTempAge.name = "age_range"

			var levelCare = pCat + "_level_care";

			var objTempLevelCare = document.getElementById(levelCare);

			if (objTempLevelCare != null)

				objTempLevelCare.name = "level_care"

			var typeService = pCat + "_type_service";

			var objTypeService = document.getElementById(typeService);

			if (objTypeService != null)

				objTypeService.name = "type_service"

		}

		if (pCat == "bhp") {

			var objTempSpecType = document.getElementById("bhp_spec_prctc_cd");

			if (objTempSpecType != null) {

				objTempSpecType.name = "bhp_spec_prctc_cd";
			}

			var objTempProvCat = document.getElementById("provider_category");

			objTempProvCat.name = "provider_category";
			var langId = pCat + "_language";
			var objTempLang = document.getElementById(langId);

			if (objTempLang != null)

				objTempLang.name = "language";

			var hospAfflId = pCat + "_hspafl_hspprvdr_id";
			var objTempHospAfflId = document.getElementById(hospAfflId);

			if (objTempHospAfflId != null)

				objTempHospAfflId.name = "hspafl_hspprvdr_id";

			/* PCR C-13227 - EAP/BH changes March 2012 Start */

			var genderId = pCat + "_gender";

			var objTempGender = document.getElementById(genderId);

			var individual = pCat + "_individual";

			var objIndividual = document.getElementById(individual);

			if (objIndividual != null)

				objIndividual.name = "individual";

			var individualFirst = pCat + "_individual_first";

			var objIndividualFirst = document.getElementById(individualFirst);

			if (objIndividualFirst != null)

				objIndividualFirst.name = "individual_first";

			var groupIpa = pCat + "_group_ipa";

			var objgroupIpa = document.getElementById(groupIpa);

			if (objgroupIpa != null)

				objgroupIpa.name = "group_ipa";

			if (objTempGender != null)

				objTempGender.name = "gender";
		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */

		if (objTempProvCat != null && objTempProvCat.value == "hospitals")
			document.getElementById("flagHospFlow").value = "H";
		else
			document.getElementById("flagHospFlow").value = "M";
	}

	for (var i = 0; i < dirty.length; i++)

	{

		var bhpSumFlag = false;

		var providerType = document.getElementById("provider_type_section");

		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		// if(providerType != null && providerType.value == "spec")
		// {
		// if(dirty[i] != "spec_spec_prctc_cd")
		// {
		// show_additional = "medical";
		// }
		// else if(dirty[i] == "spec_spec_prctc_cd" && dirty[i+1] ==
		// "medical_spec_prctc_cd")
		// {
		// dirty[i] == "medical_spec_prctc_cd"
		// show_additional = "medical";
		// }
		// else if(dirty[i] == "spec_spec_prctc_cd")
		// {
		// show_additional = "spec";
		// }
		// }
		// if(providerType != null && providerType.value == "opp")
		// {
		// if(dirty[i] != "facilities_spec_prctc_cd")
		// {
		// show_additional = "opp";
		// }
		// else if(dirty[i] == "facilities_spec_prctc_cd" && dirty[i+1] ==
		// "opp_spec_prctc_cd")
		// {
		// show_additional = "opp";
		// }
		// else if(dirty[i] == "facilities_spec_prctc_cd")
		// {
		// show_additional = "facilities";
		// }
		// }
		/* PCR C-13227 - EAP/BH changes March 2012 End */
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		if (providerType != null
				&& (providerType.value == "bhp" || providerType.value == "eap")) {

			if ((dirty[i] == "bhp_spec_prctc_cd" || dirty[i] == "eap_spec_prctc_cd")
					&& (providerType.value == "bhp" || providerType.value == "eap"))

			{

				show_additional = "bhp";

				bhpSumFlag = true;

			}

			else if (providerType.value != "bhp")

			{

				show_additional = "bhh";
			}
		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */

		if (show_additional != null && !bhpSumFlag) {

			var x = dirty[i].indexOf(show_additional);

			if (x != -1) {

				tempObj = document.getElementById(dirty[i]);

				if (tempObj != null) {
					tempObj.name = dirty[i]
							.substring(show_additional.length + 1);
				}
			}
		}

	}
	return true;
}

function createGeoSummaryTransplantIOEIOQ(str) {
	if (str == "zip") {
		show("text_zip_div_rd", "geo_type_label_section");
		show("input_zip_div_rd", "geo_type_label_section_2");
		show("text_distance_div_rd", "geo_type_input_section");
		show("input_transplant_distance_div_rd", "geo_type_input_section_2");
	}
}

function createGeoSummaryIOEIOQ(str)

{
	if (str == "zip") {
		show("text_zip_div_rd", "geo_type_label_section");
		show("input_zip_div_rd", "geo_type_label_section_2");
		show("text_distance_div_rd", "geo_type_input_section");
		show("input_ioeioq_distance_div_rd", "geo_type_input_section_2");
	}
}

function createGeoSummary(str) {
	if (str == "zip") {

		show("text_zip_div_rd", "geo_type_label_section");

		show("input_zip_div_rd", "geo_type_label_section_2");

		show("text_distance_div_rd", "geo_type_input_section");

		show("input_distance_div_rd", "geo_type_input_section_2");
	} else if (str == "city") {

		show("text_city_div_rd", "geo_type_label_section");

		show("input_city_div_rd", "geo_type_label_section_2");

		show("text_state_div_rd", "geo_type_input_section");
		show("input_state_div_rd", "geo_type_input_section_2");
	} else if (str == "county") {

		show("text_county_div_rd", "geo_type_label_section");

		show("input_county_div_rd", "geo_type_label_section_2");

		show("text_state_county_div_rd", "geo_type_input_section");
		show("input_state_div_rd", "geo_type_input_section_2");
	}

	checkAdditionalSummary();

}

function checkAdditionalSummary() {
	var geo1_filled = false;
	var search_cat_filled = false;
	var product_filled = false;
	var hearing = false;

	var str = "";
	var prod = "";
	var formObj = document.getElementById("summary_search_results");
	for (var i = 0; i < formObj.geo1.length; i++) {
		if (formObj.geo1[i].checked) {
			if (formObj.geo1[i].value == "zip") {
				var zipcode = document.getElementById("zipcode1");
				zipcode.name = "zipcode";
				if ($('#input_ioeioq_distance_div_rd').is(":visible")) {
					miles = $('#input_ioeioq_distance_div_rd').children(
							'#miles1').val();
					$('#input_ioeioq_distance_div_rd').children('#miles1')
							.attr('name', 'miles');
					document.getElementById("miles1").value = miles;
				} else {
					var miles = document.getElementById("miles1");
					miles.name = "miles";
				}

				if (zipcode.value != "" && miles.value != "")
					geo1_filled = true;
			} else if (formObj.geo1[i].value == "city") {
				var city = document.getElementById("city1");
				city.name = "city";
				var state = document.getElementById("state1");
				state.name = "state";
				if (city.value != "" && state.value != "")
					geo1_filled = true;
			} else if (formObj.geo1[i].value == "county") {
				var county = document.getElementById("county1");
				var state = document.getElementById("state1");
				if (county.value != "" && state.value != "")
					geo1_filled = true;
			}
		}
	}

	if (ptID != null) {
		var tempObj = document.getElementById(ptID);
		if (tempObj.value != "") {
			search_cat_filled = true;
			if (tempObj.value == "hearing")
				hearing = true;
		}
		/* START CHANGES P 8065 - AUG 2010 */
		if (tempObj.value == "eyewear") {
			product_filled = false;
		}
		/* END CHANGES P 8065 - AUG 2010 */
	}
	if (productID != null && product_filled == false) {

		prod = document.getElementById(productID);

		if (tempObj != null && tempObj.value != "")

			product_filled = true;
	}

	showAdditionalSumm(str, prod.value);

}

function checkAdditionalZipSummary() {
	var formObj = document.getElementById("summary_search_results");
	for (var i = 0; i < formObj.geo1.length; i++) {
		if (formObj.geo1[i].checked) {
			if (formObj.geo1[i].value == "zip") {
				var zipcode = document.getElementById("zipcode");
				/* P08-8459b - IOE and IOQ changes Feb 2013 Start */

				// var miles = document.getElementById("miles");
				var miles = '';
				miles = getMiles();
				/* P08-8459b - IOE and IOQ changes Feb 2013 End */
			}

			else if (formObj.geo1[i].value == "city") {
				var city = document.getElementById("city");
				city.name = "city";
				var state = document.getElementById("state");
				state.name = "state";
			} else if (formObj.geo1[i].value == "county") {
				var county = document.getElementById("county");
				var state = document.getElementById("state");
			}
		}
	}
}

function createIndexSummary(str, searchCat, specCd, product) {
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	var multiSelectText = document.getElementById("bhp_specialty_text");
	if (multiSelectText != null) {
		multiSelectText.style.display = 'none';
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	if (str == "") {

		var dSearchCat = searchCat + "_additional_div";

		show(dSearchCat, "additional_section");

		// str = searchCat;

		/*
		 * var pl = document.getElementById("plans_label");
		 * 
		 * pl.style.display = "inline";
		 */
		show("input_default_plans", "plans_section");
		productID = null;

		ptID = "provider_type_section";

		return;
	}

	if (str == "eyewear" || str == "ntp" || str == "flushot"
			|| str == "hearing") {
		/*
		 * var pl = document.getElementById("plans_label"); pl.style.display =
		 * 'none';
		 * 
		 * 
		 * 
		 * 
		 * hide("plans_label");
		 */

		hide("plans_section");

		document.getElementById("plans_section").style.display = 'none';
	} else {
		/*
		 * var pl = document.getElementById("plans_label");
		 * 
		 * 
		 * 
		 * 
		 * 
		 * pl.style.display = "";
		 */

		show("input_default_plans", "plans_section");

		document.getElementById("plans_section").style.display = "";
	}

	// Set provider category

	rdSetProviderCategorySummary(str, specCd);

	rdDisplayPlanSummary(str);

	ptID = "provider_type_section";

	if (str != null) {
		show_specialty = getAdditionalSection(str);
		show_additional = show_specialty;
	} else {
		show_specialty = "default";
	}
	var myStr = show_specialty + "_additional_div";
	var multiSelectText = document.getElementById("bhp_specialty_text");
	if (str == "urgent" || str == "walkin" || str == "ntp"
			|| str == "dialysislocal" || str == "eyewear" || str == "flushot"
			|| str == "hearing" || str == "ipacal") {
		hide("additional_section");
	} else if (str == "pharmacy") {
		show(myStr, "additional_section");
	} else if (str == "opp") {

		show("input_facilities_div", "additional_section");

		var facSpecType = document.getElementById("spec_prctc_cd");

		var facSpec = facSpecType.value;

		var facSpecType2 = document.getElementById("facilities_spec_prctc_cd");

		var facSpec2 = facSpecType2.value;

		facSpecType.name = "facilities_spec_prctc_cd";
	} else if (str == "spec") {
		show("input_spec_div", "additional_section");

		fillDropdownSumm(str, "spec_prctc_cd", "medical_specialty_div", product);
		var medSpecType = document.getElementById("spec_prctc_cd");
		var medSpec = medSpecType.value;

		var medSpecType2 = document.getElementById("spec_spec_prctc_cd");
		var medSpec2 = medSpecType2.value;
		medSpecType.name = "spec_spec_prctc_cd";
		rdPopulateSpecialtyDropdownsSummary(product);
	} else if (str == "bhp") {
		/* PCR C-13227 - EAP/BH changes March 2012 Start */
		fillDropdownSumm("bhp", "spec_prctc_cd", "bhp_additional_div");
		show("bhp_additional_div", "additional_section");
		if (multiSelectText != null) {
			multiSelectText.style.display = "";
		}

		// show("input_bhp_div", "additional_section");
	} else if (str == "eap") {

		fillDropdownSumm("eap", "spec_prctc_cd", "bhp_specialty_div");
		show("bhp_additional_div", "additional_section");
		if (multiSelectText != null) {
			multiSelectText.style.display = "";
		}
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (str == "labs") {
		show("input_labs_div", "additional_section");
	} else if (str == "dpcp") {
		show("input_dpcp_div", "additional_section");
	}
	/* START SPECIALTY ISSUE FIX */
	else if (str == "dspec") {
		show("input_dspec_div", "additional_section");
	}
	/* END SPECIALTY ISSUE FIX */
	else if (str == "pcp") {
		show("medical_pcp_additional_div", "additional_section");
	} else if (str == "phys_bhp") {

		show("phys_bhp_additional_div", "additional_section");
		var medSpecType = document.getElementById("spec_prctc_cd");
		var medSpec = medSpecType.value;

		var medSpecType2 = document.getElementById("physBhp_spec_prctc_cd");
		var medSpec2 = medSpecType2.value;
		medSpecType.name = "physBhp_spec_prctc_cd";
	} else if (str == "ioq") {
		show(myStr, "additional_section");
		var ioqSpecType = document.getElementById("iqSpec_spec_prctc_cd");
		var ioqSpec = ioqSpecType.value;
		ioqSpecType.name = "iqSpec_spec_prctc_cd";
		// rdPopulateSpecialtyDropdownsSummary(product);
	} else {
		show(myStr, "additional_section");
		rdPopulateSpecialtyDropdownsSummary(product);
	}
}

function rdSetProviderCategorySummary(str, specCd)

{

	/* var pSpecCd = document.getElementById("spec_prctc_cd"); */
	if ((str != null)
			&& (str == "pcp" || str == "spec" || str == "ntp" || str == "phys_bhp")) {
		document.getElementById("provider_category").value = "medical";
	} else if ((str != null) && (str == "dpcp" || str == "dspec")) {
		document.getElementById("provider_category").value = "dental";
	}

	else if ((str != null)
			&& (str == "bhp" || str == "mh_facility" || str == "sa_facility" || str == "eap")) {
		document.getElementById("provider_category").value = "bh";
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if ((str != null) && (str == "hospitals")) {
		document.getElementById("provider_category").value = "hospitals";
	} else if ((str != null) && (str == "dialysislocal")) {
		document.getElementById("provider_category").value = "dialysis";
	} else if ((str != null) && (str == "labs")) {
		document.getElementById("provider_category").value = "labs";
	} else if ((str != null) && (str == "opp")) {
		document.getElementById("provider_category").value = "facilities";
	} else if ((str != null) && (str == "urgent")) {
		document.getElementById("provider_category").value = "urgent";

	} else if ((str != null) && (str == "walkin")) {
		document.getElementById("provider_category").value = "walkin";
	} else if ((str != null) && (str == "hearing")) {
		document.getElementById("provider_category").value = "hearing";
	} else if ((str != null) && (str == "eyewear")) {
		document.getElementById("provider_category").value = "vision";
	} else if ((str != null) && (str == "pharmacy")) {

		document.getElementById("provider_category").value = "pharmacy";
	} else if ((str != null) && (str == "ipacal")) {

		document.getElementById("provider_category").value = "ipacal";
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	else if ((str != null) && (str == "ioq")) {
		document.getElementById("provider_category").value = "ioq";
	} else if ((str != null) && (str == "ioe")) {
		document.getElementById("provider_category").value = "ioe";
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */
}

function rdChooseSpecSummary(obj)

{

	var lang = document.getElementById("langpref");

	var langpref = lang.value;
	var searchFor = document.getElementById("provider_type_section");
	var type = searchFor.value;
	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	if (type == "bhp" || type == "eap")

	{

		if (obj.value == "eap") {

			type = "bhp";
		}

		var bhpType = document.getElementById("bhp_spec_prctc_cd");

		bhpType.name = "bhp_spec_prctc_cd";

		/* PCR C-13227 - EAP/BH changes March 2012 End */

		show_additional = getAdditionalSection(type);
		s1 = show_additional + "_additional";
		show(s1, "additional_section_advance");

		showAdditionalSumm();

	}

	else if (obj.value == "rtf_facility" || obj.value == "sa_facility"
			|| obj.value == "mh_facility")

	{

		fillDropdownSumm(obj.value, "level_care", "bhh_level_care_div");

		fillDropdownSumm(obj.value, "age_range", "bhh_age_range_div");

		fillDropdownSumm(obj.value, "type_service", "bhh_type_service_div");

		show_additional = getAdditionalSection(obj.value);
		s1 = show_additional + "_additional";
		show(s1, "additional_section_advance");
	}
	// Redirect Pharmacy Specialty
	if (type == "pharmacy") {

		var pharmacySpecType = document
				.getElementById("pharmacy_spec_prctc_cd");
		var pharmacySpec = pharmacySpecType.value;

		pharmacySpecType.name = "pharmacy_spec_prctc_cd";
		if (pharmacySpec == "pspec" && langpref == "en")

			provForward("/docfind/cms/assets/pdf/specialty_pharmacy.pdf");

		// else if(pharmacySpec == "pspec" && langpref=="sp")
		//	
		// provForward("/docfind/custom/sp/specialty_pharmacy.html");

		else if (pharmacySpec == "pspec" && langpref == "sp")

			provForward("/docfind/cms/assets/pdf/specialty_pharmacy_spanish.pdf");

		else if (pharmacySpec == "psmail" && langpref == "en")

			provForward("https://www.aetna.com/individuals-families/pharmacy/rx-home-delivery.html" , "_blank");

		else if (pharmacySpec == "psmail" && langpref == "sp")

			provForward("https://www.aetna.com/individuals-families/pharmacy/rx-home-delivery.html" , "_blank");

		else if (pharmacySpec == "flushot")

			provForward("/dsepublicContent/assets/pdf/en/flu_shot_vaccine_providers.pdf");

		else if (pharmacySpec == "hearing")

			provForward("/docfind/cms/assets/pdf/Great_Savings_on_Hearing_Aids.pdf");

	}
	// Redirect Labs Specialty
	else if (type == "labs") {

		var labsSpecType = document.getElementById("labs_spec_prctc_cd");
		var labsSpec = labsSpecType.value;

		labsSpecType.name = "labs_spec_prctc_cd";
		if (labsSpec == "nll")
			provForward("/docfind/cms/html/National_Lab_Listing.html");
	}
	// Redirect Dental Specialty
	else if (type == "dpcp") {
		/* START SPECIALTY ISSUE FIX */

		var dentalSpecType = document.getElementById("dpcp_pcp_prctc_cd");

		var dentalSpec = dentalSpecType.value;

		dentalSpecType.name = "dpcp_pcp_prctc_cd";
		/* END SPECIALTY ISSUE FIX */
		if (dentalSpec == "dpcpm" && langpref == "en")
			provForward("/docfind/cms/html/mexico_dental_network.html");
		else if (dentalSpec == "dpcpm" && langpref == "sp")
			provForward("/docfind/cms/html/sp/mexico_dental_network.html");
	} else if (type == "dspec") {
		/* START SPECIALTY ISSUE FIX */

		var dentalSpecType = document.getElementById("dspec_spec_prctc_cd");

		var dentalSpec = dentalSpecType.value;

		dentalSpecType.name = "dspec_spec_prctc_cd";
		/* END SPECIALTY ISSUE FIX */
		if (dentalSpec == "dspecm" && langpref == "en")
			provForward("/docfind/cms/html/mexico_dental_network.html");
		else if (dentalSpec == "dspecm" && langpref == "sp")
			provForward("/docfind/cms/html/sp/mexico_dental_network.html");
	}

	else if (type == "pcp")

	{

		var pcpType = document.getElementById("pcp_spec_prctc_cd");

		var pcp = pcpType.value;

		pcpType.name = "pcp_spec_prctc_cd";
	} else if (type == "phys_bhp") {

		var medSpecType = document.getElementById("physBhp_spec_prctc_cd");
		var medSpec = medSpecType.value;
		medSpecType.name = "physBhp_spec_prctc_cd";

		if (medSpec == "phys_bhp") {
			show_specialty = getAdditionalSection(medSpec);
			show_additional = show_specialty;
			var myStr = show_specialty + "_additional_div";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
		}
	}
	// show facility specialties
	else if (type == "opp") {
		var facilitySpecType = document
				.getElementById("facilities_spec_prctc_cd");
		var facilitySpec = facilitySpecType.value;
		facilitySpecType.name = "facilities_spec_prctc_cd";
		if (facilitySpec == "opp") {
			show_specialty = getAdditionalSection(facilitySpec);
			document.getElementById("type_label").style.display = "";
			show_additional = show_specialty;
			var myStr = show_specialty + "_additional_div";
			show(myStr, "additional_section");
		} else if (facilitySpec == "dmenat" && langpref == "en")
			provForward("/docfind/cms/html/national_dme_providers.html");
		else if (facilitySpec == "dmenat" && langpref == "sp")
			provForward("/docfind/cms/html/sp/national_dme_providers.html");
		else if (facilitySpec == "hstp")
			provForward("/docfind/cms/html/National_Home_Sleep_Testing.html");
	}
	// show spec specialties
	else if (type == "spec") {
		var medSpecType = document.getElementById("spec_spec_prctc_cd");
		var medSpec = medSpecType.value;
		medSpecType.name = "spec_spec_prctc_cd";
		if (medSpec == "spec") {
			show_specialty = getAdditionalSection(medSpec);
			show_additional = show_specialty;
			document.getElementById("type_label").style.display = "";
			var myStr = show_specialty + "_additional_div";
			show(myStr, "additional_section");
		}
	}
	/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
	else if (type == "ioe") {
		var ioeSpecType = document.getElementById("ieSpec_spec_prctc_cd");
		var ioeSpec = ioeSpecType.value;
		ioeSpecType.name = "ieSpec_spec_prctc_cd";
		var medSpecType = document.getElementById("spec_spec_prctc_cd");
		medSpecType.value = ioeSpec;
		medSpecType.name = "spec_prctc_cd";
	} else if (type == "ioq") {
		var ioqSpecType = document.getElementById("iqSpec_spec_prctc_cd");
		var ioqSpec = ioqSpecType.value;
		ioqSpecType.name = "iqSpec_spec_prctc_cd";
		var medSpecType = document.getElementById("spec_spec_prctc_cd");
		medSpecType.value = ioqSpec;
		medSpecType.name = "spec_prctc_cd";
	}
	/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */
}

function rdDisplayPlanSummary(str)

{

	if (str == "walkin" || str == "pcp" || str == "spec" || str == "urgent"
			|| str == "bhp" || str == "ntp" || str == "labs"
			|| str == "dialysislocal" || str == "opp" || str == "hospitals"
			|| str == "phys_bhp" || str == "ioq" || str == "ioe") {
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";
	} else if (str == "dpcp" || str == "dspec") {
		show("input_dental_plans", "plans_section");
		productID = "dental_plans";
	} else if (str == "hearing") {
		show("input_hearing_plans", "plans_section");
		productID = "hearing_plans";
	} else if (str == "vision") {

		var pl = document.getElementById("plans_label");
		pl.style.display = 'none';
		hide("plans_section");

		hide("plans_label");

		productID = "hearing_plans";

		ptID = "vision_provider_type";
	} else if (str == "pharmacy") {
		show("input_pharmacy_plans", "plans_section");
		productID = "pharmacy_plans";
	} else if (str == "ipacal") {
		show("input_ipacal_plans", "plans_section");
		productID = "ipacal_plans";
		show_additional = getAdditionalSection("ipacal");
		// ptID = "ipacal_provider_type";
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (str == "eap") {
		show("input_eap_plans", "plans_section");
		productID = "eap_plans";
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
}

function createIndexSummaryNameTab(provCat)

{

	var str = provCat;
	if (str == "medical" || str == "bh") {
		show("medical_additional_byname", "additional_input_section");
		productID = "medical_plans";
	} else if (str == "dental") {
		show("medical_additional_byname", "additional_input_section");
		productID = "dental_plans";
	} else if (str == "pharmacy") {
		show("pharmacy_additional_byname", "additional_input_section");

		productID = "pharmacy_plans";
	} else if (str == "hospfac") {
		show("hospfac_additional_byname", "additional_input_section");
		productID = "medical_plans";
	}
}

function searchByNameCreateIndexSummary(str) {

	var formObj = document.getElementById("summary_search_results");
	if (str == "pharmacy" || str == "hearing") {
		show("geo_attr_pharmacy_div", "geo_attr");
		hide("geo_attr_div");
		var geoVal = "";
		if (formObj.geo1[0].checked == true) {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[4].checked = true;
			geoVal = formObj.geo1[4].value;
		} else {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		}

		createGeoSummary(geoVal);

	} else {
		show("geo_attr_div", "geo_attr");
		hide("geo_attr_pharmacy_div");
		if (formObj.geo1[3].checked == true) {
			formObj.geo1[0].checked = true;
			geoVal = formObj.geo1[0].value;
		} else if (formObj.geo1[4].checked == true) {
			formObj.geo1[1].checked = true;
			geoVal = formObj.geo1[1].value;
		} else if (formObj.geo1[2].checked == true) {
			formObj.geo1[2].checked = true;
			geoVal = formObj.geo1[2].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[1].checked = true;
			geoVal = formObj.geo1[1].value;
		}

		else {
			formObj.geo1[0].checked = true;
			geoVal = formObj.geo1[0].value;
		}
		createGeoSummary(geoVal);
	}
	if (str == "medical" || str == "bh") {
		show("additional_info_byname", "additional_input_section");
		show("info_name_input_div_new_rd", "info_name_search_section_new_rd");
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";

		document.getElementById("medical_name_rd").value = "medical_prov_new";
		document.getElementById("name_padding_rd").style.paddingBottom = '0px';

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";

		var objFirstName = document.getElementById("info_individual_first");

		if (objFirstName != null) {
			objFirstName.name = "individual_first";
		}

		var objLastName = document.getElementById("info_individual");
		if (objLastName != null) {
			objLastName.name = "individual";
		}

		var objgrpipa = document.getElementById("info_group_ipa");
		if (objgrpipa != null) {
			objgrpipa.name = "group_ipa";
		}
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (str == "eap") {
		show("additional_info_byname", "additional_input_section");
		show("info_name_input_div_new_rd", "info_name_search_section_new_rd");
		show("input_eap_plans", "plans_section");
		productID = "eap_plans";

		document.getElementById("medical_name_rd").value = "medical_prov_new";
		document.getElementById("name_padding_rd").style.paddingBottom = '0px';

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";

		var objFirstName = document.getElementById("info_individual_first");

		if (objFirstName != null) {
			objFirstName.name = "individual_first";
		}

		var objLastName = document.getElementById("info_individual");
		if (objLastName != null) {
			objLastName.name = "individual";
		}

		var objgrpipa = document.getElementById("info_group_ipa");
		if (objgrpipa != null) {
			objgrpipa.name = "group_ipa";
		}
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (str == "dental") {
		show("additional_dental_byname", "additional_input_section");
		show("dental_name_input_div_new_rd",
				"dental_name_search_section_new_rd");
		show("input_dental_plans", "plans_section");
		productID = "dental_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		document.getElementById("medical_name_rd").value = "dental_prov_new";

		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";
		document.getElementById("info_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";

		var objFirstName = document.getElementById("dental_individual_first");
		if (objFirstName != null) {
			objFirstName.name = "dental_individual_first";
		}

		var objLastName = document.getElementById("dental_individual");
		if (objLastName != null) {
			objLastName.name = "dental_individual";
		}

		var objgrpipa = document.getElementById("dental_group_ipa");
		if (objgrpipa != null) {
			objgrpipa.name = "dental_group_ipa";
		}
	} else if (str == "pharmacy") {
		show("pharmacy_additional_byname", "additional_input_section");
		show("input_pharmacy_plans", "plans_section");
		productID = "pharmacy_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '5px';

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";
		document.getElementById("info_group_ipa").value = "";
		document.getElementById("hospfac_name").value = "";
	} else if (str == "hospfac") {
		show("hospfac_additional_byname", "additional_input_section");
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '5px';

		document.getElementById("dental_individual").value = "";
		document.getElementById("dental_individual_first").value = "";
		document.getElementById("dental_group_ipa").value = "";
		document.getElementById("info_individual").value = "";
		document.getElementById("info_individual_first").value = "";
		document.getElementById("info_group_ipa").value = "";
		document.getElementById("pharmacy_pharmacy_name").value = "";
	}
}

function searchByNameCreateIndexSummaryPrefill(str, medical_name, grp, fname,
		lname, pharmname, hospname)

{

	searchByNameCreateIndexSummary(str);

	var formObj = document.getElementById("summary_search_results");

	if (str == "pharmacy" || str == "hearing") {
		show("geo_attr_pharmacy_div", "geo_attr");
		hide("geo_attr_div");
		var geoVal = "";
		if (formObj.geo1[0].checked == true) {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		} else if (formObj.geo1[1].checked == true) {
			formObj.geo1[4].checked = true;
			geoVal = formObj.geo1[4].value;
		} else {
			formObj.geo1[3].checked = true;
			geoVal = formObj.geo1[3].value;
		}

		createGeoSummary(geoVal);

	} else {
		show("geo_attr_div", "geo_attr");
		hide("geo_attr_pharmacy_div");

		if (formObj.geo1[3].checked == true)

			formObj.geo1[0].checked = true;

		else if (formObj.geo1[4].checked == true)

			formObj.geo1[1].checked = true;

		else if (formObj.geo1[2].checked == true)

			formObj.geo1[2].checked = true;

		else if (formObj.geo1[1].checked == true)

			formObj.geo1[1].checked = true;

		else
			formObj.geo1[0].checked = true;
	}

	if (str == "medical" || str == "bh") {
		show("additional_info_byname", "additional_input_section");
		if (medical_name != null && medical_name == "medical_prov_new") {
			show("info_name_input_div_new_rd",
					"info_name_search_section_new_rd");
			document.getElementById("medical_name_rd").value = "medical_prov_new";
			document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		} else if (medical_name != null && medical_name == "medical_grp_new") {
			show("info_group_input_div_new_rd",
					"info_name_search_section_new_rd");
			document.getElementById("medical_name_rd").value = "medical_grp_new";
			document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		}

		var objFirstName = document.getElementById("info_individual_first");
		if (objFirstName != null && fname != null) {
			objFirstName.value = fname;
		}

		var objLastName = document.getElementById("info_individual");
		if (objLastName != null && lname != null) {
			objLastName.value = lname;
		}

		var objgrpipa = document.getElementById("info_group_ipa");
		if (objgrpipa != null && grp != null) {
			objgrpipa.value = grp;
		}

		show("input_medical_plans", "plans_section");
		productID = "medical_plans";

		/*
		 * document.getElementById("medical_name_rd").value =
		 * "medical_prov_new";
		 * document.getElementById("name_padding_rd").style.paddingBottom =
		 * '0px';
		 */
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (str == "eap") {
		show("additional_info_byname", "additional_input_section");
		if (medical_name != null && medical_name == "medical_prov_new") {
			show("info_name_input_div_new_rd",
					"info_name_search_section_new_rd");
			document.getElementById("medical_name_rd").value = "medical_prov_new";
			document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		} else if (medical_name != null && medical_name == "medical_grp_new") {
			show("info_group_input_div_new_rd",
					"info_name_search_section_new_rd");
			document.getElementById("medical_name_rd").value = "medical_grp_new";
			document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		}

		var objFirstName = document.getElementById("info_individual_first");
		if (objFirstName != null && fname != null) {
			objFirstName.value = fname;
		}

		var objLastName = document.getElementById("info_individual");
		if (objLastName != null && lname != null) {
			objLastName.value = lname;
		}

		var objgrpipa = document.getElementById("info_group_ipa");
		if (objgrpipa != null && grp != null) {
			objgrpipa.value = grp;
		}

		show("input_eap_plans", "plans_section");
		productID = "eap_plans";

		/*
		 * document.getElementById("medical_name_rd").value =
		 * "medical_prov_new";
		 * document.getElementById("name_padding_rd").style.paddingBottom =
		 * '0px';
		 */
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (str == "dental") {
		show("additional_dental_byname", "additional_input_section");

		if (medical_name != null && medical_name == "dental_prov_new") {
			show("dental_name_input_div_new_rd",
					"dental_name_search_section_new_rd");

			document.getElementById("medical_name_rd").value = "dental_prov_new";
			document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		}

		else if (medical_name != null && medical_name == "dental_grp_new")

		{

			show("dental_group_input_div_new_rd",
					"dental_name_search_section_new_rd");

			document.getElementById("medical_name_rd").value = "dental_grp_new";
			document.getElementById("name_padding_rd").style.paddingBottom = '0px';
		}

		var objDentalFirstName = document
				.getElementById("dental_individual_first");

		if (objDentalFirstName != null && fname != null) {

			objDentalFirstName.value = fname;
		}

		var objDentalLastName = document.getElementById("dental_individual");

		if (objDentalLastName != null && lname != null) {

			objDentalLastName.value = lname;
		}

		var objDentalgrpipa = document.getElementById("dental_group_ipa");

		if (objDentalgrpipa != null && grp != null) {

			objDentalgrpipa.value = grp;
		}

		show("input_dental_plans", "plans_section");
		productID = "dental_plans";

		/*
		 * document.getElementById("name_padding_rd").style.paddingBottom =
		 * '0px';
		 * 
		 * document.getElementById("medical_name_rd").value = "dental_prov_new";
		 */

	} else if (str == "pharmacy") {
		show("pharmacy_additional_byname", "additional_input_section");
		show("input_pharmacy_plans", "plans_section");
		productID = "pharmacy_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '5px';

		if (pharmname != null) {
			var pharmacy_nameKey = "pharmacy_pharmacy_name";

			var objpharmacy_name = document.getElementById(pharmacy_nameKey);

			if (objpharmacy_name != null && pharmname != null) {

				objpharmacy_name.value = pharmname;

			}
		}
	} else if (str == "hospfac") {
		show("hospfac_additional_byname", "additional_input_section");
		show("input_medical_plans", "plans_section");
		productID = "medical_plans";
		document.getElementById("name_padding_rd").style.paddingBottom = '5px';

		if (hospname != null) {
			var hospital_nameKey = "hospfac_name";

			var objhospital_name = document.getElementById(hospital_nameKey);
			if (objhospital_name != null) {

				objhospital_name.value = hospname;

			}

		}

	}
}

function searchByNameCreateIndexSummaryIpa(str)

{

	hide("medical_additional_byname", "additional_input_section");

	show("medical_group_input_div_new_rd", "additional_input_section");
	productID = "medical_plans";

}

function rdPopulateSpecialtyDropdownsSummary(product) {
	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;
	if (provCategory == "pcp") {

		// fillDropdownSumm(prov_cat.value, "pcp_prctc_cd",
		// "medical_specialty_div",product);
	} else if (provCategory == "spec") {

		fillDropdownSumm(prov_cat.value, "spec_prctc_cd",
				"medical_specialty_div", product);
		var medSpecType = document.getElementById("spec_spec_prctc_cd");
		var medSpec = medSpecType.value;
		medSpecType.name = "spec_spec_prctc_cd";

		var medSpecType2 = document.getElementById("spec_prctc_cd");
		var medSpec2 = medSpecType2.value;
		medSpecType.name = "spec_spec_prctc_cd";
	}
	/* START SPECIALTY ISSUE FIX */

	/*
	 * else if(provCategory == "dpcp")
	 *  {
	 * 
	 * 
	 * fillDropdownSumm(prov_cat.value, "pcp_prctc_cd",
	 * "dental_specialty_div",product); } else if(provCategory == "dspec") {
	 * 
	 * 
	 * 
	 * 
	 * fillDropdownSumm(prov_cat.value, "spec_prctc_cd",
	 * "dental_specialty_div",product); var medSpecType =
	 * document.getElementById("spec_spec_prctc_cd"); var medSpec =
	 * medSpecType.value; medSpecType.name = "spec_spec_prctc_cd"; }
	 */
	/* END SPECIALTY ISSUE FIX */
	else if (provCategory == "opp" || provCategory == "facilities") {
		provCategory = "opp";

		fillDropdownSumm(provCategory, "spec_prctc_cd", "opp_specialty_div",
				product);
		var facilitySpecType = document
				.getElementById("facilities_spec_prctc_cd");
		var facilitySpec = facilitySpecType.value;
		facilitySpecType.name = "facilities_spec_prctc_cd";

		var facilitySpecType2 = document.getElementById("spec_prctc_cd");

		var facilitySpec2 = facilitySpecType2.value;
		facilitySpecType.name = "facilities_spec_prctc_cd";
	}
}

function preFillSS(geo1, geoStr, state, miles, searchCat, product, speciality,
		type, lname, fname, grp, cal_grp, provflag1, hospflag1,
		languageprefill, genderprefill, acceptNewPatientprefill, bhp_age,
		ageRange, levelCare, typeService, pharmacy_name, hospital_name,
		hspafl_hspprvdr_id, planFamily) {

	var formObj = document.getElementById("summary_search_results");
	for (var i = 0; i < formObj.geo1.length; i++)

	{

		if (formObj.geo1[i].value == geo1)

		{
			formObj.geo1[i].checked = true;
			/*
			 * if(geo1=="zip" && (searchCat == "ioe" || searchCat == "ioq") &&
			 * speciality != "IOEINFERT|IOE Infertility"){
			 * createGeoSummaryTransplantIOEIOQ(geo1); } else
			 */
			if (geo1 == "zip" && (searchCat == "ioe" || searchCat == "ioq")) {
				createGeoSummaryIOEIOQ(geo1);
			} else
				createGeoSummary(geo1);

		}

	}
	// var formObj = document.getElementById("summary_search_results");
	if (geo1 != null) {
		if (geo1 == "zip") {
			var formObj2 = document.getElementById("zipcode1");
			formObj2.value = geoStr;
			selectDD(miles, "miles1");
			if (searchCat == "ioe" || searchCat == "ioq")
				$('#input_ioeioq_distance_div_rd').children('#miles1').val(
						miles);
		} else if (geo1 == "city") {
			var formObj2 = document.getElementById("city1");
			formObj2.value = geoStr;
			selectDD(state, "state1");
		} else if (geo1 == "county") {
			var formObj3 = document.getElementById("county1");
			formObj3.value = geoStr;
			selectDD(state, "state1");
		}
	}

	createIndexAdvanceSummary(searchCat, product);

	if (product != null)

	{

		var prodObj = document.getElementById(productID);
		selectDD(product, prodObj.id);
	}

	selectDD(searchCat, "provider_type_section");

	/* Search setting type dropdown Prefill defect fix Start */

	var specialityObj = document.getElementById(speciality);

	if (specialityObj != null) {

		selectDD(type, specialityObj.id);
	}

	/* Search setting type dropdown Prefill defect fix Start */

	/* Search setting California Group IPA prefill defect fix Start */

	if (searchCat != null) {

		var show_additional = getAdditionalSection(searchCat);

		if (lname != null && lname != "" && lname != "null")

		{

			var individual_firstKey = show_additional + "_individual_first";

			var individualKey = show_additional + "_individual";

			/*
			 * if(individualKey == "labs_individual")
			 *  {
			 * 
			 * 
			 * individualKey = "facilities_individual";
			 *  }
			 */

			var name = show_additional + "_name";

			var name_ca = show_additional + "_name_ca";

			var name_caObj = document.getElementById(name_ca);
			var nameObj = document.getElementById(name);

			var name_value = show_additional + "_prov";

			// var name_valueca = show_additional+"_grpca";

			if (nameObj != null && state != null && state != 'CA') {
				if ((show_additional == "medical") || (show_additional == "bh")) {
					nameSearch(name_value);
					selectDD(name_value, name);
					defaultTriggeronChange(name);
				}
			}

			if (name_caObj != null && state != null && state == 'CA') {
				if ((show_additional == "medical") || (show_additional == "bh")) {

					nameSearch(name_value);

					selectDD(name_value, name_ca);

					defaultTriggeronChange(name_ca);
				}
			}

			var objFirstName = document.getElementById(individual_firstKey);

			if (objFirstName != null && fname != null && fname != "null") {

				objFirstName.value = fname;

				defaultTriggeronChange(individual_firstKey);
			}

			var objLastName = document.getElementById(individualKey);

			if (objLastName != null && lname != null) {

				objLastName.value = lname;

				defaultTriggeronChange(individualKey);
			}

		}

		if (grp != null && grp != "" && grp != "null")

		{

			var group_ipaKey = show_additional + "_group_ipa";
			var name = show_additional + "_name";

			var name_value = show_additional + "_grp";

			var name_valueca = show_additional + "_grpca";

			var name_ca = show_additional + "_name_ca";

			var nameObj = document.getElementById(name);

			var name_caObj = document.getElementById(name_ca);

			if (nameObj != null) {

				if ((show_additional == "medical") || (show_additional == "bh")) {

					nameSearch(name_value);

					selectDD(name_value, name);

					defaultTriggeronChange(name);

				}

			}

			if (name_caObj != null) {

				if ((show_additional == "medical") || (show_additional == "bh")) {
					nameSearch(name_value);

					selectDD(name_value, name_caObj.id);

					defaultTriggeronChange(name_ca);

				}

			}

			var objgrpipa = document.getElementById(group_ipaKey);

			if (objgrpipa != null && grp != null) {

				objgrpipa.value = grp;

				defaultTriggeronChange(group_ipaKey);

			}

		}

		if (cal_grp != null && cal_grp != "" && cal_grp != "null") {

			var groupipa_calKey = show_additional + "_groupipa_cal";

			var name = show_additional + "_name_ca";

			var name_value = show_additional + "_grpca";

			if ((show_additional == "medical") || (show_additional == "bh"))

			{

				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}

			// selectDD(cal_grp,groupipa_calKey);

			var refreshTime = 3500; // 3sec

			// window.setTimeout("selectDD("+cal_grp+","+groupipa_calKey+")",
			// refreshTime);

			window.setTimeout(function() {
				selectDD(cal_grp, groupipa_calKey);
			}, refreshTime);

			defaultTriggeronChange(groupipa_calKey);

			// window.setTimeout(function(){defaultTriggeronChange(groupipa_calKey);},3400);

		}

		/* Program and Recognition prefill in search settings Start */

		if (provflag1 != null && provflag1 != "" && provflag1 != "null") {

			var provflag1Key = show_additional + "_provflag";

			var name = show_additional + "_provflag";

			var name_value = show_additional + "_provflag";

			if ((show_additional == "medical" || show_additional == "phys_bhp")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(provflag1, provflag1Key);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(provflag1Key);
			}, 4000);

		}

		if (hospflag1 != null && hospflag1 != "" && hospflag1 != "null")

		{

			var hospflag1Key = show_additional + "_hospflag";

			var name = show_additional + "_hospflag";

			var name_value = show_additional + "_hospflag";

			if ((show_additional == "hospitals"
					|| show_additional == "facilities" || show_additional == "opp")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(hospflag1, hospflag1Key);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(hospflag1Key);
			}, 4000);

		}

		/* Program and Recognition prefill in search settings End */

		/* language prefill in search settings Start */

		if (languageprefill != null && languageprefill != ""
				&& languageprefill != "null")

		{

			var languageprefillKey = show_additional + "_language";

			var name = show_additional + "_language";

			var name_value = show_additional + "_language";

			if ((show_additional == "medical" || show_additional == "phys_bhp"
					|| show_additional == "bhp" || show_additional == "dental")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(languageprefill, languageprefillKey);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(languageprefillKey);
			}, 4000);

		}

		/* language prefill in search settings End */

		/* gender prefill in search settings Start */

		if (genderprefill != null && genderprefill != ""
				&& genderprefill != "null")

		{

			var genderprefillKey = show_additional + "_gender";

			var name = show_additional + "_gender";

			var name_value = show_additional + "_gender";

			if ((show_additional == "medical" || show_additional == "phys_bhp" || show_additional == "bhp")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(genderprefill, genderprefillKey);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(genderprefillKey);
			}, 4000);

		}

		/* gender prefill in search settings End */

		/* age range prefill in search settings Start */

		if (ageRange != null && ageRange != "" && ageRange != "null")

		{

			var ageRangeKey = show_additional + "_age_range";

			var name = show_additional + "_age_range";

			var name_value = show_additional + "_age_range";

			if ((show_additional == "bhh")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(ageRange, ageRangeKey);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(ageRangeKey);
			}, 4000);

		}

		/* age range prefill in search settings End */

		/* level care prefill in search settings Start */

		if (levelCare != null && levelCare != "" && levelCare != "null")

		{

			var levelCareKey = show_additional + "_level_care";

			var name = show_additional + "_level_care";

			var name_value = show_additional + "_level_care";

			if ((show_additional == "bhh")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(levelCare, levelCareKey);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(levelCareKey);
			}, 4000);

		}

		/* level care prefill in search settings End */

		/* type of service prefill in search settings Start */

		if (typeService != null && typeService != "" && typeService != "null") {

			var typeServiceKey = show_additional + "_type_service";

			var name = show_additional + "_type_service";

			var name_value = show_additional + "_type_service";

			if ((show_additional == "bhh")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}
			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(typeService, typeServiceKey);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(typeServiceKey);
			}, 4000);

		}

		/* type of service prefill in search settings End */

		/* accept patients prefill in search settings Start */

		if (acceptNewPatientprefill != null && acceptNewPatientprefill != ""
				&& acceptNewPatientprefill != "null") {

			var acceptNewPatientprefillKey = show_additional
					+ "_accept_new_patients_only";

			var name = show_additional + "_accept_new_patients_only";

			var name_value = show_additional + "_accept_new_patients_only";

			if ((show_additional == "dental")) {
				nameSearch(name_value);
				selectDD(name_value, name);
				defaultTriggeronChange(name);
			}

			var refreshTime = 600; // 1sec

			window.setTimeout(function() {
				selectDD(acceptNewPatientprefill, acceptNewPatientprefillKey);
			}, refreshTime);

			window.setTimeout(function() {
				defaultTriggeronChange(acceptNewPatientprefillKey);
			}, 4000);

		}

		/* accept patients prefill in search settings End */

		if (pharmacy_name != null && pharmacy_name != ""
				&& pharmacy_name != "null")

		{

			var pharmacy_nameKey = "pharmacy_pharmacy_name";

			var objpharmacy_name = document.getElementById(pharmacy_nameKey);

			if (objpharmacy_name != null && pharmacy_name != null) {

				objpharmacy_name.value = pharmacy_name;

				defaultTriggeronChange(pharmacy_nameKey);
			}
		}

		if (hospital_name != null && hospital_name != ""
				&& hospital_name != "null") {
			var hospital_nameKey = show_additional + "_hospital_name";

			var objhospital_name = document.getElementById(hospital_nameKey);
			if (objhospital_name != null && hospital_name != null) {
				objhospital_name.value = hospital_name;
				defaultTriggeronChange(hospital_nameKey);
			}
		}

		/* Hosp Affiliation prefill in search settings Start */

		if (hspafl_hspprvdr_id != null && hspafl_hspprvdr_id != ""
				&& hspafl_hspprvdr_id != "null") {
			if (show_additional != "opp")

				populateHospitalAffiliationsSumm(searchCat, product);

			var hspafl_hspprvdr_idKey = show_additional + "_hspafl_hspprvdr_id";

			// selectDD(hspafl_hspprvdr_id,hspafl_hspprvdr_idKey);

			var refreshTime = 5000; // 4sec

			window.setTimeout(function() {
				selectDD(hspafl_hspprvdr_id, hspafl_hspprvdr_idKey);
			}, refreshTime);

			// defaultTriggeronChange(hspafl_hspprvdr_idKey);

			window.setTimeout(function() {
				defaultTriggeronChange(hspafl_hspprvdr_idKey);
			}, 6000);

		}

		else {
			if (show_additional != "opp")

				populateHospitalAffiliationsSumm(searchCat, product);
		}

		/* Hosp Affiliation prefill in search settings End */

		/* bhp age prefill in search settings Start */

		if (bhp_age != null && bhp_age != "" && bhp_age != "null")

		{

			var bhp_ageKey = show_additional + "_bhp_age";

			var objbhp_age = document.getElementById(bhp_ageKey);

			if (objbhp_age != null && bhp_age != null) {

				objbhp_age.value = bhp_age;

				defaultTriggeronChange(bhp_ageKey);
			}
		}

		/* bhp age prefill in search settings End */

	}

	/* Search setting California Group IPA prefill defect fix End */

}

function preFillSSName(geo1, geoStr, state, miles, searchCat, product,
		medical_name, grp, fname, lname, pharmname, hospname, planFamily) {
	var formObj = document.getElementById("summary_search_results");
	for (var i = 0; i < formObj.geo1.length; i++)

	{

		if (formObj.geo1[i].value == geo1)

		{

			formObj.geo1[i].checked = true;

			createGeoSummary(geo1);

		}

	}
	// var formObj = document.getElementById("summary_search_results");
	if (geo1 != null) {
		if (geo1 == "zip") {
			var formObj2 = document.getElementById("zipcode1");
			formObj2.value = geoStr;
			selectDD(miles, "miles1");
		} else if (geo1 == "city") {
			var formObj2 = document.getElementById("city1");
			formObj2.value = geoStr;
			selectDD(state, "state1");
		} else if (geo1 == "county") {
			var formObj3 = document.getElementById("county1");
			formObj3.value = geoStr;
			selectDD(state, "state1");
		}
	}

	searchByNameCreateIndexSummaryPrefill(searchCat, medical_name, grp, fname,
			lname, pharmname, hospname);

	if (product != null)

	{
		var prodObj = document.getElementById(productID);
		selectDD(product, prodObj.id);
	}

	selectDD(searchCat, "provider_category1");

}

function createIndexAdvanceSummary(str, product)

{

	rdCreateIndexSummary(str);

	populateDropdownsSummary(str);

	if (str == "" || str == "hearing" || str == "eyewear" || str == "ntp"
			|| str == "flushot") {
		hide("additional_section_advance");
		document.getElementById("additional_section_advance").style.borderBottom = 'none';
	} else {
		if (str == "opp")

			if (site_id != "docfind" && site_id != "navigator"
					&& site_id != "ioeioq")

				fillDropdownSumm("opp", "hospflag", "opp_hospflag_div");

		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		if (str == "rtf_facility" || str == "sa_facility"
				|| str == "mh_facility") {

			fillDropdownSumm(str, "age_range", "bhh_age_range_div");

			fillDropdownSumm(str, "type_service", "bhh_type_service_div");

			document.getElementById("type_label").style.display = 'none';
		}

		var multiSelectText = document.getElementById("bhp_specialty_text");

		if (str == "bhp") {

			fillDropdownSumm("bhp", "spec_prctc_cd", "bhp_additional_div");
			if (multiSelectText != null) {
				multiSelectText.style.display = "";
			}
			fillDropdown(str, "language", "bhp_language_div");

		} else if (str == "eap") {

			fillDropdownSumm("eap", "spec_prctc_cd", "bhp_additional_div");
			if (multiSelectText != null) {
				multiSelectText.style.display = "";
			}
			fillDropdown(str, "language", "bhp_language_div");

		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */

		show_additional = getAdditionalSection(str);

		var s1 = show_additional + "_additional";
		show(s1, "additional_section_advance");
		// document.getElementById("additional_section_advance").style.borderBottom
		// ='1px solid #D1D1D1';

		showAdditionalSumm(str, product);

	}
	/* Start SR 1335 Changes */
	$('#hospitals_hospflag').mouseover(function() {

		$('#hospitals_hospflag').css("width", "100%");

	});
	/* End SR 1335 Changes */

}

function rdCreateIndexSummary(str)

{
	// resetIndex();
	// chooseProvVisionType();
	var tabKey = document.getElementById("tabKey");

	var formObj = document.getElementById("summary_search_results");

	if (str == "")

	{
		// show start button

		// show("rd_btn_start_search","rd_search");

		// document.getElementById("rd_search").style.display = "";

		// document.getElementById("rd_search1").style.display = "";

		// document.getElementById("rd_search2").style.display = "";

		// hide go button

		// hide("rd_btn_go");

		// document.getElementById("rd_go").style.display = 'none';

		// document.getElementById("go1_rd").style.display = 'none';

		// var submit = document.getElementById("advanced_submit");

		// show plan
		// var pl = document.getElementById("plans_label");

		// pl.style.display = "";
		show("input_default_plans", "plans_section");
		document.getElementById("plans_section").style.display = "";

		// show default type of search

		// document.getElementById("geo_label").style.display = "";
		document.getElementById("geo_attr").style.display = "";
		document.getElementById("geo_type_label_section").style.display = "";

		document.getElementById("geo_type_label_section_2").style.display = "";
		document.getElementById("geo_type_input_section").style.display = "";
		document.getElementById("geo_type_input_section_2").style.display = "";

		// show default specialty label and dropdown

		show("default_additional_div", "additional_section");
		document.getElementById("additional_section").style.display = "";
		document.getElementById("type_label").style.display = "";

		// document.getElementById("axcel_section").style.display = 'none';

		// document.getElementById("prov_country_label_section").style.display =
		// "";

		// document.getElementById("prov_country_input_section").style.display =
		// "";

		// document.getElementById("hide1_rd").style.display = "";

		// document.getElementById("hide2_rd").style.display = "";

		// document.getElementById("hide3_rd").style.display = "";

		// document.getElementById("hide4_rd").style.display = "";

		// document.getElementById("hide5_rd").style.display = "";

		if (tabKey != null && tabKey.value == "tab3") {
			document.getElementById("additional_section_advance").style.display = 'none';
			document.getElementById("additional_section_advance").style.borderBottom = 'none';
			// document.getElementById("hide6_rd").style.display = "";
		}
		show("geo_attr_div", "geo_attr");
		hide("geo_attr_pharmacy_div");
		productID = null;
		ptID = "provider_type_section";
		return;
	}
	if (str == "pharmacy" || str == "hearing") {
		show("geo_attr_pharmacy_div", "geo_attr");
		hide("geo_attr_div");

		if (formObj.geo1[0].checked == true)
			formObj.geo1[3].checked = true;
		else if (formObj.geo1[1].checked == true)
			formObj.geo1[4].checked = true;
		else
			formObj.geo1[3].checked = true;
	} else {
		show("geo_attr_div", "geo_attr");
		hide("geo_attr_pharmacy_div");

		if (formObj.geo1[3].checked == true)

			formObj.geo1[0].checked = true;

		else if (formObj.geo1[4].checked == true)

			formObj.geo1[1].checked = true;

		else if (formObj.geo1[2].checked == true)
			formObj.geo1[2].checked = true;
		else if (formObj.geo1[1].checked == true)
			formObj.geo1[1].checked = true;
		else
			formObj.geo1[0].checked = true;
	}
	if (str == "eyewear" || str == "ntp" || str == "flushot"
			|| str == "hearing") {
		// show go button
		// document.getElementById("rd_go").style.display = "";

		// document.getElementById("go1_rd").style.display = "";

		// show("rd_btn_go","rd_go");

		// hide start button

		// document.getElementById("rd_search1").style.display = 'none';

		// document.getElementById("rd_search2").style.display = 'none';

		// document.getElementById("rd_search").style.display = 'none';

		hide("rd_btn_search_again");

		// hide plans
		// var pl = document.getElementById("plans_label");

		// pl.style.display = 'none';

		// hide("plans_label");
		hide("plans_section");
		document.getElementById("plans_section").style.display = 'none';

		/*
		 * if(tabKey != null && tabKey.value == "tab1") {
		 * document.getElementById("sign_rd").style.display = 'none';
		 * document.getElementById("sign_in_text").style.display = 'none'; }
		 */

		// hide radio buttons
		// document.getElementById("geo_label").style.display = 'none';
		document.getElementById("geo_attr").style.display = 'none';
		document.getElementById("geo_type_label_section").style.display = 'none';

		document.getElementById("geo_type_label_section_2").style.display = 'none';

		document.getElementById("geo_type_input_section").style.display = 'none';

		document.getElementById("geo_type_input_section_2").style.display = 'none';
		if (tabKey != null && tabKey.value == "tab3") {
			hide("additional_section_advance");
			document.getElementById("additional_section_advance").style.display = 'none';
			document.getElementById("additional_section_advance").style.borderBottom = 'none';

			// document.getElementById("hide6_rd").style.display = 'none';
		}

		// hide specialty
		document.getElementById("type_label").style.display = 'none';
		document.getElementById("additional_section").style.display = 'none';

		// document.getElementById("prov_country_label_section").style.display =
		// 'none';

		// document.getElementById("prov_country_input_section").style.display =
		// 'none';

		/*
		 * document.getElementById("hide1_rd").style.display = 'none';
		 * document.getElementById("hide2_rd").style.display = 'none';
		 * document.getElementById("hide3_rd").style.display = 'none';
		 * document.getElementById("hide4_rd").style.display = 'none';
		 * 
		 * 
		 * 
		 * 
		 * document.getElementById("hide5_rd").style.display = 'none';
		 */

	}

	else if (str == "hearing")

	{

		document.getElementById("additional_section_advance").style.display = 'none';

	}

	else if (str == "pcp" || str == "spec")

	{
		document.getElementById("additional_section_advance").style.display = "";
		show("medical_additional", "additional_section_advance");

	}

	else if (str == "phys_bhp") {
		document.getElementById("additional_section_advance").style.display = "";

		show("phys_bhp_additional", "additional_section_advance");

	}

	else if (str == "facilities" || str == "walkin" || str == "urgent") {
		document.getElementById("additional_section_advance").style.display = "";

		show("facilities_additional", "additional_section_advance");

	}

	else if (str == "labs") {
		document.getElementById("additional_section_advance").style.display = "";

		show("labs_additional", "additional_section_advance");

	}

	else if (str == "bhp") {
		document.getElementById("additional_section_advance").style.display = "";
		show("bhp_additional", "additional_section_advance");
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	else if (str == "eap") {
		document.getElementById("additional_section_advance").style.display = "";
		show("bhp_additional", "additional_section_advance");
	}

	else if (str == "mh_facility" || str == "sa_facility"
			|| str == "rtf_facility") {
		document.getElementById("additional_section_advance").style.display = "";
		document.getElementById("type_label").style.display = 'none';

		show("bhh_additional", "additional_section_advance");
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	else if (str == "opp") {
		document.getElementById("additional_section_advance").style.display = "";

		show("opp_additional", "additional_section_advance");

	}

	else if (str == "hospitals") {
		document.getElementById("additional_section_advance").style.display = "";

		show("hospitals_additional", "additional_section_advance");

	}

	else if (str == "dpcp" || str == "dspec") {
		document.getElementById("additional_section_advance").style.display = "";

		show("dental_additional", "additional_section_advance");

	}

	else if (str == "pharmacy") {
		document.getElementById("additional_section_advance").style.display = "";

		show("pharmacy_additional", "additional_section_advance");

	}

	else if (str == "ipacal") {
		document.getElementById("additional_section_advance").style.display = "";

		show("ipacal_additional", "additional_section_advance");

	}

	else if (str == "urgent" || str == "walkin" || str == "dialysislocal")

	{

		hide("additional_section_advance");

	}

	/* PCR March 2012 Changes Start */

	/*
	 * else if(str == "mh_facility" || str == "sa_facility" || str ==
	 * "rtf_facility")
	 *  {
	 * 
	 * 
	 * document.getElementById("type_label").style.display = "";
	 * document.getElementById("additional_section_advance").style.display = "";
	 * show("bhp_additional","additional_section_advance");
	 * 
	 * 
	 * 
	 * showAdditionalSumm();
	 *  }
	 */

	/* PCR March 2012 Changes End */
	else {
		// show start button

		/*
		 * document.getElementById("rd_search").style.display = "";
		 * 
		 * document.getElementById("rd_search1").style.display = "";
		 * 
		 * 
		 * document.getElementById("rd_search2").style.display = "";
		 */

		show("rd_btn_search_again", "rd_search");

		// hide go button

		/*
		 * document.getElementById("rd_go").style.display = 'none';
		 * 
		 * document.getElementById("go1_rd").style.display = 'none';
		 * 
		 * hide("rd_btn_go");
		 */

		// show plans
		/*
		 * var pl = document.getElementById("plans_label");
		 * 
		 * pl.style.display = "";
		 */
		show("input_default_plans", "plans_section");
		document.getElementById("plans_section").style.display = "";
		/*
		 * if(tabKey != null && tabKey.value == "tab1") {
		 * document.getElementById("sign_in_text").style.display = "";
		 * document.getElementById("sign_rd").style.display = ""; }
		 */
		// show default type of search
		/*
		 * document.getElementById("geo_label").style.display = "";
		 * document.getElementById("geo_attr").style.display = "";
		 * document.getElementById("geo_type_label_section").style.display = "";
		 * 
		 * 
		 * 
		 * document.getElementById("geo_type_label_section_2").style.display =
		 * "";
		 */
		// hide("geo_type_label_section");
		// hide("geo_attr_label_section");
		document.getElementById("geo_type_input_section").style.display = "";
		document.getElementById("geo_type_input_section_2").style.display = "";
		document.getElementById("additional_section").style.display = "";
		document.getElementById("type_label").style.display = "";

		/*
		 * document.getElementById("hide1_rd").style.display = "";
		 * document.getElementById("hide2_rd").style.display = "";
		 * document.getElementById("hide3_rd").style.display = "";
		 * document.getElementById("hide4_rd").style.display = "";
		 * 
		 * 
		 * 
		 * 
		 * document.getElementById("hide5_rd").style.display = "";
		 */

		/*
		 * document.getElementById("prov_country_label_section").style.display =
		 * "";
		 * 
		 * document.getElementById("prov_country_input_section").style.display =
		 * "";
		 */
		if (tabKey != null && tabKey.value == "tab3") {
			document.getElementById("additional_section_advance").style.display = "";
			// document.getElementById("additional_section_advance").style.borderBottom
			// ='1px solid #D1D1D1';
			// document.getElementById("hide6_rd").style.display = "";
		}
	}

	// Set provider category

	rdSetProviderCategory(str);

	ptID = "provider_type_section";

	// Display plan
	rdDisplayPlan(str);

	rdDisplaySpecialtySummary(str);
	// End 8390

}

function populateDropdownsSummary(str) {
	var search_cat = document.getElementById(ptID);
	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;
	if (str != null && str != "") {
		provCategory = str;

		prov_cat.value = str;
	}
	if (provCategory == "pcp") {
		fillDropdownSumm(prov_cat.value, "language", "medical_language_div");

		if (site_id != "ioeioq")

			fillDropdownSumm(prov_cat.value, "provflag", "medical_provflag_div");
	} else if (provCategory == "spec") {
		fillDropdownSumm(prov_cat.value, "language", "medical_language_div");

		if (site_id != "ioeioq")

			fillDropdownSumm(prov_cat.value, "provflag", "medical_provflag_div");
	} else if (provCategory == "phys_bhp") {

		fillDropdownSumm(prov_cat.value, "language", "phys_bhp_language_div");

		if (site_id != "ioeioq")
			fillDropdownSumm(prov_cat.value, "provflag",
					"phys_bhp_provflag_div");
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (provCategory == "bhp" || provCategory == "eap") {

		fillDropdownSumm(prov_cat.value, "language", "bhp_language_div");
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (provCategory == "dpcp") {
		fillDropdownSumm(prov_cat.value, "language", "dental_language_div");
	} else if (provCategory == "dspec") {
		fillDropdownSumm(prov_cat.value, "language", "dental_language_div");
		/* START SPECIALTY ISSUE FIX */

		/*
		 * fillDropdownSumm(prov_cat.value, "language", "dental_language_div");
		 * 
		 * fillDropdownSumm(prov_cat.value, "dspec_spec_prctc_cd",
		 * "dental_specialty_div");
		 * 
		 * show("dental_additional_div", "additional_section");
		 */
		/* END SPECIALTY ISSUE FIX */
	} else if (provCategory == "opp" || provCategory == "facilities") {
		provCategory = "opp";

		if (site_id != "docfind" && site_id != "navigator"
				&& site_id != "ioeioq")

			fillDropdownSumm("opp", "hospflag", "opp_hospflag_div");
	} else if (provCategory == "mh_facility" || provCategory == "sa_facility"
			|| provCategory == "rtf_facility") {
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		fillDropdownSumm(prov_cat.value, "level_care", "bhh_level_care_div");

		fillDropdownSumm(prov_cat.value, "age_range", "bhh_age_range_div");

		fillDropdownSumm(prov_cat.value, "type_service", "bhh_type_service_div");
		document.getElementById("type_label").style.display = 'none';
		/* PCR C-13227 - EAP/BH changes March 2012 End */
	} else if (prov_cat.value == "urgent") {
		fillDropdownSumm(prov_cat.value, "hospflag", "facilities_hospflag_div");
	} else if (prov_cat.value == "walkin") {
		fillDropdownSumm(prov_cat.value, "hospflag", "facilities_hospflag_div");
	} else if (prov_cat.value == "labs") {

		fillDropdownSumm(prov_cat.value, "hospflag", "labs_hospflag_div");
	} else if (prov_cat.value == "dialysis"
			|| prov_cat.value == "dialysislocal") {
		fillDropdownSumm(prov_cat.value, "hospflag", "facilities_hospflag_div");
	} else if (prov_cat.value == "hospitals") {
		// MS BreakFix SR Changes
		if (site_id != "docfind" && site_id != "navigator"
				&& site_id != "ioeioq" && site_id != "docfindpublic")

			fillDropdownSumm(prov_cat.value, "hospflag",
					"hospitals_hospflag_div");
	} else if (prov_cat.value == "ac" || prov_cat.value == "ar"
			|| prov_cat.value == "da" || prov_cat.value == "dmeloc"
			|| prov_cat.value == "ha" || prov_cat.value == "hs"
			|| prov_cat.value == "mri" || prov_cat.value == "pt"
			|| prov_cat.value == "rc" || prov_cat.value == "sk"
			|| prov_cat.value == "hstp" || prov_cat.value == "sd") {

		fillDropdownSumm("facilities", "hospflag", "facilities_hospflag_div");
	}

}

function rdDisplaySpecialtySummary(str) {
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	var multiSelectText = document.getElementById("bhp_specialty_text");
	if (multiSelectText != null) {
		multiSelectText.style.display = 'none';
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */

	if (str != null) {
		show_specialty = getAdditionalSection(str);
		show_additional = show_specialty;

	} else {
		show_specialty = "default";
	}
	var myStr = show_specialty + "_additional_div";
	var multiSelectText = document.getElementById("bhp_specialty_text");
	if (str == "urgent" || str == "walkin" || str == "ntp"
			|| str == "dialysislocal" || str == "eyewear" || str == "flushot"
			|| str == "hearing" || str == "ipacal") {
		document.getElementById("type_label").style.display = 'none';
		// document.getElementById("axcel_section").style.display = 'none';

		// document.getElementById("search_for_rd").style.paddingBottom =
		// '15px';
		document.getElementById("additional_section").style.display = 'none';
		// document.getElementById("hide_error_rd").style.display = 'none';

		// hide("type_label");
		hide("additional_section");
	} else if (str == "pharmacy") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		document.getElementById("additional_section").style.display = "";
		show(myStr, "additional_section");
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';

		// rdPopulateSpecialtyDropdowns();
	} else if (str == "opp") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		document.getElementById("additional_section").style.display = "";
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_facilities_div", "additional_section");

		// rdPopulateSpecialtyDropdowns();
	} else if (str == "spec") {
		document.getElementById("type_label").style.display = "";

		// document.getElementById("axcel_section").style.display = "";
		show("input_spec_div", "additional_section");
		document.getElementById("additional_section").style.display = "";

		// document.getElementById("axcel_section").style.paddingBottom =
		// '15px';
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		// populateDropdowns();
		// show(myStr, "additional_section");
		// rdPopulateSpecialtyDropdowns();
	} else if (str == "phys_bhp") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';

		document.getElementById("additional_section").style.paddingBottom = "";
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("input_phys_bhp_div", "additional_section");
	} else if (str == "bhp") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		document.getElementById("additional_section").style.display = "";
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		// show("bhp_additional_div", "additional_section");
		fillDropdownSumm("bhp", "spec_prctc_cd", "bhp_additional_div");
		show("bhp_additional_div", "additional_section");
		if (multiSelectText != null) {
			multiSelectText.style.display = "";
		}
		// rdPopulateSpecialtyDropdowns();
	} else if (str == "eap") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("additional_section").style.display = "";

		fillDropdownSumm("eap", "spec_prctc_cd", "bhp_additional_div");
		show("bhp_additional_div", "additional_section");
		if (multiSelectText != null) {
			multiSelectText.style.display = "";
		}
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	/*
	 * else if(str == "mh_facility" || str == "sa_facility" || str ==
	 * "rtf_facility") { document.getElementById("type_label").style.display =
	 * ""; document.getElementById("additional_section").style.display = ""; }
	 */
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (str == "labs") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';

		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		document.getElementById("additional_section").style.display = "";
		show("input_labs_div", "additional_section");
		// rdPopulateSpecialtyDropdowns();
	} else if (str == "dpcp") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		document.getElementById("additional_section").style.display = "";
		show("input_dpcp_div", "additional_section");
		// rdPopulateSpecialtyDropdowns();
	} else if (str == "dspec") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		document.getElementById("additional_section").style.display = "";
		/* START SPECIALTY ISSUE FIX */

		show("input_dspec_div", "additional_section");

		/* END SPECIALTY ISSUE FIX */

		rdPopulateSpecialtyDropdownsSummary();
	} else if (str == "pcp") {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		document.getElementById("additional_section").style.display = "";
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';
		show("medical_pcp_additional_div", "additional_section");
		// rdPopulateSpecialtyDropdowns();
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	else if (str == "ioe") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("additional_section").style.paddingBottom = '15px';
		show("ioe_additional_div", "additional_section");
	} else if (str == "ioq") {
		document.getElementById("type_label").style.display = "";
		document.getElementById("additional_section").style.paddingBottom = '15px';
		show("ioq_additional_div", "additional_section");
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */
	else {
		document.getElementById("type_label").style.display = "";
		// document.getElementById("axcel_section").style.display = 'none';
		// document.getElementById("additional_section").style.paddingBottom =
		// '15px';
		document.getElementById("additional_section").style.display = "";
		// document.getElementById("search_for_rd").style.paddingBottom = '5px';

		show(myStr, "additional_section");
		// rdPopulateSpecialtyDropdowns();
	}
}

function fillBlankHospAffl()

{

	var fj = document.getElementById("div1");

	fj.style.display = 'none';

}

function fillDropdownSumm(search_cat, dropdown, section) {
	var dddiv = document.getElementById(section);
	var productObj = document.getElementById(productID);
	var product_code = getProductCode(productObj.value);
	var stored_dropdown = getStoredDropdownName(product_code, search_cat,
			dropdown);
	var x = names.isElement(stored_dropdown);
	if (x != -1) {
		/* PCR C-13227 - EAP/BH changes March 2012 Start */
		if (search_cat == 'bhp' || search_cat == 'eap') {

			dddiv.innerHTML = createDropdownSumm(search_cat, dropdown,
					dropdowns[x]);
		} else {

			dddiv.innerHTML = createDropdown(search_cat, dropdown, dropdowns[x]);
		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */
	} else {

		getDropdownSumm(product_code, search_cat, dropdown, stored_dropdown);
		var last = dropdowns.length - 1;

		/* PCR C-13227 - EAP/BH changes March 2012 Start */
		if (search_cat == 'bhp' || search_cat == 'eap') {

			dddiv.innerHTML = createDropdownSumm(search_cat, dropdown,
					dropdowns[last]);
		} else {

			dddiv.innerHTML = createDropdown(search_cat, dropdown,
					dropdowns[last]);
		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */
	}
}

function getDropdownSumm(product_code, search_cat, dropdown, stored_dropdown) {
	xmlHttp = GetXmlHttpObject();
	if (xmlHttp == null)
		return;
	var url = "/docfind/rd/dropdowns.jsp?site_id=" + site_id + "&search_cat="
			+ search_cat + "&dropdown=" + dropdown + "&product_code="
			+ product_code;
	xmlHttp.open("GET", url, false);
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) {
			handleDropdown(stored_dropdown, xmlHttp.responseText);
		}
	}
	xmlHttp.send(null);
	// Firefox - handles synchronous data when onreadystatechange is bypassed
	if (window.XMLHttpRequest) {
		handleDropdown(stored_dropdown, xmlHttp.responseText);
	}
}

function fillHospitalAffiliationSumm(section, str, prod) {
	var dddiv = document.getElementById(section);

	getHospitalAffiliationSumm(dddiv, str, prod);

}

function getHospitalAffiliationSumm(dddiv, str, prod) {
	var site_id = document.getElementById("site_id");
	xmlHttp = GetXmlHttpObject();
	if (xmlHttp == null)
		return;

	var myURL;

	var tempObj = document.getElementById("summary_search_results");

	for (var i = 0; i < 3; i++) {
		if (tempObj.geo1[i].checked) {
			geo1 = tempObj.geo1[i].value;
		}
	}

	if (prod != null && prod != "")

		myURL = createURLFromInputSummSS(prod, geo1);

	else

		myURL = createURLFromInputSumm(geo1);

	var url = "/docfind/HospitalAffiliation.do?" + myURL + "&site_id="
			+ site_id.value + "&langpref=en&servReq=HOSPDD";

	// var url = "/docfind/HospitalAffiliation.do?" + myURL +
	// "&site_id=docfind&langpref=en&servReq=HOSPDD";
	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;

	if (str != null && str != "") {
		provCategory = str;

		prov_cat.value = str;

	}

	var zipcode1 = document.getElementById("zipcode1");

	var productObj = document.getElementById(productID);

	var city1 = document.getElementById("city1");

	var state1 = document.getElementById("state1");

	var county1 = document.getElementById("county1");
	var previousInnerHTML = new String();
	previousInnerHTML = document.getElementById('div1').innerHTML;
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4) {
			if (geo1 == "zip" && prov_cat.value != "" && zipcode1.value != ""
					&& productObj.value != "") {
				dddiv.innerHTML = xmlHttp.responseText;
			}

			else if (geo1 == "city" && prov_cat.value != ""
					&& city1.value != "" && state1.value != ""
					&& productObj.value != "") {
				dddiv.innerHTML = xmlHttp.responseText;
			}

			else if (geo1 == "county" && prov_cat.value != ""
					&& county1.value != "" && state1.value != ""
					&& productObj.value != "") {
				dddiv.innerHTML = xmlHttp.responseText;
			} else
				dddiv.innerHTML = previousInnerHTML;

			// Start of SR1201
			var state = document.getElementById("stateval");
			if (state != undefined && state.value == "CA")

			{ /* PCR C-13227 - EAP/BH changes March 2012 Start */
				if (provCategory != undefined
						&& (provCategory == "pcp" || provCategory == "spec"
								|| provCategory == "phys_bhp"
								|| provCategory == "bhp" || provCategory == "eap")) {/*
				 * PCR
				 * C-13227 -
				 * EAP/BH
				 * changes
				 * March
				 * 2012
				 * End
				 */
					if (geo1 != undefined && geo1 == "zip") {
						showAdditionalCA(state);
					}

				}
			}
			// End of SR1201
		}
	}
	xmlHttp.open("GET", url, true);
	xmlHttp.send(null);
}

function createURLFromInputSumm(geo1) {
	var tempObj = document.getElementById("summary_search_results");
	// var geo1;
	var URL = "";
	for (var i = 0; i < tempObj.geo1.length; i++) {
		if (tempObj.geo1[i].checked) {

			// geo1 = tempObj.geo1[i].value;
			URL += ("&geo1=" + geo1);
		}
	}
	if (geo1 == "zip") {
		tempObj = document.getElementById("zipcode1");
		URL += ("&zipcode=" + tempObj.value);
		tempObj = document.getElementById("miles1");
		URL += ("&miles=" + tempObj.value);
	} else if (geo1 == "city") {
		tempObj = document.getElementById("city1");
		URL += ("&city=" + tempObj.value);
		tempObj = document.getElementById("state1");
		URL += ("&state=" + tempObj.value);
	} else if (geo1 == "county") {
		tempObj = document.getElementById("county1");
		URL += ("&county=" + tempObj.value);
		tempObj = document.getElementById("state1");
		URL += ("&state=" + tempObj.value);
	}
	tempObj = document.getElementById(ptID);
	URL += ("&search_cat=" + tempObj.value);
	tempObj = document.getElementById(productID);
	URL += ("&product=" + tempObj.value);
	return URL;
}

function createURLFromInputSummSS(prod, geo1) {
	var tempObj = document.getElementById("summary_search_results");
	// var geo1;

	var URL = "";

	URL += ("&geo1=" + geo1);

	/*
	 * for(var i=0; i < tempObj.geo1.length; i++) { if(tempObj.geo1[i].checked) {
	 * 
	 * 
	 * 
	 * 
	 * //geo1 = tempObj.geo1[i].value;
	 *  } }
	 */
	if (geo1 == "zip") {
		tempObj = document.getElementById("zipcode1");
		URL += ("&zipcode=" + tempObj.value);
		tempObj = document.getElementById("miles1");
		URL += ("&miles=" + tempObj.value);
	} else if (geo1 == "city") {
		tempObj = document.getElementById("city1");
		URL += ("&city=" + tempObj.value);
		tempObj = document.getElementById("state1");
		URL += ("&state=" + tempObj.value);
	} else if (geo1 == "county") {
		tempObj = document.getElementById("county1");
		URL += ("&county=" + tempObj.value);
		tempObj = document.getElementById("state1");
		URL += ("&state=" + tempObj.value);
	}
	tempObj = document.getElementById(ptID);
	URL += ("&search_cat=" + tempObj.value);

	// tempObj = document.getElementById(productID);

	URL += ("&product=" + prod);
	return URL;

}

function showAdditionalSumm(str, product)

{

	// content 1008
	if (product == "EHNFullDirectory") {
		location.href = "/docfind/cms/assets/pdf/emory/EHN Full Directory.pdf";

	}

	var myStr = show_additional + "_additional";
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	if (show_additional == "medical" || show_additional == "phys_bhp"
			|| show_additional == "bhp" || show_additional == "eap") {/*
	 * PCR
	 * C-13227 -
	 * EAP/BH
	 * changes
	 * March
	 * 2012
	 * End
	 */

		resetDD(show_additional + "_name");

		populateHospitalAffiliationsSumm(str, product);

		show(myStr, "additional_section_advance");

	}

	if (show_additional == "medical")

		resetDD("medical_gender");

	if (show_additional == "phys_bhp")

		resetDD("phys_bhp_gender");

	/* PCR C-13227 - EAP/BH changes March 2012 Start */

	if (show_additional == "bhp" || show_additional == "eap")

		resetDD("bhp_gender");
	if (show_additional == "medical" || show_additional == "phys_bhp"
			|| show_additional == "bhp" || show_additional == "eap") {/*
	 * PCR
	 * C-13227 -
	 * EAP/BH
	 * changes
	 * March
	 * 2012
	 * End
	 */

		var state = document.getElementById("state1");

		var zipcodeSum = document.getElementById("zipcode1");

		var caldivId = show_additional + "_name_california_input_div";

		var normaldivId = show_additional + "_name_normal_input_div";

		var sectionId = show_additional + "_namelabel_search_section";

		var stateValueObj = document.getElementById("stateval");

		if (state != undefined && state.value == 'CA' && geo1 != "zip") {
			resetDD(show_additional + "_name_ca");
			show(caldivId, sectionId);
		}

		else if (stateValueObj != undefined && stateValueObj != null
				&& stateValueObj.value == 'CA' && zipcodeSum != undefined
				&& zipcodeSum != null && zipcodeSum.value != ""
				&& geo1 == "zip") {
			resetDD(show_additional + "_name_ca");
			show(caldivId, sectionId);
		} else {

			show(normaldivId, sectionId);
		}
	}

}

function populateHospitalAffiliationsSumm(str, prod)

{

	var prov_cat = document.getElementById("provider_type_section");
	var provCategory = prov_cat.value;
	if (str != null && str != "")
		provCategory = str;

	if (provCategory == "pcp") {
		fillHospitalAffiliationSumm("medical_hospaffil_div", str, prod);
	} else if (provCategory == "spec") {
		fillHospitalAffiliationSumm("medical_hospaffil_div", str, prod);
	} else if (provCategory == "phys_bhp") {

		fillHospitalAffiliationSumm("phys_bhp_hospaffil_div", str, prod);
	}
	/* PCR C-13227 - EAP/BH changes March 2012 Start */
	else if (provCategory == "bhp" || provCategory == "eap") {

		fillHospitalAffiliationSumm("bhp_hospaffil_div", str, prod);
	}
	/* PCR C-13227 - EAP/BH changes March 2012 End */
	else if (provCategory == "opp" || provCategory == "facilities") {
		provCategory = "opp";
		if (site_id != "docfind" && site_id != "navigator"
				&& site_id != "ioeioq")
			fillDropdown("opp", "hospflag", "opp_hospflag_div");
	}
}

function fillGroupIPASumm(section) {
	var dddiv = document.getElementById(section);
	var tempObj = document.getElementById("summary_search_results");
	for (var i = 0; i < 3; i++) {
		if (tempObj.geo1[i].checked) {
			geo1 = tempObj.geo1[i].value;
		}
	}

	/*
	 * if($('#text_zip_div').is(":visible")){ showWithId("noPref");
	 * hideWithId("medical_organization_group_ipa"); }else{
	 * 
	 * 
	 * 
	 * 
	 * if(!$('#text_zip_div').is(":visible")){ hideWithId("noPref");
	 * showWithId("medical_organization_group_ipa"); } }
	 */

	var myURL = createURLFromInputSumm(geo1);

	getGroupIPACASumm(dddiv, myURL);

}

function getGroupIPACASumm(dddiv, myURL) {
	var site_id = document.getElementById("site_id");
	xmlHttp1 = GetXmlHttpObject();
	if (xmlHttp1 == null) {
		return;
	}

	var url = "/docfind/GroupIpaCA.do?" + myURL + "&site_id=" + site_id.value
			+ "&langpref=en&servReq=GROUPIPA";
	xmlHttp1.onreadystatechange = function() {
		if (xmlHttp1.readyState == 4) {
			dddiv.innerHTML = xmlHttp1.responseText;
		}
	}
	xmlHttp1.open("GET", url, true);
	xmlHttp1.send(null);
}

function prePopPlanDropDown(provCat, medPrd, denPrd, sbhPrd, eapPrd)

{

	if (urlProtocol == "https:"
			&& (site_id == "docfind" || site_id == "navigator"))

	{

		var product;

		if (provCat == "pcp" || provCat == "spec" || provCat == "hospitals"
				|| provCat == "urgent" || provCat == "walkin"
				|| provCat == "opp" || provCat == "medical")

			product = medPrd;

		else if (provCat == "dpcp" || provCat == "dspec" || provCat == "dental")

			product = denPrd;

		else if (provCat == "bhp" || provCat == "bh")

			product = sbhPrd;

		else if (provCat == "eap")

			product = eapPrd;

		if (product != null) {

			rdDisplayPlan(provCat);
			var prodObj = document.getElementById(productID);
			selectDD(product, prodObj.id);
		}
	}
}

function navigateToTab(tabStr) {

	var urlStr = location.href;

	var intIndexOfMatch = urlStr.indexOf("tabKey=tab");

	var replaceKey = "tabKey=" + tabStr;

	var finalUrlStr = urlStr;

	var intIndexOfFirstElement = urlStr.indexOf("?");

	if (intIndexOfMatch != -1) {

		finalUrlStr = urlStr.replace(new RegExp("tabKey=tab[0-9]", "gi"),
				replaceKey);

	} else if (intIndexOfFirstElement != -1) {

		finalUrlStr = urlStr + "&" + replaceKey;

	} else {

		finalUrlStr = urlStr + "?tabKey=" + tabStr;

	}

	location.href = finalUrlStr;

}

function searchPrefill() {

	var tabKeyVal = document.getElementById("tabKey");

	if (tabKeyVal != null && (tabKeyVal.value == "tab2"))

	{

		searchByNamePrefill();

	}

	if (tabKeyVal != null && (tabKeyVal.value == "tab1")) {

		searchByLocationPrefill();

	}

	if (tabKeyVal != null && (tabKeyVal.value == "tab3")) {

		advanceSearchPrefill();
	}
}

function searchByNamePrefill() {

	var provCatStr = document.getElementById("provider_category").value;

	var tabKeyVal = document.getElementById("tabKey");

	if (tabKeyVal != null && (tabKeyVal.value == "tab2")) {

		searchByNameCreateIndex(provCatStr);

		if (provCatStr == "medical" || provCatStr == "bh") {

			if (individual_first != null || individual != null) {

				show("info_name_input_div_new_rd",
						"info_name_search_section_new_rd");

				document.getElementById("medical_name_rd").value = "medical_prov_new";

			} else if (group_ipa != null) {

				show("info_group_input_div_new_rd",
						"info_name_search_section_new_rd");

				document.getElementById("medical_name_rd").value = "medical_grp_new";
			}
		}

		if (provCatStr == "dental") {

			if (dental_individual_first != null || dental_individual != null) {

				show("dental_name_input_div_new_rd",
						"dental_name_search_section_new_rd");

				document.getElementById("medical_name_rd").value = "dental_prov_new";

			} else if (dental_group_ipa != null) {

				show("dental_group_input_div_new_rd",
						"dental_name_search_section_new_rd");

				document.getElementById("medical_name_rd").value = "dental_grp_new";
			}
		}

		var objFirstName = document.getElementById("info_individual_first");

		if (objFirstName != null && individual_first != null) {

			objFirstName.value = individual_first;
		}

		var objLastName = document.getElementById("info_individual");

		if (objLastName != null && individual != null) {

			objLastName.value = individual;
		}

		var objgrpipa = document.getElementById("info_group_ipa");

		if (objgrpipa != null && group_ipa != null) {

			objgrpipa.value = group_ipa;
		}

		var objDentalFirstName = document
				.getElementById("dental_individual_first");

		if (objDentalFirstName != null && dental_individual_first != null) {

			objDentalFirstName.value = dental_individual_first;
		}

		var objDentalLastName = document.getElementById("dental_individual");

		if (objDentalLastName != null && dental_individual != null) {

			objDentalLastName.value = dental_individual;
		}

		var objDentalgrpipa = document.getElementById("dental_group_ipa");

		if (objDentalgrpipa != null && dental_group_ipa != null) {

			objDentalgrpipa.value = dental_group_ipa;
		}

		if (pharmacy_name != null) {
			var pharmacy_nameKey = "pharmacy_pharmacy_name";

			var objpharmacy_name = document.getElementById(pharmacy_nameKey);

			if (objpharmacy_name != null && pharmacy_name != null) {

				objpharmacy_name.value = pharmacy_name;

				defaultTriggeronChange(pharmacy_nameKey);
			}
		}

		if (hospital_name != null) {
			var hospital_nameKey = "hospfac_name";

			var objhospital_name = document.getElementById(hospital_nameKey);
			if (objhospital_name != null) {

				objhospital_name.value = hospital_name;

				defaultTriggeronChange(hospital_nameKey);
			}
		}
	}

}

function defaultTriggeronChange(dropDown) {

	var drpDown = document.getElementById(dropDown);

	if (drpDown != null) {

		if (drpDown.onchange) {

			drpDown.onchange();
		}

	}
}

function searchByLocationPrefill() {
	if (provider_category != null) {
		if (search_cat != null) {

			defaultSpecialityDrpDwn(search_cat);

			selectDD(search_cat, "provider_type_section");

			defaultPCPDrpDwn(search_cat);

			// defaulthspaflDrpDwn(search_cat);
		}
	}
}

/* PCR C-13227 - EAP/BH changes March 2012 Start */

function resetBHEAPDD(dropdown) {
	var dd = document.getElementById(dropdown);
	for (var i = 0; i < dd.options.length; i++) {

		dd.options[i].selected = false;
	}
}
/* PCR C-13227 - EAP/BH changes March 2012 End */

function advanceSearchPrefill() {
	if (provider_category != null) {
		if (search_cat != null) {
			selectDD(search_cat, "provider_type_section");

			// defaultTriggeronChange("provider_type_section");

			defaultSpecialityDrpDwnTab3(search_cat);

			defaultPCPDrpDwnTab3(search_cat);

			// populateHospitalAffiliations();

			// defaulthspaflDrpDwn(search_cat);

			var show_additional = getAdditionalSection(search_cat);

			if (gender != null)

			{

				var genderKey = show_additional + "_gender";

				selectDD(gender, genderKey);

				defaultTriggeronChange(genderKey);
			}

			if (language != null)

			{

				var languageKey = show_additional + "_language";

				selectDD(language, languageKey);

				defaultTriggeronChange(languageKey);
			}

			if (accept_new_patients_only != null)

			{

				var accept_new_patients_onlyKey = show_additional
						+ "_accept_new_patients_only";

				selectDD(accept_new_patients_only, accept_new_patients_onlyKey);

				defaultTriggeronChange(accept_new_patients_onlyKey);
			}

			if (provflag != null)

			{

				var provflagKey = show_additional + "_provflag";

				selectDD(provflag, provflagKey);

				defaultTriggeronChange(provflagKey);
			}

			if (individual != null)

			{

				var individual_firstKey = show_additional + "_individual_first";

				var individualKey = show_additional + "_individual";

				/*
				 * if(individualKey == "labs_individual")
				 *  {
				 * 
				 * 
				 * individualKey = "facilities_individual";
				 *  }
				 */

				var name = show_additional + "_name";
				var name_ca = show_additional + "_name_ca";
				var name_caObj = document.getElementById(name_ca);
				var nameObj = document.getElementById(name);

				var name_value = show_additional + "_prov";

				// var name_valueca = show_additional+"_grpca";
				if (nameObj != null) {

					if ((show_additional == "medical")
							|| (show_additional == "bh")
							|| (show_additional == "bhp")) {
						nameSearch(name_value);
						selectDD(name_value, name);
						defaultTriggeronChange(name);
					}
				}

				if (name_caObj != null) {
					if ((show_additional == "medical")
							|| (show_additional == "bh")
							|| (show_additional == "bhp")) {
						nameSearch(name_value);

						selectDD(name_value, name_ca);

						defaultTriggeronChange(name_ca);
					}
				}

				var objFirstName = document.getElementById(individual_firstKey);

				if (objFirstName != null && individual_first != null) {

					objFirstName.value = individual_first;

					defaultTriggeronChange(individual_firstKey);
				}

				var objLastName = document.getElementById(individualKey);

				if (objLastName != null && individual != null) {

					objLastName.value = individual;

					defaultTriggeronChange(individualKey);
				}

			}

			if (group_ipa != null)

			{

				var group_ipaKey = show_additional + "_group_ipa";
				var name = show_additional + "_name";

				var name_value = show_additional + "_grp";

				var name_valueca = show_additional + "_grpca";

				var name_ca = show_additional + "_name_ca";

				var nameObj = document.getElementById(name);

				var name_caObj = document.getElementById(name_ca);

				if (nameObj != null) {

					if ((show_additional == "medical")
							|| (show_additional == "bh")
							|| (show_additional == "bhp")) {

						nameSearch(name_value);

						selectDD(name_value, name);

						defaultTriggeronChange(name);

					}

				}

				if (name_caObj != null) {

					if ((show_additional == "medical")
							|| (show_additional == "bh")
							|| (show_additional == "bhp")) {
						nameSearch(name_value);

						selectDD(name_value, name_ca);

						defaultTriggeronChange(name_ca);

					}

				}

				var objgrpipa = document.getElementById(group_ipaKey);

				if (objgrpipa != null && group_ipa != null) {

					objgrpipa.value = group_ipa;

					defaultTriggeronChange(group_ipaKey);

				}

			}

			if (groupipa_cal != null && groupipa_cal != ""
					&& groupipa_cal != "null") {

				var groupipa_calKey = show_additional + "_groupipa_cal";

				var name = show_additional + "_name_ca";

				var name_value = show_additional + "_grpca";

				if ((show_additional == "medical") || (show_additional == "bh")
						|| (show_additional == "bhp"))

				{

					nameSearch(name_value);
					selectDD(name_value, name);
					defaultTriggeronChange(name);
				}

				// selectDD(cal_grp,groupipa_calKey);

				var refreshTime = 3500; // 3sec

				// window.setTimeout("selectDD("+cal_grp+","+groupipa_calKey+")",
				// refreshTime);

				window.setTimeout(function() {
					selectDD(groupipa_cal, groupipa_calKey);
				}, refreshTime);

				// defaultTriggeronChange(groupipa_calKey);

				window.setTimeout(function() {
					defaultTriggeronChange(groupipa_calKey);
				}, 5000);
			}

			/*
			 * if(groupipa_cal != null) {
			 * 
			 * 
			 * 
			 * 
			 * var groupipa_calKey = show_additional+"_groupipa_cal";
			 * 
			 * var name = show_additional+"_name_ca";
			 * 
			 * var name_value = show_additional+"_grpca";
			 * 
			 * if((show_additional =="medical" ) || (show_additional == "bh")) {
			 * 
			 * 
			 * 
			 * 
			 * 
			 * nameSearch(name_value); selectDD(name_value, name);
			 * defaultTriggeronChange(name); }
			 * 
			 * 
			 * 
			 * 
			 * 
			 * selectDD(groupipa_cal,groupipa_calKey);
			 * 
			 * defaultTriggeronChange(groupipa_calKey);
			 * 
			 * 
			 * 
			 *  }
			 */

			if (bhp_age != null)

			{

				var bhp_ageKey = show_additional + "_bhp_age";

				var objbhp_age = document.getElementById(bhp_ageKey);

				if (objbhp_age != null && bhp_age != null) {

					objbhp_age.value = bhp_age;
				}
			}

			/* P8390a advanced tab BH prefill changes start */

			if (level_care != null)

			{

				var level_careKey = show_additional + "_level_care";

				selectDD(level_care, level_careKey);

				defaultTriggeronChange(level_careKey);
			}

			if (age_range != null)

			{

				var age_rangeKey = show_additional + "_age_range";

				selectDD(age_range, age_rangeKey);

				defaultTriggeronChange(age_rangeKey);
			}

			if (type_service != null)

			{

				var type_serviceKey = show_additional + "_type_service";

				selectDD(type_service, type_serviceKey);

				defaultTriggeronChange(type_serviceKey);

			}

			/* P8390a advanced tab BH prefill changes start */

			if (hospital_name != null) {
				var hospital_nameKey = show_additional + "_hospital_name";

				var objhospital_name = document
						.getElementById(hospital_nameKey);
				if (objhospital_name != null && hospital_name != null) {
					objhospital_name.value = hospital_name;
					defaultTriggeronChange(hospital_nameKey);
				}
			}

			if (pharmacy_name != null)

			{

				var pharmacy_nameKey = "pharmacy_pharmacy_name";

				var objpharmacy_name = document
						.getElementById(pharmacy_nameKey);

				if (objpharmacy_name != null && pharmacy_name != null) {

					objpharmacy_name.value = pharmacy_name;

					defaultTriggeronChange(pharmacy_nameKey);
				}
			}

			if (hospflag != null && hospflag != "")

			{

				if (show_additional == "labs")

				{

					show_additional = "facilities";

				}

				var hospflagKey = show_additional + "_hospflag";
				selectDD(hospflag, hospflagKey);

				defaultTriggeronChange(hospflagKey);
			}

			if (hspafl_hspprvdr_id != null)

			{

				if (show_additional != "opp")
					populateHospitalAffiliations();

				var hspafl_hspprvdr_idKey = show_additional
						+ "_hspafl_hspprvdr_id";

				// selectDD(hspafl_hspprvdr_id,hspafl_hspprvdr_idKey);

				var refreshTime = 4000; // 4sec

				window.setTimeout(function() {
					selectDD(hspafl_hspprvdr_id, hspafl_hspprvdr_idKey);
				}, refreshTime);

				// defaultTriggeronChange(hspafl_hspprvdr_idKey);

				window.setTimeout(function() {
					defaultTriggeronChange(hspafl_hspprvdr_idKey);
				}, 5000);
			} else {

				if (show_additional != "opp")
					populateHospitalAffiliations();
			}

			/*
			 * if(show_additional != "opp")
			 * 
			 * populateHospitalAffiliations();
			 */

		}

	}
}

function defaultPCPDrpDwn(search_cat) {

	if (pcp_prctc_cd != null) {
		if (search_cat == "pcp" || search_cat == "dpcp") {
			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_pcp_prctc_cd";
			document.getElementById("type_label").style.display = "";
			if (site_id != null
					&& (site_id == "walmart" || site_id == "walmart1"
							|| site_id == "walmart2" || site_id == "ioeioq")) {
				if (show_specialty != "dental")
					show("medical_pcp_additional_div", "additional_section");
				if (search_cat == "pcp") {
					selectDD(pcp_prctc_cd, "medical_pcp_prctc_cd"); // change
					// the
					// dropdown
					// id
				} else
					selectDD(pcp_prctc_cd, specKey);
			} else {
				if (show_specialty != "dental")
					show(myStr, "additional_section");
				selectDD(pcp_prctc_cd, specKey);
			}
			defaultTriggeronChange(specKey);
		}
	}

}

function defaultSpecialityDrpDwn(search_cat) {

	if (spec_prctc_cd != null) {

		// var speciality_Select = document.getElementById(specKey);

		if (search_cat != "dspec") {
			rdPopulateSpecialtyDropdowns();
		}
		if (search_cat == "spec") {

			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			if (site_id != null
					&& (site_id == "walmart" || site_id == "walmart1"
							|| site_id == "walmart2" || site_id == "ioeioq")) {
				selectDD(spec_prctc_cd, "medical_spec_prctc_cd");
				defaultTriggeronChange("medical_spec_prctc_cd");
			} else {
				selectDD(spec_prctc_cd, specKey);
				defaultTriggeronChange(specKey);
			}
		}
		if (search_cat == "dspec") {

			var show_specialty = getAdditionalSection(search_cat);
			var myStr = "input_dspec_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			selectDD(spec_prctc_cd, specKey);
			defaultTriggeronChange(specKey);
		}
		if (search_cat == "phys_bhp") {

			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			if (site_id != null
					&& (site_id == "walmart" || site_id == "walmart1" || site_id == "walmart2")) {
				selectDD(spec_prctc_cd, "phys_bhp_spec_prctc_cd");
				defaultTriggeronChange("phys_bhp_spec_prctc_cd");
			} else {
				selectDD(spec_prctc_cd, specKey);
				defaultTriggeronChange(specKey);
			}
		}
		if (search_cat == "opp" || search_cat == "facilities") {

			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			selectDD(spec_prctc_cd, specKey);
			defaultTriggeronChange(specKey);
		}
		if (search_cat == "hospitals") {

			selectDD(spec_prctc_cd, "hospitals_spec_div");
			defaultTriggeronChange("hospitals_spec_div");
		}
		if (search_cat == "labs") {
			selectDD(spec_prctc_cd, "labs_spec_prctc_cd");
			defaultTriggeronChange("labs_spec_prctc_cd");
		}
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		if (search_cat == "bhp" || search_cat == "eap") {

			selectDD(spec_prctc_cd, "bhp_spec_prctc_cd");
			defaultTriggeronChange("bhp_spec_prctc_cd");
		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */
		/* code changes for defect DEF0200592995 Start */
		if (search_cat == "pharmacy") {
			selectDD(spec_prctc_cd, "pharmacy_spec_prctc_cd");
			defaultTriggeronChange("pharmacy_spec_prctc_cd");
		}
		/* code changes for defect DEF0200592995 End */
	}
	$('#medical_spec_prctc_cd').mouseover(function() {
		$('#medical_spec_prctc_cd').css("width", "auto");
	});

	$('#phys_bhp_spec_prctc_cd').mouseover(function() {
		$('#phys_bhp_spec_prctc_cd').css("width", "auto");
	});
}

function defaultPCPDrpDwnTab3(search_cat) {

	if (pcp_prctc_cd != null) {
		if (search_cat == "pcp" || search_cat == "dpcp") {
			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_pcp_prctc_cd";
			document.getElementById("type_label").style.display = "";
			if (site_id != null
					&& (site_id == "walmart" || site_id == "walmart1"
							|| site_id == "walmart2" || site_id == "ioeioq")) {
				if (show_specialty != "dental") {
					show("medical_pcp_additional_div", "additional_section");
				}
				if (search_cat == "pcp") {
					selectDD(pcp_prctc_cd, "medical_pcp_prctc_cd"); // change
					// the
					// dropdown
					// id
				} else
					selectDD(pcp_prctc_cd, specKey);
			} else {
				if (show_specialty != "dental")
					show(myStr, "additional_section");
				selectDD(pcp_prctc_cd, specKey);
			}
			defaultTriggeronChange(specKey);
		}
	}

}

function defaultSpecialityDrpDwnTab3(search_cat) {

	if (spec_prctc_cd != null) {

		var speciality_Select = document.getElementById(specKey);
		/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
		if (search_cat != "dspec" && search_cat != "ioe" && search_cat != "ioq") {
			rdPopulateSpecialtyDropdowns();
		}
		/* P08-8459b - IOE and IOQ changes Feb 2013 End */
		if (search_cat == "spec") {
			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			if (site_id != null
					&& (site_id == "walmart" || site_id == "walmart1"
							|| site_id == "walmart2" || site_id == "ioeioq")) {
				selectDD(spec_prctc_cd, "medical_spec_prctc_cd");
				defaultTriggeronChange("medical_spec_prctc_cd");
			} else {
				selectDD(spec_prctc_cd, specKey);
				defaultTriggeronChange(specKey);
			}
		}
		if (search_cat == "dspec") {
			var show_specialty = getAdditionalSection(search_cat);
			var myStr = "input_dspec_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			selectDD(spec_prctc_cd, specKey);
			defaultTriggeronChange(specKey);

		}
		if (search_cat == "phys_bhp") {

			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			if (site_id != null
					&& (site_id == "walmart" || site_id == "walmart1" || site_id == "walmart2")) {
				selectDD(spec_prctc_cd, "phys_bhp_spec_prctc_cd");
				defaultTriggeronChange("phys_bhp_spec_prctc_cd");
			} else {
				selectDD(spec_prctc_cd, specKey);
				defaultTriggeronChange(specKey);
			}
		}
		if (search_cat == "opp" || search_cat == "facilities") {

			var show_specialty = getAdditionalSection(search_cat);
			var myStr = show_specialty + "_additional_div";
			var specKey = show_specialty + "_spec_prctc_cd";
			document.getElementById("type_label").style.display = "";
			show(myStr, "additional_section");
			selectDD(spec_prctc_cd, specKey);
			defaultTriggeronChange(specKey);
		}
		if (search_cat == "hospitals") {

			selectDD(spec_prctc_cd, "hospitals_spec_div");
			defaultTriggeronChange("hospitals_spec_div");
		}
		if (search_cat == "labs") {
			selectDD(spec_prctc_cd, "labs_spec_prctc_cd");
			defaultTriggeronChange("labs_spec_prctc_cd");
		}

		if (search_cat == "bhp") {

			selectDD(spec_prctc_cd, "bhp_spec_prctc_cd");
			defaultTriggeronChange("bhp_spec_prctc_cd");
		}
		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		if (search_cat == "eap") {

			selectDD(spec_prctc_cd, "eap_spec_prctc_cd");

			defaultTriggeronChange("eap_spec_prctc_cd");
		}
		/* PCR C-13227 - EAP/BH changes March 2012 End */

		/* code changes for defect DEF0200592995 Start */
		if (search_cat == "pharmacy") {
			selectDD(spec_prctc_cd, "pharmacy_spec_prctc_cd");
			defaultTriggeronChange("pharmacy_spec_prctc_cd");
		}
		/* code changes for defect DEF0200592995 End */
		/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
		if (search_cat == "ioe") {
			selectDD(spec_prctc_cd, "ioe_spec_prctc_cd");
			defaultTriggeronChange("ioe_spec_prctc_cd");
		}
		if (search_cat == "ioq") {
			selectDD(spec_prctc_cd, "ioq_spec_prctc_cd");
			defaultTriggeronChange("ioq_spec_prctc_cd");
		}
		/* P08-8459b - IOE and IOQ changes Feb 2013 End */
	}
	$('#medical_spec_prctc_cd').mouseover(function() {
		$('#medical_spec_prctc_cd').css("width", "auto");
	});

	$('#phys_bhp_spec_prctc_cd').mouseover(function() {
		$('#phys_bhp_spec_prctc_cd').css("width", "auto");
	});
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	/*
	 * $('#ioe_spec_prctc_cd').mouseover(function () {
	 * $('#ioe_spec_prctc_cd').css("width","auto"); });
	 */
	$('#ioq_spec_prctc_cd').mouseover(function() {
		$('#ioq_spec_prctc_cd').css("width", "auto");
	});
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */

}

/*
 * function defaulthspaflDrpDwn(search_cat){
 * 
 * var tabVal = document.getElementById("tabKey");
 * 
 * if (hspafl_hspprvdr_id != null && tabVal!= null && tabVal.value == "tab3"){
 * 
 * defaultTriggeronChange("provider_type_section");
 * 
 * show_additional = getAdditionalSection(search_cat);
 * 
 * checkAdditional();
 * 
 * 
 * showAdditional();
 * 
 * populateHospitalAffiliations();
 * 
 * var hspaflKey = show_additional+"_hspafl_hspprvdr_id";
 * 
 * selectDD(hspafl_hspprvdr_id,hspaflKey);
 * 
 * defaultTriggeronChange(hspaflKey); }
 * 
 * 
 * 
 *  }
 */

/* Changes end */

/* PCR C-13227 - EAP/BH changes March 2012 Start */

function createDropdownSumm(search_cat, dropdown, dropdown_options) {
	var temp = "";

	var dropdown_str = search_cat + "." + dropdown;

	if (dropdown_str == "bhp.spec_prctc_cd"
			|| dropdown_str == "eap.spec_prctc_cd") {

		/* PCR C-13227 - EAP/BH changes March 2012 Start */

		temp += "<select class=\"form_dropdown\" id=\"bhp_spec_prctc_cd\" size=\"5\" multiple onchange=\"limitSpecialties(this);rdChooseSpecSummary(this);makeDirty(this);\">"
				+ dropdown_options + "</select>";
		/* PCR C-13227 - EAP/BH changes March 2012 End */
	}

	return temp;
}
/* PCR C-13227 - EAP/BH changes March 2012 Start */

function cleanUpSearchCat() {

	var srchFormNewSS = document.SearchForm.search_cat;

	var tempObjPrdCd = document.getElementById(ptID);
	if (tempObjPrdCd != null && srchFormNewSS != null) {
		srchFormNewSS.value = tempObjPrdCd.value;
	}
}

function cleanUpProd() {

	var srchFormNewSS = document.SearchForm.product;

	var tempObjPrdCd = document.getElementById(productID);
	if (tempObjPrdCd != null && srchFormNewSS != null) {
		srchFormNewSS.value = tempObjPrdCd.value;
	}
}

function cleanUpProvCat() {

	var tempObjPrdCd = document.getElementById("provider_category");

	if (tempObjPrdCd != null) {

		var srchFormNewSS = document.SearchForm.provider_category;

		if (tempObjPrdCd != null && srchFormNewSS != null) {
			for (var i = 0; i < srchFormNewSS.length; i++) {
				srchFormNewSS[i].value = tempObjPrdCd.value;
			}
		}
	}
}

function cleanUpSpecialty(searchCat) {

	if (searchCat == 'dpcp') {

		document.getElementById("dpcp_pcp_prctc_cd").value = '';

	} else if (searchCat == 'pcp') {

		document.getElementById("pcp_spec_prctc_cd").value = '';

	} else if (searchCat == 'spec') {

		document.getElementById("spec_spec_prctc_cd").value = '';

	} else if (searchCat == 'phys_bhp') {

		document.getElementById("physBhp_spec_prctc_cd").value = '';

	} else if (searchCat == 'labs') {

		document.getElementById("labs_spec_prctc_cd").value = '';

	} else if (searchCat == 'facilities' || searchCat == 'opp') {

		document.getElementById("facilities_spec_prctc_cd").value = '';

	} else if (searchCat == 'pharmacy') {

		document.getElementById("pharmacy_spec_prctc_cd").value = '';

	} else if (searchCat == 'bhp' || searchCat == 'eap') {

		document.getElementById("bhp_spec_prctc_cd").value = '';

	} else if (searchCat == 'dspec') {

		document.getElementById("dspec_spec_prctc_cd").value = '';
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	else if (searchCat == 'ioq') {
		document.getElementById("iqSpec_spec_prctc_cd").value = '';
	} else if (searchCat == 'ioe') {
		document.getElementById("ieSpec_spec_prctc_cd").value = '';
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */

	if (searchCat == 'pcp' || searchCat == 'dpcp') {

		if (document.SearchForm.pcp_prctc_cd != null) {

			document.SearchForm.pcp_prctc_cd.value = '';
		}
	} else {

		if (document.SearchForm.spec_prctc_cd != null) {

			document.SearchForm.spec_prctc_cd.value = '';
		}
	}
}

function populateSpecialityInUrl(searchCat) {

	if (searchCat == 'dpcp' && document.SearchForm.pcp_prctc_cd != null) {

		document.SearchForm.pcp_prctc_cd.value = document
				.getElementById("dpcp_pcp_prctc_cd").value;

	} else if (searchCat == 'pcp' && document.SearchForm.pcp_prctc_cd != null) {

		document.SearchForm.pcp_prctc_cd.value = document
				.getElementById("pcp_spec_prctc_cd").value;

	} else if (searchCat == 'spec' && document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("spec_spec_prctc_cd").value;

	} else if (searchCat == 'phys_bhp'
			&& document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("physBhp_spec_prctc_cd").value;

	} else if (searchCat == 'labs' && document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("labs_spec_prctc_cd").value;

	} else if ((searchCat == 'facilities' || searchCat == 'opp')
			&& document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("facilities_spec_prctc_cd").value;

	} else if (searchCat == 'pharmacy'
			&& document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("pharmacy_spec_prctc_cd").value;

	} else if ((searchCat == 'bhp' || searchCat == 'eap')
			&& document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("bhp_spec_prctc_cd").value;

	} else if (searchCat == 'dspec'
			&& document.SearchForm.spec_prctc_cd != null) {

		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("dspec_spec_prctc_cd").value;
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 Start */
	else if (searchCat == 'ioe' && document.SearchForm.spec_prctc_cd != null) {
		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("ieSpec_spec_prctc_cd").value;
	} else if (searchCat == 'ioq' && document.SearchForm.spec_prctc_cd != null) {
		document.SearchForm.spec_prctc_cd.value = document
				.getElementById("iqSpec_spec_prctc_cd").value;
	}
	/* P08-8459b - IOE and IOQ changes Feb 2013 End */
}

/* Start SR 1335 Changes */
/* DEF0200672768 defect fix start */
function cleanUpProgRecog(searchCat) {
	var provflagObjs = document.getElementsByName("provflag");
	if (provflagObjs != null) {
		for (var i = 0; i < provflagObjs.length; i++) {
			provflagObjs[i].value = '';
		}
	}

	var hospflagObjs = document.getElementsByName("hospflag");
	if (hospflagObjs != null) {
		for (var i = 0; i < hospflagObjs.length; i++) {
			hospflagObjs[i].value = '';
		}
	}
}
/* DEF0200672768 defect fix end */
/* End SR 1335 Changes */

/* start 1382 Dec2014 change */
function cleanUpHospName(searchCat) {

	var hospId = getAdditionalSection(searchCat);

	hospId = hospId + "_hospital_name";
	var divHospId = "#" + hospId;

	if ($(divHospId).length > 0 && !$(divHospId).is(":visible")) {
		$(divHospId).text('');
	}

	if (document.SearchForm.hospital_name != null) {

		document.SearchForm.hospital_name.value = '';

	}

	if (document.docform.hospital_name != null) {
		document.docform.hospital_name.value = '';
	}
}
/* end 1382 Dec2014 change */

function cleanUpHospAffl(searchCat) {

	var hospId = getAdditionalSection(searchCat);

	hospId = hospId + "_hospaffil_div";
	var divHospId = "#" + hospId;

	if ($(divHospId).length > 0 && !$(divHospId).is(":visible")) {
		$(divHospId).text('');
	}

	if (document.SearchForm.hspafl_hspprvdr_id != null) {

		document.SearchForm.hspafl_hspprvdr_id.value = '';

	}

	if (document.docform.hspafl_hspprvdr_id != null) {
		document.docform.hspafl_hspprvdr_id.value = '';
	}
}

function cleanUpAdditional(searchCat) {

	var catId = getAdditionalSection(searchCat);

	// Clean up gender
	var genderId = catId + "_gender";
	var divGenderId = "#" + genderId;
	if ($(divGenderId).length > 0 && !$(divGenderId).is(":visible")) {
		$(divGenderId).text('');
	}
	if (document.SearchForm.gender != null) {
		document.SearchForm.gender.value = '';
	}

	if (document.docform.gender != null) {
		document.docform.gender.value = '';
	}

	// Clean up program and recognition
	var provflag = catId + "_provflag";
	var divProvflagId = "#" + provflag;
	if ($(divProvflagId).length > 0 && !$(divProvflagId).is(":visible")) {
		$(divProvflagId).text('');
	}
	if (document.SearchForm.provflag != null) {
		document.SearchForm.provflag.value = '';
	}

	if (document.docform.provflag != null) {
		document.docform.provflag.value = '';
	}

	var hospflag = catId + "_hospflag";
	var divHospflagId = "#" + hospflag;
	if ($(divHospflagId).length > 0 && !$(divHospflagId).is(":visible")) {
		$(divHospflagId).text('');
	}
	if (document.SearchForm.hospflag != null) {
		document.SearchForm.hospflag.value = '';
	}

	if (document.docform.hospflag != null) {
		document.docform.hospflag.value = '';
	}

}

/*
 * Resource_Type_Infosys_Offshore Resource_ID_N206318
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Start
 */

/* P8423a Story 4878 Changes Start */

function rd_dental_plan_redirect(obj) {

	var plan = obj.value;

	if (plan == "DINDE|Aetna Dental Indemnity Plan") {

		location.href = "javascript:popUp('/docfind/custom/AetnaInc/Indemnity.html')";
	}

}

function rd_dental_plan_redirecting(obj) {

	var prefilledProdCodeObj = document.getElementById("prefilledProductCode");

	if (productID != null) {

		if (productID == "dental_plans") {

			var cat = obj.value;

			var plan = prefilledProdCodeObj.value;

			if (((cat == "dpcp") || (cat == "dspec"))
					&& ((plan == "DINDE|Aetna Dental Indemnity Plan"))) {

				location.href = "javascript:popUp('/docfind/custom/AetnaInc/Indemnity.html')";
			}
		}
	}
}

/* P8423a Story 4878 Changes End */
/*
 * Resource_Type_Infosys_Offshore Resource_ID_N206318
 * 
 * 
 * 
 * End
 */

function cleanUpMedName() {

	var tempObjPrdCd = document.getElementById("medical_name_rd");

	if (tempObjPrdCd != null && tempObjPrdCd.value != "") {

		var srchFormNewSS = document.SearchForm.medical_name_rd;

		if (tempObjPrdCd != null && srchFormNewSS != null) {
			for (var i = 0; i < srchFormNewSS.length; i++) {
				srchFormNewSS[i].value = tempObjPrdCd.value;
			}
		}
	}
}

function rd_medical_plan_redirect(obj) {

	var plan = obj.value;

	if (plan == "NAP|National Advantage Program" || plan == "NAPPlans")

	{

		location.href = "javascript:popUp('/docfind/cms/html/NationalAdvProg.html')";
	}
	if (plan == "NYEPO|NYC Community Plan(SM)") {
		location.href = "javascript:popUp('/docfind/cms/html/NYC_Community_Plan.html')";

	}
	/*
	 * if(plan == "GCHMO|Aetna Medicare Plan PPO") {
	 * location.href="javascript:popUp('/docfind/standard.do?site_id=groupmedicare')";
	 * 
	 * }if(plan == "MEHMO|Aetna Medicare Plan HMO Open Access HMO") {
	 * location.href="javascript:popUp('/docfind/custom/ioeioq/ioeioq.html')"; }
	 */
	if (plan == "WMBAN|Banner Accountable Care - Phoenix Only") {
		location.href = "javascript:popUp('/docfind/cms/html/Banner_Popup.html')";
	}
	if (plan == "WMHRA|HRA Select Network") {
		location.href = "javascript:popUp('/docfind/cms/html/HRASelect_Popup.html')";
	}
	if (plan == "Indemnity|Indemnity Plan") {
		location.href = "javascript:popUp('/docfind/cms/html/united/UnitedIndemnity.html')";

	}
	if (plan == "QHPPlans") {
		// location.href="javascript:popUp('http://www.aetna.com/dse/search?site_id=QualifiedHealthPlanDoctors')";
		location.href = "javascript:popUp('/docfind/cms/html/redirectToQhpd.html')";
	}
	if (site_id == "docfind" || site_id == "provider" || site_id == "provider2") {

		if (plan == "MH1AS|Aetna Whole Health(SM) - Memorial Hermann ACN Select"
				|| plan == "MHEPO|Aetna Whole Health(SM) - Memorial Hermann Accountable Care Network") {
			location.href = "javascript:popUp('/docfind/cms/html/Memorial_Herman_Popup.html')";
		}
	}
	if (site_id == "TRS_ActiveCare") {

		if (plan != null && plan != "" && plan != "Select a plan...") {
			location.href = "javascript:popUp('/docfind/cms/html/TRS_ActiveCare_select_popup.html')";
		}
	}

	if (site_id == "trinity") {

		if (plan == "ACPMC|Tier 2 Providers & Facilities Clinton"
				|| plan == "ACPMC|Tier 2 Providers & Facilities Sioux City") {
			location.href = "javascript:popUp('/docfind/cms/html/trinity.html')";
		}
	}
	// content 1008
	if (plan == "EHNFullDirectory") {
		location.href = "/docfind/cms/assets/pdf/emory/EHN Full Directory.pdf";

	}

	if (plan == "Mexico|Vitalidad Mexico con Aetna") {
		location.href = "javascript:popUp('/docfind/cms/html/mexico_medical_providers.html')";
	}
	if (site_id == "aetnapharmacy") {
		if (plan == "TBD1|Aetna Specialty Pharmacy Network") {
			location.href = "javascript:popUp('/docfind/cms/assets/pdf/specialty_pharmacy.pdf')";
		} 
		else if (plan == "TBD2|Aetna Specialty Performance Network") {
			location.href = "javascript:popUp('/docfind/cms/assets/pdf/Aetna_Specialty_Performance_Network.pdf')";
		}
		else if (plan == "TBD4|Aetna Specialty Pharmacy Network California") {
			location.href = "javascript:popUp('/docfind/cms/assets/pdf/Aetna_Specialty_Pharmacy_Network_California.pdf')";
		}
		else if (plan == "TBD5|Aetna Specialty Performance Network California") {
			location.href = "javascript:popUp('/docfind/cms/assets/pdf/Aetna_Specialty_Performance_Network_California.pdf')";
		}
		else if (plan == "TBD3|Banner Aetna Specialty Pharmacy Network") {
			location.href = "javascript:popUp('/dse/cms/codeAssets/pdf/Banner_Aetna_Specialty_Pharmacy_Network.pdf')";
		}
	}
}

function populateUrlParameters() {

	$.extend({

		getUrlVars : function() {

			var vars = [], hash;

			var hashes = window.location.href.slice(
					window.location.href.indexOf('?') + 1).split('&');

			for (var i = 0; i < hashes.length; i++)

			{

				hash = hashes[i].split('=');

				vars.push(hash[0]);

				vars[hash[0]] = hash[1];

			}

			return vars;

		},

		getUrlVar : function(name) {

			return $.getUrlVars()[name];

		}

	});

}

/* P08-8459b - IOE and IOQ changes Feb 2013 Start */

function getMiles() {
	var miles = '';
	if ($('#input_distance_div').is(":visible")) {
		miles = $('#input_distance_div').children('#miles').val();
	} else if ($('#input_transplant_distance_div').is(":visible")) {
		miles = $('#input_transplant_distance_div').children('#miles').val();
	} else if ($('#input_ioeioq_distance_div').is(":visible")) {
		miles = $('#input_ioeioq_distance_div').children('#miles').val();
	}
	return miles;
}

function doSearch(typeDD, searchCat) {
	var providerCat = "";
	var product = "";

	if (document.getElementById("providerCat") != null)
		providerCat = document.getElementById("providerCat").value;

	if (providerCat != null
			&& (providerCat == "medical" || providerCat == "bh"
					|| providerCat == "hospitals" || providerCat == "dialysis"
					|| providerCat == "labs" || providerCat == "facilities"
					|| providerCat == "urgent" || providerCat == "walkin"
					|| providerCat == "ioq" || providerCat == "ioe")) {
		if (document.getElementById("product") != null)
			product = document.getElementById("product").value;
	}
	var zipcode = "";
	if (document.getElementById("zipcode") != null)
		zipcode = document.getElementById("zipcode").value;

	var siteId = "";
	if (document.getElementById("siteId") != null)
		siteId = document.getElementById("siteId").value;

	var languageref = "";
	if (document.getElementById("languageref") != null)
		languageref = document.getElementById("languageref").value;

	var redirectUrl = "";

	if ((zipcode == null || zipcode == "null" || zipcode == "")
			|| (product == null || product == "null" || product == "")) {

		// location.href="/docfind/home.do?site_id=docfind&langpref=en&tabKey=tab3&search_cat="
		// +searchCat+ "&provider_category=" +searchCat;
		redirectUrl = "/docfind/home.do?site_id=" + siteId + "&langpref="
				+ languageref + "&tabKey=tab3&search_cat=" + searchCat
				+ "&provider_category=" + searchCat + "&spec_prctc_cd="
				+ typeDD;
		location.href = redirectUrl;
	} else {

		// redirectUrl = "/docfind/provSummarySearch.do?site_id=" +siteId+
		// "&langpref=" +languageref+
		// "&tabKey=tab3&search_cat=spec&provider_category=medical&product=MHMO|HMO&geo1=zip&zipcode=06010&miles=1000&spec_prctc_cd=10322|Cardiology&sortOrder=ASC&sortBy=dist&lastProvRow=0&button_flag=S&servReqIpa=GROUPIPACAL&geoSearchRD=true&secureStatus=Y&pinSearchGlbInd=Y";
		redirectUrl = "/docfind/provSummarySearch.do?site_id="
				+ siteId
				+ "&langpref="
				+ languageref
				+ "&tabKey=tab3&search_cat="
				+ searchCat
				+ "&provider_category="
				+ searchCat
				+ "&product="
				+ product
				+ "&geo1=zip&zipcode="
				+ zipcode
				+ "&miles=100&spec_prctc_cd="
				+ typeDD
				+ "&sortOrder=ASC&sortBy=dist&lastProvRow=0&button_flag=S&servReqIpa=GROUPIPACAL&geoSearchRD=true&secureStatus=Y&pinSearchGlbInd=Y";
		location.href = redirectUrl;
	}
}
/* P08-8459b - IOE and IOQ changes Feb 2013 End */

/* P8423a Sprint18 - Story7105 Changes Start */

function dseFormSubmit() {

	var boolForm = StandardCleanUp();

	if (boolForm) {

		document.dseform.submit();

	}

}

function openPrintPD(url) {

	var windowName = 'Print a Provider Directory';

	var winOpts = 'width=800,height=600,scrollbars=yes,resizable=no,toolbar=yes,overflow=scroll,location=yes,left=10,top=10';

	window.name = 'INDEX';

	aWindow = window.open(CONTEXT_ROOT + url, '', winOpts);

	aWindow.focus();

}

/* P8423a Sprint18 - Story7105 Changes End */
/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 Start */
function rdHideSearchButton() {
	// show go button
	// document.getElementById("rd_go").style.display = "";
	var tabKey = document.getElementById("tabKey");
	var rdGo = document.getElementById("rd_go");
	var rdGo1 = document.getElementById("go1_rd");
	if (rdGo != null) {
		document.getElementById("rd_go").style.display = "";
	}
	if (rdGo1 != null) {
		document.getElementById("go1_rd").style.display = "";
	}
	show("rd_btn_go", "rd_go");

	// hide start button
	document.getElementById("rd_search1").style.display = 'none';
	document.getElementById("rd_search2").style.display = 'none';
	document.getElementById("rd_search").style.display = 'none';
	hide("rd_btn_start_search");

	// hide plans
	var pl = document.getElementById("plans_label");
	pl.style.display = 'none';
	hide("plans_label");
	hide("plans_section");
	document.getElementById("plans_section").style.display = 'none';
	if (tabKey != null && tabKey.value != "tab3") {
		if (urlProtocol != "https:") {
			document.getElementById("sign_rd").style.display = 'none';
			document.getElementById("sign_in_text").style.display = 'none';
		}
	}

	// hide radio buttons
	document.getElementById("geo_label").style.display = 'none';
	document.getElementById("geo_attr").style.display = 'none';
	document.getElementById("geo_type_label_section").style.display = 'none';
	document.getElementById("geo_attr_label_section").style.display = 'none';
	document.getElementById("geo_type_input_section").style.display = 'none';
	document.getElementById("geo_attr_input_section").style.display = 'none';
	if (tabKey != null && tabKey.value == "tab3") {
		hide("additional_section_advance");
		document.getElementById("additional_section_advance").style.display = 'none';
		document.getElementById("additional_section_advance").style.borderBottom = 'none';
		document.getElementById("hide6_rd").style.display = 'none';
	}

	// hide specialty
	// document.getElementById("type_label").style.display = 'none';
	// document.getElementById("additional_section").style.display = 'none';
	document.getElementById("prov_country_label_section").style.display = 'none';
	document.getElementById("prov_country_input_section").style.display = 'none';
	document.getElementById("hide1_rd").style.display = 'none';
	document.getElementById("hide2_rd").style.display = 'none';
	document.getElementById("hide3_rd").style.display = 'none';
	document.getElementById("hide4_rd").style.display = 'none';
	document.getElementById("hide5_rd").style.display = 'none';
	document.getElementById("geo_label").style.display = 'none';
	document.getElementById("geo_attr").style.display = 'none';
	document.getElementById("geo_type_label_section").style.display = 'none';
	document.getElementById("geo_attr_label_section").style.display = 'none';
	document.getElementById("geo_type_input_section").style.display = 'none';
	document.getElementById("geo_attr_input_section").style.display = 'none';
	if (tabKey != null && tabKey.value == "tab3") {
		hide("additional_section_advance");
		document.getElementById("additional_section_advance").style.display = 'none';
		document.getElementById("additional_section_advance").style.borderBottom = 'none';
		document.getElementById("hide6_rd").style.display = 'none';
	}
}

function rdShowSearchButton() {
	var tabKey = document.getElementById("tabKey");
	// show start button
	document.getElementById("rd_search").style.display = "";
	document.getElementById("rd_search1").style.display = "";
	document.getElementById("rd_search2").style.display = "";
	show("rd_btn_start_search", "rd_search");
	// hide go button
	// document.getElementById("rd_go").style.display = 'none';
	var rdGo = document.getElementById("rd_go");
	var rdGo1 = document.getElementById("go1_rd");
	if (rdGo != null) {
		document.getElementById("rd_go").style.display = 'none';
	}
	if (rdGo1 != null) {
		document.getElementById("go1_rd").style.display = 'none';
	}

	hide("rd_btn_go");

	// show plans
	var pl = document.getElementById("plans_label");
	pl.style.display = "";
	show("input_medical_plans", "plans_section");
	document.getElementById("plans_section").style.display = "";
	if (tabKey != null && tabKey.value != "tab3") {
		if (urlProtocol != "https:") {
			document.getElementById("sign_in_text").style.display = "";
			document.getElementById("sign_rd").style.display = "";
		}
	}
	// show default type of search
	document.getElementById("geo_label").style.display = "";
	document.getElementById("geo_attr").style.display = "";
	document.getElementById("geo_type_label_section").style.display = "";
	document.getElementById("geo_attr_label_section").style.display = "";
	// hide("geo_type_label_section");
	// hide("geo_attr_label_section");
	document.getElementById("geo_type_input_section").style.display = "";
	document.getElementById("geo_attr_input_section").style.display = "";
	document.getElementById("additional_section").style.display = "";
	document.getElementById("type_label").style.display = "";

	document.getElementById("hide1_rd").style.display = "";
	document.getElementById("hide2_rd").style.display = "";
	document.getElementById("hide3_rd").style.display = "";
	document.getElementById("hide4_rd").style.display = "";
	document.getElementById("hide5_rd").style.display = "";

	document.getElementById("prov_country_label_section").style.display = "";
	document.getElementById("prov_country_input_section").style.display = "";
	if (tabKey != null && tabKey.value == "tab3") {
		document.getElementById("additional_section_advance").style.display = "";
		document.getElementById("additional_section_advance").style.borderBottom = '1px solid #D1D1D1';
		document.getElementById("hide6_rd").style.display = "";
	}

	show("ioe_additional", "additional_section_advance");
	document.getElementById("additional_section_advance").style.borderBottom = '1px solid #D1D1D1';
}

/* P08-8459b PCR 15655 - IOE and IOQ changes Feb 2013 End */

function populateUrlParameters() {
	$.extend({
		getUrlVars : function() {
			var vars = [], hash;
			var hashes = window.location.href.slice(
					window.location.href.indexOf('?') + 1).split('&');
			for (var i = 0; i < hashes.length; i++) {
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		},
		getUrlVar : function(name) {
			return $.getUrlVars()[name];
		}
	});
}

/* Start Changes SR 1317 - Aug 13 release */
function rdDisplayCAPopUp(provType, product) {
	populateUrlParameters();
	var provCat = $.getUrlVar('provider_category');
	if (provType == "urgent" || provType == "ipacal"
			|| (provCat != null && provCat == "hospfac")) {
		if (product == "HRHMO|Aetna Healthfund HMO"
				|| product == "MEHMO|Aetna Medicare Plan HMO Open Access HMO"
				|| product == "COHMO|CA HMO Concentric Commercial"
				|| product == "MHMO|HMO"
				|| product == "HRHMO|HMO Deductible Plan CA members only"
				|| product == "QPOS|QPOS"
				|| product == "Mexico|Vitalidad Mexico con Aetna"
				|| product == "VPHMO|Vitalidad Plus California con Aetna") {
			URL = "/docfind/cms/html/urgentcare_ca.html";
			var windowName = 'popup';
			var winOpts = 'width=950,height=250,scrollbars=no,resizable=no,toolbar=yes';
			window.name = 'INDEX';
			aWindow = window.open(URL, windowName, winOpts);
			aWindow.focus();
		}
	}
}
/* End Changes SR 1317 - Aug 13 release */

/* Start Changes P22804 - Oct 14 release */
function printAetnaMedicare() {
	location.href = "http://www.aetnamedicare.com/group/find_plans.jsp?tab=4";
}
/* End Changes P22804 - Oct 14 release */

function setFocus(domElement) {
	// console.log('Current element '+domElement);
	$(domElement).focus(function() {
		$(domElement).css({
			'outline' : 'thin dotted black'
		});
	});
	$(domElement).blur(function() {
		$(domElement).css({
			'outline' : ''
		});
	});

}

function popUp(URL) {
	var windowName = 'popup';
	var winOpts = 'width=600,height=525,scrollbars=yes,resizable=yes,toolbar=yes,location=1,overflow=scroll';
	window.name = 'INDEX';
	aWindow = window.open(URL, windowName, winOpts);
	aWindow.focus();
}

function formSubmissionOnStartText() {
	StandardCleanUp();
	document.forms["advanced_search"].submit();

}

function setFocusOnRequiredFieldsAfterSubmittingForm() {
	return;
}