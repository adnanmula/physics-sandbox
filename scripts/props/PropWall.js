import Prop from "/Props/Prop.js";

export default class PropWall extends Prop
{
	get traits()
	{
		return [super.TRAIT_DRAGGABLE];
	}
	
	constructor()
	{
		super();

		const physics = this.behaviors.Physics.behavior;

		physics.density = 10;
		physics.friction = 1;
		physics.elasticity = 0;
		physics.linearDamping = 0;
		physics.angularDamping = 0.01;
		physics.isImmovable = true;
		physics.isBullet = false;
		physics.isPreventRotation = false;
		physics.isEnabled = true;
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_wall.createInstance("main", x, y);
	}
}
