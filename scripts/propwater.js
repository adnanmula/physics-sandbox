export default class PropWaterInstance extends ISpriteInstance
{
	get type() { return 'liquid'; }
	
	constructor()
	{
		super();

		this.behaviors.Physics.density = 0.1;
		this.behaviors.Physics.friction = 0;
		this.behaviors.Physics.elasticity = 0.5;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
	}
	
	static create(runtime, x, y)
	{
		runtime.objects.prop_water.createInstance("main", x, y);
	}
}
