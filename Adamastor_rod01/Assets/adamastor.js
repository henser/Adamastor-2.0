#pragma strict

var planeta : GameObject;
var rotateSpeed = 0.0005;

//Bichos
var bicho1 : GameObject ;
//array to keep track of each bicho's parameter
//var bandoBichos = new Array();

var bandoBichos = new Array();

var nrBichos=100;
 
function Start () {



for (var i : int = 0;i < nrBichos; i++) {

var bichos : GameObject = Instantiate (bicho1, Vector3( Random.Range(6, 10.0),Random.Range(6, 10.0),Random.Range(6, 10.0)), Quaternion.identity);

bichos.transform.parent = GameObject.Find("_bichos").transform;
//bandoBichos.[i]= bichos;
bandoBichos.Add(bichos);
    }


}

function Update () {


planeta.transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime); 



}

