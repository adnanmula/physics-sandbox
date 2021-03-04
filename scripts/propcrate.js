import Prop from "./Prop.js";

export default class PropCrate extends Prop
{
	get traits()
	{
		return [super.TRAIT_DRAGGABLE];
	}
	
	constructor()
	{
		super();

		this.behaviors.Physics.density = 1;
 		this.behaviors.Physics.friction = 0.5;
 		this.behaviors.Physics.elasticity = 0.2;
 		this.behaviors.Physics.linearDamping = 0;
 		this.behaviors.Physics.angularDamping = 0.01;
 		this.behaviors.Physics.isImmovable = false;
 		this.behaviors.Physics.isBullet = false;
 		this.behaviors.Physics.isPreventRotation = false;
 		this.behaviors.Physics.isEnabled = true;
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_crate.createInstance("main", x, y);
	}
}
