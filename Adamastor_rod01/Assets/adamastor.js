#pragma strict

var planeta : GameObject;
var rotateSpeed = 0.0005;

//Bichos
var bicho1 : GameObject ;
//array to keep track of each bicho's parameter
//var bandoBichos = new Array();

var bandoBichos = new Array();

var nrBichos=1;

// every X time. it s possible that a new bicho is born.
var newBornCount=500;
var newBorn=0.0;
 
function Start () {



for (var i : int = 0;i < nrBichos; i++) {

var bichos : GameObject = Instantiate (bicho1, Vector3( Random.Range(6, 6),Random.Range(6, 6),Random.Range(6, 6)), Quaternion.identity);

bichos.transform.parent = GameObject.Find("_bichos").transform;
//bandoBichos.[i]= bichos;
bandoBichos.Add(bichos);
    }


}

function Update () {


planeta.transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime); 


newBornCount--;
if(newBornCount<=0){

newBorn=Random.Range(0.0,1.0);
if(newBorn<0.2){

var bichos : GameObject = Instantiate (bicho1, Vector3( Random.Range(6, 6),Random.Range(6, 6),Random.Range(6, 6)), Quaternion.identity);

bichos.transform.parent = GameObject.Find("_bichos").transform;
bandoBichos.Add(bichos);
Debug.Log("a new bicho in town "+ newBorn);

}

newBornCount=500;

}


}

