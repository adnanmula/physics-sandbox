import * as Util from "./utils.js";

export default class Prop extends ISpriteInstance
{
	get TRAIT_DRAGGABLE() { return 'draggable'; }
	get TRAIT_LIQUID() { return 'liquid'; }
	get TRAIT_GAS() { return 'gas'; }
	get TRAIT_LIMITED_LIFESPAN() { return 'limitedLifespan'; }

	get TRAIT_FLAMMABLE_SOLID() { return 'flammable'; }
	get TRAIT_EXPLOSIVE() { return 'explosive'; }
	get TRAIT_GRAVITY() { return 'gravity'; }

	tick()
	{
	}
}
