import Prop from "/Prop.js";
import GravityTrait from "/GravityTrait.js";

export default class PropHeavyCrate extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_DRAGGABLE,
			super.TRAIT_GRAVITY,
		];
	}
	
	constructor()
	{
		super();
		
		this.gravity = new GravityTrait(this, {
			'force': 2000,
			'angle': 90
		});
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_heavycrate.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
