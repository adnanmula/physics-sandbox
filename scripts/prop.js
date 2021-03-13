import * as Util from "./utils.js";

export default class Prop extends ISpriteInstance
{
	get TRAIT_DRAGGABLE() { return 'draggable'; }
	get TRAIT_LIQUID() { return 'liquid'; }
	get TRAIT_GAS() { return 'gas'; }
	get TRAIT_FLAMABLE_SOLID() { return 'flamable-solid'; }
	get TRAIT_LIMITED_LIFESPAN() { return 'limited-lifespan'; }
	get TRAIT_EXPLOSIVE() { return 'explosive'; }

	tick()
	{
		let force = this.behaviors.Physics.mass;
		let angle = 90;
		
		if (this.traits.includes(this.TRAIT_GAS))
		{
			force /= 4;
			angle = 270;
		}
	
		this.applyGravity(force, Util.toRadians(angle));
	}

	applyGravity(force, angle)
	{
		this.behaviors.Physics.applyForceAtAngle(force, angle);
	}
}
