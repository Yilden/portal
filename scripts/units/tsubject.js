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
  Angles.randLenVectors(e.id, 10, e.finpow() * 40 , e.rotation, 6, cir);
});

const bluePortalHit = newEffect(14, e => {
  Draw.color(col.darkBlue, col.lightBlue, e.fin());

  Lines.stroke(0.5 + e.fout());
  Lines.circle(e.x, e.y, e.fin() * 5);

  Lines.stroke(0.5 + e.fout())
  const hcir = new Floatc2({get(x, y){
    ang = Mathf.angle(x, y)
    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8 + 3)
    Fill.circle(e.x + x, e.y + y, e.fout() * 5)
  }});
  Angles.randLenVectors(e.id, 6, e.fin() * 15, e.rotation, 7, hcir)
});

const bluePortal = extend(BasicBulletType, {
  draw(b){
    Draw.color(col.darkBlue, col.lightBlue, b.fin())
    for(i = 0; i < 3; i++) Fill.circle(b.x, b.y, 1 + i)
  },

  collides(b, tile){
    if(tile.block() instanceof Door){
      if(tile.ent().open) return false;
      else {
        return true;
      }
    }

    if(tile.block().solid == false){
      return false;
    } else {
      return true;
    }
  },

  update(b){
    if(b.timer.get(1, 3)){
      Effects.effect(bluePortalTrail, b.x, b.y, b.rot());
    }
  }
});

bluePortal.lifetime = Number.MAX_VALUE;
bluePortal.damage = 0;
bluePortal.speed = 7;
bluePortal.collidesTeam = true;
bluePortal.shootEffect = bluePortalShoot;
bluePortal.smokeEffect = Fx.none;
bluePortal.hitEffect = bluePortalHit;
bluePortal.despawnEffect = Fx.none;

const portalGun = extendContent(Weapon, "portal-equip", {
  load(){
    this.region = Core.atlas.find("portal-portal-equip")
  }
});

portalGun.length = 1.5;
portalGun.alternate = true;
portalGun.bullet = bluePortal;
portalGun.reload = 60;
portalGun.shootEffect = Fx.none;

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
  Angles.randLenVectors(e.id, 10, e.finpow() * 40 , e.rotation, 6, cir);
});

const orangePortalHit = newEffect(14, e => {
  Draw.color(col.darkOrange, col.lightOrange, e.fin());

  Lines.stroke(0.5 + e.fout());
  Lines.circle(e.x, e.y, e.fin() * 5);

  Lines.stroke(0.5 + e.fout())
  const hcir = new Floatc2({get(x, y){
    ang = Mathf.angle(x, y)
    Lines.lineAngle(e.x + x, e.y + y, ang, e.fout() * 8 + 3)
    Fill.circle(e.x + x, e.y + y, e.fout() * 5)
  }});
  Angles.randLenVectors(e.id, 6, e.fin() * 15, e.rotation, 7, hcir)
});

const orangePortal = extend(BasicBulletType, {
  draw(b){
    Draw.color(col.darkOrange, col.lightOrange, b.fin())
    for(i = 0; i < 3; i++) Fill.circle(b.x, b.y, 1 + i)
  },

  collides(b, tile){
    if(tile.block() instanceof Door){
      return (!tile.ent().open)
    }
    if(tile.block().solid == false){
      return false;
    } else {
      return true;
    }
  },

  update(b){
    if(b.timer.get(1, 3)){
      Effects.effect(orangePortalTrail, b.x, b.y, b.rot());
    }
  }
});

orangePortal.lifetime = Number.MAX_VALUE;
orangePortal.damage = 0;
orangePortal.speed = 7;
orangePortal.collidesTeam = true;
orangePortal.shootEffect = orangePortalShoot;
orangePortal.smokeEffect = Fx.none;
orangePortal.hitEffect = orangePortalHit;
orangePortal.despawnEffect = Fx.none;

const testSubject = extendContent(Mech, "test-subject", {
  generateIcons(){
    return [
      Core.atlas.find(this.name + "-base"),
      Core.atlas.find(this.name + "-leg"),
      Core.atlas.find(this.name),
      Core.atlas.find("portal-portal-equip")
    ]
  },

  isFlying(){
    return false;
  },

  drawUnder(){
    //Nothing
  },

  updateAlt(player){
    if(Core.input.keyTap(key["I"])){
      print("Switched to blue portal")
      Vars.content.getByName(ContentType.mech, "portal-test-subject").weapon.bullet = bluePortal;
    }

    else if(Core.input.keyTap(key["O"])){
      print("Switched to orange portal")
      Vars.content.getByName(ContentType.mech, "portal-test-subject").weapon.bullet = orangePortal;
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
subjectPad.buildTime = 1;
