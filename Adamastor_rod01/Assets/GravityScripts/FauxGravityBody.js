/* 
   FauxGravityBody.js 
   Written by Tonio Loewald ©2008 
    
   Attach this script to objects you want to be affected by FauxGravity 
*/ 

// this is the thing we're gravitationally attracted to 
var attractor : FauxGravityAttractor; 

// are we touching the surface? 
var grounded : int; 

function Start () { 
   rigidbody.WakeUp(); 
   rigidbody.useGravity = false; 
   
  //attractor = GameObject.Find("_planeta");
} 

// obviously this is crude since we might want to be able to stand on (and jump off) random objects 
// should probably filter based on tag in future 
function OnCollisionEnter (c : Collision) { 
   if( c.gameObject.layer == 10 ){ 
      grounded ++; 
   } 
} 

function OnCollisionExit (c : Collision) { 
   if( c.gameObject.layer == 10 && grounded > 0 ){ 
      grounded --; 
   } 
} 

function FixedUpdate () { 
   if(attractor){ 
      attractor.Attract(this); 
   } 
} 

@script RequireComponent(Rigidbody) 