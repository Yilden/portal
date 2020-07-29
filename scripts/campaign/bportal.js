const conductors = ["portal-conductor-wall", "portal-conductor-wall-large", "portal-conductor-wallp", "portal-conductor-wall-largep"]
const clib = require("clib")
const bPortal = extendContent(Block, "blue-portal", {
  load(){
    this.region = Core.atlas.find("portal-pmark")
  },

  draw(tile){
    if(tile.getNearbyLink(0) && tile.getNearbyLink(0).block().name.startsWith("portal-conductor")){
      Draw.mixcol(clib.darkBlue, 1)
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 270)
      Draw.reset()
    }
    else if(tile.getNearbyLink(1) && tile.getNearbyLink(1).block().name.startsWith("portal-conductor")){
      Draw.mixcol(clib.darkBlue, 1)
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 0)
      Draw.reset()
    }
    else if(tile.getNearbyLink(2) && tile.getNearbyLink(2).block().name.startsWith("portal-conductor")){
      Draw.mixcol(clib.darkBlue, 1)
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 90)
      Draw.reset()
    }
    else if(tile.getNearbyLink(3) && tile.getNearbyLink(3).block().name.startsWith("portal-conductor")){
      Draw.mixcol(clib.darkBlue, 1)
      Draw.rect(this.region, tile.drawx(), tile.drawy(), 180)
      Draw.reset()
    } else {
      return;
    }
  },

  update(tile){
    this.super$update(tile);
    v1 = Core.camera.unproject(Mathf.random() * Core.graphics.getWidth(), Mathf.random() * Core.graphics.getHeight());
    htile = Vars.world.tileWorld(v1.x, v1.y);

    if(Vars.state.is(GameState.State.playing)){
      if(htile != null && htile.block() instanceof Block){
        print(htile)
      }
    }

    if(tile != null && tile.getNearbyLink(0).block().name.startsWith("portal-conductor") ||
     tile != null && tile.getNearbyLink(1).block().name.startsWith("portal-conductor") ||
     tile != null && tile.getNearbyLink(2).block().name.startsWith("portal-conductor") ||
     tile != null && tile.getNearbyLink(3).block().name.startsWith("portal-conductor")) return;
    else { tile.remove() }
  }
});

bPortal.buildVisibility = BuildVisibility.sandboxOnly;
bPortal.update = true;
bPortal.destructible = false;
bPortal.solid = false;
bPortal.hasShadow = false;
bPortal.requirements = ItemStack.with(Items.copper, 1)
