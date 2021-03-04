import PropCrate from "./PropCrate.js";
import PropHeavyCrate from "./PropHeavyCrate.js";
import PropBall from "./PropBall.js";
import PropWall from "./PropWall.js";
import PropWater from "./PropWater.js";
import PropWaterSteam from "./PropWaterSteam.js";
import PropFire from "./PropFire.js";
import PropBlackHole from "./PropBlackHole.js";

runOnStartup(async runtime =>
{
	globalThis.runtime = runtime;

	runtime.objects.prop_crate.setInstanceClass(PropCrate);
	runtime.objects.prop_heavycrate.setInstanceClass(PropHeavyCrate);
	runtime.objects.prop_ball.setInstanceClass(PropBall);
	runtime.objects.prop_wall.setInstanceClass(PropWall);
	runtime.objects.prop_water.setInstanceClass(PropWater);
	runtime.objects.prop_water_steam.setInstanceClass(PropWaterSteam);
	runtime.objects.prop_blackhole.setInstanceClass(PropBlackHole);
	runtime.objects.prop_fire.setInstanceClass(PropFire);
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart());
});

function OnBeforeProjectStart()
{
	const runtime = globalThis.runtime;

	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick()
{
	if (runtime.dt == 0)
	{
		return;
	}
	
	for (const instance of globalThis.runtime.objects.props.instances())
	{
		instance.tick();
	}
}
