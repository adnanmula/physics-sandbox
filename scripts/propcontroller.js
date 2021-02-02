import PropCrateInstance from "./PropCrate.js";
import PropHeavyCrateInstance from "./PropHeavyCrate.js";
import PropBallInstance from "./PropBall.js";
import PropSolidInstance from "./PropSolid.js";
import PropWaterInstance from "./PropWater.js";
import PropBlackHoleInstance from "./PropBlackHole.js";

export default class PropController
{
	static create(runtime, propId, x, y)
	{
		let props = [
			PropCrateInstance,
			PropHeavyCrateInstance,
			PropBallInstance,
			PropSolidInstance,
			PropWaterInstance,
			PropBlackHoleInstance
		];
	
		props[propId].create(runtime, x, y)
	}
}
