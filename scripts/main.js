import * as Util from "./utils.js";
import PropBall from "./Props/PropBall.js";
import PropBlackHole from "./Props/PropBlackHole.js";
import PropCrate from "./Props/PropCrate.js";
import PropFire from "./Props/PropFire.js";
import PropHeavyCrate from "./Props/PropHeavyCrate.js";
import PropLava from "./Props/PropLava.js";
import PropOil from "./Props/PropOil.js";
import PropTnt from "./Props/PropTnt.js";
import PropWall from "./Props/PropWall.js";
import PropWater from "./Props/PropWater.js";
import PropWaterSteam from "./Props/PropWaterSteam.js";

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
	runtime.objects.prop_tnt.setInstanceClass(PropTnt);
	runtime.objects.prop_oil.setInstanceClass(PropOil);
	runtime.objects.prop_lava.setInstanceClass(PropLava);
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart());
});

function OnBeforeProjectStart()
{
	runtime.addEventListener("tick", () => Tick());
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

	if (Util.tickCount() % 120 === 0)
	{
		removeOrphanParticles();
	}
}

function removeOrphanParticles() {
    const particles = globalThis.runtime.objects.particles_burning.instances();
    const propsUids = [...globalThis.runtime.objects.props.instances()].map(prop => prop.uid);

    for (const particle of particles) {
        const parentId = particle.instVars.entity;

        if (parentId !== 0 && false === propsUids.includes(parentId)) {
            particle.destroy();
        }
    }
}
