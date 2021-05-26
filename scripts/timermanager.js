import Timer from "./Timer.js";

export default class TimerManager
{
	constructor(entity)
	{
		this.timers = new Map();
		this.entity = entity;
	}

	tick()
	{
		this.timers.forEach((timer, key, map) =>
		{
			if (true === timer.paused)
			{
				return;
			}
		
			timer.current += (globalThis.runtime.dt * 1000);

			if (timer.current >= timer.duration)
			{
				timer.execute();

				if (false === timer.isRepeat)
				{
					map.delete(key);
				}
			}
		});
	}

	add(tag, func, params, duration, repeat)
	{
		if (undefined !== this.timers.get(tag))
		{
			return;
		}

		this.timers.set(tag, new Timer(this.entity, func, params, duration, repeat));
	}

	remove(tag)
	{
		if (this.timers.has(tag))
		{
			this.timers.delete(tag);
		}
	}
	
	pause(tag)
	{
		const item = this.timers.get(tag);

		if (null !== item)
		{
			item.paused = true;
		}
	}
	
	unpause(tag)
	{
		const item = this.timers.get(tag);

		if (null !== item)
		{
			item.paused = false;
		}
	}
}
