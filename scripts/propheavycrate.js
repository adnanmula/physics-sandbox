export default class PropHeavyCrateInstance extends ISpriteInstance
{
	static get ID() { return 1; }

	constructor()
	{
		super();

		this.behaviors.Physics.density = 15;
		this.behaviors.Physics.friction = 0.8;
		this.behaviors.Physics.elasticity = 0;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
	}

	static create(runtime, x, y)
	{
		runtime.objects.prop_heavycrate.createInstance("main", x, y);
	}
}
