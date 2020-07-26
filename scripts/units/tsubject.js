const key = Packages.arc.input.KeyCode;
const col = require("clib");

const bluePortalTrail = newEffect(10, e => {
  Draw.color(col.darkBlue, col.lightBlue, e.fin());
  const tcir = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 3);
  }})
  Angles.randLenVectors(e.id, 3, e.fin() * 5, e.rotation, 5, tcir)
});

const bluePortalShoot = newEffect(24, e => {
  Draw.color(col.darkBlue, col.lightBlue, e.fin());
  const cir = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 3);
    Fill.circle(e.x + x, e.y + y, e.fout() * 4);
    }});
  Angles.randLenVectors(e.id, 10, e.finpow() * 50 , e.rotation, 10, cir);
});

const bluePortalHit = newEffect(14, e => {
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

const bluePortal = extend(BasicBulletType, {
  draw(b){
    Draw.color(col.darkBlue, col.lightBlue, b.fin())
    for(i = 0; i < 3; i++) Fill.circle(b.x, b.y, 1 + i)
  },

  update(b){
    if(b.timer.get(1, 4)){
      Effects.effect(bluePortalTrail, b.x, b.y, b.rot());
    }
  }
});

bluePortal.lifetime = Number.MAX_VALUE;
bluePortal.damage = 0;
bluePortal.speed = 5;
bluePortal.shootEffect = bluePortalShoot;
bluePortal.smokeEffect = Fx.none;
bluePortal.hitEffect = bluePortalHit;
bluePortal.despawnEffect = Fx.none;

const bluePortalGun = extendContent(Weapon, "blue-portal", {});

bluePortalGun.alternate = true;
bluePortalGun.bullet = bluePortal;
bluePortalGun.reload = 60;
bluePortalGun.shootEffect = Fx.none;

const orangePortalTrail = newEffect(10, e => {
  Draw.color(col.darkOrange, col.lightOrange, e.fin());
  const tcir = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 3);
  }})
  Angles.randLenVectors(e.id, 3, e.fin() * 5, e.rotation, 5, tcir)
});

const orangePortalShoot = newEffect(24, e => {
  Draw.color(col.darkOrange, col.lightOrange, e.fin());
  const cir = new Floatc2({get(x, y){
    Fill.circle(e.x + x, e.y + y, e.fout() * 3);
    Fill.circle(e.x + x, e.y + y, e.fout() * 4);
    }});
  Angles.randLenVectors(e.id, 10, e.finpow() * 50 , e.rotation, 10, cir);
});

const orangePortalHit = newEffect(14, e => {
  Draw.color(col.darkOrange, col.lightOrange, e.fin());

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

const orangePortal = extend(BasicBulletType, {
  draw(b){
    Draw.color(col.darkOrange, col.lightOrange, b.fin())
    for(i = 0; i < 3; i++) Fill.circle(b.x, b.y, 1 + i)
  },

  update(b){
    if(b.timer.get(1, 4)){
      Effects.effect(orangePortalTrail, b.x, b.y, b.rot());
    }
  }
});

orangePortal.lifetime = Number.MAX_VALUE;
orangePortal.damage = 0;
orangePortal.speed = 5;
orangePortal.shootEffect = orangePortalShoot;
orangePortal.smokeEffect = Fx.none;
orangePortal.hitEffect = orangePortalHit;
orangePortal.despawnEffect = Fx.none;

const orangePortalGun = extendContent(Weapon, "orange-portal", {});

orangePortalGun.alternate = true;
orangePortalGun.bullet = orangePortal;
orangePortalGun.reload = 60;
orangePortalGun.shootEffect = Fx.none;

const testSubject = extendContent(Mech, "test-subject", {
  updateAlt(player){
    if(Core.input.keyTap(key["I"])){
      print("Switched to blue portal")
      Vars.content.getByName(ContentType.mech, "portal-test-subject").weapon = bluePortalGun;
    }

    else if(Core.input.keyTap(key["O"])){
      print("Switched to orange portal")
      Vars.content.getByName(ContentType.mech, "portal-test-subject").weapon = orangePortalGun;
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
testSubject.weapon = bluePortalGun;

const subjectPad = extendContent(MechPad, "test-subject-pad", {});

subjectPad.mech = testSubject;
subjectPad.buildVisibility = BuildVisibility.sandboxOnly;