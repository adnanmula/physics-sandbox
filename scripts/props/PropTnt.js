import Prop from "/Props/Prop.js";
import ExplosiveTrait from "/Props/Trait/ExplosiveTrait.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropTnt extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_DRAGGABLE,
			super.TRAIT_EXPLOSIVE,
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
		
		this.instVars.detonation_time = 3;
		
		this.explosive = new ExplosiveTrait(this, {
			'general_radius': 500,
			'burn_radius': 400,
			'explosion_force': 250,
		});
		
		this.gravity = new GravityTrait(this, {
			'force': 134,
			'angle': 90
		});
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_tnt.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
		this.explosive.tick();
	}
}
