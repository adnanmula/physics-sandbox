import Prop from "/Props/Prop.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropBall extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_DRAGGABLE,
			super.TRAIT_GRAVITY,
		];
	}

	constructor()
	{
		super();

		const physics = this.behaviors.Physics.behavior;

		physics.density = 0.15;
		physics.friction = 0.2;
		physics.elasticity = 1;
		physics.linearDamping = 0;
		physics.angularDamping = 0.1;
		physics.isImmovable = false;
		physics.isBullet = false;
		physics.isPreventRotation = false;
		physics.isEnabled = true;

		this.gravity = new GravityTrait(this, {
			'force': 52,
			'angle': 90,
		});
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_ball.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
