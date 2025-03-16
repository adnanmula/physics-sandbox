import * as Util from "/utils.js";
import PropBall from "/PropBall.js";
import PropBlackHole from "/PropBlackHole.js";
import PropCrate from "/PropCrate.js";
import PropFire from "/PropFire.js";
import PropHeavyCrate from "/PropHeavyCrate.js";
import PropLava from "/PropLava.js";
import PropOil from "/PropOil.js";
import PropTnt from "/PropTnt.js";
import PropWall from "/PropWall.js";
import PropWater from "/PropWater.js";
import PropWaterSteam from "/PropWaterSteam.js";

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
