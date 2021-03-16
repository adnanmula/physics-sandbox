import TimerManager from "./TimerManager.js";

export default class FlammableTrait
{
	constructor(entity)
	{
		this.entity = entity;
		this.timerManager = new TimerManager(this);
	}

	tick() {}

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
	
	burn()
	{
		this.entity.setAnimation('burned', 'beginning');
		this.entity.animationFrame = Math.floor(Math.random() * 3);
	}
}
