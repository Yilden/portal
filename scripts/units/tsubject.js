const key = Packages.arc.input.KeyCode;
const col = require("clib");

const paintTrail = newEffect(10, e => {
  Draw.color(col.darkBlue, col.lightBlue, e.fin());
  const tcir = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 3);
  }})
  Angles.randLenVectors(e.id, 3, e.fin() * 5, e.rotation, 5, tcir)
});

const paintShoot = newEffect(24, e => {
  Draw.color(col.darkBlue, col.lightBlue, e.fin());
  const cir = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 3);
    Fill.circle(e.x + x, e.y + y, e.fout() * 4);
    }});
  Angles.randLenVectors(e.id, 10, e.finpow() * 50 , e.rotation, 10, cir);
});

const paintHit = newEffect(14, e => {
  Draw.color(col.darkBlue, col.lightBlue, e.fin());

  Lines.stroke(0.5 + e.fout());
  Lines.circle(e.x, e.y, e.fin() * 5);

  Lines.stroke(0.5 + e.fout())
  const hcir = new Floatc2({get(x, y){
    ang = Mathf.angle(x, y)
    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 6 + 3)
    Fill.circle(e.x + x, e.y + y, e.fout() * 5)
  }});
  Angles.randLenVectors(e.id, 6, e.fin() * 15, e.rotation, 7, hcir)
});

const paint = extend(BasicBulletType, {
  draw(b){
    Draw.color(col.darkBlue, col.lightBlue, b.fin())
    for(i = 0; i < 3; i++) Fill.circle(b.x, b.y, 1 + i)
  },

  update(b){
    if(b.timer.get(1, 4)){
      Effects.effect(paintTrail, b.x, b.y, b.rot());
    }
  }
});

paint.lifetime = Number.MAX_VALUE;
paint.damage = 0;
paint.speed = 5;
paint.shootEffect = paintShoot;
paint.smokeEffect = Fx.none;
paint.hitEffect = paintHit;
paint.despawnEffect = Fx.none;

const portalGun = extendContent(Weapon, "portal-gun", {
  load(){
    this.region = Core.atlas.find(this.name)
  }
});

portalGun.alternate = true;
portalGun.bullet = paint;
portalGun.reload = 60;
portalGun.shootEffect = Fx.none;

const testSubject = extendContent(Mech, "test-subject", {
  updateAlt(player){
    if(Core.input.keyTap(key["I"])){
      print("blue portal")
    }

    else if(Core.input.keyTap(key["O"])){
      print("orange portal")
    }
  }
});

testSubject.drillPower = 0;
testSubject.mineSpeed = 0;
testSubject.mass = 3.5;
testSubject.speed = 0.5;
testSubject.itemCapacity = 0;
testSubject.hbuildPower = 0.5;
testSubject.flying = false;
testSubject.health = 400;
testSubject.drawCell = false;
testSubject.weapon = portalGun;

const subjectPad = extendContent(MechPad, "test-subject-pad", {});

subjectPad.mech = testSubject;
subjectPad.buildVisibility = BuildVisibility.sandboxOnly;
