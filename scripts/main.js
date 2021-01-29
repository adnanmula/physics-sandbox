import PropCrateInstance from "./PropCrate.js";
import PropHeavyCrateInstance from "./PropHeavyCrate.js";
import PropBallInstance from "./PropBall.js";
import PropSolidInstance from "./PropSolid.js";
import PropWaterInstance from "./PropWater.js";

runOnStartup(async runtime =>
{
	runtime.objects.prop_crate.setInstanceClass(PropCrateInstance);
	runtime.objects.prop_heavycrate.setInstanceClass(PropHeavyCrateInstance);
	runtime.objects.prop_ball.setInstanceClass(PropBallInstance);
	runtime.objects.prop_solid.setInstanceClass(PropSolidInstance);
	runtime.objects.prop_water.setInstanceClass(PropWaterInstance);

	//runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
}
