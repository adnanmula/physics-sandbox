import Prop from "/Props/Prop.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropWater extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_LIQUID,
			super.TRAIT_GRAVITY,
		];
	}
	
	constructor()
	{
		super();
		
		this.gravity = new GravityTrait(this, {
			'force': 1.3,
			'angle': 90
		});
	}
	
	static create(x, y)
	{
		globalThis.runtime.objects.prop_water.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
