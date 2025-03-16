import TimerManager from "/TimerManager.js";

export default class FlammableTrait
{
	constructor(entity, config)
	{
		this.entity = entity;
		this.timerManager = new TimerManager(this);
		
		this.timerManager.add('lifespan', 'destroy', [], config.lifespan, false);
	}

	tick()
	{
		this.timerManager.tick();
	}
	
	destroy()
	{
		this.entity.destroy();
	}
}
