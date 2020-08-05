const hPortal = extendContent(ItemBridge, "h-portal", {
  unitOn(tile, unit){
    entity = tile.ent()
    linkedP = Vars.world.tile(entity.link)
    if(unit == Vars.player){
      print("Player detected")
      if(linkedP != null){
        print("Teleported")
        unit.set(linkedP.getX(), linkedP.getY())
      }
    }
  }
});

hPortal.buildVisibility = BuildVisibility.sandboxOnly;
hPortal.update = true;
hPortal.destructible = false;
hPortal.solid = false;
hPortal.hasShadow = false;
hPortal.requirements = ItemStack.with(Items.copper, 1)
hPortal.range = 90;

const hhPortal = extendContent(ItemBridge, "hh-portal", {
  unitOn(tile, unit){
    entity = tile.ent()
    linkedP = Vars.world.tile(entity.link)
    if(unit == Vars.player){
      print("Player detected")
      if(linkedP != null){
        print("Teleported")
        unit.set(linkedP.getX(), linkedP.getY())
      }
    }
  }
});

hhPortal.buildVisibility = BuildVisibility.sandboxOnly;
hhPortal.update = true;
hhPortal.destructible = false;
hhPortal.solid = false;
hhPortal.hasShadow = false;
hhPortal.requirements = ItemStack.with(Items.copper, 1)
hhPortal.range = 90;
