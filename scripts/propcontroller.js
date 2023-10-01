import PropCrate from "./PropCrate.js";
import PropHeavyCrate from "./PropHeavyCrate.js";
import PropBall from "./PropBall.js";
import PropWall from "./PropWall.js";
import PropWater from "./PropWater.js";
import PropWaterSteam from "./PropWaterSteam.js";
import PropFire from "./PropFire.js";
import PropBlackHole from "./PropBlackHole.js";
import PropTnt from "./PropTnt.js";
import PropOil from "./PropOil.js";

export default class PropController
{
	static create(propId, x, y)
	{
		let props = [
			PropCrate,
			PropHeavyCrate,
			PropBall,
			PropWall,
			PropWater,
			PropBlackHole,
			PropWaterSteam,
			PropFire,
			PropTnt,
			PropOil,
			PropCrate,
		];
	
		props[propId].create(x, y)
	}
	
	static find(uid)
	{
		return globalThis.runtime.getInstanceByUid(uid);
	}
}
