#pragma strict
//@script RequireComponent(CharacterController)

var moveJoystick : Joystick;
var speed : int = 1;
var rotationSpeed : int = 90;

private var myTransform : Transform;
private var myAnimation : Animation;

function Start() {
	myTransform = GetComponent(Transform);
	myAnimation = GetComponent(Animation);
}

function Update () {
	
	var translate : int = moveJoystick.position.y;
	var rotation : int = moveJoystick.position.x;
	
	
	print("rotation : " +  rotation);
	print("translate : " +  translate);	
	
	if ( translate != 0 || rotation != 0) {
		myTransform.Translate(0, 0, translate * Time.deltaTime * speed);
		myTransform.Rotate(0, rotation * rotationSpeed * Time.deltaTime, 0);	
		myAnimation.CrossFade("walk-edit");

	}
	else {
		myAnimation.CrossFade("idle-edit");
	}
	
	
	
}