import PropBall from "/PropBall.js";
import PropBlackHole from "/PropBlackHole.js";
import PropCrate from "/PropCrate.js";
import PropFire from "/PropFire.js";
import PropHeavyCrate from "/PropHeavyCrate.js";
import PropLava from "/PropLava.js";
import PropOil from "/PropOil.js";
import PropTnt from "/PropTnt.js";
import PropWall from "/PropWall.js";
import PropWater from "/PropWater.js";
import PropWaterSteam from "/PropWaterSteam.js";

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
			PropLava,
		];
	
		props[propId].create(x, y)
	}
	
	static find(uid)
	{
		return globalThis.runtime.getInstanceByUid(uid);
	}
}
