import PropCrateInstance from "./PropCrate.js";
import PropHeavyCrateInstance from "./PropHeavyCrate.js";
import PropBallInstance from "./PropBall.js";
import PropWallInstance from "./PropWall.js";
import PropWaterInstance from "./PropWater.js";
import PropWaterSteamInstance from "./PropWaterSteam.js";
import PropBlackHoleInstance from "./PropBlackHole.js";

runOnStartup(async runtime =>
{
	runtime.objects.prop_crate.setInstanceClass(PropCrateInstance);
	runtime.objects.prop_heavycrate.setInstanceClass(PropHeavyCrateInstance);
	runtime.objects.prop_ball.setInstanceClass(PropBallInstance);
	runtime.objects.prop_wall.setInstanceClass(PropWallInstance);
	runtime.objects.prop_water.setInstanceClass(PropWaterInstance);
	runtime.objects.prop_water_steam.setInstanceClass(PropWaterSteamInstance);
	runtime.objects.prop_blackhole.setInstanceClass(PropBlackHoleInstance);

	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	setInterval(() => ProcessBlackHoles(runtime), 100);

	//runtime.addEventListener("tick", () => Tick(runtime));
}

// function Tick(runtime)
// {
// 	for (const blackHole of runtime.objects.prop_blackhole.instances())
// 	{
// 		blackHole.absorb(runtime);
// 	}
// }

function ProcessBlackHoles(runtime)
{
	if (runtime.dt == 0)
	{
		return;
	}
	
	for (const blackHole of runtime.objects.prop_blackhole.instances())
	{
		blackHole.pull(runtime);
	}
}
