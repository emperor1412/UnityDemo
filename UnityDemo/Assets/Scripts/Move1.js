#pragma strict

var speed = 1;
var rotation = 100;

private var characterController : CharacterController;
private var myAnimation: Animation;
private var previousTransform : Transform;

function Start() {
	
	characterController = GetComponent(CharacterController);
	myAnimation = GetComponent(Animation);
}

function Update () {
	var horizontal = Input.GetAxis("Horizontal");
	var vertical = Input.GetAxis("Vertical");

	if (horizontal != 0 || vertical != 0){
		var rotate = horizontal * Time.deltaTime * rotation;
		var translate = vertical * Time.deltaTime * speed;
		//print("Horizontal : " + Input.GetAxis("Horizontal") + "\tVertical : "+Input.GetAxis("Vertical"));
		//print("Delta : " + Time.deltaTime);
		//print("translate = " + translate + "\trotate = " + rotate);
		
		        //this.transform.Translate(0, 0, translate, Space.Self);
        this.transform.Rotate(0, rotate, 0, Space.World);
        var forward : Vector3 = transform.TransformDirection(Vector3.forward);
        translate = vertical * speed;        
        characterController.SimpleMove(forward * translate);
		
		myAnimation.CrossFade("walk-edit");
		
	}
	else {
		myAnimation.CrossFade("idle-edit");
	}
	
}


