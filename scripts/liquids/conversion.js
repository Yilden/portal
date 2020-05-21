const bColor = Color.valueOf("ededed");
const aColor = Color.valueOf("f7f7f7");

const conductor = new StatusEffect("conductor");
  conductor.damageMultiplier = 1;
  conductor.speedMultiplier = 1.3;
  conductor.armorMultiplier = 1;
  conductor.damage = 0;
  conductor.color = bColor;
  
const conversion = extendContent(Liquid, "conversion-gel", {});
  conversion.localizedName = "Conversion Gel";
  conversion.description = 'Liquidífied moon rocks, this liquid is excellent for being a "portal conductor", converts any surface to portal surface.';
  conversion.viscosity = 1.4;
  conversion.flammability = 0;
  conversion.color = aColor;
  conversion.barColor = bColor;
  conversion.effect = conductor;