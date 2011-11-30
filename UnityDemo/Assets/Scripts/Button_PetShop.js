//var customSkin:GUISkin;
var scrollPosition : Vector2 = Vector2.zero;
var style : GUIStyle;

var lion : Texture;
var leopard: Texture;
var tiger:Texture;
var camel:Texture;
var dragon:Texture;
var pig:Texture;
var dog:Texture;
var bird:Texture;
var cow:Texture;
var dolphin:Texture;
var elephant:Texture;
var horse:Texture;
var monkey:Texture;
var snake:Texture;
var hippopotamus:Texture;

function OnGUI() {

	// Constrain all drawing to be within a 800x600 pixel area centered on the screen.
	GUI.BeginGroup (new Rect (Screen.width / 2 - 400, Screen.height / 2 - 300, 800, 600));
	GUI.color = Color.red;
	GUI.Box (new Rect (0,0,800,600),"Pet Shop");
	
	GUI.backgroundColor = Color.green;
	GUI.color = Color.yellow;
	
	if(GUI.Button(Rect(0,0,100,50),GUIContent("Main","Back to Main Scene"))){
		Application.LoadLevel("Main");
		
	}
	GUI.color = Color.white;
	GUI.Label (Rect (10,50,150,50), GUI.tooltip);
	
	GUI.EndGroup ();
	
	//Scroll View
	GUI.skin.scrollView = style;
	// rect and put it in a small rect on the screen.
	scrollPosition = GUI.BeginScrollView (Rect (280,150,300,300),scrollPosition, Rect (0, 0, 300, 1050),true,true);
	
	//Lion
	GUI.DrawTexture(Rect(0,0,70,70),lion,ScaleMode.StretchToFill,true,10.0f);
	if(GUI.Button(Rect(70,0,200,70),"Lion")){
		Application.LoadLevel("Lion");
	}
	GUI.Label(Rect(270,35,100,70),"100$");
	
	//Leopard
	GUI.DrawTexture(Rect(0,70,70,70),leopard,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,70,200,70),"Leopard");
	GUI.Label(Rect(270,105,100,70),"90$");
	
	//Tiger
	GUI.DrawTexture(Rect(0,140,70,70),tiger,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,140,200,70),"Tiger");
	GUI.Label(Rect(270,175,100,70),"80$");
	
	//Camel
	GUI.DrawTexture(Rect(0,210,70,70),camel,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,210,200,70),"Camel");
	GUI.Label(Rect(270,245,100,70),"75$");
	
	//Dragon
	GUI.DrawTexture(Rect(0,280,70,70),dragon,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,280,200,70),"Dragon");
	GUI.Label(Rect(270,315,100,70),"100$");
	
	//Pig
	GUI.DrawTexture(Rect(0,350,70,70),pig,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,350,200,70),"Pig");
	GUI.Label(Rect(270,385,100,70),"30$");
	
	//Dog
	GUI.DrawTexture(Rect(0,420,70,70),dog,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,420,200,70),"Dog");
	GUI.Label(Rect(270,455,100,70),"20$");
	
	//Bird
	GUI.DrawTexture(Rect(0,490,70,70),bird,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,490,200,70),"Bird");
	GUI.Label(Rect(270,525,100,70),"10$");
	
	//Cow
	GUI.DrawTexture(Rect(0,560,70,70),cow,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,560,200,70),"Cow");
	GUI.Label(Rect(270,595,100,70),"35$");
	
	//Dolphin
	GUI.DrawTexture(Rect(0,630,70,70),dolphin,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,630,200,70),"Dolphin");
	GUI.Label(Rect(270,665,100,70),"95$");
	
	//Elephant
	GUI.DrawTexture(Rect(0,700,70,70),elephant,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,700,200,70),"Elephant");
	GUI.Label(Rect(270,735,100,70),"100$");
	
	//Horse
	GUI.DrawTexture(Rect(0,770,70,70),horse,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,770,200,70),"Horse");
	GUI.Label(Rect(270,805,100,70),"45$");
	
	//Monkey
	GUI.DrawTexture(Rect(0,840,70,70),monkey,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,840,200,70),"Monkey");
	GUI.Label(Rect(270,875,100,70),"60$");
	
	//Snake
	GUI.DrawTexture(Rect(0,910,70,70),snake,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,910,200,70),"Snake");
	GUI.Label(Rect(270,945,100,70),"20$");
	
	//Hippopotamus
	GUI.DrawTexture(Rect(0,980,70,70),hippopotamus,ScaleMode.StretchToFill,true,10.0f);
	GUI.Button(Rect(70,980,200,70),"Hippopotamus");
	GUI.Label(Rect(270,1015,100,70),"80$");
	
	// End the scroll view that we began above.
	GUI.EndScrollView ();

	//GUI.DrawTexture(Rect(10,10,60,60), aTexture, ScaleMode.ScaleToFit, true, 10.0f);
}

function Start(){
	
}