import Prop from "/Props/Prop.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropLava extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_GRAVITY,
			super.TRAIT_LIQUID,
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
		globalThis.runtime.objects.prop_lava.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
