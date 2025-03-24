import * as Util from "../../utils.js";

export default class GravityTrait
{
	constructor(entity, config)
	{
		this.entity = entity;
		
		this.force = config.force;
		this.angle = config.angle;
	}

	tick()
	{
		this.entity.behaviors.Physics.applyForceAtAngle(this.force, Util.toRadians(this.angle))
	}
}
