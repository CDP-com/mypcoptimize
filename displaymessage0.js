// JavaScript Document displaymessage0.js

// Use ActiveX to call your button's argument XML file
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.load("C:\\ProgramData\\CDP\\SnapBack\\APPs\\apptemplateargs\\btn0arguments.xml");

// Change the tag name to whatever you specified as the btn[i]_arguments[n]xmlName in app-lib.js
var greeting = xmlDoc.getElementsByTagName('greeting')[0].firstChild.nodeValue;
var spaceObject = xmlDoc.getElementsByTagName('object')[0].firstChild.nodeValue;

// Script what you want to happen based upon the arguments returned
var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( ""+ greeting +", "+ spaceObject +"!", 5, "Say Something" );

wsh = null;
