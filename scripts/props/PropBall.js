import Prop from "/Props/Prop.js";
import GravityTrait from "/Props/Trait/GravityTrait.js";

export default class PropBall extends Prop
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
			'force': 52,
			'angle': 90,
		});
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_ball.createInstance("main", x, y);
	}
	
	tick()
	{
		this.gravity.tick();
	}
}
