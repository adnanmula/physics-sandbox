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

		const physics = this.behaviors.Physics.behavior;

		physics.density = 0.1;
		physics.friction = 0;
		physics.elasticity = 0;
		physics.linearDamping = 0;
		physics.angularDamping = 0.01;
		physics.isImmovable = false;
		physics.isBullet = false;
		physics.isPreventRotation = false;
		physics.isEnabled = true;
		
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
