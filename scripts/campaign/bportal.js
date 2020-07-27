const clib = require("clib")

const bPortal = extendContent(Block, "blue-portal", {
  load(){
    this.region = Core.atlas.find("portal-pmark")
  },

  draw(tile){
    Draw.color(clib.darkBlue)
    if(tile.getNearbyLink(0) && tile.getNearbyLink(0).block().name.startsWith("portal-white")){
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 270)
    }
    else if (tile.getNearbyLink(1) && tile.getNearbyLink(1).block().name.startsWith("portal-white")) {
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 0)
    }
    else if (tile.getNearbyLink(2) && tile.getNearbyLink(2).block().name.startsWith("portal-white")) {
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 90)
    }
    else if (tile.getNearbyLink(3) && tile.getNearbyLink(3).block().name.startsWith("portal-white")) {
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 180)
    } else {
      return;
    }
    Draw.reset()
  },

  update(tile){
    this.super$update(tile);
  }
});

bPortal.buildVisibility = BuildVisibility.sandboxOnly;
bPortal.update = true;
bPortal.destructible = false;
bPortal.solid = false;
bPortal.hasShadow = false;
bPortal.requirements = new ItemStack(Items.copper, 1)
