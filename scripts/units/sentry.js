/**
const slowed = new StatusEffect("slowed");
  slowed.speedMultiplier = 0.4;
const bulletSmoke = newEffect(5, e => {
  Draw.color(Color.valueOf("#F7F7F7"), Color.valueOf("#FFFFFF"), e.fin());
  Fill.circle(e.x, e.y, e.fout() * 2);
});

const sentryBullet = extend(BasicBulletType, {});

//Bullet attributes
sentryBullet.lifetime = 40;
sentryBullet.speed = 10;
sentryBullet.damage = 11;
sentryBullet.inaccuracy = 8;
sentryBullet.collidesTeam = true;
sentryBullet.hitSize = 1;
sentryBullet.keepVelocity = true;
//Bullet things
sentryBullet.bulletWidth = 0.2;
sentryBullet.bulletHeight = 0.2;
sentryBullet.frontColor = Color.valueOf("#F2F2F2");
sentryBullet.backColor = Color.valueOf("#DEDEDD");
sentryBullet.bulletShrink = -0.5;
//Bullet effects
sentryBullet.smokeEffect = bulletSmoke;
sentryBullet.hitEffect = Fx.none;
sentryBullet.shootEffect = Fx.none;
sentryBullet.status = slowed;
*/
/**
const sentryWeapon = extendContent(Weapon, "sentry-equip", {
  load: function(){
    this.region = Core.atlas.find(modName + "-sentry-equip");
  }
});

sentryWeapon.bullet = sentryBullet;
sentryWeapon.reload = 1;
sentryWeapon.shots = 12;
sentryWeapon.spacing = 5;
sentryWeapon.inaccuracy = 2;
sentryWeapon.shake = 0.4;
sentryWeapon.recoil = 0.4;
sentryWeapon.length = 3;
sentryWeapon.width = 2;
sentryWeapon.lengthRand = 3;
sentryWeapon.shootSound = "sentry-shoot";
*/
/**
const sentryG = prov(() => new JavaAdapter(GroundUnit, {
  draw(){
    
    Draw.rect(this.baseRegion, tile.drawx(), tile.drawy());
    Draw.rect(this.region, tile.drawx(), tile .drawy())
    
  }
}))
*/
/**
const sentry = extendContent(UnitType, "sentry", {
  load(){
    this.baseRegion = Core.atlas.find(this.name + "-base");
    this.region = Core.atlas.find(this.name);
    this.weaponRegion = Core.atlas.find(this.name + "-equip");
  }
});
*/
/**
sentry.type = "GroundUnit";
sentry.localizedName = "Aperture Science Sentry Turret";
sentry.description = "Targets test subjects, highly dangerous."
sentry.health	=	20;
sentry.hitsize	=	7;
sentry.hitsizeTile	=	4;
sentry.speed	=	0;
sentry.range	=	0;
sentry.attackLength	=	150;
sentry.rotatespeed	=	0;
sentry.baseRotateSpeed	=	0;
sentry.shootCone	=	6;
sentry.mass	=	1;
sentry.flying	=	 false;
sentry.targetAir	=	true;
sentry.drag	=	0.1;
sentry.maxVelocity	=	3;
sentry.retreatPercent	=	0;
sentry.itemCapacity	=	0;
sentry.buildPower	=	0;
sentry.minePower	=	0;
sentry.weapon = sentryWeapon;
*/
/**
sentry.create(sentryG)
const sentryD = extendContent(UnitFactory, "sentry-factory", {});

sentryD.unitType = sentry;
*/


