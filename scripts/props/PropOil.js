import Prop from "/Props/Prop.js";
import FlammableTrait from "/Props/Trait/FlammableTrait.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropOil extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_FLAMMABLE_SOLID,
			super.TRAIT_GRAVITY,
			super.TRAIT_LIQUID,
		];
	}
	
	constructor()
	{
		super();

		const physics = this.behaviors.Physics.behavior;

		physics.density = 1;
		physics.friction = 1;
		physics.elasticity = 0;
		physics.linearDamping = 0;
		physics.angularDamping = 0.01;
		physics.isImmovable = false;
		physics.isBullet = false;
		physics.isPreventRotation = false;
		physics.isEnabled = true;
		
		this.isVisible = true;
		
		this.flammable = new FlammableTrait(this, {
			'burning_time': 1,
			'consuming_time': 1,
			'propagation_time': 0.1,
			'is_liquid': true,
			'is_burning': false,
		});
		
		this.gravity = new GravityTrait(this, {
			'force': 1.3,
			'angle': 90
		});
	}
	
	static create(x, y)
	{
		globalThis.runtime.objects.prop_oil.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
		this.flammable.tick();
	}
}
