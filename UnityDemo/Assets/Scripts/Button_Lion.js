var lionPet:Texture;
//static var volume : float; 
//var audio:AudioSource;

static var enabled:boolean;

var allOptions:boolean = true;
var extended1: boolean = true;
var extended2: boolean = true;
var extended3: boolean = true;
var extended4: boolean = true;
var extended5: boolean = true;
var extended6: boolean = true;
var extended7: boolean = true;
var extended8: boolean = true;

function OnGUI() {

	//GUI.BeginGroup (new Rect (Screen.width / 2 - 400, Screen.height / 2 - 300, 800, 600));
	//GUI.color = Color.red;
	//GUI.Box (new Rect (0,0,800,600),"Lion");
	//GUI.Label(Rect(Screen.height/2+120,50,100,50),"Price: 100$");
	
	GUI.backgroundColor = Color.green;
	GUI.color = Color.yellow;
	
	if(GUI.Button(Rect(0,0,100,50),GUIContent("Pet Shop","Back to Pet Shop"))){
		Application.LoadLevel("PetShop");
	}
	
	GUI.DrawTexture(Rect(50,80,100,100),lionPet,ScaleMode.StretchToFill,true,10.0f);
	
	GUI.color = Color.red;
	GUI.Label (Rect (110,20,150,50), GUI.tooltip);
	
	//GUI.EndGroup ();
	
	//Animal Informations
	allOptions = GUI.Toggle(Rect(30,190,150,20),allOptions,"Animal Informations: ");
	GUI.enabled = allOptions;
	
	extended1 = GUI.Toggle(Rect(40,210,130,20),extended1,"Pet: Leopard");
	
	extended2 = GUI.Toggle(Rect(40,230,130,20),extended2,"Price: 100$");
	
	extended3 = GUI.Toggle(Rect(40,250,150,20),extended3,"Character: aggressive");
	
	extended4 = GUI.Toggle(Rect(40,270,130,20),extended4,"Living: Affrica");
	
	extended5 = GUI.Toggle(Rect(40,290,130,20),extended5,"Weight: 200 Kg");
	
	extended6 = GUI.Toggle(Rect(40,310,130,20),extended6,"Height: 2.5 m");
	
	extended7 = GUI.Toggle(Rect(40,330,130,20),extended7,"Food: meat");
	
	extended8 = GUI.Toggle(Rect(40,350,130,20),extended8,"Color: Yellow,White");
		
	GUI.enabled = true;
	
}

function Start(){
	//AudioListener.volume = 0.5;
	//audio.Play();
}