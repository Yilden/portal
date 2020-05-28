const bColor = Color.valueOf("ededed");
const aColor = Color.valueOf("f7f7f7");

const conductor = new StatusEffect("conductor");
  conductor.damageMultiplier = 1;
  conductor.speedMultiplier = 1;
  conductor.armorMultiplier = 1;
  conductor.damage = 0;
  conductor.color = bColor;
  
const conversion = extendContent(Liquid, "conversion-gel", {});
  conversion.viscosity = 1.4;
  conversion.flammability = 0;
  conversion.color = aColor;
  conversion.barColor = bColor;
  conversion.effect = conductor;
