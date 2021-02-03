import * as Util from "./utils.js";

export default class PropBlackHoleInstance extends ISpriteInstance
{
	get PULL_RADIUS() { return 500; }
	get PULL_FORCE() { return 500; }
	get PULL_FORCE_LIQUID() { return 50; }
	get type() { return 'dragable'; }

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

	static create(runtime, x, y)
	{
		runtime.objects.prop_blackhole.createInstance("main", x, y);
	}
	
	pull(runtime)
	{
		if (true == Util.isOutsideLayout(this)) {
			return;
		}
		
		for (const prop of runtime.objects.props.instances())
		{
			if (true == prop.behaviors.Physics.isImmovable) {
				continue;
			}
		
			if (Util.distanceTo(this.x, this.y, prop.x, prop.y) < this.PULL_RADIUS)
			{
				let force = prop.behaviors.Physics.density * this.PULL_FORCE;
				
				if (prop.type == "liquid") {
					force = prop.behaviors.Physics.density * this.PULL_FORCE_LIQUID;
				}
			
				prop.behaviors.Physics.applyForceTowardPosition(force, this.x, this.y, 0);
			}
		}
	}
	
// 	absorb(runtime)
// 	{
// 		for (const prop of runtime.objects.props.instances())
// 		{	
// 			if (prop.uid == this.uid) {
// 				continue;
// 			}
			
// 			if (Util.distanceTo(this.x, this.y, prop.x, prop.y) < this.width * 0.7)
// 			{
// 				prop.destroy();
// 			}
// 		}
// 	}
}
