const aColor = Color.valueOf("098ae6");
const bColor = Color.valueOf("1fa5ff");

const hop = new StatusEffect("hop");
  hop.damageMultiplier = 1;
  hop.speedMultiplier = 1;
  hop.armorMultiplier = 1;
  hop.damage = 0;
  hop.color = bColor;
  
const repulsion = extendContent(Liquid, "repulsion-gel", {});
  repulsion.localizedName = "Repulsion Gel";
  repulsion.description = "This liquid is blue, gíves you high knockback to jump from place to place.";
  repulsion.viscosity = 1.4;
  repulsion.flammability = 0;
  repulsion.color = aColor;
  repulsion.barColor = bColor;
  repulsion.effect = hop;