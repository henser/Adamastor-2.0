var speed = 10.0;
var gravity = 10.0;
var maxVelocityChange = 10.0;
var canJump = true;
var jumpHeight = 2.0;
private var grounded = false;

@script RequireComponent(Rigidbody, CapsuleCollider)

function Awake ()
{
	rigidbody.freezeRotation = true;
	rigidbody.useGravity = false;
}

function FixedUpdate ()
{
	if (grounded)
	{
		// Calculate how fast we should be moving
		var targetVelocity = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
		targetVelocity = transform.TransformDirection(targetVelocity);
		targetVelocity *= speed;
		
		// Apply a force that attempts to reach our target velocity
		var velocity = rigidbody.velocity;
		var velocityChange = (targetVelocity - velocity);
		velocityChange.x = Mathf.Clamp(velocityChange.x, -maxVelocityChange, maxVelocityChange);
		velocityChange.z = Mathf.Clamp(velocityChange.z, -maxVelocityChange, maxVelocityChange);
		velocityChange.y = 0;
		rigidbody.AddForce(velocityChange, ForceMode.VelocityChange);
	
		// Jump
		if (canJump && Input.GetButton("Jump"))
		{
			rigidbody.velocity = Vector3(velocity.x, CalculateJumpVerticalSpeed(), velocity.z);
		}
	}
	
	// We apply gravity manually for more tuning control
	rigidbody.AddForce(Vector3 (0, -gravity * rigidbody.mass, 0));
	
	grounded = false;
}

function OnCollisionStay ()
{
	grounded = true;	
}

function CalculateJumpVerticalSpeed ()
{
	// From the jump height and gravity we deduce the upwards speed 
	// for the character to reach at the apex.
	return Mathf.Sqrt(2 * jumpHeight * gravity);
}