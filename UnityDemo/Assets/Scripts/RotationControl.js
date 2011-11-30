
// Revelopment.co.uk
// Created by Carlos Revelo
// 2011




/********Main Objects***********/

var targetItem : GameObject;
var GUICamera : Camera;
var ambient : GameObject;


/********Rotation Variables*********/
var rotationRate : float = 1.0;
private var wasRotating;

/************Scrolling inertia variables************/
private var scrollPosition : Vector2 = Vector2.zero;
private var scrollVelocity : float = 0;
private var timeTouchPhaseEnded: float;
private var inertiaDuration : float = 0.5f;

private var itemInertiaDuration : float = 1.0f;
private var itemTimeTouchPhaseEnded: float;
private var rotateVelocityX : float = 0;
private var rotateVelocityY : float = 0;


var hit: RaycastHit;

private var layerMask = (1 <<  8) | (1 << 2);



function Start()
{
	layerMask =~ layerMask;	
}

function FixedUpdate()
{
	
	if (Input.touchCount > 0) 
	{		//	If there are touches...
			var theTouch : Touch = Input.GetTouch (0);		//	Cache Touch (0)
			
			var ray = Camera.main.ScreenPointToRay(theTouch.position);
			//var GUIRay = GUICamera.ScreenPointToRay(theTouch.position);
			
				
         	if(Physics.Raycast(ray,hit,50,layerMask))
         	{	

                                               if(Input.touchCount == 1)
						{
							
							if (theTouch.phase == TouchPhase.Began) 
         					{
         						wasRotating = false;	
         					}		
         					
         					if (theTouch.phase == TouchPhase.Moved) 
         					{
          		        		
         						targetItem.transform.Rotate(theTouch.deltaPosition.y * rotationRate, -theTouch.deltaPosition.x * rotationRate,0,Space.World);
         						wasRotating = true;
         					}		
         	
         					if (theTouch.phase == TouchPhase.Ended || theTouch.phase == TouchPhase.Canceled) 
         					{
         						if(wasRotating==true)
         						{
         							if(Mathf.Abs(theTouch.deltaPosition.x) >=10)
         							{
         								rotateVelocityX = theTouch.deltaPosition.x / theTouch.deltaTime;
           							}
           							if(Mathf.Abs(theTouch.deltaPosition.y) >=10)
         							{
         								rotateVelocityY = theTouch.deltaPosition.y / theTouch.deltaTime;
           							}	
         						itemTimeTouchPhaseEnded = Time.time;
         						}
                                                   }
						}
			}


			
						
			
	}
/******************** Inertia code ******************************/
    if(Input.touchCount == 0 )
    {
                if(scrollVelocity != 0.0)
         	{
         		//slowing down
         		var t : float = (Time.time - timeTouchPhaseEnded) / inertiaDuration;
         		var frameVelocity : float = Mathf.Lerp(scrollVelocity, 0 , t);
         				
         		scrollPosition.x -= frameVelocity * Time.deltaTime;
         				
         		if(t >= inertiaDuration)
         			scrollVelocity = 0.0f;
         				
         				
         	}	
         
                if(rotateVelocityX != 0.0f || rotateVelocityY != 0.0f)
         	{
         		//slowing down
         		var ty : float = (Time.time - itemTimeTouchPhaseEnded) / itemInertiaDuration;
         		var XVelocity : float = Mathf.Lerp(rotateVelocityX, 0 , ty);
         		var YVelocity : float = Mathf.Lerp(rotateVelocityY, 0 , ty); 	
         		
         				
         		if(ty >= inertiaDuration)
         		{
         			rotateVelocityX = 0.0f;
         			rotateVelocityY = 0.0f;
         			
         		}	
         		targetItem.transform.Rotate(YVelocity*Time.deltaTime * rotationRate, -XVelocity * Time.deltaTime * rotationRate,0,Space.World);		
         				
         	}	
        
        
      }	
}