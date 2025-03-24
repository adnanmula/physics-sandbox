import * as Util from "/utils.js";
import TimerManager from "/Timer/TimerManager.js";

export default class FlammableTrait
{
	constructor(entity, config)
	{
		this.entity = entity;
		this.timerManager = new TimerManager(this);
		
		this.general_radius = config.general_radius;
		this.burn_radius = config.burn_radius;
		this.explosion_force = config.explosion_force;
	}
	
	tick()
	{
		this.timerManager.tick();
	}

	isLitFuse()
	{
		return this.entity.animationName === 'detonating';
	}
	
	lightFuse()
	{
		if (true === this.isLitFuse())
		{
			return;
		}

		this.entity.setAnimation('detonating', 'beginning');
		
		this.timerManager.add('detonate', 'detonate', [], this.entity.instVars.detonation_time * 1000, false);	
	}
	
	detonate()
	{
		const runtime = globalThis.runtime;
		
		for (const prop of runtime.objects.props.instances())
		{
			if (true === prop.behaviors.Physics.isImmovable) {
				continue;
			}
		
			const distance = Util.distanceTo(this.entity.x, this.entity.y, prop.x, prop.y);
		
			if (distance < this.general_radius)
			{
				if (prop.traits.includes(this.entity.TRAIT_FLAMMABLE_SOLID) && distance < this.burn_radius)
				{
					prop.flammable.setOnFire();
				}
			
				const force = prop.behaviors.Physics.mass * this.explosion_force;
				const angle =  Math.atan2(prop.y - this.entity.y, prop.x - this.entity.x);
	
				prop.behaviors.Physics.applyForceAtAngle(force, angle, 0);
			}
		}
		
		this.entity.destroy();
	}
}
