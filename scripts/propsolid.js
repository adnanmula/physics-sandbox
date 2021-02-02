export default class PropSolidInstance extends ISpriteInstance
{
	static get ID() { return 3; }

	constructor()
	{
		super();

		this.behaviors.Physics.density = 10;
		this.behaviors.Physics.friction = 1;
		this.behaviors.Physics.elasticity = 0;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = true;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
	}

	static create(runtime, x, y)
	{
		runtime.objects.prop_solid.createInstance("main", x, y);
	}
}
