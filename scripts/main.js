import PropCrateInstance from "./PropCrate.js";
import PropHeavyCrateInstance from "./PropHeavyCrate.js";
import PropBallInstance from "./PropBall.js";
import PropSolidInstance from "./PropSolid.js";
import PropWaterInstance from "./PropWater.js";
import PropBlackHoleInstance from "./PropBlackHole.js";

runOnStartup(async runtime =>
{
	runtime.objects.prop_crate.setInstanceClass(PropCrateInstance);
	runtime.objects.prop_heavycrate.setInstanceClass(PropHeavyCrateInstance);
	runtime.objects.prop_ball.setInstanceClass(PropBallInstance);
	runtime.objects.prop_solid.setInstanceClass(PropSolidInstance);
	runtime.objects.prop_water.setInstanceClass(PropWaterInstance);
	runtime.objects.prop_blackhole.setInstanceClass(PropBlackHoleInstance);

	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	setInterval(() => processBlackHoles(runtime), 100);

	//runtime.addEventListener("tick", () => Tick(runtime));
}

//function Tick(runtime)
//{
//}

function processBlackHoles(runtime)
{
	for (const blackHole of runtime.objects.prop_blackhole.instances())
	{
		blackHole.pull(runtime);
	}
}
