export default class Timer
{
	constructor(entity, func, params, milliseconds, repeat)
	{
		this.entity = entity;
		this.func = func;
		this.params = params;
		this.duration = milliseconds;
		this.isRepeat = repeat;

		this.current = 0;
		this.paused = false;
	}

	execute()
	{
		this.entity[this.func](...this.params);			
		this.current = 0;
	}
	
	isRepeat()
	{
		return this.isRepeat;
	}
}
