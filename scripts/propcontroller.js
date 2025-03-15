import PropCrate from "/Props/PropCrate.js";
import PropHeavyCrate from "/Props/PropHeavyCrate.js";
import PropBall from "/Props/PropBall.js";
import PropWall from "/Props/PropWall.js";
import PropWater from "/Props/PropWater.js";
import PropWaterSteam from "/Props/PropWaterSteam.js";
import PropFire from "/Props/PropFire.js";
import PropBlackHole from "/Props/PropBlackHole.js";
import PropTnt from "/Props/PropTnt.js";
import PropOil from "/Props/PropOil.js";

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
