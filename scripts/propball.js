export default class PropBallInstance extends ISpriteInstance
{
	static create(runtime, x, y)
	{
		const instance = runtime.objects.prop_ball.createInstance("Main", x, y);

		//instance.behaviors.Physics.density = 0.5;
		//instance.friction = 0.2;
	}
}

