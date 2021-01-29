export default class PropSolidInstance extends ISpriteInstance
{
	static get ID() { return 3; }

	static create(runtime, x, y)
	{
		const instance = runtime.objects.prop_solid.createInstance("main", x, y);
		
		instance.behaviors.Physics.density = 10;
		instance.behaviors.Physics.friction = 1;
		instance.behaviors.Physics.elasticity = 0;
		instance.behaviors.Physics.linearDamping = 0;
		instance.behaviors.Physics.angularDamping = 0.01;
		instance.behaviors.Physics.isImmovable = true;
		instance.behaviors.Physics.isBullet = false;
		instance.behaviors.Physics.isPreventRotation = false;
		instance.behaviors.Physics.isEnabled = true;
	}
}
