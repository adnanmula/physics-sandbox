import * as Util from "./utils.js";
import Prop from "./Prop.js";
import TimerManager from "./TimerManager.js";

export default class PropTnt extends Prop
{
	get EXPLOSION_GENERAL_RADIUS() { return 500 };
	get EXPLOSION_BURN_RADIUS() { return 400 };
	get EXPLOSION_FORCE() { return 250 };

	get traits()
	{
		return [
			super.TRAIT_DRAGGABLE,
			super.TRAIT_EXPLOSIVE
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
		
		this.instVars.detonation_time = 3;
		
		this.timerManager = new TimerManager();
	}

	static create(x, y)
	{
		globalThis.runtime.objects.prop_tnt.createInstance("main", x, y);
	}
	
	isLitFuse()
	{
		return this.animationName === 'detonating';
	}
	
	lightFuse()
	{
		if (true === this.isLitFuse())
		{
			return;
		}

		this.setAnimation('detonating', 'beginning');
		
		this.timerManager.add('detonate', this, 'detonate', [], this.instVars.detonation_time * 1000, false);	
	}
	
	detonate()
	{
		const runtime = globalThis.runtime;
		
		for (const prop of runtime.objects.props.instances())
		{
			if (true === prop.behaviors.Physics.isImmovable) {
				continue;
			}
		
			const distance = Util.distanceTo(this.x, this.y, prop.x, prop.y);
		
			if (distance < this.EXPLOSION_GENERAL_RADIUS)
			{
				if (prop.traits.includes(super.TRAIT_FLAMMABLE_SOLID) && distance < this.EXPLOSION_BURN_RADIUS)
				{
					prop.setOnFire();
				}
			
				let force = prop.behaviors.Physics.mass * this.EXPLOSION_FORCE;
				let angle =  Math.atan2(prop.y - this.y, prop.x - this.x);
	
				prop.behaviors.Physics.applyForceAtAngle(force, angle, 0);
			}
		}
		
		this.destroy();
	}
}
