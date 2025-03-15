import Prop from "/Props/Prop.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropHeavyCrate extends Prop
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

		physics.density = 15;
		physics.friction = 0.8;
		physics.elasticity = 0;
		physics.linearDamping = 0;
		physics.angularDamping = 0.01;
		physics.isImmovable = false;
		physics.isBullet = false;
		physics.isPreventRotation = false;
		physics.isEnabled = true;
		
		this.gravity = new GravityTrait(this, {
			'force': 2000,
			'angle': 90
		});
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_heavycrate.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
