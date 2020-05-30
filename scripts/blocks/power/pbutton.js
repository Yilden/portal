const pressTick = 65;
const timerId = 0;
const button = extendContent(Block, "pedestal", {
  placed(tile){
    this.super$placed(tile);
    tile.ent().timer.reset(timerId, pressTick + 1);
  },
  
  draw(tile){
    Draw.rect(Core.atlas.find(this.name + ((tile.ent().timer.check(timerId, pressTick)) ? "" : "-on")), tile.drawx(), tile.drawy());
  },
  
  unitOn(tile, unit){
    if(tile.ent().timer.check(timerId, pressTick)) Sounds.click.at(tile.worldx(), tile.worldy());
    tile.ent().timer.reset(timerId, 0);
    
  },
  
  update(tile){
    this.super$update(tile);
    Units.nearby(tile.worldx(), tile.worldy(), blockSize, blockSize, cons(e => {
      this.unitOn(tile, e);
    }));
  },
  
  getPowerProduction(tile){
  return (tile.ent().timer.check(timerId, pressTick)) ? 0: 6;
  }
});

//Credits: sk7725, check out sk7725/Commandblocks.
