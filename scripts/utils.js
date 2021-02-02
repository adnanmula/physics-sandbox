export function distanceTo(x1, y1, x2, y2)
{
	return Math.hypot(x2 - x1, y2 - y1);
}

export function isOutsideLayout(instance)
{
	const layout = instance.layout;
	
	return instance.x < 0 || instance.y < 0 || instance.x > layout.width || instance.y > layout.height;
}
