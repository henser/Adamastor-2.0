#pragma strict

var raio= 2.0;
var xPos;
var yPos;
var zPos;

var alpha=0.0;
var theta=0.0;






function Start () {

alpha=Random.value;
theta=Random.value;


}

function Update () {


//cartesian to polar
xPos=raio*(Mathf.Sin(theta*Mathf.PI))*Mathf.Cos(alpha*Mathf.PI);
yPos=raio*(Mathf.Sin(theta*Mathf.PI))*Mathf.Sin(alpha*Mathf.PI);
zPos=raio*(Mathf.Cos(theta*Mathf.PI));

//move Bichos
transform.position = Vector3(xPos, yPos, zPos);


//give to Bicho a noise pathwalk
var noisyPath = Mathf.PerlinNoise(xPos, yPos)/1000;
//Debug.Log (noisyPath);


if(theta<2) theta+=(noisyPath+0.0001);
else theta =0;
if(alpha<2) alpha+=(noisyPath+0.0001);
else alpha =0;


}


function OnTriggerEnter () {
  
}