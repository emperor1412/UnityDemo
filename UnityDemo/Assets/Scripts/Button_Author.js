var customSkin:GUISkin;
function OnGUI() {
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;

	GUI.backgroundColor = Color.green;
	GUI.color = Color.yellow;

	if(GUI.Button(Rect(0,0,100,50),"Main")){
		Application.LoadLevel("Main");
	}
	
	GUI.color = Color.red;
	
	GUI.Label(Rect(halfScreenW,100,200,50),"Developer Team: ");
	
	GUI.color = Color.white;
	
	GUI.Label(Rect(halfScreenW,150,200,50),"Nguyen Sy Minh ( Team Leader )");
	
	GUI.color = Color.white;
	
	GUI.Label(Rect(halfScreenW,200,200,50),"Le Huy Hoang ( Team Member )");
	
	GUI.color = Color.white;
	
	GUI.Label(Rect(halfScreenW,250,200,50),"Do Doan Hai ( Team Member )");
	
	GUI.color = Color.white;
	
	GUI.Label(Rect(halfScreenW,300,250,50),"Nguyen Le Quoc Dung ( Team Member )");
}