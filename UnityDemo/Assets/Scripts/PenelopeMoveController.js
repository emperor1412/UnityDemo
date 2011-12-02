#pragma strict
 @script RequireComponent(CharacterController)

var moveJoystick : Joystick;
var speed : int = 1;
var rotationSpeed : int = 90;

var isJoystickUsing : boolean = false;

private var characterController : CharacterController;
private var myTransform : Transform;
private var myAnimation : Animation;

function Start() {
	myTransform = GetComponent(Transform);
	myAnimation = GetComponent(Animation);
	characterController = GetComponent(CharacterController);
}

function Update () {
	
	var translate : int = moveJoystick.position.y;
	var rotation : int = moveJoystick.position.x;
	
	
	print("rotation : " +  rotation);
	print("translate : " +  translate);	
	
	if ( translate != 0 || rotation != 0) {
			        //this.transform.Translate(0, 0, translate, Space.Self);
       
        
	
		//myTransform.Translate(0, 0, translate * Time.deltaTime * speed);
		myTransform.Rotate(0, rotation * rotationSpeed * Time.deltaTime, 0);	
		var forward : Vector3 = transform.TransformDirection(Vector3.forward);
        //translate = vertical * speed;        
        characterController.SimpleMove(forward * translate * speed);
        
        
		myAnimation.CrossFade("run-edit");
		isJoystickUsing = true;

	}
	else {
		myAnimation.CrossFade("idle");
		isJoystickUsing = false;
	}
	
	
	
}