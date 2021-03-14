import * as Util from "./utils.js";
import Prop from "./Prop.js";

export default class PropFire extends Prop
{
	get traits()
	{
		return [super.TRAIT_LIMITED_LIFESPAN];
	}
	
	constructor()
	{
		super();

		this.behaviors.Physics.density = 1;
		this.behaviors.Physics.friction = 1;
		this.behaviors.Physics.elasticity = 0;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = false;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
		
		this.isVisible = false;
		this.instVars.lifespan = 7;
	}
	
	static create(x, y)
	{
		globalThis.runtime.objects.prop_fire.createInstance("main", x, y);
	}
}
