export default class PropWaterInstance extends ISpriteInstance
{
	static get ID() { return 4; }
	
	static create(runtime, x, y)
	{
		const instance = runtime.objects.prop_water.createInstance("main", x, y);

		instance.behaviors.Physics.density = 0.1;
		instance.behaviors.Physics.friction = 0;
		instance.behaviors.Physics.elasticity = 0.5;
		instance.behaviors.Physics.linearDamping = 0;
		instance.behaviors.Physics.angularDamping = 0.01;
		instance.behaviors.Physics.isImmovable = false;
		instance.behaviors.Physics.isBullet = false;
		instance.behaviors.Physics.isPreventRotation = false;
		instance.behaviors.Physics.isEnabled = true;
	}
}
