
/* 
   FauxGravityAttractor.js 
   Written by Tonio Loewald ©2008 
    
   Attach this script to objects you want to exert Faux Gravity 
*/ 

// Set to true for mono-directional gravity 
var useLocalUpVector : boolean = false; 

// Force applied along gravity up-vector (negative = down) 
var fauxGravity = -10.0; 

function Attract ( body : FauxGravityBody ){ 
   var gravityUp : Vector3; 
   var localUp: Vector3; 
   var localForward : Vector3; 
    
   var t : Transform = body.transform; 
   var r : Rigidbody = body.rigidbody; 

   // Figure out the body's up vector 
   if(useLocalUpVector){ 
      gravityUp = transform.up;    
   } else { 
      gravityUp = t.position - transform.position; 
      gravityUp.Normalize(); 
   } 
    
   // Accelerate the body along its up vector 
   r.AddForce( gravityUp * fauxGravity * r.mass ); 
   r.drag = body.grounded ? 1 : 0.1; 
    
   // If the object's freezerotation is set, we force the object upright 
   if(r.freezeRotation){ 
      // Orient relatived to gravity 
      localUp = t.up; 
      var q = Quaternion.FromToRotation(localUp, gravityUp); 
      q = q * t.rotation; 
      t.rotation = Quaternion.Slerp(t.rotation, q, 0.1); 
      localForward = t.forward; 
   } 
} 