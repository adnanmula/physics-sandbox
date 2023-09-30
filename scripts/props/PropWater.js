import Prop from "./Prop.js";
import GravityTrait from "./GravityTrait.js";

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

		this.behaviors.Physics.density = 0.1;
		this.behaviors.Physics.friction = 0;
		this.behaviors.Physics.elasticity = 0.5;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
		
		this.gravity = new GravityTrait(this, {
			'force': this.behaviors.Physics.mass,
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
