#pragma strict

var planeta : GameObject;
var rotateSpeed = 0.0005;

//Bichos
var bicho1 : GameObject ;
//array to keep track of each bicho's parameter
//var bandoBichos = new Array();

//var bandoBichos = new Array();
var bandoBichos = new Array(GameObject);

var nrBichos=1;

// every X time. it s possible that a new bicho is born.
var newBornCount=500;
var newBorn=0.0;

var raio=5;
var  alpha=0.0;
var theta=0.0;

var xPos=0;
var yPos=0;
var zPos=0;

// var to check if the Bicho is dead or Alive. If dead erase the array position.
var CheckLife : GameObject;

 
function Start () {



for (var i : int = 0;i < nrBichos; i++) {

alpha=Random.Range(0.0,2.0);
theta=Random.Range(0.0,2.0);

xPos=raio*(Mathf.Sin(theta*Mathf.PI))*Mathf.Cos(alpha*Mathf.PI);
yPos=raio*(Mathf.Sin(theta*Mathf.PI))*Mathf.Sin(alpha*Mathf.PI);
zPos=raio*(Mathf.Cos(theta*Mathf.PI));

//var bichos : GameObject = Instantiate (bicho1, Vector3( Random.Range(0, 0),Random.Range(6, 6),Random.Range(0, 0)), Quaternion.identity);

var bichos : GameObject =  Instantiate (bicho1, Vector3( xPos,yPos,zPos), Quaternion.identity) as GameObject;


bichos.transform.parent = GameObject.Find("_bichos").transform;
bichos.name="Bicho";
//bandoBichos.[i]= bichos;
bandoBichos.Add(bichos);
    }



}

function Update () {


//Rotate planet
planeta.transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime); 



// Every X cicle there is the possility of new borns.
newBornCount--;
if(newBornCount<=0){
newBorn=Random.Range(0.0,1.0);
if(newBorn<0.5){
var bichos : GameObject = Instantiate (bicho1, Vector3(xPos,yPos,zPos), Quaternion.identity) as GameObject;
bichos.transform.parent = GameObject.Find("_bichos").transform;
bichos.name="Bicho";
bandoBichos.Add(bichos);
//Debug.Log("a new bicho in town "+ newBorn);
}
newBornCount=100;
}


for(var i=1; i<bandoBichos.length; i++){



CheckLife=bandoBichos[i];
if(CheckLife.GetComponent(BichoFollow).life==false) 
	{
//Debug.Log(i+" morre cao");
Destroy(bandoBichos[i]);
bandoBichos.RemoveAt(i);

}

}



}


// on screen
    function OnGUI(){
    GUI.color = Color.black;
    GUI.Label(Rect(5,5,Screen.width,Screen.height),"Population: "+bandoBichos.length);
    }
