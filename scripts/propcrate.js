export default class PropCrateInstance extends ISpriteInstance
{
	static create(runtime, x, y)
	{
		const instance = runtime.objects.prop_crate.createInstance("Main", x, y);
	}
}
