#pragma strict
@script RequireComponent(CharacterController)

var moveJoystick : Joystick;
var speed : int = 1;
var rotationSpeed : int = 90;
var cameraTransform : Transform;
var isJoystickUsing : boolean = false;
//var cameraButton : GameObject;

private var characterController : CharacterController;
private var myTransform : Transform;
private var myAnimation : Animation;
var cameraController : CameraController;

function Start() {
	myTransform = GetComponent(Transform);
	myAnimation = GetComponent(Animation);
	characterController = GetComponent(CharacterController);
	
}

function Update () {
	//print("moveJoystickPosition : " + moveJoystick.position);
	
	var y : float = moveJoystick.position.y;
	var x : float = moveJoystick.position.x;
	
	if ( y != 0 || x != 0) {			       
		print("x : " +  x);
		print("y : " +  y);	
		
        print("camera type : " + cameraController.type);
        
        if(cameraController.type == CameraType.FirstPerson){
	        this.transform.Rotate(0, x, 0, Space.World);
	        var movement : Vector3 = transform.TransformDirection(Vector3.forward);	                
	        characterController.SimpleMove(movement * speed * y);
        }
		else {
			movement = Vector3(x, 0, y);	        
			movement = cameraTransform.TransformDirection(movement);
			movement.y = 0;
			movement.Normalize();
			movement = movement * Time.deltaTime * speed;
	        characterController.Move(movement);
	        myTransform.forward = movement.normalized;
		}
		
                      
		myAnimation.CrossFade("run-edit");
		isJoystickUsing = true;

	}
	else {
		myAnimation.CrossFade("idle");
		isJoystickUsing = false;
	}
	
	
	
}