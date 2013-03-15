#pragma strict

var planeta : GameObject;
var rotateSpeed = 0.001;
 
function Start () {


}

function Update () {


planeta.transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime); 

}