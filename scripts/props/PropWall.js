import Prop from "/Prop.js";

export default class PropWall extends Prop
{
	get traits()
	{
		return [super.TRAIT_DRAGGABLE];
	}
	
	constructor()
	{
		super();
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_wall.createInstance("main", x, y);
	}
}
