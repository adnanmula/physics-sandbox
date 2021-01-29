export default class PropBallInstance extends ISpriteInstance
{
	static get ID() { return 2; }

	static create(runtime, x, y)
	{
		const instance = runtime.objects.prop_ball.createInstance("main", x, y);

		instance.behaviors.Physics.density = 0.5;
		instance.behaviors.Physics.friction = 0.2;
		instance.behaviors.Physics.elasticity = 1;
		instance.behaviors.Physics.linearDamping = 0;
		instance.behaviors.Physics.angularDamping = 0.1;
		instance.behaviors.Physics.isImmovable = false;
		instance.behaviors.Physics.isBullet = false;
		instance.behaviors.Physics.isPreventRotation = false;
		instance.behaviors.Physics.isEnabled = true;
	}
}

