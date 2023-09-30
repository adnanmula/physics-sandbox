import Prop from "./Prop.js";
import ExplosiveTrait from "./ExplosiveTrait.js";
import GravityTrait from "./GravityTrait.js";

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

		this.behaviors.Physics.density = 1;
 		this.behaviors.Physics.friction = 0.5;
 		this.behaviors.Physics.elasticity = 0.2;
 		this.behaviors.Physics.linearDamping = 0;
 		this.behaviors.Physics.angularDamping = 0.01;
 		this.behaviors.Physics.isImmovable = false;
 		this.behaviors.Physics.isBullet = false;
 		this.behaviors.Physics.isPreventRotation = false;
 		this.behaviors.Physics.isEnabled = true;
		
		this.instVars.detonation_time = 3;
		
		this.explosive = new ExplosiveTrait(this, {
			'general_radius': 500,
			'burn_radius': 400,
			'explosion_force': 250,
		});
		
		this.gravity = new GravityTrait(this, {
			'force': this.behaviors.Physics.mass,
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
