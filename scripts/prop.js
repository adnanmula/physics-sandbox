export default class Prop extends ISpriteInstance
{
	get TRAIT_DRAGABLE() { return 'dragable'; }
	get TRAIT_LIQUID() { return 'liquid'; }
	get TRAIT_GAS() { return 'gas'; }
	get TRAIT_FLAMABLE() { return 'flamable'; }
	
	applyGravity(force, angle)
	{
		this.behaviors.Physics.applyForceAtAngle(force, angle);
	}
}
