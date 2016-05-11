// JavaScript Document displaymessage1.js

//Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\apptemplateargs\\btn1arguments.xml");

// Change the tag name to whatever you specified as the btn[i]_arguments[n]xmlName in app-lib.js
var vehicles = xmlDoc.getElementsByTagName('YourVehicle');
var color = xmlDoc.getElementsByTagName('FavoriteColor')[0].firstChild.nodeValue;

// Script what you want to happen based upon the arguments returned
// When your Arguments are in Checkboxes, you Need to Account for Zero Arguments Selected
if ( xmlDoc.getElementsByTagName("YourVehicle").length == 0 ){
	var wsh = new ActiveXObject("WScript.Shell");
	wsh.popup( "No vehicle? Walking is cool too!", 5, "Selected Vehicle" );

	wsh = null;
}

else if (vehicles){
	for (var i = 0; i < vehicles.length; i++) { 
		var vehicle = vehicles[i].firstChild.nodeValue;
		if (vehicle == "Bike"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Bikes are awesome!", 5, "Selected Vehicle" );

			wsh = null;
		}
		else if (vehicle == "Car"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Cars are pretty cool.", 5, "Selected Vehicle" );

			wsh = null;
		}
		else if (vehicle == "Truck"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Trucks are alright.", 5, "Selected Vehicle" );

			wsh = null;
		}
		else if (vehicle == "Golf Cart"){
			var wsh = new ActiveXObject("WScript.Shell");
			wsh.popup( "Don't flip that golf cart!", 5, "Selected Vehicle" );

			wsh = null;
		}
	}
}

if (color){
	if (color == "Blue"){
		var wsh = new ActiveXObject("WScript.Shell");
		wsh.popup( "Blue is a very nice color.", 5, "Favorite Color" );

		wsh = null;
	}
	else if (color == "Red"){
		var wsh = new ActiveXObject("WScript.Shell");
		wsh.popup( "The red in a sunset is quite nice.", 5, "Favorite Color" );

		wsh = null;
	}
	else if (color == "Green"){
		var wsh = new ActiveXObject("WScript.Shell");
		wsh.popup( "A rich green is always refreshing.", 5, "Favorite Color" );

		wsh = null;
	}
	else if (color == "Brown"){
		var wsh = new ActiveXObject("WScript.Shell");
		wsh.popup( "The earthiest of all colors!", 5, "Favorite Color" );

		wsh = null;
	}
	else if (color == "Other"){
		var wsh = new ActiveXObject("WScript.Shell");
		wsh.popup( "Well, there are a lot of colors out there, right?", 5, "Favorite Color" );

		wsh = null;
	}
}
