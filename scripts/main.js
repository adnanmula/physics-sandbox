import PropCrateInstance from "./PropCrate.js";
import PropBallInstance from "./PropBall.js";

runOnStartup(async runtime =>
{
	runtime.objects.prop_crate.setInstanceClass(PropCrateInstance);
	runtime.objects.prop_ball.setInstanceClass(PropBallInstance);

	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	PropCrateInstance.create(runtime, 100, 100);
	console.log('test');
}
