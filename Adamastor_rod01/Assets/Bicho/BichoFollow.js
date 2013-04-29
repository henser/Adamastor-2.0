#pragma strict
var target : GameObject;

var smooth = 0.2;

var vida=0;

var selectTarg=0;

function Start () {
//Give an inicital lifeTime
vida=Random.value*1000+1500;

selectTarg=Random.Range(1,5);
//Debug.Log(selectTarg);
if(selectTarg==1) target = GameObject.Find("target1");
if(selectTarg==2) target = GameObject.Find("target2");
if(selectTarg==3) target = GameObject.Find("target3");
if(selectTarg==4) target = GameObject.Find("target4");

smooth=Random.Range(0.1,0.4);
}

function Update () {


//in everyFrame live is reduced. if it achieves 0. the bicho is dead
vida=vida-1;
if (vida==0) Destroy(gameObject);

transform.position = Vector3.Lerp ( transform.position, target.transform.position, Time.deltaTime * smooth);
//transform.LookAt(target);
 //transform.Rotate=(target,Time.deltaTime * smooth, Space.World);
  // transform.Rotate(Time.deltaTime, 0, 0);
//rigidbody.MovePosition( target.position);

  //  var target2 = Quaternion.Euler (0, 0, 0);
        // Dampen towards the target rotation
    //    transform.rotation = Quaternion.Slerp(transform.rotation, target2, Time.deltaTime * smooth);;

}