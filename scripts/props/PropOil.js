import * as Util from "./utils.js";
import Prop from "./Prop.js";
import GravityTrait from "./GravityTrait.js";
import FlammableTrait from "./FlammableTrait.js";

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

		this.behaviors.Physics.density = 1;
		this.behaviors.Physics.friction = 1;
		this.behaviors.Physics.elasticity = 0;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
		
		this.isVisible = true;
		
		this.flammable = new FlammableTrait(this, {
			'burning_time': 1,
			'consuming_time': 1,
			'propagation_time': 0.1,
			'is_liquid': true,
			'is_burning': false,
		});
		
		this.gravity = new GravityTrait(this, {
			'force': this.behaviors.Physics.mass,
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
