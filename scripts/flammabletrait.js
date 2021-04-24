import TimerManager from "./TimerManager.js";

export default class FlammableTrait
{
	constructor(entity)
	{
		this.entity = entity;
		this.timerManager = new TimerManager(this);
	}

	tick()
	{
		this.timerManager.tick();
	}

	isBurning()
	{
		return ['burning', 'burned', 'consuming'].includes(this.entity.animationName);
	}
	
	setOnFire()
	{
		if (true === this.isBurning())
		{
			return;
		}
	
 		this.entity.setAnimation('burning', 'beginning');
		
		this.timerManager.add('burn', 'burn', [], this.entity.instVars.burning_time * 1000, false);
	}
	
	putOutFire()
	{
		if (false === this.isBurning())
		{
			return;
		}
		
		this.removeFireParticles();
		
		this.timerManager.remove('burn');
 		this.entity.setAnimation('default', 'beginning');
	}
	
	burn()
	{
		this.removeFireParticles();
	
		this.entity.setAnimation('burned', 'beginning');
		this.entity.animationFrame = Math.floor(Math.random() * 3);
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
