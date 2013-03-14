#pragma strict

var rotateSpeed=1.0;


function Start () {
}

function Update () {
transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime);
}
