export default class PropBallInstance extends ISpriteInstance
{
	static get ID() { return 2; }

	constructor()
	{
		super();

		this.behaviors.Physics.density = 0.5;
		this.behaviors.Physics.friction = 0.2;
		this.behaviors.Physics.elasticity = 1;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.1;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
	}

	static create(runtime, x, y)
	{
		runtime.objects.prop_ball.createInstance("main", x, y);
	}
}
