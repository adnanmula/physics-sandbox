import PropCrateInstance from "./PropCrate.js";
import PropHeavyCrateInstance from "./PropHeavyCrate.js";
import PropBallInstance from "./PropBall.js";
import PropWallInstance from "./PropWall.js";
import PropWaterInstance from "./PropWater.js";
import PropWaterSteamInstance from "./PropWaterSteam.js";
import PropBlackHoleInstance from "./PropBlackHole.js";

export default class PropController
{
	static create(propId, x, y)
	{
		let props = [
			PropCrateInstance,
			PropHeavyCrateInstance,
			PropBallInstance,
			PropWallInstance,
			PropWaterInstance,
			PropBlackHoleInstance,
			PropWaterSteamInstance
		];
	
		props[propId].create(x, y)
	}
}
