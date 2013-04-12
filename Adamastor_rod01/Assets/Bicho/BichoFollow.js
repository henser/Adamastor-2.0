#pragma strict
var target : GameObject;

var smooth = 0.9;

var vida=0;

function Start () {
//Give an inicital lifeTime
vida=Random.value*1000+500;

  target = GameObject.Find("target1");


}

function Update () {


//in everyFrame live is reduced. if it achieves 0. the bicho is dead
vida=vida-1;
//if (vida==0) Destroy(gameObject);

transform.position = Vector3.Lerp ( transform.position, target.transform.position, Time.deltaTime * smooth);
//transform.LookAt(target);
 //transform.Rotate=(target,Time.deltaTime * smooth, Space.World);
  // transform.Rotate(Time.deltaTime, 0, 0);
//rigidbody.MovePosition( target.position);

  //  var target2 = Quaternion.Euler (0, 0, 0);
        // Dampen towards the target rotation
    //    transform.rotation = Quaternion.Slerp(transform.rotation, target2, Time.deltaTime * smooth);;

}