import Prop from "/Props/Prop.js";
import FlammableTrait from "/Props/Trait/FlammableTrait.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropCrate extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_DRAGGABLE,
			super.TRAIT_FLAMMABLE_SOLID,
			super.TRAIT_GRAVITY,
		];
	}
	
	constructor()
	{
		super();

		const physics = this.behaviors.Physics.behavior;

		physics.density = 1;
 		physics.friction = 0.5;
 		physics.elasticity = 0.2;
 		physics.linearDamping = 0;
 		physics.angularDamping = 0.01;
 		physics.isImmovable = false;
 		physics.isBullet = false;
 		physics.isPreventRotation = false;
 		physics.isEnabled = true;
			
		this.flammable = new FlammableTrait(this, {
			'burning_time': 3,
			'consuming_time': 1,
			'propagation_time': 0.2,
			'is_liquid': false,
			'is_burning': false,
		});

		this.gravity = new GravityTrait(this, {
			'force': 134,
			'angle': 90,
		});
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_crate.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
		this.flammable.tick();
	}
}
