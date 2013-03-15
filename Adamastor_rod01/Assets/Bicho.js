#pragma strict

var raio= 2.5;
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




xPos=raio*(Mathf.Sin(theta*Mathf.PI))*Mathf.Cos(alpha*Mathf.PI);
yPos=raio*(Mathf.Sin(theta*Mathf.PI))*Mathf.Sin(alpha*Mathf.PI);
zPos=raio*(Mathf.Cos(theta*Mathf.PI));



transform.position = Vector3(xPos, yPos, zPos);

var sample = Mathf.PerlinNoise(xPos, yPos);
//Debug.Log (sample);

if(theta<2) theta+=0.0001;
else theta =0;

if(alpha<2) alpha+=0.0001+sample/100;
else alpha =0;

}