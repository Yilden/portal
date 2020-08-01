const hPortal = extendContent(PowerNode, "h-portal", {
  unitOn(tile, unit){
    if(unit == Vars.player){
      print("Player detected")
      var linked = tile.link()
      if(linked.block().name !== "portal-h-portal"){
        unit.set(linked.getX(), linked.getY())
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

const hhPortal = extendContent(PowerNode, "hh-portal", {
  unitOn(tile, unit){
    if(unit == Vars.player){
      var linked = tile.link()
      if(linked.block().name == "portal-h-portal"){
        unit.set(linked.getX(), linked.getY())
        print("Teleported player")
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
