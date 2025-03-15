import * as Util from "/utils.js";
import Prop from "/Props/Prop.js";


export default class PropBlackHole extends Prop
{
	get PULL_RADIUS() { return 500; }
	get PULL_FORCE() { return 4; }
	
	get traits()
	{
		return [super.TRAIT_DRAGABLE];
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
		globalThis.runtime.objects.prop_blackhole.createInstance("main", x, y);
	}
	
	tick()
	{
		this.pull();
		
		if (Util.tickCount() % 10 === 0)
		{
			this.absorb();
		}
	}
	
	pull()
	{
		const runtime = globalThis.runtime;
		
		if (true === Util.isOutsideLayout(this)) {
			return;
		}
		
		for (const prop of runtime.objects.props.instances())
		{
			if (prop instanceof PropBlackHole || true === prop.behaviors.Physics.isImmovable)
			{
				continue;
			}
		
			if (Util.distanceTo(this.x, this.y, prop.x, prop.y) < this.PULL_RADIUS)
			{
				const force = prop.behaviors.Physics.mass * this.PULL_FORCE;
	
				prop.behaviors.Physics.applyForceTowardPosition(force, this.x, this.y, 0);
			}
		}
	}
	
	absorb()
	{
		for (const prop of globalThis.runtime.objects.props.instances())
		{	
			if (prop instanceof PropBlackHole) {
				continue;
			}
			
			if (this.testOverlap(prop))
			{
				prop.destroy();
			}
		}
	}
}
