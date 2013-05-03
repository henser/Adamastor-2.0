#pragma strict
var target : GameObject;

var smooth = 0.2;

var vida=0;

var selectTarg=0;

var mat : Material;
 
var bichoColor : Color;

var life = true;

function Start () {
//Give an inicital lifeTime
vida=Random.value*2000+2500;

selectTarg=Random.Range(1,5);
//Debug.Log(selectTarg);
if(selectTarg==1) target = GameObject.Find("target1");
if(selectTarg==2) target = GameObject.Find("target2");
if(selectTarg==3) target = GameObject.Find("target3");
if(selectTarg==4) target = GameObject.Find("target4");

smooth=Random.Range(0.05,0.2);

//smooth=0.2;


//mat.color = Color.blue;

}

function Update () {


//in everyFrame live is reduced. if it achieves 0. the bicho is dead
vida=vida-1;
if (vida==0) {
life=false;
//Destroy(gameObject);
}
transform.position = Vector3.Lerp ( transform.position, target.transform.position, Time.deltaTime * smooth);
transform.LookAt(target.transform);

//transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * smooth);
//transform.Rotate=(target,Time.deltaTime * smooth, Space.World);

    // transform.Rotate(Time.deltaTime, 0, 0);
//rigidbody.MovePosition( target.position);

  //  var target2 = Quaternion.Euler (0, 0, 0);
        // Dampen towards the target rotation
    //    transform.rotation = Quaternion.Slerp(transform.rotation, target2, Time.deltaTime * smooth);;

}



