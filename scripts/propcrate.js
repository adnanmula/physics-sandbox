import Prop from "./Prop.js";

export default class PropCrate extends Prop
{
	get traits()
	{
		return [
			super.TRAIT_DRAGGABLE,
			super.TRAIT_FLAMMABLE_SOLID
		];
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
		
		this.instVars.burning_time = 3;
		this.instVars.consuming_time = 1;
		this.instVars.propagation_time = 0.2;
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_crate.createInstance("main", x, y);
	}
	
	isBurning()
	{
		return ['burning', 'burned', 'consuming'].includes(this.animationName);
	}
	
	setOnFire()
	{
		if (true === this.isBurning())
		{
			return;
		}
	
 		this.setAnimation('burning', 'beginning');
		
		setTimeout(function(self) { self.burn(); }, this.instVars.burning_time * 1000, this);
	}
	
	burn()
	{
		this.setAnimation('burned', 'beginning');
		this.animationFrame = Math.floor(Math.random() * 3);
	}
}
