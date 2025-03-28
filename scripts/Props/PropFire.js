import Prop from "./Prop.js";
import LimitedLifespanTrait from "./Trait/LimitedLifespanTrait.js";
import GravityTrait from "./Trait/GravityTrait.js";

export default class PropFire extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_LIMITED_LIFESPAN,
			super.TRAIT_GRAVITY,
		];
	}
	
	constructor()
	{
		super();

		this.isVisible = false;
		this.instVars.lifespan = 7;
		
		this.gravity = new GravityTrait(this, {
			'force': 1,
			'angle': 90
		});
		
		this.limitedLifespan = new LimitedLifespanTrait(this, {
			'lifespan': this.instVars.lifespan * 1000,
		});
	}
	
	static create(x, y)
	{
		globalThis.runtime.objects.prop_fire.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
		this.limitedLifespan.tick();
	}
}
