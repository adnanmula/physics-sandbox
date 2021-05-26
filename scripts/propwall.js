import Prop from "./Prop.js";

export default class PropWall extends Prop
{
	get traits()
	{
		return [super.TRAIT_DRAGGABLE];
	}
	
	constructor()
	{
		super();

		this.behaviors.Physics.density = 10;
		this.behaviors.Physics.friction = 1;
		this.behaviors.Physics.elasticity = 0;
		this.behaviors.Physics.linearDamping = 0;
		this.behaviors.Physics.angularDamping = 0.01;
		this.behaviors.Physics.isImmovable = true;
		this.behaviors.Physics.isBullet = false;
		this.behaviors.Physics.isPreventRotation = false;
		this.behaviors.Physics.isEnabled = true;
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_wall.createInstance("main", x, y);
	}
}
