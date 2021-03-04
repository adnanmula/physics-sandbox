import * as Util from "./utils.js";
import Prop from "./Prop.js";

export default class PropWaterSteam extends Prop
{
	get traits()
	{
		return [super.TRAIT_GAS];
	}
	
	constructor()
	{
		super();

		this.behaviors.Physics.density = 0.1;
		this.behaviors.Physics.friction = 0;
		this.behaviors.Physics.elasticity = 0;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
	}
	
	static create(x, y)
	{
		globalThis.runtime.objects.prop_water_steam.createInstance("main", x, y);
	}
}
