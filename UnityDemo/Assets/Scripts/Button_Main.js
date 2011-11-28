var customSkin:GUISkin;
function OnGUI () {
	GUI.backgroundColor = Color.green;
	GUI.color = Color.yellow;
	
	if(GUI.Button(Rect(0,0,100,50),"Pet Shop")){
		
	}
	
	if(GUI.Button(Rect(0,50,100,50),"FaceBook")){
		Application.OpenURL("http://www.facebook.com");
	}
	
	if(GUI.Button(Rect(0,100,100,50),"Author")){
		Application.LoadLevel("Author");
	}
}