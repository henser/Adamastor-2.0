#pragma strict

var planeta : GameObject;
var rotateSpeed = 0.0005;

//Bichos
var bicho1 : GameObject ;
var bandoBichos = new Array(GameObject);
var nrBichos=1;

// every X time. it s possible that a new bicho is born.
var newBornCount=500;
var newBorn=0.0;

//FOOD
var comida : GameObject ;
var paletesComida = new Array(GameObject);
var nrComidas=50;

// var for cartesian/polar coordinates
var raio=5;
var alpha=0.0;
var theta=0.0;

var xPos=0;
var yPos=0;
var zPos=0;

// var to check if the Bicho is dead or Alive. If dead erase the array position.
var CheckLife : GameObject;
var dist : GameObject;
var dist2 : GameObject;
 
function Start () {

// Big Bang. Planet starts with X bichos
for (var i : int = 0;i < nrBichos; i++) {
//distribute randomly the bichos along the planet
alpha=Random.Range(0.0,(2.0*Mathf.PI));
theta=Random.Range(0.0,(2.0*Mathf.PI));
// for polar to cartesian coordenates
xPos=raio*(Mathf.Sin(theta))*Mathf.Cos(alpha);
yPos=raio*(Mathf.Sin(theta))*Mathf.Sin(alpha);
zPos=raio*(Mathf.Cos(theta));
//instanteato copyes of the prefab Bichos
var bichos : GameObject =  Instantiate (bicho1, Vector3( xPos,yPos,zPos), Quaternion.identity) as GameObject;
//put each copy in a folder. (in the hierarchy menu)
bichos.transform.parent = GameObject.Find("_bichos").transform;

//give a name to each bicho
bichos.name="Bicho";
// add each new bichos to the array bando de bicho
bandoBichos.Add(bichos);
    }
    

 // big bag food distribution at the beginning
 // Big Bang. Planet starts with X bichos
for (var j : int = 0;j < nrComidas; j++) {
//distribute randomly the bichos along the planet
alpha=Random.Range(0.0,(2*Mathf.PI));
theta=Random.Range(0.0,(2*Mathf.PI));

raio=5;
// for polar to cartesian coordenates
xPos=(raio+0.8)*(Mathf.Sin(theta))*Mathf.Cos(alpha);
yPos=(raio+0.8)*(Mathf.Sin(theta))*Mathf.Sin(alpha);
zPos=(raio+0.8)*(Mathf.Cos(theta));
//instanteato copyes of the prefab comida
var comidas : GameObject =  Instantiate (comida, Vector3( xPos,yPos,zPos), transform.rotation) as GameObject;
//put each copy in a folder. (in the hierarchy menu)
comidas.transform.parent = GameObject.Find("_comida").transform;
//comidas.transform.Rotate(Vector3((Mathf.Rad2Deg*alpha)+45, 0,0));
paletesComida.Add(comidas);

Debug.Log(j+" "+Vector3.Distance(comidas.transform.position, Vector3.zero));
    }    
    
    
}

function Update () {

//ROTATE PLANET
planeta.transform.Rotate(0.0, rotateSpeed, 0.0 * Time.deltaTime); 

//CREATING NEW LIFE
// Every X cicle  (newBornCount) there is the possility (50%) of new borns.
newBornCount--;
if(newBornCount<=0){
newBorn=Random.Range(0.0,1.0);
if(newBorn<0.5){
var bichos : GameObject = Instantiate (bicho1, Vector3(xPos,yPos,zPos), Quaternion.identity) as GameObject;
bichos.transform.parent = GameObject.Find("_bichos").transform;
bichos.name="Bicho";
bandoBichos.Add(bichos);
}
newBornCount=100;
}


//CHECKING IF A BICHO IS DEAD. 
for(var i=1; i<bandoBichos.length; i++){
	CheckLife=bandoBichos[i];
	// if bicho's life reach ZERO, Kill him, a erase his array position
	if(CheckLife.GetComponent(BichoFollow).life==false) 
		{
		//Debug.Log(i+" morre cao");
		Destroy(bandoBichos[i]);
		bandoBichos.RemoveAt(i);
		}

	}
	
	
	
	
	for(var k=1; k<bandoBichos.length; k++){
	for(var j=1; j<paletesComida.length; j++){
	
	dist=bandoBichos[k];
	dist2=paletesComida[j];
	var distt = Vector3.Distance(dist.transform.position, dist2.transform.position);
	if( distt<1 ) Debug.DrawLine (dist.transform.position, dist2.transform.position, Color.red);
	//Debug.Log(  Vector3.Distance(dist.transform.position, dist2.transform.position));
	//Debug.Log(  dist.transform.position);
	}
	
	
	}
	
	

}




// SCREEN
    function OnGUI(){
    GUI.color = Color.black;
    // print the current populaion on screen
    GUI.Label(Rect(5,5,Screen.width,Screen.height),"Population: "+bandoBichos.length+"\nFood:"+paletesComida.length);
   
    }
