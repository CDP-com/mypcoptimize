// JavaScript Document displaymessage1.js

//Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\apptemplateargs\\btn2arguments.xml");

// Change the tag name to whatever you specified as the btn[i]_arguments[n]xmlName in app-lib.js
var YouAre = xmlDoc.getElementsByTagName('YouAre');

// Script what you want to happen based upon the arguments returned
// When your Arguments are in Checkboxes, you Need to Account for Zero Arguments Selected
if ( xmlDoc.getElementsByTagName("YouAre").length == 0 ){
	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup( "Error.  Please refresh the app and select again.", 5, "Selected Vehicle" );

	wsh = null;
}

else if (YouAre){
	for (var i = 0; i < YouAre.length; i++) { 
		var YouAreTrait = YouAre[i].firstChild.nodeValue;
		if (YouAreTrait == "Human"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "I guess we're all human, right?", 5, "You Are A(n)" );

			wsh = null;
		}
		else if (YouAreTrait == "Software Engineer"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "You poor software engineer.  Do you need a nap?", 5, "You Are A(n)" );

			wsh = null;
		}
		else if (YouAreTrait == "End User"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "End users make the world go round.", 5, "You Are A(n)" );

			wsh = null;
		}
		else if (YouAreTrait == "Evil Bond Villain Plotting on Taking Over the World"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "You watch your back, Goldfinger!", 5, "You Are A(n)" );

			wsh = null;
		}
	}
}
