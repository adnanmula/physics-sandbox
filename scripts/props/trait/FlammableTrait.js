import TimerManager from "./TimerManager.js";
import * as Util from "./utils.js";
import PropOil from "./PropOil.js";

export default class FlammableTrait
{
	constructor(entity, config)
	{
		this.entity = entity;
		this.burningTime = config.burning_time * 1000;
		this.consumingTime = config.consuming_time * 1000;
		this.propagationTime = config.propagation_time * 1000;
		this.isLiquid = config.is_liquid;
		this.isBurning = config.is_burning;
		
		this.timerManager = new TimerManager(this);
	}

	tick()
	{
		this.timerManager.tick();
	}

	setOnFire()
	{
		if (true === ['burning', 'burned', 'consuming'].includes(this.entity.animationName))
		{
			return;
		}
		
		this.addFireParticles();
		
		this.isBurning = true;	
 		this.entity.setAnimation('burning', 'beginning');
		this.timerManager.add('burn', 'burn', [], this.burningTime, false);
		
		if (this.isLiquid) {
			for (const propToTest of runtime.objects.props.instances())
			{
				if (propToTest instanceof PropOil && Util.distanceTo(propToTest.x, propToTest.y, this.entity.x, this.entity.y) < 10)
				{
					propToTest.flammable.setOnFire();
				}
			}
		}
	}
	
	putOutFire()
	{
		if (false === ['burning', 'consuming'].includes(this.entity.animationName))
		{
			return;
		}
		
		this.removeFireParticles();
		this.timerManager.remove('burn');
 		this.entity.setAnimation('default', 'beginning');
		this.isBurning = false;
	}
	
	burn()
	{
		this.removeFireParticles();
		
		if (this.isLiquid) {
			this.destroy;
		} else {
			this.entity.setAnimation('burned', 'beginning');
			this.entity.animationFrame = Math.floor(Math.random() * 3);
			this.isBurning = false;
		}
	}
	
	startPropagation()
	{
		this.timerManager.add('setOnFire', 'setOnFire', [], this.propagationTime, false);
	}
	
	hasFireParticles()
	{
		for (const particle of globalThis.runtime.objects.particles_burning.instances())
		{	
			if (particle.instVars.entity === this.entity.uid) {
				return true;
			}
		}
		
		return false;
	}
	
	addFireParticles()
	{
		if (true === this.hasFireParticles())
		{
			return;
		}
		
		const particles = globalThis.runtime.objects.particles_burning.createInstance("main", this.entity.x, this.entity.y);
		particles.instVars.entity = this.entity.uid;
		
		Util.pinParticles(particles.uid, this.entity.uid);
	}
	
	removeFireParticles()
	{
		for (const particle of globalThis.runtime.objects.particles_burning.instances())
		{	
			if (particle.instVars.entity !== this.entity.uid) {
				continue;
			}

			particle.destroy();
		}
	}
}
