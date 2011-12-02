var type : CameraType; 

public var cameraTransform: Transform;
public var cameraOffset: Transform;
public var transformR:Vector3;
var targetTransform:Transform;

//var characterMovementControl : CharacterMovementControl;
var characterMovementControl : PenelopeMoveController;

var joystick : Joystick;

public var cameraFreeViewP:Vector3;
public var cameraFreeViewR:Vector3;

var bottomCutY:float = 1.5;
var topCutY:float = 8;
var cameraBounceXMinX =-14;
var cameraBounceXMaxX = 14;
var cameraBounceXMinZ =-14;
var cameraBounceXMaxZ = 14;
private var transformFreeViewP:Vector3;

private var lastTouchFirst:Vector2;
private var lastTouchSecond:Vector2;
private var lastDistance:Vector2;
function Start ()
{
	type =type.FirstPerson;
	cameraOffset.localPosition= Vector3(0,0.6,0.2);
	cameraOffset.localEulerAngles= Vector3(0,0,0);
	cameraTransform.localPosition = Vector3(0,0,0);
	cameraTransform.localEulerAngles = Vector3(0,0,0);
	print ("Begin");
}
function LateUpdate()
{
	var touch: Touch;
	var touchFirst:Touch;
	var touchSecond:Touch;			
	var currentTouchFirst:Vector2;
	var currentTouchSecond:Vector2;
				
	var currentDistance:Vector2;
				
	var touchFirstOffset:Vector2;
	var touchSecondOffset:Vector2;
				
	var distanceOffset:float;
	
	var before:Vector3;
	var after:Vector3;
				
	var bY :float;
	var bX :float;
	var bZ :float;
	var pointCutBottom:Vector3;
				
	var tY :float;
	var tX :float;
	var tZ :float;
	var pointCutTop:Vector3;
	
	var fingerCount:int;
	
	var deadZone : Rect = Rect (0,0,200,200);
	switch ( type )
	{
		case type.FirstPerson:		
			transform.position = targetTransform.position;
			transform.rotation = targetTransform.rotation;
			transformFreeViewP=transform.localPosition;
			break;

		case type.FreeView:
			
			transform.localPosition = transformFreeViewP;
			transform.localEulerAngles = Vector3(0,0,0);
			cameraTransform.localPosition = cameraFreeViewP;
				
			if (characterMovementControl.isJoystickUsing)
			return;
			
			fingerCount=0;
			for (var touch1 : Touch in Input.touches) {
				if (touch1.phase != TouchPhase.Ended && touch1.phase != TouchPhase.Canceled)
		            fingerCount++;
			}
			
			if (fingerCount==1)
			{
				touch= Input.touches[0];
				if(touch.position.x > deadZone.xMin && touch.position.x < deadZone.xMax && touch.position.y > deadZone.yMin && touch.position.y<deadZone.yMax)
				return;
			
				cameraTransform.Translate(Vector3(touch.deltaPosition.y,0,-touch.deltaPosition.x)*touch.deltaTime*0.1,Space.World);
				if (cameraTransform.position.x<cameraBounceXMinX)
					cameraTransform.position.x=cameraBounceXMinX;
				if (cameraTransform.position.x>cameraBounceXMaxX)
					cameraTransform.position.x=cameraBounceXMaxX;
				if (cameraTransform.position.z<cameraBounceXMinZ)
					cameraTransform.position.z=cameraBounceXMinZ;
				if (cameraTransform.position.z>cameraBounceXMaxZ)
					cameraTransform.position.z=cameraBounceXMaxZ;
				cameraFreeViewP=cameraTransform.localPosition;
			}
			if (fingerCount==2)
			{
				touchFirst = Input.touches[0];
				touchSecond = Input.touches[1];
				if(touchFirst.position.x > deadZone.xMin && touchFirst.position.x < deadZone.xMax && touchFirst.position.y > deadZone.yMin && touchFirst.position.y < deadZone.yMax 
				&& touchSecond.position.x > deadZone.xMin && touchSecond.position.x < deadZone.xMax && touchSecond.position.y > deadZone.yMin && touchSecond.position.y < deadZone.yMax)
				return;
				if (touchSecond.phase == TouchPhase.Began)
				{
					lastTouchFirst = touchFirst.position;
					lastTouchSecond = touchSecond.position;
					lastDistance = lastTouchSecond-lastTouchFirst;
					currentTouchFirst = touchFirst.position;
					currentTouchSecond = touchSecond.position;
				}else{
				
					currentTouchFirst = touchFirst.position;
					currentTouchSecond = touchSecond.position;
				
					currentDistance = currentTouchSecond-currentTouchFirst;
				
					touchFirstOffset = currentTouchFirst-lastTouchFirst;
					touchSecondOffset = currentTouchSecond-lastTouchSecond;
				
					distanceOffset= currentDistance.magnitude - lastDistance.magnitude;
				
					lastTouchFirst = currentTouchFirst;
					lastTouchSecond = currentTouchSecond;
					lastDistance = currentDistance;
				
					before= cameraTransform.position;
					cameraTransform.Translate(Vector3.forward*distanceOffset*Time.deltaTime*0.5,Space.Self);
					after = cameraTransform.position;
				
					bY = bottomCutY;
					bX = ((before.y-bY)*after.x - (after.y-bY)*before.x)/(before.y-after.y);
					bZ = ((before.y-bY)*after.z - (after.y-bY)*before.z)/(before.y-after.y);
					pointCutBottom = Vector3(bX,bY,bZ);
				
					tY = topCutY;
					tX = ((before.y-tY)*after.x - (after.y-tY)*before.x)/(before.y-after.y);
					tZ = ((before.y-tY)*after.z - (after.y-tY)*before.z)/(before.y-after.y);
					pointCutTop = Vector3(tX,tY,tZ);
					if(after.y < bottomCutY){
						cameraTransform.position=pointCutBottom;
					}
					if(after.y > topCutY){
						cameraTransform.position=pointCutTop;
					}
					cameraFreeViewP=cameraTransform.localPosition;
				}
			}
			break;
			
		case type.ThirdPerson:
			
			transform.position = targetTransform.position;
			cameraTransform.localPosition = cameraFreeViewP;
			transformFreeViewP=transform.localPosition;
			transform.localEulerAngles=transformR;
			
			if(characterMovementControl.isJoystickUsing)
				return;
			
			fingerCount=0;
			for (var touchT : Touch in Input.touches) {
				if (touchT.phase != TouchPhase.Ended && touchT.phase != TouchPhase.Canceled)
		            fingerCount++;
			}
			if (fingerCount==1)
			{
				touch = Input.touches[0];
				if(touch.position.x>deadZone.xMin && touch.position.x<deadZone.xMax && touch.position.y > deadZone.yMin && touch.position.y<deadZone.yMax)
				return;
				var beginP:Vector2;
				var moveP:Vector2;
				if (touch.phase == TouchPhase.Began){
					beginP=touch.position;
					moveP=beginP;
				} else{
					moveP =touch.position;
					var Poffset: Vector2 = moveP - beginP;
				
					transform.Rotate(Vector3(0,Poffset.y*Time.deltaTime,0),Space.Self);
				
					transformR=transform.localEulerAngles;
				}
			}
			if (fingerCount==2)
			{
				touchFirst = Input.touches[0];
				touchSecond = Input.touches[1];
				if(touchFirst.position.x>deadZone.xMin && touchFirst.position.x<deadZone.xMax && touchFirst.position.y > deadZone.yMin && touchFirst.position.y<deadZone.yMax 
				&& touchSecond.position.x>deadZone.xMin && touchSecond.position.x<deadZone.xMax && touchSecond.position.y > deadZone.yMin && touchSecond.position.y<deadZone.yMax)
				return;
				if (touchSecond.phase == TouchPhase.Began)
				{
					lastTouchFirst = touchFirst.position;
					lastTouchSecond = touchSecond.position;
					lastDistance = lastTouchSecond-lastTouchFirst;
				}
				
				currentTouchFirst = touchFirst.position;
				currentTouchSecond = touchSecond.position;
				
				currentDistance = currentTouchSecond-currentTouchFirst;
				
				touchFirstOffset = currentTouchFirst-lastTouchFirst;
				touchSecondOffset = currentTouchSecond-lastTouchSecond;
				
				distanceOffset= currentDistance.magnitude - lastDistance.magnitude;
				
				lastTouchFirst = currentTouchFirst;
				lastTouchSecond = currentTouchSecond;
				lastDistance = currentDistance;
				
				before= cameraTransform.position;
				cameraTransform.Translate(Vector3.forward*distanceOffset*Time.deltaTime*0.5,Space.Self);
				after = cameraTransform.position;
				
				bY = bottomCutY;
				bX = ((before.y-bY)*after.x - (after.y-bY)*before.x)/(before.y-after.y);
				bZ = ((before.y-bY)*after.z - (after.y-bY)*before.z)/(before.y-after.y);
				pointCutBottom = Vector3(bX,bY,bZ);
				
				tY = topCutY;
				tX = ((before.y-tY)*after.x - (after.y-tY)*before.x)/(before.y-after.y);
				tZ = ((before.y-tY)*after.z - (after.y-tY)*before.z)/(before.y-after.y);
				pointCutTop = Vector3(tX,tY,tZ);
				if(after.y < bottomCutY){
					cameraTransform.position=pointCutBottom;
				}
				if(after.y > topCutY){
					cameraTransform.position=pointCutTop;
				}
				cameraFreeViewP=cameraTransform.localPosition;
			}
			break;
	}
}