const plib = require("portallib")
const clib = require("clib")

const bPortal = extendContent(Block, "blue-portal", {
  load(){
    this.region = Core.atlas.find("portal-pmark")
  },

  draw(tile){
    if(tile.getNearbyLink(0) && plib.isConductor(tile.getNearbyLink(0))){
      plib.drawPortal(clib.darkBlue, this.region, tile.drawx(), tile.drawy(), 0)
    }
    else if(tile.getNearbyLink(1) && plib.isConductor(tile.getNearbyLink(1))){
      plib.drawPortal(clib.darkBlue, this.region, tile.drawx(), tile.drawy(), 90)
    }
    else if(tile.getNearbyLink(2) && plib.isConductor(tile.getNearbyLink(2))){
      plib.drawPortal(clib.darkBlue, this.region, tile.drawx(), tile.drawy(), 180)
    }
    else if(tile.getNearbyLink(3) && plib.isConductor(tile.getNearbyLink(3))){
      plib.drawPortal(clib.darkBlue, this.region, tile.drawx(), tile.drawy(), 270)
    } else {
      return;
    }
  },

  update(tile){
    this.super$update(tile);
    entity = tile.ent();

    v1 = Core.camera.unproject(Mathf.random() * Core.graphics.getWidth(), Mathf.random() * Core.graphics.getHeight());
    htile = Vars.world.tileWorld(v1.x, v1.y);

    if(Vars.state.is(GameState.State.playing)){
      if(htile != null && htile.block() instanceof Block){
        if(htile.block().name === "conduit"){
          if(htile != null){
            print(htile)
            entity.setPortal(htile)
          } else {
            entity.setPortal(null)
          }
        }
      }
    }

    if(tile != null && plib.isConductor(tile.getNearbyLink(0)) ||
     tile != null && plib.isConductor(tile.getNearbyLink(1)) ||
     tile != null && plib.isConductor(tile.getNearbyLink(2)) ||
     tile != null && plib.isConductor(tile.getNearbyLink(3))) return;
    else { tile.remove() }
  },

  unitOn(tile, unit){
    if(unit == Vars.player && entity.getPortal() !== null){
      Vars.player.set(entity.getPortal().getX(), entity.getPortal().getY())
    }
  }
});

bPortal.buildVisibility = BuildVisibility.sandboxOnly;
bPortal.update = true;
bPortal.destructible = false;
bPortal.solid = false;
bPortal.hasShadow = false;
bPortal.requirements = ItemStack.with(Items.copper, 1)
bPortal.entityType = prov(() => {
  const entity = extend(TileEntity, {
    getPortal(){
      return this._otherportal;
    },

    setPortal(ptile){
      this._otherportal = ptile;
    }
  });
  entity.setPortal(null)
  return entity;
});
