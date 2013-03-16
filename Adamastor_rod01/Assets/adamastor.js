#pragma strict

var planeta : GameObject;
var rotateSpeed = 0.001;

//Bichos
var bicho1 : GameObject ;
//array to keep track of each bicho's parameter
var bandoBichos = new Array();

var nrBichos=100;
 
function Start () {



for (var i : int = 0;i < nrBichos; i++) {

var bichos : GameObject = Instantiate (bicho1, transform.position, Quaternion.identity);

bandoBichos[i]= bichos;


    }


}

function Update () {


planeta.transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime); 

}