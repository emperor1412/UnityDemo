var type : CameraType; 

public var cameraTransform: Transform;
public var cameraOffset: Transform;
var targetTransform:Transform;

var characterMovementControl : CharacterMovementControl;

public var cameraFreeViewP:Vector3;
public var cameraFreeViewR:Vector3;


private var transformFreeViewP:Vector3;

private var lastTouchFirst:Vector2;
private var lastTouchSecond:Vector2;
private var lastDistance:Vector2;
function Start ()
{
	type =type.FirstPerson;
	cameraOffset.localPosition= Vector3(0,6.2,1.8);
	cameraOffset.localEulerAngles= Vector3(0,0,0);
	cameraTransform.localPosition = Vector3(0,0,0);
	cameraTransform.localEulerAngles = Vector3(10,0,0);
	print ("Begin");
}
function LateUpdate()
{
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
			
			if(characterMovementControl.isJoystickUsing)
				return;
			
			var fingerCount:int;
			
			for (var touch : Touch in Input.touches) {
				if (touch.phase != TouchPhase.Ended && touch.phase != TouchPhase.Canceled)
		            fingerCount++;
			}
			
			if (fingerCount==1)
			{
				var touch: Touch = Input.touches[0];
				cameraTransform.Translate(Vector3(touch.deltaPosition.y,0,-touch.deltaPosition.x)*touch.deltaTime,Space.World);
				cameraFreeViewP=cameraTransform.localPosition;
			}
			if (fingerCount==2)
			{
				var touchFirst:Touch = Input.touches[0];
				var touchSecond:Touch = Input.touches[1];
				
				if (touchSecond.phase == TouchPhase.Began)
				{
					lastTouchFirst = touchFirst.position;
					lastTouchSecond = touchSecond.position;
					lastDistance = lastTouchSecond-lastTouchFirst;
				}
				
				var currentTouchFirst:Vector2 = touchFirst.position;
				var currentTouchSecond:Vector2 = touchSecond.position;
				
				var currentDistance:Vector2 = currentTouchSecond-currentTouchFirst;
				
				var touchFirstOffset:Vector2 = currentTouchFirst-lastTouchFirst;
				var touchSecondOffset:Vector2 = currentTouchSecond-lastTouchSecond;
				
				var distanceOffset:float = currentDistance.magnitude - lastDistance.magnitude;
				
				lastTouchFirst = currentTouchFirst;
				lastTouchSecond = currentTouchSecond;
				lastDistance = currentDistance;
				
				cameraTransform.Translate(Vector3.forward*distanceOffset*Time.deltaTime,Space.Self);
				cameraFreeViewP=cameraTransform.localPosition;
			}
			break;
			
		case type.ThirdPerson:
			
			transform.position = targetTransform.position;
			transform.localEulerAngles = Vector3(0,0,0);
			cameraTransform.localPosition = cameraFreeViewP;
			transformFreeViewP=transform.localPosition;
			
			if(characterMovementControl.isJoystickUsing)
				return;
			var fingerCountT:int;
			
			for (var touchT : Touch in Input.touches) {
				if (touchT.phase != TouchPhase.Ended && touchT.phase != TouchPhase.Canceled)
		            fingerCountT++;
			}
			
			if (fingerCountT==2)
			{
				var touchFirstT:Touch = Input.touches[0];
				var touchSecondT:Touch = Input.touches[1];
				
				if (touchSecondT.phase == TouchPhase.Began)
				{
					lastTouchFirst = touchFirstT.position;
					lastTouchSecond = touchSecondT.position;
					lastDistance = lastTouchSecond-lastTouchFirst;
				}
				
				var currentTouchFirstT:Vector2 = touchFirstT.position;
				var currentTouchSecondT:Vector2 = touchSecondT.position;
				
				var currentDistanceT:Vector2 = currentTouchSecondT-currentTouchFirstT;
				
				var touchFirstOffsetT:Vector2 = currentTouchFirstT-lastTouchFirst;
				var touchSecondOffsetT:Vector2 = currentTouchSecondT-lastTouchSecond;
				
				var distanceOffsetT:float = currentDistanceT.magnitude - lastDistance.magnitude;
				
				lastTouchFirst = currentTouchFirstT;
				lastTouchSecond = currentTouchSecondT;
				lastDistance = currentDistanceT;
				
				cameraTransform.Translate(Vector3.forward*distanceOffsetT*Time.deltaTime,Space.Self);
				cameraFreeViewP=cameraTransform.localPosition;
			}
			break;
	}
}