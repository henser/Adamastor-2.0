#pragma strict

var center : GameObject;


function Start () {
center = GameObject.Find("__Code");
transform.LookAt(center.transform);


}

function Update () {

}