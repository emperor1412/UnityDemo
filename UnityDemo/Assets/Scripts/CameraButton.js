enum CameraType
{
	FirstPerson = 0,
	FreeView,
	ThirdPerson
}

var MyCamera:CameraController;
private var type : CameraType; 

function OnGUI () {
	GUI.backgroundColor = Color.green;
	GUI.color = Color.yellow;
	
	if(GUI.Button(Rect(Screen.width-100,0,100,50),"First")){
		MyCamera.type = type.FirstPerson;
		
		MyCamera.cameraOffset.localPosition= Vector3(0,6.2,1.8);
		MyCamera.cameraOffset.localEulerAngles= Vector3(0,0,0);
		MyCamera.cameraTransform.localPosition = Vector3(0,0,0);
		MyCamera.cameraTransform.localEulerAngles = Vector3(10,0,0);
	}
	if(GUI.Button(Rect(Screen.width-100,50,100,50),"Free")){
		MyCamera.type = type.FreeView;
		
		MyCamera.cameraOffset.localPosition= Vector3(20,20,0);
		MyCamera.cameraOffset.localEulerAngles= Vector3(0,0,0);
		MyCamera.cameraFreeViewP = Vector3(0,0,0);
		MyCamera.cameraTransform.localEulerAngles = Vector3(45,-90,0);
	}
	if(GUI.Button(Rect(Screen.width-100,100,100,50),"Third")){
		MyCamera.type = type.ThirdPerson;
		
		MyCamera.cameraOffset.localPosition= Vector3(20,20,0);
		MyCamera.cameraOffset.localEulerAngles= Vector3(0,0,0);
		MyCamera.cameraFreeViewP = Vector3(0,0,0);;
		MyCamera.cameraTransform.localEulerAngles = Vector3(45,-90,0);
	}
	
}