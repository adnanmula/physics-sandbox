export function distanceTo(x1, y1, x2, y2)
{
	return Math.hypot(x2 - x1, y2 - y1);
}

export function isOutsideLayout(instance)
{
	const layout = instance.layout;
	
	return instance.x < 0 || instance.y < 0 || instance.x > layout.width || instance.y > layout.height;
}

export function toRadians(x)
{
	return x * (Math.PI / 180);
}

export function toDegrees(x)
{
	return x * (180 / Math.PI);
}

export function tickCount()
{
	return globalThis.runtime.callFunction('tickCount');
}

export function pinParticles(particlesUid, propUid)
{
	return globalThis.runtime.callFunction('pinParticles', particlesUid, propUid);
}
