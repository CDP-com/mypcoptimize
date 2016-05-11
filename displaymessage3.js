// JavaScript Document displaymessage3.js

var wsh = new ActiveXObject("WScript.Shell");
wsh.popup( "This script simply runs without any arguments passed to it.", 5, "App Template with Arguments" );

wsh = null;
