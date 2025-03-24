import Prop from "/Props/Prop.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropWaterSteam extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_GAS,
			super.TRAIT_GRAVITY,
		];
	}
	
	constructor()
	{
		super();
	
		this.gravity = new GravityTrait(this, {
			'force': 0.6,
			'angle': 270
		});
	}
	
	static create(x, y)
	{
		globalThis.runtime.objects.prop_water_steam.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
