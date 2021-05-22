import Prop from "./Prop.js";
import FlammableTrait from "./FlammableTrait.js";
import GravityTrait from "./GravityTrait.js";

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

		this.behaviors.Physics.density = 1;
 		this.behaviors.Physics.friction = 0.5;
 		this.behaviors.Physics.elasticity = 0.2;
 		this.behaviors.Physics.linearDamping = 0;
 		this.behaviors.Physics.angularDamping = 0.01;
 		this.behaviors.Physics.isImmovable = false;
 		this.behaviors.Physics.isBullet = false;
 		this.behaviors.Physics.isPreventRotation = false;
 		this.behaviors.Physics.isEnabled = true;
			
		//this.instVars.burning_time = 3;
		//this.instVars.consuming_time = 1;
		//this.instVars.propagation_time = 0.2;

		this.flammable = new FlammableTrait(this, {
			'burning_time': 3,
			'consuming_time': 1,
			'propagation_time': 0.2,
			'is_liquid': false,
			'is_burning': false,
		});

		this.gravity = new GravityTrait(this, {
			'force': this.behaviors.Physics.mass,
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
