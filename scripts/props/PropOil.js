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

		this.flammable = new FlammableTrait(this, {
			'burning_time': 1,
			'consuming_time': 1,
			'propagation_time': 0.1,
			'is_liquid': true,
			'is_burning': false,
		});
		
		this.gravity = new GravityTrait(this, {
			'force': 4,
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
